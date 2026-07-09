// ============================================================
// CORVUS FORGE — script.js
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------
  // 1. NAV — scroll state
  // --------------------------------------------------------
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --------------------------------------------------------
  // 2. Badge — dynamic month label
  // --------------------------------------------------------
  const badges = document.querySelectorAll('[data-month-badge]');
  if (badges.length) {
    const now   = new Date();
    let   y     = now.getFullYear();
    let   m     = now.getMonth();
    if (now.getDate() >= 20) { m++; if (m > 11) { m = 0; y++; } }
    const month = new Date(y, m, 1)
      .toLocaleString('en-US', { month: 'long' })
      .toUpperCase();
    badges.forEach(el => {
      const count = el.getAttribute('data-spots') || '2/5';
      el.textContent = `${count} SPOTS — ${month}`;
    });
  }

  // --------------------------------------------------------
  // 3. Scroll-reveal (Intersection Observer)
  // --------------------------------------------------------
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

  // --------------------------------------------------------
  // 4. FAQ Accordion
  // --------------------------------------------------------
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });


  // --------------------------------------------------------
  // 6. Cursor glow
  // --------------------------------------------------------
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let cx = 0, cy = 0, tx = 0, ty = 0;
  const lerpFactor = 0.08;

  document.addEventListener('mousemove', e => {
    tx = e.clientX;
    ty = e.clientY;
  });

  function animateCursor() {
    cx += (tx - cx) * lerpFactor;
    cy += (ty - cy) * lerpFactor;
    glow.style.left = cx + 'px';
    glow.style.top  = cy + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Hide on touch devices
  window.addEventListener('touchstart', () => { glow.style.display = 'none'; }, { once: true });

  // --------------------------------------------------------
  // 7. Mobile nav toggle
  // --------------------------------------------------------
  const menuBtn   = document.querySelector('.nav-menu-btn');
  const navLinks  = document.querySelector('.nav-links');
  const btnNav    = document.querySelector('.btn-nav');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isOpen);

      // Simple inline toggle for mobile — create mobile dropdown if not exists
      let mobileMenu = document.getElementById('mobile-menu');
      if (!mobileMenu) {
        mobileMenu = document.createElement('div');
        mobileMenu.id = 'mobile-menu';
        mobileMenu.style.cssText = `
          position:fixed;top:var(--nav-h);left:0;right:0;
          background:rgba(8,8,8,.96);backdrop-filter:blur(24px);
          -webkit-backdrop-filter:blur(24px);
          border-bottom:1px solid rgba(255,255,255,.07);
          padding:2rem var(--pad-x, 1.25rem);
          display:flex;flex-direction:column;gap:1.5rem;
          z-index:99;transform:translateY(-8px);
          opacity:0;transition:opacity 0.3s,transform 0.3s;
        `;
        const links = [
          { href: '#services', text: 'SERVICES' },
          { href: '#work',     text: 'WORK' },
          { href: '#process',  text: 'PROCESS' },
          { href: 'https://t.me/gestalter8', text: 'LET\'S TALK →', target: '_blank' },
        ];
        links.forEach(l => {
          const a = document.createElement('a');
          a.href = l.href;
          a.textContent = l.text;
          if (l.target) a.target = l.target;
          a.style.cssText = `
            font-family:'Space Grotesk',sans-serif;font-size:.9rem;
            font-weight:500;letter-spacing:.16em;color:#888892;
            transition:color .2s;
          `;
          a.addEventListener('mouseover', () => a.style.color = '#f0ede8');
          a.addEventListener('mouseout',  () => a.style.color = '#888892');
          a.addEventListener('click', () => closeMobile());
          mobileMenu.appendChild(a);
        });
        document.body.appendChild(mobileMenu);
      }

      function closeMobile() {
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'translateY(-8px)';
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.querySelectorAll('span').forEach((s, i) => {
          s.style.transform = '';
          s.style.opacity   = '';
        });
      }

      if (!isOpen) {
        // Open
        requestAnimationFrame(() => {
          mobileMenu.style.opacity = '1';
          mobileMenu.style.transform = 'translateY(0)';
        });
        // Animate hamburger to X
        const spans = menuBtn.querySelectorAll('span');
        spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
      } else {
        closeMobile();
      }
    });
  }

  // --------------------------------------------------------
  // 8. Smooth close mobile menu on anchor clicks
  // --------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      const mm = document.getElementById('mobile-menu');
      if (mm) {
        mm.style.opacity = '0';
        mm.style.transform = 'translateY(-8px)';
        if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn && menuBtn.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity = '';
        });
      }
    });
  });

});
