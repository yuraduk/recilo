/* RECILO Navigation — mobile menu + scroll state */

(function () {
  const nav = document.querySelector('[data-nav]');
  if (!nav) return;

  const toggle = nav.querySelector('[data-nav-toggle]');
  const menu = nav.querySelector('[data-nav-menu]');
  const links = nav.querySelectorAll('[data-nav-link]');
  const body = document.body;

  // ========== Mobile menu toggle ==========
  function openMenu() {
    nav.classList.add('is-open');
    body.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    nav.classList.remove('is-open');
    body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    if (nav.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (toggle) {
    toggle.addEventListener('click', toggleMenu);
  }

  // Close menu when a link is clicked
  links.forEach((link) => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        closeMenu();
      }
    });
  });

  // Close menu on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // ========== Scroll state ==========
  const SCROLL_THRESHOLD = 80;
  let ticking = false;

  function updateScrollState() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollState);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  updateScrollState();
})();
