import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/corvus-logo.png" alt="Corvus Forge Logo" width="22" height="22" />
            <span>CORVUS FORGE</span>
          </div>

          <p className="footer-copy">© 2026 Corvus Forge. Kyiv, Ukraine.</p>

          <div className="footer-links">
            <a href="https://t.me/gestalter8" target="_blank" rel="noopener noreferrer" id="footer-tg">TELEGRAM</a>
            <a href="https://www.instagram.com/corvus.forge/" target="_blank" rel="noopener noreferrer" id="footer-ig">INSTAGRAM</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
