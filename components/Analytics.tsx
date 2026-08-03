"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";
import {
  ANALYTICS_CONSENT_EVENT,
  type AnalyticsConsent,
  captureLeadAttribution,
  clearAnalyticsData,
  getLeadAttribution,
  readAnalyticsConsent,
  saveAnalyticsConsent,
  trackAnalyticsEvent,
} from "@/lib/analytics-client";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
const GA_ENABLED = /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID);
const ANALYTICS_COOKIE_LIFETIME_SECONDS = 180 * 24 * 60 * 60;

function setAnalyticsDisabled(disabled: boolean) {
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = disabled;
}

function queueGoogleAnalyticsConfiguration() {
  setAnalyticsDisabled(false);

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    return;
  }

  const attribution = getLeadAttribution();
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    cookie_expires: ANALYTICS_COOKIE_LIFETIME_SECONDS,
    cookie_update: false,
    page_location: `${window.location.origin}${window.location.pathname}`,
    page_referrer: attribution?.referrer ?? "",
  });
}

export function Analytics() {
  const pathname = usePathname();
  const [consent, setConsent] = useState<AnalyticsConsent | "pending">("pending");
  const [ready, setReady] = useState(false);
  const lastPageViewRef = useRef<string | null>(null);

  useEffect(() => {
    if (!GA_ENABLED) return;
    const savedConsent = readAnalyticsConsent();
    if (savedConsent) {
      if (savedConsent === "granted") {
        captureLeadAttribution();
        queueGoogleAnalyticsConfiguration();
      }
      queueMicrotask(() => setConsent(savedConsent));
    }
  }, []);

  useEffect(() => {
    if (!GA_ENABLED) return;

    function openConsentSettings() {
      setConsent("pending");
    }

    window.addEventListener(ANALYTICS_CONSENT_EVENT, openConsentSettings);
    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, openConsentSettings);
  }, []);

  useEffect(() => {
    if (!ready || consent !== "granted") return;
    if (lastPageViewRef.current === pathname) return;

    captureLeadAttribution();
    const pageLocation = `${window.location.origin}${pathname}`;
    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: pageLocation,
      page_path: pathname,
    });
    lastPageViewRef.current = pathname;
  }, [consent, pathname, ready]);

  useEffect(() => {
    if (!ready || consent !== "granted") return;

    function trackContactClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      if (href === "/contact" || href.startsWith("/contact?")) {
        trackAnalyticsEvent("contact_cta_click", {
          page_path: window.location.pathname,
          link_text: (anchor.textContent ?? "Contact").trim().slice(0, 100),
        });
      } else if (href.startsWith("mailto:") || href.startsWith("tel:")) {
        trackAnalyticsEvent("contact_link_click", {
          page_path: window.location.pathname,
          contact_method: href.startsWith("mailto:") ? "email" : "phone",
        });
      }
    }

    document.addEventListener("click", trackContactClick, true);
    return () => document.removeEventListener("click", trackContactClick, true);
  }, [consent, ready]);

  if (!GA_ENABLED) return null;

  function chooseConsent(value: AnalyticsConsent) {
    saveAnalyticsConsent(value);

    if (value === "granted") {
      captureLeadAttribution();
      // Queue the full Google tag setup before its external script is added.
      // gtag.js consumes this queue as it loads; configuring it afterwards
      // leaves Tag Assistant with deferred hits.
      queueGoogleAnalyticsConfiguration();
      setConsent(value);
      return;
    }

    setConsent(value);
    window.gtag?.("consent", "update", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    setAnalyticsDisabled(true);
    clearAnalyticsData();
    lastPageViewRef.current = null;
    setReady(false);
  }

  return (
    <>
      {consent === "granted" ? (
        <Script
          id="google-analytics"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
          onReady={() => {
            // The queued config command sends the first page view. Remember it so
            // the route effect below only emits page views for later SPA navigations.
            lastPageViewRef.current = window.location.pathname;
            setReady(true);
          }}
        />
      ) : null}

      {consent === "pending" ? (
        <aside
          className="analytics-consent"
          role="dialog"
          aria-labelledby="analytics-consent-title"
          aria-describedby="analytics-consent-description"
        >
          <div className="analytics-consent-copy">
            <span>Vos choix</span>
            <strong id="analytics-consent-title">Mesurer pour améliorer, seulement avec votre accord.</strong>
            <p id="analytics-consent-description">
              Google Analytics nous aide à comprendre les pages consultées et les demandes obtenues. Aucun nom,
              e-mail ou contenu de formulaire n’est envoyé à l’outil.
            </p>
            <Link href="/cookies">En savoir plus</Link>
          </div>
          <div className="analytics-consent-actions">
            <button type="button" onClick={() => chooseConsent("denied")}>
              Continuer sans mesure
            </button>
            <button type="button" onClick={() => chooseConsent("granted")}>
              Accepter la mesure
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}

export function AnalyticsConsentButton() {
  if (!GA_ENABLED) return null;

  return (
    <button
      className="footer-consent-button"
      type="button"
      onClick={() => window.dispatchEvent(new Event(ANALYTICS_CONSENT_EVENT))}
    >
      Gérer mes cookies
    </button>
  );
}
