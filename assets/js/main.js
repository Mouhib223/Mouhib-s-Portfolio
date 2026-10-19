/* =========================================================================
   MOUHIB HLAILI — PORTFOLIO JAVASCRIPT
   Theme toggle, navigation, scroll reveal, project filters, contact form
   Vanilla JS — no dependencies
   ========================================================================= */

(function () {
  'use strict';

  /* =====================================================================
     THEME MANAGEMENT
     ===================================================================== */
  const ThemeManager = (function () {
    const STORAGE_KEY = 'mh-portfolio-theme';
    const root = document.documentElement;
    const toggleBtn = document.getElementById('themeToggle');

    function getStoredTheme() {
      try {
        return localStorage.getItem(STORAGE_KEY);
      } catch (e) {
        return null;
      }
    }

    function storeTheme(theme) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (e) {
        /* localStorage may be unavailable (private mode, file://) */
      }
    }

    function getPreferredTheme() {
      const stored = getStoredTheme();
      if (stored === 'dark' || stored === 'light') return stored;
      // Respect OS preference as a default
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
      return 'dark';
    }

    function applyTheme(theme) {
      root.setAttribute('data-theme', theme);
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      }
      // Update meta theme-color if present
      let metaTheme = document.querySelector('meta[name="theme-color"]');
      if (!metaTheme) {
        metaTheme = document.createElement('meta');
        metaTheme.setAttribute('name', 'theme-color');
        document.head.appendChild(metaTheme);
      }
      metaTheme.setAttribute('content', theme === 'dark' ? '#0f1923' : '#f8fafc');
    }

    function toggle() {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      storeTheme(next);
    }

    function init() {
      applyTheme(getPreferredTheme());
      if (toggleBtn) {
        toggleBtn.addEventListener('click', toggle);
      }
      // Respond to OS preference changes if user hasn't chosen manually
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
          if (!getStoredTheme()) {
            applyTheme(e.matches ? 'dark' : 'light');
          }
        });
      }
    }

    return { init, toggle, applyTheme };
  })();

  /* =====================================================================
     NAVIGATION — scroll effect, active link, mobile menu
     ===================================================================== */
  const Navigation = (function () {
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    const links = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section[id]');

    function handleScroll() {
      if (window.scrollY > 50) {
        navbar.classList.add('nav--scrolled');
      } else {
        navbar.classList.remove('nav--scrolled');
      }
    }

    function setActiveLink() {
      let current = '';
      const scrollPos = window.scrollY + 120;

      sections.forEach(function (section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = section.getAttribute('id');
        }
      });

      links.forEach(function (link) {
        link.classList.remove('nav__link--active');
        if (link.getAttribute('data-section') === current) {
          link.classList.add('nav__link--active');
        }
      });
    }

    function toggleMobileMenu() {
      const isOpen = navLinks.classList.toggle('nav__links--open');
      hamburger.classList.toggle('nav__hamburger--open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function closeMobileMenu() {
      navLinks.classList.remove('nav__links--open');
      hamburger.classList.remove('nav__hamburger--open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    function init() {
      window.addEventListener('scroll', function () {
        window.requestAnimationFrame(function () {
          handleScroll();
          setActiveLink();
        });
      }, { passive: true });

      handleScroll();
      setActiveLink();

      if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
      }

      // Close mobile menu when clicking a link
      links.forEach(function (link) {
        link.addEventListener('click', closeMobileMenu);
      });

      // Close menu on Escape
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navLinks.classList.contains('nav__links--open')) {
          closeMobileMenu();
        }
      });

      // Close menu when clicking outside
      document.addEventListener('click', function (e) {
        if (
          navLinks.classList.contains('nav__links--open') &&
          !navLinks.contains(e.target) &&
          !hamburger.contains(e.target)
        ) {
          closeMobileMenu();
        }
      });

      // Resize handler — close menu when going to desktop
      window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
          closeMobileMenu();
        }
      });
    }

    return { init };
  })();

  /* =====================================================================
     SCROLL REVEAL — Intersection Observer
     ===================================================================== */
  const ScrollReveal = (function () {
    function init() {
      // Add reveal class to elements
      const selectors = [
        '.section__header',
        '.about__info',
        '.about__principles',
        '.timeline__item',
        '.skill-category',
        '.project-card',
        '.edu-card',
        '.cert-card',
        '.contact__info',
        '.contact__form-wrapper'
      ];

      selectors.forEach(function (selector) {
        document.querySelectorAll(selector).forEach(function (el, index) {
          el.classList.add('reveal');
          // Add stagger delay for grid items
          if (
            el.classList.contains('skill-category') ||
            el.classList.contains('project-card') ||
            el.classList.contains('cert-card')
          ) {
            const delay = (index % 3) + 1;
            el.setAttribute('data-delay', delay);
          }
        });
      });

      // Respect reduced motion preference
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.reveal').forEach(function (el) {
          el.classList.add('is-visible');
        });
        return;
      }

      if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.reveal').forEach(function (el) {
          el.classList.add('is-visible');
        });
        return;
      }

      const observer = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -60px 0px'
        }
      );

      document.querySelectorAll('.reveal').forEach(function (el) {
        observer.observe(el);
      });
    }

    return { init };
  })();

  /* =====================================================================
     HERO — rotating role text
     ===================================================================== */
  const HeroRotator = (function () {
    function init() {
      const items = document.querySelectorAll('.hero__title-item');
      if (items.length === 0) return;

      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return; // keep first item visible
      }

      let currentIndex = 0;
      const interval = 3500;

      setInterval(function () {
        const current = items[currentIndex];
        current.classList.remove('active');
        current.classList.add('exit');

        currentIndex = (currentIndex + 1) % items.length;
        const next = items[currentIndex];

        setTimeout(function () {
          current.classList.remove('exit');
          next.classList.add('active');
        }, 500);
      }, interval);
    }

    return { init };
  })();

  /* =====================================================================
     PROJECT FILTERS
     ===================================================================== */
  const ProjectFilter = (function () {
    function init() {
      const filterBtns = document.querySelectorAll('.filter-btn');
      const projectCards = document.querySelectorAll('.project-card');

      if (filterBtns.length === 0) return;

      filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          const filter = btn.getAttribute('data-filter');

          // Update active button
          filterBtns.forEach(function (b) { b.classList.remove('filter-btn--active'); });
          btn.classList.add('filter-btn--active');

          // Filter cards
          projectCards.forEach(function (card) {
            const categories = card.getAttribute('data-category') || '';
            const matches = filter === 'all' || categories.split(' ').indexOf(filter) !== -1;

            if (matches) {
              card.classList.remove('project-card--hidden');
              // Re-trigger fade-in animation
              card.style.animation = 'none';
              card.offsetHeight; // force reflow
              card.style.animation = 'fadeInUp 0.5s ease both';
            } else {
              card.classList.add('project-card--hidden');
            }
          });
        });
      });
    }

    return { init };
  })();

  /* =====================================================================
     CONTACT FORM — client-side validation & mailto fallback
     ===================================================================== */
  const ContactForm = (function () {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('formSuccess');
    const infoMsg = document.getElementById('formInfo');
    const mailtoLink = document.getElementById('formMailtoLink');

    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showError(fieldId, message) {
      const errorEl = document.getElementById(fieldId + 'Error');
      const inputEl = document.getElementById(fieldId);
      if (errorEl) errorEl.textContent = message;
      if (inputEl) {
        if (message) {
          inputEl.classList.add('form-input--error');
          inputEl.setAttribute('aria-invalid', 'true');
        } else {
          inputEl.classList.remove('form-input--error');
          inputEl.setAttribute('aria-invalid', 'false');
        }
      }
    }

    function validateField(field) {
      const value = field.value.trim();

      if (field.hasAttribute('required') && !value) {
        const label = field.previousElementSibling ? field.previousElementSibling.textContent.replace('*', '').trim() : 'This field';
        showError(field.id, label + ' is required');
        return false;
      }

      if (field.type === 'email' && value && !EMAIL_RE.test(value)) {
        showError(field.id, 'Please enter a valid email address');
        return false;
      }

      if (field.id === 'contactMessage' && value && value.length < 10) {
        showError(field.id, 'Message should be at least 10 characters');
        return false;
      }

      showError(field.id, '');
      return true;
    }

    function buildMailto(name, email, subject, message) {
      const fullName = name || 'Website Visitor';
      const emailSubject = subject || 'Portfolio Contact from ' + fullName;
      const body = [
        'Name: ' + fullName,
        'Email: ' + email,
        '',
        'Message:',
        message
      ].join('\n');
      return 'mailto:Mouhib.HLAILI@esprit.tn?subject=' + encodeURIComponent(emailSubject) + '&body=' + encodeURIComponent(body);
    }

    function handleSubmit(e) {
      e.preventDefault();

      const nameField = document.getElementById('contactName');
      const emailField = document.getElementById('contactEmail');
      const subjectField = document.getElementById('contactSubject');
      const messageField = document.getElementById('contactMessage');

      const validName = validateField(nameField);
      const validEmail = validateField(emailField);
      const validMessage = validateField(messageField);

      if (!validName || !validEmail || !validMessage) {
        // Focus first invalid field
        if (!validName) nameField.focus();
        else if (!validEmail) emailField.focus();
        else messageField.focus();
        return;
      }

      // Show loading state
      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;
      successMsg.hidden = true;
      infoMsg.hidden = true;

      // Build the mailto link with the form data
      const mailtoUrl = buildMailto(
        nameField.value.trim(),
        emailField.value.trim(),
        subjectField.value.trim(),
        messageField.value.trim()
      );

      // Simulate a brief processing delay, then hand off to email client.
      // This is a frontend-only fallback (no backend SMTP configured).
      // If a Spring Boot backend is added later, replace this with a fetch() to /api/contact.
      setTimeout(function () {
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;

        // Update the mailto link and show success message
        if (mailtoLink) {
          mailtoLink.setAttribute('href', mailtoUrl);
        }
        successMsg.hidden = false;
        infoMsg.hidden = false;

        // Attempt to open the email client
        window.location.href = mailtoUrl;

        // Reset the form
        form.reset();
      }, 700);
    }

    function init() {
      if (!form) return;

      form.addEventListener('submit', handleSubmit);

      // Validate on blur and clear errors on input
      ['contactName', 'contactEmail', 'contactMessage'].forEach(function (id) {
        const field = document.getElementById(id);
        if (!field) return;
        field.addEventListener('blur', function () { validateField(field); });
        field.addEventListener('input', function () {
          if (field.classList.contains('form-input--error')) {
            validateField(field);
          }
        });
      });
    }

    return { init };
  })();

  /* =====================================================================
     BACK TO TOP
     ===================================================================== */
  const BackToTop = (function () {
    const btn = document.getElementById('backToTop');

    function handleScroll() {
      if (window.scrollY > 600) {
        btn.classList.add('back-to-top--visible');
      } else {
        btn.classList.remove('back-to-top--visible');
      }
    }

    function init() {
      if (!btn) return;
      window.addEventListener('scroll', function () {
        window.requestAnimationFrame(handleScroll);
      }, { passive: true });
      btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    return { init };
  })();

  /* =====================================================================
     FOOTER YEAR
     ===================================================================== */
  function setFooterYear() {
    const el = document.getElementById('footerYear');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* =====================================================================
     SMOOTH SCROLL — for anchor links (with header offset)
     ===================================================================== */
  const SmoothScroll = (function () {
    function init() {
      document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
          const targetId = this.getAttribute('href');
          if (!targetId || targetId === '#') return;
          const target = document.querySelector(targetId);
          if (!target) return;

          e.preventDefault();
          const offset = 70; // nav height
          const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;

          const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          window.scrollTo({
            top: targetPos,
            behavior: prefersReduced ? 'auto' : 'smooth'
          });
        });
      });
    }

    return { init };
  })();

  /* =====================================================================
     INIT
     ===================================================================== */
  function init() {
    ThemeManager.init();
    Navigation.init();
    ScrollReveal.init();
    HeroRotator.init();
    ProjectFilter.init();
    ContactForm.init();
    BackToTop.init();
    SmoothScroll.init();
    setFooterYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
