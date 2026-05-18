import React from "react";
import { Link } from "react-router-dom";
import "./SmartAccess.css";

// ── Swap for your actual image ──────────────────────────────
import accessImg from "../assets/smart-access.jpg"; // hand on keycard reader

// ── Checklist items — edit data, never touch JSX ───────────
const CHECKLIST = [
  "Keycard, PIN & biometric entry options",
  "Real-time access logs and audit trails",
  "Remote lock & unlock from any device",
  "Multi-site management from one dashboard",
  "Instant alert on unauthorised access attempts",
  "Fully integrated with CCTV and alarm systems",
];

// ── Stat card that overlaps the image ──────────────────────
const STAT = {
  number: "500+",
  label:  "Installations Completed",
  sub:    "Across residential & commercial sites",
};

const SmartAccess = () => {
  return (
    <section className="sa">

      {/* ── LEFT: Image + overlapping stat card ──────────── */}
      <div className="sa__image-col">
        <img
          src={accessImg}
          alt="Smart access control keycard reader"
          className="sa__image"
        />

        {/* Yellow stat card anchored bottom-right of image */}
        <div className="sa__stat-card">
          <span className="sa__stat-number">{STAT.number}</span>
          <div className="sa__stat-copy">
            <p className="sa__stat-label">{STAT.label}</p>
            <p className="sa__stat-sub">{STAT.sub}</p>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Text + checklist + CTA ────────────────── */}
      <div className="sa__text">

        {/* Eyebrow */}
        <p className="sa__eyebrow">Smart Security</p>

        {/* Headline */}
        <h2 className="sa__headline">
          Take Full Control Of<br />
          Who Enters Your Space
        </h2>

        {/* Body */}
        <p className="sa__body">
          Our access control systems give you the power to manage entry
          across every door, gate, and barrier — from a single app on
          your phone. Whether it's one office or a multi-site operation,
          we design a solution that fits perfectly.
        </p>

        {/* Checklist */}
        <ul className="sa__list" aria-label="Features list">
          {CHECKLIST.map((item, i) => (
            <li key={i} className="sa__list-item">
              {/* Yellow tick icon */}
              <span className="sa__tick" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10l4 4 8-8"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/services/access-control" className="sa__cta">
          Explore Access Control
          <svg viewBox="0 0 16 16" fill="none" className="sa__cta-arrow">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

      </div>
    </section>
  );
};

export default SmartAccess;