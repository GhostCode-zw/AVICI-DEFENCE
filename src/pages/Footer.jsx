import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/AVICI logo.png";

// ── Navigation columns — edit data only ────────────────────
const NAV_COLS = [
  {
    heading: "Company",
    links: [
      { label: "About Us",       to: "/about"           },
      { label: "Our Team",       to: "/about#team"      },
      { label: "Careers",        to: "/careers"         },
      { label: "News & Media",   to: "/news"            },
      { label: "Contact Us",     to: "/contact"         },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Access Control",   to: "/services/access-control" },
      { label: "CCTV & Cameras",   to: "/services/cctv"           },
      { label: "Alarm Systems",    to: "/services/alarm-systems"  },
      { label: "Smart Home",       to: "/services/smart-home"     },
      { label: "Maintenance",      to: "/services/maintenance"    },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Get A Quote",     to: "/contact"          },
      { label: "FAQ",             to: "/faq"              },
      { label: "Documentation",   to: "/docs"             },
      { label: "Privacy Policy",  to: "/privacy"          },
      { label: "Terms of Use",    to: "/terms"            },
    ],
  },
];

// ── Contact details ─────────────────────────────────────────
const CONTACT = [
  {
    id: "phone",
    label: "+263 77 123 4567",
    href:  "tel:+263771234567",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path d="M2 3.5A1.5 1.5 0 013.5 2h1.6a1 1 0 01.97.757l.7 2.8a1 1 0 01-.284 1.005L5.3 7.757a11.05 11.05 0 005.06 5.06l1.195-1.186a1 1 0 011.005-.284l2.8.7A1 1 0 0116.5 13.9V15.5A1.5 1.5 0 0115 17C7.268 17 1 10.732 1 3.5A1.5 1.5 0 012 2z"
          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "email",
    label: "info@avici.co.zw",
    href:  "mailto:info@avici.co.zw",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="13" rx="2"
          stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 7l8 5 8-5"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "location",
    label: "Harare, Zimbabwe",
    href:  "https://maps.google.com",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z"
          stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="8" r="2"
          stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

// ── Social links ────────────────────────────────────────────
const SOCIALS = [
  {
    id: "facebook",
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    id: "twitter",
    href: "https://twitter.com",
    label: "Twitter / X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    id: "linkedin",
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    id: "instagram",
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
];

// ── Footer Component ────────────────────────────────────────
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* ══ CTA Banner strip ══════════════════════════════ */}
      <div className="footer__banner">
        <div className="footer__banner-inner">
          <div className="footer__banner-text">
            <h3 className="footer__banner-title">
              Ready To Secure Your Property?
            </h3>
            <p className="footer__banner-sub">
              Get a free no-obligation quote from our security specialists today.
            </p>
          </div>
          <Link to="/contact" className="footer__banner-btn">
            Get A Free Quote
            <svg viewBox="0 0 16 16" fill="none" className="footer__banner-arrow">
              <path d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* ══ Main footer body ══════════════════════════════ */}
      <div className="footer__body">
        <div className="footer__container">

          {/* ── Col 1: Brand ── */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo-link">
              <img src={logo} alt="AVICI logo" className="footer__logo-img" />
              <span className="footer__logo-name">AVICI</span>
            </Link>
            <p className="footer__brand-desc">
              Zimbabwe's trusted provider of smart security systems — 
              from residential access control to large-scale commercial 
              CCTV and alarm installations.
            </p>
            {/* Social icons */}
            <div className="footer__socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  className="footer__social-btn"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Cols 2–4: Nav columns ── */}
          {NAV_COLS.map((col) => (
            <div key={col.heading} className="footer__nav-col">
              <h4 className="footer__nav-heading">{col.heading}</h4>
              <ul className="footer__nav-list">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="footer__nav-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Col 5: Contact ── */}
          <div className="footer__contact-col">
            <h4 className="footer__nav-heading">Get In Touch</h4>
            <ul className="footer__contact-list">
              {CONTACT.map((c) => (
                <li key={c.id}>
                  <a href={c.href} className="footer__contact-item">
                    <span className="footer__contact-icon">{c.icon}</span>
                    <span>{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ══ Bottom bar ════════════════════════════════════ */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p className="footer__copyright">
            © {year} AVICI Security Systems. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy" className="footer__bottom-link">Privacy Policy</Link>
            <Link to="/terms"   className="footer__bottom-link">Terms of Use</Link>
            <Link to="/sitemap" className="footer__bottom-link">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;