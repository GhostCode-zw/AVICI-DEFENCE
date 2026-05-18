import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./hero.css";

// ── The camera/security scene IS the background image ──────────
import heroBg from "../assets/hero.jpg";

// ── Partner logos (swap text for <img> once you have the files) ─
const PARTNERS = [
  { alt: "SMATRIC"    },
  { alt: "Abu Garcia" },
  { alt: "Ancasta"    },
  { alt: "SAUTER"     },
  { alt: "Evolved"    },
  { alt: "TechBrand"  },
];

// ── Slide data ─────────────────────────────────────────────────
const SLIDES = [
  {
    headline:     ["Best Practices For", "All Business Secure", "Systems"],
    body:         "We provide security requirements of residential, and other clients, with the largest assortment of security cameras and alarm systems installation.",
    primaryCta:   { label: "Explore Our Services", to: "/services" },
    secondaryCta: { label: "More About Us",        to: "/about"    },
    card: {
      title:       "Home Security Products",
      description: "Door, window, and Glass Break Detectors designed to monitor and protect home and family.",
    },
  },
  {
    headline:     ["Advanced Surveillance", "For Commercial", "Properties"],
    body:         "24/7 monitoring solutions with AI-powered detection, remote access, and instant alerts tailored for your business.",
    primaryCta:   { label: "View Products", to: "/services" },
    secondaryCta: { label: "Get A Quote",   to: "/contact"  },
    card: {
      title:       "Commercial CCTV Systems",
      description: "High-resolution IP cameras with night vision and cloud storage for complete perimeter coverage.",
    },
  },
];

// ── Hero ───────────────────────────────────────────────────────
const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animating,   setAnimating]   = useState(false);

  useEffect(() => {
    const t = setTimeout(
      () => goToSlide((activeSlide + 1) % SLIDES.length),
      6000
    );
    return () => clearTimeout(t);
  }, [activeSlide]);

  const goToSlide = (i) => {
    if (animating || i === activeSlide) return;
    setAnimating(true);
    setTimeout(() => { setActiveSlide(i); setAnimating(false); }, 350);
  };

  const slide = SLIDES[activeSlide];

  return (
    <>
      {/* ====================================================
          HERO — background-image fills the entire viewport
      ==================================================== */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Two overlay layers:
            Left heavy — right lighter so the bg image shows through */}
        <div className="hero__overlay hero__overlay--left"  />
        <div className="hero__overlay hero__overlay--right" />

        {/* Inner wrapper — only constrains max-width for text readability */}
        <div className={`hero__inner ${animating ? "hero__inner--out" : "hero__inner--in"}`}>

          {/* ── LEFT: Headline + CTA ── */}
          <div className="hero__text">
            <h1 className="hero__headline">
              {slide.headline.map((line, i) => (
                <span
                  key={i}
                  className="hero__headline-line"
                  style={{ animationDelay: `${i * 0.11}s` }}
                >
                  {line}
                </span>
              ))}
            </h1>

            <p className="hero__body">{slide.body}</p>

            <div className="hero__btns">
              <Link to={slide.primaryCta.to} className="btn btn--yellow">
                {slide.primaryCta.label}
                <svg viewBox="0 0 16 16" fill="none" className="btn__arrow">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link to={slide.secondaryCta.to} className="btn btn--ghost">
                {slide.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* ── RIGHT spacer: keeps card anchored bottom-right ── */}
          <div className="hero__right" />
        </div>

        {/* Floating glass card — bottom-right corner of hero */}
        <div className={`hero__card ${animating ? "hero__card--out" : ""}`}>
          <span className="hero__card-pip" />
          <div className="hero__card-body">
            <p className="hero__card-title">{slide.card.title}</p>
            <p className="hero__card-desc">{slide.card.description}</p>
          </div>
          <div className="hero__card-track">
            <div
              className="hero__card-fill"
              style={{ width: `${((activeSlide + 1) / SLIDES.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Slide dot navigation */}
        <div className="hero__dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${i === activeSlide ? "hero__dot--on" : ""}`}
              onClick={() => goToSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ====================================================
          PARTNER STRIP — white bar below hero
      ==================================================== */}
      <section className="partners">
        <div className="partners__inner">
          {PARTNERS.map((p) => (
            <div key={p.alt} className="partners__item">
              {/*
                Once you have logo files, replace the span with:
                <img src={p.src} alt={p.alt} className="partners__logo" />
              */}
              <span className="partners__label">{p.alt}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;