/* ============================================================
   Score Buddy for Phase 10 — Marketing Website
   app.js — Alpine.js components + GSAP scroll animations
   ============================================================ */

/* ------------------------------------------------------------
   1. Theme — initialise before Alpine to prevent flash
   ------------------------------------------------------------ */
(function () {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (stored === 'dark' || (!stored && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
})();


/* ------------------------------------------------------------
   2. Alpine.js — global store + component data functions
   ------------------------------------------------------------ */
document.addEventListener('alpine:init', () => {

  /* ---- 2.1 Global: Theme store ---- */
  Alpine.store('theme', {
    dark: document.documentElement.classList.contains('dark'),

    toggle() {
      this.dark = !this.dark;
      if (this.dark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  });


  /* ---- 2.2 Sticky Nav ---- */
  Alpine.data('stickyNav', () => ({
    mobileOpen: false,
    solid: false,

    init() {
      this._update = () => {
        const isMobileWidth = window.innerWidth < 768; // below Tailwind md breakpoint
        this.solid = window.scrollY > 60 || isMobileWidth || this.mobileOpen;
        const nav = this.$el;
        if (this.solid) {
          nav.classList.remove('nav-transparent');
          nav.classList.add('nav-solid');
        } else {
          nav.classList.remove('nav-solid');
          nav.classList.add('nav-transparent');
        }
      };
      window.addEventListener('scroll', this._update, { passive: true });
      window.addEventListener('resize', this._update, { passive: true });
      this._update(); // run once immediately
    },

    destroy() {
      window.removeEventListener('scroll', this._update);
      window.removeEventListener('resize', this._update);
    },

    destroy() {
      window.removeEventListener('scroll', this._onScroll);
    },

    toggleMobile() {
      this.mobileOpen = !this.mobileOpen;
      this._update();
    },

    closeMobile() {
      this.mobileOpen = false;
      this._update();
    }
  }));


  /* ---- 2.3 Screenshot Carousel (crossfade) ---- */
  Alpine.data('carousel', () => ({
    active: 0,
    total: 8,
    touchStartX: 0,

    get prevIndex() { return (this.active - 1 + this.total) % this.total; },
    get nextIndex() { return (this.active + 1) % this.total; },

    prev()  { this.active = this.prevIndex; },
    next()  { this.active = this.nextIndex; },
    goTo(i) { this.active = i; },

    onTouchStart(e) { this.touchStartX = e.touches[0].clientX; },
    onTouchEnd(e) {
      const delta = e.changedTouches[0].clientX - this.touchStartX;
      if (delta < -40) this.next();
      else if (delta > 40) this.prev();
    },

    onKeyDown(e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); this.next(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); this.prev(); }
    },

    init() {}
  }));


  /* ---- 2.4 FAQ Accordion ---- */
  Alpine.data('faqAccordion', () => ({
    openIndex: null,

    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
    isOpen(index) {
      return this.openIndex === index;
    }
  }));


  /* ---- 2.5 Mobile FAQ Accordion (support page — multiple sections) ---- */
  Alpine.data('faqSection', () => ({
    openIndex: null,

    toggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    },
    isOpen(index) {
      return this.openIndex === index;
    }
  }));

}); // end alpine:init


/* ------------------------------------------------------------
   3. GSAP Scroll Animations
      Wrapped in DOMContentLoaded + reduced-motion guard
   ------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {

  /* Guard: skip all animations when prefers-reduced-motion is set */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  /* Ensure GSAP and ScrollTrigger are available */
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  /* -- 3.1 Hero entrance (immediate, no ScrollTrigger) -- */
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .fromTo('.hero-eyebrow',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
    .fromTo('.hero-headline',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.65 },
      '-=0.25'
    )
    .fromTo('.hero-subhead',
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.55 },
      '-=0.35'
    )
    .fromTo('.hero-ctas',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 },
      '-=0.3'
    )
    .fromTo('.hero-device',
      { opacity: 0, scale: 0.92, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: 'power2.out' },
      '-=0.65'
    );


  /* -- 3.2 Stats strip -- */
  if (document.querySelector('.stats-strip')) {
    gsap.fromTo('.stats-strip',
      { opacity: 0 },
      {
        opacity: 1, duration: 0.6,
        scrollTrigger: {
          trigger: '.stats-strip',
          start: 'top 90%',
          once: true
        }
      }
    );
  }


  /* -- 3.3 Feature panels — slide in from image side -- */
  document.querySelectorAll('.feature-panel').forEach((panel, i) => {
    const isReverse = panel.classList.contains('reverse');
    const textCol = panel.querySelector('.feature-text-col');
    const deviceCol = panel.querySelector('.device-col');

    if (textCol) {
      gsap.fromTo(textCol,
        { opacity: 0, x: isReverse ? 60 : -60 },
        {
          opacity: 1, x: 0, duration: 0.75, ease: 'power2.out',
          scrollTrigger: { trigger: panel, start: 'top 78%', once: true }
        }
      );
    }
    if (deviceCol) {
      gsap.fromTo(deviceCol,
        { opacity: 0, x: isReverse ? -50 : 50, scale: 0.96 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: panel, start: 'top 78%', once: true, delay: 0.1 }
        }
      );
    }
  });


  /* -- 3.4 Section headings (generic .gsap-fade-up targets) -- */
  document.querySelectorAll('.gsap-fade-up').forEach((el) => {
    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true }
      }
    );
  });


  /* -- 3.5 Differentiator cards — staggered -- */
  const diffCards = document.querySelectorAll('.differentiator-card');
  if (diffCards.length) {
    gsap.fromTo(diffCards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: { trigger: diffCards[0], start: 'top 82%', once: true }
      }
    );
  }


  /* -- 3.6 Comparison cards -- */
  const compCards = document.querySelectorAll('.comparison-card');
  if (compCards.length) {
    gsap.fromTo(compCards,
      { opacity: 0, y: 35 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: { trigger: compCards[0], start: 'top 82%', once: true }
      }
    );
  }


  /* -- 3.7 Final CTA banner -- */
  const ctaBanner = document.querySelector('#cta-banner');
  if (ctaBanner) {
    gsap.fromTo(ctaBanner.querySelectorAll('.gsap-fade-up, .cta-content'),
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: { trigger: ctaBanner, start: 'top 80%', once: true }
      }
    );
  }

}); // end DOMContentLoaded
