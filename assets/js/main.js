/* =========================================================================
   MOUHIB HLAILI — PORTFOLIO JAVASCRIPT
   Theme toggle, navigation, scroll reveal, project filters, contact form
   Vanilla JS — no dependencies
   ========================================================================= */

(function () {
  'use strict';

  /* =====================================================================
     RENDERER — build list sections from data.js (structured content)
     ===================================================================== */
  const Renderer = (function () {
    var data = window.PORTFOLIO_DATA || null;

    function escapeHtml(str) {
      if (str == null) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function tagsHtml(tags) {
      return tags.map(function (t) { return '<span class="tag">' + escapeHtml(t) + '</span>'; }).join('');
    }

    function linkIconSvg() {
      return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>';
    }

    function calIconSvg() {
      return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';
    }

    function renderExperience() {
      var container = document.getElementById('experienceList');
      if (!container || !data) return;
      var items = data.experience.map(function (exp, i) {
        var isLast = (i === data.experience.length - 1);
        var line = isLast ? '' : '<div class="timeline__line"></div>';
        var badge = exp.badge ? '<span class="timeline__badge' + (exp.badgeType === 'current' ? ' timeline__badge--current' : '') + '">' + escapeHtml(exp.badge) + '</span>' : '';
        var duties = exp.duties.map(function (d) { return '<li>' + escapeHtml(d) + '</li>'; }).join('');
        return '<article class="timeline__item" role="listitem">' +
          '<div class="timeline__marker" aria-hidden="true"><div class="timeline__dot"></div>' + line + '</div>' +
          '<div class="timeline__card">' +
            '<div class="timeline__card-header">' +
              '<div><h3 class="timeline__role">' + escapeHtml(exp.role) + '</h3><p class="timeline__company">' + escapeHtml(exp.company) + '</p></div>' +
              '<div class="timeline__meta"><span class="timeline__date">' + calIconSvg() + escapeHtml(exp.period) + '</span>' + badge + '</div>' +
            '</div>' +
            '<ul class="timeline__duties">' + duties + '</ul>' +
            '<div class="timeline__tags">' + tagsHtml(exp.tags) + '</div>' +
          '</div>' +
        '</article>';
      }).join('');
      container.innerHTML = items;
    }

    function renderEducation() {
      var container = document.getElementById('educationList');
      if (!container || !data) return;
      var icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>';
      var items = data.education.map(function (ed) {
        var featured = ed.featured ? ' edu-card--featured' : '';
        var note = ed.note ? '<p class="edu-card__note">' + escapeHtml(ed.note) + '</p>' : '';
        return '<article class="edu-card' + featured + '">' +
          '<div class="edu-card__icon" aria-hidden="true">' + icon + '</div>' +
          '<div class="edu-card__content">' +
            '<div class="edu-card__header">' +
              '<div><h3 class="edu-card__degree">' + escapeHtml(ed.degree) + '</h3><p class="edu-card__institution">' + escapeHtml(ed.institution) + '</p>' + note + '</div>' +
              '<span class="edu-card__date">' + escapeHtml(ed.period) + '</span>' +
            '</div>' +
            '<p class="edu-card__description">' + escapeHtml(ed.description) + '</p>' +
            '<div class="edu-card__tags">' + tagsHtml(ed.tags) + '</div>' +
          '</div>' +
        '</article>';
      }).join('');
      container.innerHTML = items;
    }

    function credIcon(type) {
      var icons = {
        coursera: '<svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#0056D2"/><text x="20" y="26" fill="white" font-size="14" font-weight="700" text-anchor="middle" font-family="Inter, sans-serif">C</text></svg>',
        linedata: '<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#003366"/><text x="20" y="26" fill="white" font-size="10" font-weight="700" text-anchor="middle" font-family="Inter, sans-serif">LD</text></svg>',
        'linedata-qa': '<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#003366"/><text x="20" y="26" fill="white" font-size="10" font-weight="700" text-anchor="middle" font-family="Inter, sans-serif">QA</text></svg>',
        esprit: '<svg viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#0fd6a0"/><text x="20" y="26" fill="#011410" font-size="9" font-weight="700" text-anchor="middle" font-family="Inter, sans-serif">ESP</text></svg>'
      };
      return icons[type] || icons.coursera;
    }

    function renderCredentials() {
      var container = document.getElementById('credentialsList');
      if (!container || !data) return;
      var extIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
      var items = data.credentials.map(function (c) {
        var link = c.link ? '<a href="' + escapeHtml(c.link.href) + '" target="_blank" rel="noopener noreferrer" class="cert-card__link">' + escapeHtml(c.link.label) + extIcon + '</a>' : '';
        var note = c.note ? '<p class="cert-card__note">' + escapeHtml(c.note) + '</p>' : '';
        var date = c.date ? '<span class="cert-card__date">' + escapeHtml(c.date) + '</span>' : '';
        return '<article class="cert-card">' +
          '<div class="cert-card__icon" aria-hidden="true">' + credIcon(c.iconType) + '</div>' +
          '<div class="cert-card__content">' +
            '<h3 class="cert-card__title">' + escapeHtml(c.title) + '</h3>' +
            '<p class="cert-card__issuer">' + escapeHtml(c.issuer) + '</p>' +
            '<p class="cert-card__description">' + escapeHtml(c.description) + '</p>' +
            link + note + date +
          '</div>' +
        '</article>';
      }).join('');
      container.innerHTML = items;
    }

    function renderProjects() {
      var container = document.getElementById('projectsGrid');
      if (!container || !data) return;
      var items = data.projects.map(function (p) {
        var visualSvg = data.projectVisuals[p.visual] || '';
        var links = p.links.map(function (l) {
          return '<a href="' + escapeHtml(l.href) + '" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="' + escapeHtml(l.label) + '">' + linkIconSvg() + '</a>';
        }).join('');
        return '<article class="project-card" data-category="' + escapeHtml(p.category) + '">' +
          '<div class="project-card__visual project-card__visual--' + escapeHtml(p.visual) + '">' + visualSvg + '</div>' +
          '<div class="project-card__content">' +
            '<div class="project-card__header">' +
              '<h3 class="project-card__title">' + escapeHtml(p.title) + '</h3>' +
              '<div class="project-card__links">' + links + '</div>' +
            '</div>' +
            '<p class="project-card__description">' + escapeHtml(p.description) + '</p>' +
            '<div class="project-card__tags">' + tagsHtml(p.tags) + '</div>' +
          '</div>' +
        '</article>';
      }).join('');
      container.innerHTML = items;
    }

    function init() {
      renderExperience();
      renderEducation();
      renderCredentials();
      renderProjects();
    }

    return { init, renderProjects };
  })();

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
    const overlay = document.getElementById('navOverlay');
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
      if (overlay) {
        overlay.classList.toggle('nav__overlay--visible', isOpen);
        overlay.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      }
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function closeMobileMenu() {
      navLinks.classList.remove('nav__links--open');
      hamburger.classList.remove('nav__hamburger--open');
      hamburger.setAttribute('aria-expanded', 'false');
      if (overlay) {
        overlay.classList.remove('nav__overlay--visible');
        overlay.setAttribute('aria-hidden', 'true');
      }
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

      // Close menu when clicking the overlay
      if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
      }

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
      // Error element IDs use the pattern: contactNameError, contactEmailError, etc.
      const errorEl = document.getElementById(fieldId + 'Error');
      const inputEl = document.getElementById(fieldId);
      if (errorEl) errorEl.textContent = message;
      if (inputEl) {
        // Use form-textarea--error for textarea elements, form-input--error otherwise
        const errorClass = (inputEl.tagName === 'TEXTAREA') ? 'form-textarea--error' : 'form-input--error';
        if (message) {
          inputEl.classList.add(errorClass);
          inputEl.setAttribute('aria-invalid', 'true');
        } else {
          inputEl.classList.remove(errorClass);
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
        if (!validName) nameField.focus();
        else if (!validEmail) emailField.focus();
        else messageField.focus();
        return;
      }

      // Capture values BEFORE any reset
      var nameVal = nameField.value.trim();
      var emailVal = emailField.value.trim();
      var subjectVal = subjectField.value.trim();
      var messageVal = messageField.value.trim();

      // Show loading state
      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;
      successMsg.hidden = true;
      infoMsg.hidden = true;

      var mailtoUrl = buildMailto(nameVal, emailVal, subjectVal, messageVal);

      // Hand off to the email client. No backend SMTP is configured.
      // If a Spring Boot /api/contact endpoint is added later, replace this
      // block with a fetch() call (see README for required SMTP env vars).
      setTimeout(function () {
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;

        if (mailtoLink) { mailtoLink.setAttribute('href', mailtoUrl); }
        successMsg.hidden = false;
        infoMsg.hidden = false;

        form.reset();

        // Trigger the mail client AFTER the UI is updated. Using a slight
        // delay avoids the navigation cancelling the form reset on some
        // browsers, and lets the success message render first.
        setTimeout(function () {
          window.location.href = mailtoUrl;
        }, 100);

        // Move focus to the success message for screen readers
        if (successMsg) { successMsg.focus && successMsg.focus(); }
      }, 600);
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
    Renderer.init();
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
