export type AnalyticsConsent = "granted" | "denied";

export type LeadAttribution = {
  landingPage: string;
  referrer: string;
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
};

export const ANALYTICS_CONSENT_EVENT = "3h36:open-analytics-consent";

const CONSENT_STORAGE_KEY = "3h36:analytics-consent";
const ATTRIBUTION_STORAGE_KEY = "3h36:lead-attribution";
const CONSENT_STORAGE_VERSION = 1;
const CONSENT_MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000;
const MAX_ATTRIBUTION_VALUE_LENGTH = 300;
let memoryConsent: AnalyticsConsent | null = null;

type StoredConsent = {
  value: AnalyticsConsent;
  savedAt: number;
  version: number;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function cleanValue(value: unknown, maxLength = MAX_ATTRIBUTION_VALUE_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function cleanLandingPath(value: unknown) {
  const pathname = cleanValue(value, 500).split(/[?#]/, 1)[0] ?? "";
  return /^\/(?!\/)/.test(pathname) ? pathname : "";
}

function cleanReferrerOrigin(value: unknown) {
  const referrer = cleanValue(value);
  if (!referrer) return "";

  try {
    const url = new URL(referrer);
    return url.protocol === "http:" || url.protocol === "https:" ? url.origin.slice(0, 300) : "";
  } catch {
    return "";
  }
}

export function readAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;

  let rawValue: string | null;
  try {
    rawValue = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return memoryConsent;
  }

  if (!rawValue) return memoryConsent;

  try {
    const stored = JSON.parse(rawValue) as Partial<StoredConsent>;
    const isValidDate =
      typeof stored.savedAt === "number" &&
      stored.savedAt > 0 &&
      stored.savedAt <= Date.now() &&
      Date.now() - stored.savedAt < CONSENT_MAX_AGE_MS;

    if (
      stored.version !== CONSENT_STORAGE_VERSION ||
      (stored.value !== "granted" && stored.value !== "denied") ||
      !isValidDate
    ) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      memoryConsent = null;
      return null;
    }

    memoryConsent = stored.value;
    return stored.value;
  } catch {
    try {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
    } catch {
      // Local storage can be disabled by the browser.
    }
    memoryConsent = null;
    return null;
  }
}

export function saveAnalyticsConsent(value: AnalyticsConsent) {
  if (typeof window === "undefined") return;
  memoryConsent = value;

  try {
    const stored: StoredConsent = {
      value,
      savedAt: Date.now(),
      version: CONSENT_STORAGE_VERSION,
    };
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // The preference remains valid for the current page if storage is unavailable.
  }
}

export function clearAnalyticsData() {
  if (typeof window === "undefined") return;

  try {
    window.sessionStorage.removeItem(ATTRIBUTION_STORAGE_KEY);
  } catch {
    // Session storage can be disabled by the browser.
  }

  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=", 1)[0]?.trim())
    .filter((name) => name?.startsWith("_ga"));
  const domains = ["", window.location.hostname, `.${window.location.hostname}`, ".3h36agency.fr"];

  for (const name of cookieNames) {
    for (const domain of domains) {
      const domainAttribute = domain ? `; Domain=${domain}` : "";
      document.cookie = `${name}=; Max-Age=0; Path=/${domainAttribute}; SameSite=Lax`;
    }
  }
}

export function captureLeadAttribution() {
  if (typeof window === "undefined" || readAnalyticsConsent() !== "granted") return;

  try {
    const params = new URLSearchParams(window.location.search);
    const hasCampaignParameters = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ].some((key) => params.has(key));
    const existing = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);

    if (existing && !hasCampaignParameters) return;

    let referrer = "";
    if (document.referrer) {
      try {
        const referrerUrl = new URL(document.referrer);
        if (referrerUrl.origin !== window.location.origin) referrer = referrerUrl.origin;
      } catch {
        referrer = "";
      }
    }

    const attribution: LeadAttribution = {
      landingPage: cleanLandingPath(window.location.pathname),
      referrer: cleanReferrerOrigin(referrer),
      source: cleanValue(params.get("utm_source")),
      medium: cleanValue(params.get("utm_medium")),
      campaign: cleanValue(params.get("utm_campaign")),
      content: cleanValue(params.get("utm_content")),
      term: cleanValue(params.get("utm_term")),
    };

    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Attribution is helpful but must never block navigation or contact.
  }
}

export function getLeadAttribution(): LeadAttribution | null {
  if (typeof window === "undefined" || readAnalyticsConsent() !== "granted") return null;

  try {
    const value = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (!value) return null;
    const parsed = JSON.parse(value) as Partial<LeadAttribution>;

    return {
      landingPage: cleanLandingPath(parsed.landingPage),
      referrer: cleanReferrerOrigin(parsed.referrer),
      source: cleanValue(parsed.source ?? ""),
      medium: cleanValue(parsed.medium ?? ""),
      campaign: cleanValue(parsed.campaign ?? ""),
      content: cleanValue(parsed.content ?? ""),
      term: cleanValue(parsed.term ?? ""),
    };
  } catch {
    return null;
  }
}

export function trackAnalyticsEvent(name: string, parameters: Record<string, string | number | boolean> = {}) {
  if (
    typeof window === "undefined" ||
    readAnalyticsConsent() !== "granted" ||
    typeof window.gtag !== "function"
  ) {
    return;
  }

  window.gtag("event", name, {
    ...parameters,
    page_title: document.title,
    page_location: `${window.location.origin}${window.location.pathname}`,
    page_path: window.location.pathname,
  });
}
