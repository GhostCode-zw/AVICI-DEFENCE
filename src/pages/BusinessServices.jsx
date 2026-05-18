import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BusinessServices.css";

// ── Card images — swap for your real assets ─────────────────
import img1 from "../assets/access-control.jpg";  // keypad / access
import img2 from "../assets/cctv-fitting.jpg";    // camera install
import img3 from "../assets/alarm-systems.jpg";   // smart panel

// ── Card data — only edit this array to update content ──────
const SERVICES = [
  {
    id:    "access",
    title: "Access Control Systems",
    body:  "Manage and monitor who enters your business premises with smart card, biometric, and PIN-based access control solutions.",
    to:    "/services/access-control",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8"  y="14" width="24" height="18" rx="3"
              stroke="#f5c518" strokeWidth="2"/>
        <path d="M14 14v-4a6 6 0 0112 0v4"
              stroke="#f5c518" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="23" r="2.5" fill="#f5c518"/>
        <line x1="20" y1="25.5" x2="20" y2="29"
              stroke="#f5c518" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    img: img1,
  },
  {
    id:    "cctv",
    title: "Car Detection & Car Fitting",
    body:  "Advanced vehicle detection cameras and parking systems designed for commercial lots, garages, and high-traffic entry points.",
    to:    "/services/cctv",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 16l5-6h18l5 6v10a2 2 0 01-2 2H8a2 2 0 01-2-2V16z"
              stroke="#f5c518" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="13" cy="26" r="3"  stroke="#f5c518" strokeWidth="2"/>
        <circle cx="27" cy="26" r="3"  stroke="#f5c518" strokeWidth="2"/>
        <path d="M6 20h28"  stroke="#f5c518" strokeWidth="2"/>
        <path d="M14 16h12" stroke="#f5c518" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    img: img2,
  },
  {
    id:    "alarm",
    title: "Smart Home Systems",
    body:  "Fully integrated smart home security panels combining alarm, CCTV, and access control into a single easy-to-use interface.",
    to:    "/services/alarm-systems",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L6 12v10c0 8 6 13 14 16 8-3 14-8 14-16V12L20 4z"
              stroke="#f5c518" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 20l4 4 8-8"
              stroke="#f5c518" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    img: img3,
  },
];

// ── Component ────────────────────────────────────────────────
const BusinessServices = () => {
  // track which card's play button is active
  const [activePlay, setActivePlay] = useState(null);

  const togglePlay = (id) =>
    setActivePlay((prev) => (prev === id ? null : id));

  return (
    <section className="bs">
      <div className="bs__container">

        {/* ══ Header ═══════════════════════════════════════ */}
        <div className="bs__header">
          <p className="bs__eyebrow">What We Offer</p>
          <h2 className="bs__title">
            Protect Your Business With Our<br />
            Unique Solutions
          </h2>
        </div>

        {/* ══ Card Grid ════════════════════════════════════ */}
        <div className="bs__grid">
          {SERVICES.map((svc) => (
            <article key={svc.id} className="bs__card">

              {/* ── Top: icon + title + body ── */}
              <div className="bs__card-top">
                <div className="bs__card-icon" aria-hidden="true">
                  {svc.icon}
                </div>
                <h3 className="bs__card-title">{svc.title}</h3>
                <p className="bs__card-body">{svc.body}</p>
              </div>

              {/* ── Bottom: image with play button ── */}
              <div className="bs__card-img-wrap">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="bs__card-img"
                />
                {/* Yellow play button */}
                <button
                  className={`bs__play ${
                    activePlay === svc.id ? "bs__play--active" : ""
                  }`}
                  onClick={() => togglePlay(svc.id)}
                  aria-label={`Play ${svc.title} video`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* ── Footer: details link ── */}
              <div className="bs__card-footer">
                <Link to={svc.to} className="bs__details-link">
                  Details
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="bs__details-arrow"
                  >
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

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BusinessServices;