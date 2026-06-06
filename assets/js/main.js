(() => {
  'use strict';

  // ==================== NAV ====================
  const menuBtn = document.getElementById('nav-menu-btn');
  const mobileNav = document.getElementById('nav-mobile');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      menuBtn.textContent = open ? '[CLOSE]' : '[MENU]';
    });

    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        menuBtn.textContent = '[MENU]';
      }
    });
  }

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ==================== TYPING EFFECT ====================
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const phrases = [
      'Desenvolvedor & Pesquisador',
      'Linux Enthusiast',
      'Security Researcher',
      'Hardware Hacker',
      'Embedded Systems',
      'Open Source Contributor',
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let pauseTimer = null;

    function type() {
      const phrase = phrases[phraseIdx];
      if (!deleting) {
        typingEl.textContent = phrase.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === phrase.length) {
          deleting = true;
          pauseTimer = setTimeout(type, 2200);
          return;
        }
      } else {
        typingEl.textContent = phrase.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
        }
      }
      setTimeout(type, deleting ? 40 : 70);
    }

    setTimeout(type, 600);
  }

  // ==================== SCROLL ANIMATIONS ====================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-in').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // ==================== HUD CLOCK ====================
  const hudTime = document.getElementById('hud-time');
  if (hudTime) {
    function updateHUD() {
      const now = new Date();
      const pad = n => String(n).padStart(2, '0');
      hudTime.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    }
    updateHUD();
    setInterval(updateHUD, 1000);
  }

  // ==================== NAV SCROLL ====================
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor = window.scrollY > 20
        ? 'rgba(0, 255, 65, 0.25)'
        : 'rgba(0, 255, 65, 0.15)';
    }, { passive: true });
  }

})();
