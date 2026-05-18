import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/AVICI LOGO.png";

// ── Reusable nav link with active underline ──────────────────
const NavItem = ({ to, label, hasDropdown = false }) => {
  const location  = useLocation();
  const isActive  = location.pathname === to;

  return (
    <li className={`nav-item ${hasDropdown ? "has-dropdown" : ""}`}>
      <Link to={to} className={`nav-link ${isActive ? "active" : ""}`}>
        {label}
        {hasDropdown && (
          <svg className="chevron" viewBox="0 0 10 6" fill="none">
            <path d="M1 1l4 4 4-4" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </Link>
    </li>
  );
};

// ── Navbar ───────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>

      {/* ══ WHITE LOGO BLOCK — sits flush left ══════════ */}
      <div className="navbar__logo-block">
        <Link to="/" className="navbar__logo-link">
          <img src={logo} alt="AVICI logo" className="navbar__logo-img" />
          
        </Link>
      </div>

      {/* ══ DARK RIGHT SECTION — links + actions ════════ */}
      <div className={`navbar__dark ${menuOpen ? "navbar__dark--open" : ""}`}>

        {/* Centre: nav links */}
        <ul className="navbar__links">
          <NavItem to="/"         label="Home"     hasDropdown />
          <NavItem to="/about"    label="Company"  hasDropdown />
          <NavItem to="/services" label="Services" hasDropdown />
          <NavItem to="/contact"  label="Contact" />
        </ul>

        {/* Right: icons + phone + CTA */}
        <div className="navbar__actions">

          <button className="icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
          </button>

          <button className="icon-btn" aria-label="Cart">
            <svg viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>

          <a href="tel:+263771234567" className="navbar__phone">
            <svg viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>+263 77 123 4567</span>
          </a>

          <Link to="/contact" className="navbar__cta">
            Get A Quote
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* ══ Mobile hamburger ════════════════════════════ */}
      <button
        className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

    </nav>
  );
};

export default Navbar;