import React from "react";
import { Link } from "react-router-dom";
import "./HomeFeature.css";

import featureImg from "../assets/feature.jpg"; // your dome camera image

const HomeFeature = () => {
  return (
    <section className="hf">

      {/* ── LEFT: Text content ────────────────────────────── */}
      <div className="hf__text">

        <h2 className="hf__headline">
          From Door And Window<br />
          Sensors To Apps And<br />
          System!
        </h2>

        <p className="hf__body">
          Helping families live intelligently means we're working to bring the
          latest technology. As one of the premier providers of smart home
          technology, we are recognized throughout the industry for our
          innovation &amp; customer satisfaction.
        </p>

        <p className="hf__body">
          Don't worry about anything — our security experts will install your
          new system, activate it, and show you how to use it.
        </p>

        <div className="hf__btns">
          <Link to="/services" className="hf-btn hf-btn--yellow">
            Protect My Home
            <svg viewBox="0 0 16 16" fill="none" className="hf-btn__arrow">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link to="/about" className="hf-btn hf-btn--outline">
            Discover More
          </Link>
        </div>
      </div>

      {/* ── RIGHT: Full-bleed image + bottom card ─────────── */}
      <div className="hf__image-col">
        <img
          src={featureImg}
          alt="Hikvision dome security camera"
          className="hf__image"
        />

        {/* Small info card overlaid at bottom of image */}
        <div className="hf__card">
          <div className="hf__card-thumb">
            {/*
              Optional: add a small thumbnail image here
              <img src={thumbImg} alt="Watch video" />
            */}
            <span className="hf__card-play">▶</span>
          </div>
          <div className="hf__card-copy">
            <p className="hf__card-title">Watch Our HIIKI!</p>
            <p className="hf__card-desc">
              Door and window Detectors designed to protect home.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HomeFeature;