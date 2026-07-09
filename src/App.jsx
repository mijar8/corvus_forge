import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import NoCallsSection from './components/NoCallsSection';
import Services from './components/Services';
import Work from './components/Work';
import Process from './components/Process';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import './App.css';

export default function App() {
  useEffect(() => {
    // Replicate static scroll-reveal animation observer
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <HelmetProvider>
      <SEO />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <NoCallsSection />
        <Services />
        <Work />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CursorGlow />
    </HelmetProvider>
  );
}
