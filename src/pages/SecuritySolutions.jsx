import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SecuritySolutions.css";

// ── Swap these for your real image imports ──────────────────
import img1 from "../assets/sol-1.jpg"; // person in warehouse
import img2 from "../assets/sol-2.jpg"; // security camera close-up
import img3 from "../assets/sol-3.jpg"; // guard / lobby

// ── Feature data — edit copy here, never touch JSX ─────────
const FEATURES = [
  {
    id: "setup",
    title: "Easy To Setup And Use",
    body: "We'll customize the right system for your home's needs. If someone forces you to disarm the system, your Duress PIN will secretly alert authorities.",
    // SVG path draws the icon — shield with a settings gear
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6"  y="6"  width="16" height="16" rx="2" stroke="#f5c518" strokeWidth="2"/>
        <rect x="26" y="6"  width="16" height="16" rx="2" stroke="#f5c518" strokeWidth="2"/>
        <rect x="6"  y="26" width="16" height="16" rx="2" stroke="#f5c518" strokeWidth="2"/>
        <circle cx="34" cy="34" r="6" stroke="#f5c518" strokeWidth="2"/>
        <line x1="34" y1="28" x2="34" y2="26" stroke="#f5c518" strokeWidth="2" strokeLinecap="round"/>
        <line x1="34" y1="42" x2="34" y2="40" stroke="#f5c518" strokeWidth="2" strokeLinecap="round"/>
        <line x1="28" y1="34" x2="26" y2="34" stroke="#f5c518" strokeWidth="2" strokeLinecap="round"/>
        <line x1="42" y1="34" x2="40" y2="34" stroke="#f5c518" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "dispatch",
    title: "Faster Emergency Dispatch",
    body: "Secret Alerts quietly alert you if someone accesses private areas, without sounding an alarm. Manage it right from your phone, tablet, or laptop, anytime.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="#f5c518" strokeWidth="2"/>
        <path d="M24 14v10l6 4" stroke="#f5c518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 38l4-4" stroke="#f5c518" strokeWidth="2" strokeLinecap="round"/>
        <path d="M38 38l-4-4" stroke="#f5c518" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 6v3M24 39v3M6 24h3M39 24h3" stroke="#f5c518" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "support",
    title: "Reliable Customer Support",
    body: "Your system arrives ready to work. No drilling or tools needed. If you are not 100% satisfied with our services, just return it for a full refund.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4C13 4 4 13 4 24c0 5.5 2.2 10.5 5.8 14.2L8 44l6.2-1.7A19.9 19.9 0 0024 44c11 0 20-9 20-20S35 4 24 4z" stroke="#f5c518" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M17 20s0-4 7-4 7 4 7 4-1 4-7 8c-6-4-7-8-7-8z" stroke="#f5c518" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// ── Component ───────────────────────────────────────────────
const SecuritySolutions = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="ss">
      <div className="ss__container">

        {/* ══ TOP: Headline row ════════════════════════════ */}
        <div className="ss__header">
          <div className="ss__header-left">
            <h2 className="ss__title">Solutions For Your Security</h2>
            <p className="ss__subtitle">
              Reduce the probability of crime on your property. It will reduce
              or eliminate any liability that falls on you if you can show you
              have sold with security systems.
            </p>
          </div>
        </div>

        {/* ══ MIDDLE: Image stack + Features ══════════════ */}
        <div className="ss__body">

          {/* ── LEFT: Stacked image collage ── */}
          <div className="ss__images">
            <div className="ss__img-stack">
              {/* Back card — slightly offset top-left */}
              <div className="ss__img-card ss__img-card--back">
                <img src={img1} alt="Security solution 1" />
                <p className="ss__img-caption">Manufacturing &amp; Logistics</p>
              </div>

              {/* Middle card — centre, has yellow play button */}
              <div className="ss__img-card ss__img-card--mid">
                <img src={img2} alt="Security solution 2" />
                <button
                  className={`ss__play ${playing ? "ss__play--active" : ""}`}
                  onClick={() => setPlaying(!playing)}
                  aria-label="Play video"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Front card — overlaps on the right */}
              <div className="ss__img-card ss__img-card--front">
                <img src={img3} alt="Security solution 3" />
              </div>
            </div>
          </div>

          {/* ── RIGHT: Feature list ── */}
          <div className="ss__features">
            {FEATURES.map((f) => (
              <div key={f.id} className="ss__feature">
                <div className="ss__feature-icon" aria-hidden="true">
                  {f.icon}
                </div>
                <div className="ss__feature-copy">
                  <h3 className="ss__feature-title">{f.title}</h3>
                  <p className="ss__feature-body">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══ BOTTOM: Footer row ════════════════════════ */}
        <div className="ss__footer">
          <p className="ss__footer-text">
            For the Security and IT directors ensuring work and leisure. For the
            Chief Officers, shaping powerful and insightful security solutions
            that enable protectors to drive forward.
          </p>
          <div className="ss__footer-btns">
            <Link to="/services" className="ss-btn ss-btn--outline">
              Products And Solutions
              <svg viewBox="0 0 16 16" fill="none" className="ss-btn__arrow">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/contact" className="ss-btn ss-btn--yellow">
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SecuritySolutions;