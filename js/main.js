/**
 * CORVUS FORGE — Main Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Smooth Momentum Scroll (Desktop only — zero touch interception on mobile)
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches;
  let lenis = null;

  if (!isTouch && typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 0,
      syncTouch: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          if (lenis) {
            lenis.scrollTo(target, { offset: -20 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  });

  // 1. Navbar glass background on scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // 2. Scroll reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // 3. MacBook 3D tilt & screen scroll scrub
  const macbooks = document.querySelectorAll('.project-item, .clean-macbook-block');
  const updateMacbooks = () => {
    const vh = window.innerHeight;
    macbooks.forEach((block) => {
      const chassis = block.querySelector('.macbook-device, .clean-macbook-chassis');
      const screen = block.querySelector('.screen-scroll, .clean-screen-scroll-layer');
      if (!chassis || !screen) return;

      const rect = block.getBoundingClientRect();
      const progress3d = Math.max(0, Math.min(1, (vh * 0.85 - rect.top) / (vh * 0.65)));
      chassis.style.transform = `perspective(1600px) rotateX(${(1 - progress3d) * 10}deg) scale(${0.94 + progress3d * 0.06})`;

      const scrubProgress = Math.max(0, Math.min(1, (vh * 0.7 - rect.top) / (vh * 0.7 + rect.height * 0.3)));
      screen.style.transform = `translateY(-${scrubProgress * 30}%)`;
    });
  };
  window.addEventListener('scroll', updateMacbooks, { passive: true });
  if (lenis) {
    lenis.on('scroll', updateMacbooks);
  }
  updateMacbooks();

  // 4. Smooth cursor glow
  const glow = document.getElementById('cursor-glow');
  if (glow) {
    let cx = window.innerWidth / 2, cy = window.innerHeight / 2, tx = cx, ty = cy;
    window.addEventListener('touchstart', () => glow.style.display = 'none', { once: true });
    window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    const animCursor = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      glow.style.left = `${cx}px`;
      glow.style.top = `${cy}px`;
      requestAnimationFrame(animCursor);
    };
    animCursor();
  }

  // 5. Cookie consent banner
  const cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner && !localStorage.getItem('corvus-cookie-consent')) {
    setTimeout(() => cookieBanner.classList.add('cookie-visible'), 1500);
    document.getElementById('cookie-accept')?.addEventListener('click', () => {
      localStorage.setItem('corvus-cookie-consent', 'accepted');
      cookieBanner.classList.remove('cookie-visible');
    });
    document.getElementById('cookie-decline')?.addEventListener('click', () => {
      localStorage.setItem('corvus-cookie-consent', 'declined');
      cookieBanner.classList.remove('cookie-visible');
    });
  }

  // 6. Dynamic available spots
  const spots = document.getElementById('dynamic-spots');
  if (spots) {
    const d = new Date();
    const month = new Date(d.getFullYear(), d.getMonth() + (d.getDate() >= 20 ? 1 : 0), 1)
      .toLocaleString('en-US', { month: 'long' });
    spots.textContent = `4/5 spots for ${month}`;
  }
});
