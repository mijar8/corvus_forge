import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav id="nav" className={isScrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="/" className="nav-logo" aria-label="Corvus Forge — home">
            <img src="/corvus-logo.png" alt="Corvus Forge Logo" width="28" height="28" />
            <span>CORVUS FORGE</span>
          </a>

          <div className="nav-links">
            <a href="#services">SERVICES</a>
            <a href="#work">WORK</a>
            <a href="#process">PROCESS</a>
            <a href="#faq">FAQ</a>
          </div>

          <a href="https://t.me/gestalter8" className="btn-nav" target="_blank" rel="noopener noreferrer" id="nav-cta">
            LET'S TALK →
          </a>

          <button 
            className="nav-menu-btn" 
            aria-label="Toggle menu" 
            aria-expanded={isMenuOpen} 
            onClick={toggleMenu}
            id="menu-btn"
          >
            <span style={{ transform: isMenuOpen ? 'translateY(6.5px) rotate(45deg)' : '' }}></span>
            <span style={{ opacity: isMenuOpen ? 0 : 1 }}></span>
            <span style={{ transform: isMenuOpen ? 'translateY(-6.5px) rotate(-45deg)' : '' }}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu" 
        style={{
          opacity: isMenuOpen ? 1 : 0,
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
          pointerEvents: isMenuOpen ? 'all' : 'none'
        }}
      >
        <a href="#services" onClick={closeMenu}>SERVICES</a>
        <a href="#work" onClick={closeMenu}>WORK</a>
        <a href="#process" onClick={closeMenu}>PROCESS</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="https://t.me/gestalter8" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>LET'S TALK →</a>
      </div>
    </>
  );
}
