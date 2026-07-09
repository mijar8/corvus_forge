import React from 'react';
import './Work.css';

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="container">
        <div className="work-header">
          <div>
            <p className="section-label reveal">// WORK</p>
            <h2 id="work-heading" className="reveal reveal-delay-1">
              Sites already<br />working.
            </h2>
          </div>
          <a href="https://t.me/gestalter8" className="work-more reveal reveal-delay-2" target="_blank" rel="noopener noreferrer">
            MORE COMING SOON →
          </a>
        </div>

        <div className="work-grid">
          {/* Project 1: Dmitry Kulish */}
          <a 
            href="https://dklve-fit.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="work-card reveal" 
            id="work-card-1" 
            aria-label="Dmitry Kulish — Biomechanical Coaching Website"
          >
            <img
              src="/mock-kulish.webp"
              alt="Dmitry Kulish Biomechanical Coaching Landing Page Desktop Showcase"
              loading="lazy"
              decoding="async"
              width="600"
              height="412"
            />
            <div className="work-card-static">
              <span className="work-card-index">01</span>
            </div>
            <div className="work-card-info">
              <div className="work-card-label">FITNESS · COACHING</div>
              <div className="work-card-title">Dmitry Kulish</div>
              <div className="work-card-tag">
                ↗ Biomechanical coaching &amp; auto-booking
              </div>
            </div>
          </a>

          {/* Project 2: Calyx App */}
          <a 
            href="https://calyx-app.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="work-card reveal reveal-delay-1" 
            id="work-card-2" 
            aria-label="Calix App — Minimalist Fitness Tracker Website"
          >
            <img
              src="/mock-calix.webp"
              alt="Calyx App Minimalist Fitness Tracker Mobile and Desktop Interface Layout Showcase"
              loading="lazy"
              decoding="async"
              width="600"
              height="412"
            />
            <div className="work-card-static">
              <span className="work-card-index">02</span>
            </div>
            <div className="work-card-info">
              <div className="work-card-label">PRODUCT · APP</div>
              <div className="work-card-title">Calix App</div>
              <div className="work-card-tag">
                ↗ Minimalist fitness tracker for athletes
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
