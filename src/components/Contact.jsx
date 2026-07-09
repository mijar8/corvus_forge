import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-inner">
          <h2 id="cta-heading" className="reveal">
            If how you appear online<br />
            <em>actually matters to you</em> —<br />
            you know what to do.
          </h2>

          <p className="reveal reveal-delay-1">
            We work with a limited number of clients. If you're serious — let's talk.
            Currently accepting <strong>2 projects</strong> for this month.
          </p>

          <div className="cta-btns reveal reveal-delay-2">
            <a href="https://t.me/gestalter8" className="btn-tg" target="_blank" rel="noopener noreferrer" id="cta-main-btn">
              <svg className="btn-tg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.02 9.52c-.147.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.26 14.4l-2.95-.924c-.64-.203-.654-.64.136-.948l11.526-4.446c.537-.194 1.006.131.59.166z"/>
              </svg>
              WRITE ON TELEGRAM
            </a>
          </div>

          <p className="cta-footnote reveal reveal-delay-3">
            @gestalter8 · Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
