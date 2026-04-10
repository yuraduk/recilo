/* RECILO Animations — scroll reveal, word reveal, counter */

(function () {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // ========================================
  // 1. WORD REVEAL — split text into words
  // ========================================
  function setupWordReveal() {
    const targets = document.querySelectorAll('[data-word-reveal]');

    targets.forEach((el) => {
      // Walk through child nodes and only split text nodes.
      // This preserves inline elements like <span class="accent">.
      const walkAndSplit = (node) => {
        const children = Array.from(node.childNodes);
        children.forEach((child) => {
          if (child.nodeType === Node.TEXT_NODE) {
            const text = child.textContent;
            if (!text.trim()) return;

            const frag = document.createDocumentFragment();
            const words = text.split(/(\s+)/); // keep whitespace

            words.forEach((word) => {
              if (/^\s+$/.test(word)) {
                frag.appendChild(document.createTextNode(word));
              } else if (word.length) {
                const wrap = document.createElement('span');
                wrap.className = 'word-wrap';
                const inner = document.createElement('span');
                inner.className = 'word';
                inner.textContent = word;
                wrap.appendChild(inner);
                frag.appendChild(wrap);
              }
            });

            node.replaceChild(frag, child);
          } else if (
            child.nodeType === Node.ELEMENT_NODE &&
            !child.classList.contains('word-wrap')
          ) {
            walkAndSplit(child);
          }
        });
      };

      walkAndSplit(el);

      // Assign stagger index to every .word inside this element
      const words = el.querySelectorAll('.word');
      words.forEach((w, i) => {
        w.style.transitionDelay = `${i * 80}ms`;
        w.style.setProperty('--word-index', i);
      });
    });
  }

  // ========================================
  // 2. INTERSECTION OBSERVER — reveal on scroll
  // ========================================
  function setupScrollReveal() {
    if (prefersReducedMotion) {
      document
        .querySelectorAll('[data-animate], [data-stagger], [data-word-reveal]')
        .forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);

            // If this element contains counters, trigger them
            const counters = entry.target.querySelectorAll('[data-counter]');
            counters.forEach(animateCounter);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    const targets = document.querySelectorAll(
      '[data-animate], [data-stagger], [data-word-reveal]:not([data-word-reveal="on-load"])'
    );
    targets.forEach((el) => observer.observe(el));

    // Also observe any standalone counters
    const standaloneCounters = document.querySelectorAll(
      '[data-counter]:not([data-animate] [data-counter]):not([data-stagger] [data-counter])'
    );
    standaloneCounters.forEach((c) => {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counterObserver.observe(c);
    });
  }

  // ========================================
  // 3. COUNTER ANIMATION — count up
  // ========================================
  function animateCounter(el) {
    if (el.dataset.counted === 'true') return;
    el.dataset.counted = 'true';

    const target = parseFloat(el.dataset.counter);
    const prefix = el.dataset.counterPrefix || '';
    const suffix = el.dataset.counterSuffix || '';
    const duration = parseInt(el.dataset.counterDuration || '1500', 10);
    const decimals = parseInt(el.dataset.counterDecimals || '0', 10);

    if (prefersReducedMotion) {
      el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      return;
    }

    const start = performance.now();

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const value = target * eased;

      el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      }
    }

    requestAnimationFrame(tick);
  }

  // ========================================
  // 4. HERO WORD REVEAL — fire on load
  // ========================================
  function setupHeroLoad() {
    const heroTargets = document.querySelectorAll('[data-word-reveal="on-load"]');
    // Word reveal is already split by setupWordReveal above.
    // Trigger visibility immediately.
    requestAnimationFrame(() => {
      heroTargets.forEach((el) => el.classList.add('is-visible'));
    });
  }

  // ========================================
  // Initialize
  // ========================================
  function init() {
    setupWordReveal();
    setupScrollReveal();
    setupHeroLoad();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
