"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/site-data";

const AUTOPLAY_DELAY = 4600;

export function ProjectCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  const isAutoplayRunning = !reduceMotion && !isAutoplayPaused && !isHovered && !hasFocus && !isInteracting;

  const goTo = useCallback((nextIndex: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const index = (nextIndex + projects.length) % projects.length;
    const slide = viewport.children.item(index) as HTMLElement | null;
    if (!slide) return;

    viewport.scrollTo({
      left: slide.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActiveIndex(index);
  }, [reduceMotion]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let frame = 0;
    const updateActiveSlide = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const slides = Array.from(viewport.children) as HTMLElement[];
        const nearest = slides.reduce(
          (best, slide, index) => {
            const distance = Math.abs(slide.offsetLeft - viewport.scrollLeft);
            return distance < best.distance ? { index, distance } : best;
          },
          { index: 0, distance: Number.POSITIVE_INFINITY },
        );
        setActiveIndex(nearest.index);
      });
    };

    viewport.addEventListener("scroll", updateActiveSlide, { passive: true });
    return () => {
      viewport.removeEventListener("scroll", updateActiveSlide);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!isAutoplayRunning) return;
    const timer = window.setInterval(() => goTo(activeIndex + 1), AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [activeIndex, goTo, isAutoplayRunning]);

  return (
    <div
      className="project-carousel"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Sélection de réalisations 3h36 agency"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
      }}
      onPointerDown={() => setIsInteracting(true)}
      onPointerUp={() => setIsInteracting(false)}
      onPointerCancel={() => setIsInteracting(false)}
      onPointerLeave={() => setIsInteracting(false)}
    >
      <div className="project-carousel-toolbar">
        <p aria-live={isAutoplayRunning ? "off" : "polite"} aria-atomic="true">
          <span>{String(activeIndex + 1).padStart(2, "0")}</span>
          <small>/ {String(projects.length).padStart(2, "0")}</small>
        </p>
        <button
          className="project-carousel-autoplay"
          type="button"
          onClick={() => setIsAutoplayPaused((paused) => !paused)}
          aria-pressed={isAutoplayPaused || reduceMotion}
          disabled={reduceMotion}
        >
          <span aria-hidden="true">{isAutoplayPaused || reduceMotion ? "▶" : "Ⅱ"}</span>
          {reduceMotion ? "Mouvement réduit" : isAutoplayPaused ? "Relancer" : "Mettre en pause"}
        </button>
      </div>

      <div className="project-carousel-stage">
        <div className="project-carousel-viewport" ref={viewportRef}>
          {projects.map((project, index) => (
            <article
              className={`carousel-project project-tone-${project.tone}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} sur ${projects.length} · ${project.name}`}
              key={project.name}
            >
              <a
                className="carousel-project-visual"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Voir ${project.name} en ligne`}
              >
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 620px) 88vw, 560px" unoptimized />
                <span aria-hidden="true">↗</span>
              </a>
              <div className="carousel-project-copy">
                <p><span>{project.type}</span><span>{project.sector}</span></p>
                <h3>{project.name}</h3>
                <p>{project.solution}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="project-carousel-controls">
          <button type="button" onClick={() => goTo(activeIndex - 1)} aria-label="Projet précédent">
            <span aria-hidden="true">←</span>
          </button>
          <button type="button" onClick={() => goTo(activeIndex + 1)} aria-label="Projet suivant">
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="project-carousel-dots" aria-label="Choisir un projet">
        {projects.map((project, index) => (
          <button
            type="button"
            className={index === activeIndex ? "is-active" : undefined}
            onClick={() => goTo(index)}
            aria-label={`Afficher ${project.name}`}
            aria-current={index === activeIndex ? "true" : undefined}
            key={project.name}
          />
        ))}
      </div>

      <div className="project-carousel-footer">
        <p>Défilement automatique · pause au survol · swipe sur mobile</p>
        <Link className="text-link" href="/realisations">Voir les 8 projets en détail <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
  );
}
