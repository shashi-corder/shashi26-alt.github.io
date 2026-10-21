// Small extras: mobile menu, active nav link, typing effect, scroll fade-in,
// stat counters, CV buttons, contact form and the footer year.
// The page still works if this file fails to load.

const header = document.querySelector('.site-header');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
if (header && menuToggle) {
  const setOpen = (open) => {
    header.classList.toggle('nav-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  menuToggle.addEventListener('click', () => setOpen(!header.classList.contains('nav-open')));
  header.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}

// Solid header background once the page has scrolled.
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Highlight the nav link for the section in view.
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);
if ('IntersectionObserver' in window && navSections.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navSections.forEach((section) => navObserver.observe(section));
}

// Typing effect on the hero role line.
const typed = document.querySelector('.typed');
if (typed && !reduceMotion) {
  const words = JSON.parse(typed.dataset.words);
  let wordIndex = 0;
  let charCount = words[0].length;
  let deleting = true;
  const tick = () => {
    const word = words[wordIndex];
    charCount += deleting ? -1 : 1;
    typed.textContent = word.slice(0, charCount);
    let delay = deleting ? 40 : 85;
    if (!deleting && charCount === word.length) {
      deleting = true;
      delay = 1800;
    } else if (deleting && charCount === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      delay = 350;
    }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 2400);
}

// Fade sections in as they scroll into view.
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Count the stats up from zero the first time they appear.
const counters = document.querySelectorAll('[data-count]');
if (counters.length && !reduceMotion && 'IntersectionObserver' in window) {
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      countObserver.unobserve(el);
      const target = parseFloat(el.dataset.count);
      const decimals = (el.dataset.count.split('.')[1] || '').length;
      const format = (n) => n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      const start = performance.now();
      const step = (now) => {
        const t = Math.min((now - start) / 1400, 1);
        el.textContent = format(target * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }, { threshold: 0.6 });
  counters.forEach((el) => countObserver.observe(el));
}

// CV buttons stay hidden until assets/resume.pdf is uploaded, so the live site never shows a broken link.
const resumeLinks = document.querySelectorAll('[data-resume]');
if (resumeLinks.length) {
  fetch(resumeLinks[0].getAttribute('href'), { method: 'HEAD' })
    .then((res) => {
      if (res.ok) resumeLinks.forEach((link) => { link.hidden = false; });
    })
    .catch(() => { /* offline or opened as a file: leave the buttons hidden */ });
}

// Contact form: opens the visitor's email app with the message filled in.
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const subject = `Portfolio message from ${data.get('name')}`;
    const body = `${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`;
    window.location.href = `mailto:${contactForm.dataset.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
