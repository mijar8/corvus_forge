import React from 'react';
import './Hero.css';

export default function Hero() {
  const getDynamicBadge = () => {
    const now = new Date();
    let y = now.getFullYear();
    let m = now.getMonth();
    // If past the 20th, show next month
    if (now.getDate() >= 20) {
      m++;
      if (m > 11) {
        m = 0;
        y++;
      }
    }
    const monthName = new Date(y, m, 1)
      .toLocaleString('en-US', { month: 'long' })
      .toUpperCase();
    return `2/5 SPOTS — ${monthName}`;
  };

  return (
    <section id="hero" aria-label="Hero">
      <div className="hero-content">
        <div className="hero-badge reveal" aria-live="polite">
          <span className="dot"></span>
          <span>{getDynamicBadge()}</span>
        </div>

        <h1 className="reveal reveal-delay-1">
          We Forge<br />
          <em>Aesthetic</em><br />
          Identity.
        </h1>

        <div className="hero-cta reveal reveal-delay-2">
          <a href="https://t.me/gestalter8" className="btn-primary" target="_blank" rel="noopener noreferrer" id="hero-start-btn">
            START PROJECT →
          </a>
          <a href="#work" className="btn-ghost" id="hero-work-btn">
            VIEW WORK ↓
          </a>
        </div>

        <div className="hero-sub reveal reveal-delay-3">
          Or reach us directly →&nbsp;
          <a href="https://t.me/gestalter8" target="_blank" rel="noopener noreferrer">@gestalter8</a>
        </div>
      </div>
    </section>
  );
}
