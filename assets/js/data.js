/* =========================================================================
   MOUHIB HLAILI PORTFOLIO — STRUCTURED CONTENT
   Single source of truth for portfolio content.
   Edit this file to update experience, education, credentials, and projects.
   ========================================================================= */

window.PORTFOLIO_DATA = (function () {
  'use strict';

  /* ── Personal / contact ─────────────────────────────────────────────── */
  const profile = {
    name: 'Mouhib Hlaili',
    role: 'Full-Stack Software Engineer',
    tagline: '.NET, Angular, Java & Quality Engineering',
    availability: 'Open to any collaboration',
    email: 'Mouhib.HLAILI@esprit.tn',
    location: 'Tunis, Tunisia',
    github: 'https://github.com/Mouhib223',
    linkedin: 'https://www.linkedin.com/in/hlaili-mouhib/',
    coursera: 'https://www.coursera.org/my-learning',
    cvPath: 'assets/Mouhib_Hlaili_CV.pdf'
  };

  /* ── Work experience (newest first) ──────────────────────────────────── */
  const experience = [
    {
      role: 'Front-End Developer',
      company: 'Nexus Global Banking',
      period: 'Dec 2025 – Feb 2026',
      badge: 'Recent',
      badgeType: 'current',
      duties: [
        'Built and maintained responsive banking front-end interfaces using Angular and TypeScript.',
        'Collaborated with backend teams to integrate RESTful APIs for real-time financial data display.',
        'Implemented strict accessibility standards and cross-browser compatibility for banking dashboards.',
        'Participated in code reviews, maintaining high code quality and adherence to team standards.'
      ],
      tags: ['Angular', 'TypeScript', 'REST APIs', 'SCSS']
    },
    {
      role: 'Team Lead & Full Stack Developer Intern',
      company: 'Vision Age VFX',
      period: 'Jun 2025 – Jan 2026',
      duties: [
        'Led a team of developers in designing and delivering a B2B platform for VFX service management.',
        'Architected the full-stack solution with a React frontend, NestJS backend, and PostgreSQL database.',
        'Conducted sprint planning, daily standups, and code reviews following agile methodology.',
        'Delivered project milestones on schedule while mentoring junior team members.'
      ],
      tags: ['React', 'NestJS', 'PostgreSQL', 'Team Lead', 'Agile']
    },
    {
      role: 'QA Analyst',
      company: 'Linedata',
      period: 'Sep 2024 – Dec 2024',
      duties: [
        'Designed, executed, and maintained test cases for a financial trading platform using Zephyr and Jira.',
        'Developed automated regression tests using Selenium WebDriver and the MSTest framework.',
        'Performed functional, regression, and smoke testing on broker execution modules.',
        'Reported and tracked defects with detailed reproduction steps, collaborating with dev teams to resolve issues quickly.'
      ],
      tags: ['Selenium', 'MSTest', 'Jira', 'Zephyr', 'C#']
    },
    {
      role: 'Software Developer Intern — Broker Simulator Execution',
      company: 'Linedata',
      period: 'Feb 2024 – Aug 2024',
      badge: '6 months',
      duties: [
        'Developed a broker order execution simulator using .NET, ASP.NET Web API, and the FIX protocol.',
        'Built Angular-based dashboards for real-time order lifecycle monitoring with a SQL Server backend.',
        'Implemented FIX session management, order routing, and execution report handling.',
        'Wrote comprehensive unit and integration tests using xUnit and Postman for API validation.'
      ],
      tags: ['.NET', 'ASP.NET Web API', 'Angular', 'SQL Server', 'FIX Protocol', 'xUnit']
    }
  ];

  /* ── Education ──────────────────────────────────────────────────────── */
  const education = [
    {
      degree: 'Software & Data Engineering',
      institution: "ESPRIT — École Supérieure Privée d'Ingénierie et de Technologie",
      note: 'Night programme (currently enrolled)',
      period: 'Sep 2024 – Present',
      featured: true,
      description: 'Advanced engineering curriculum covering software architecture, distributed systems, cloud computing, data engineering, and modern full-stack development practices. Night programme alongside professional work.',
      tags: ['Software Architecture', 'Data Engineering', 'Cloud Computing', 'Distributed Systems']
    },
    {
      degree: "Bachelor's in Computer Engineering — IoT & Embedded Systems",
      institution: 'Faculty of Sciences of Tunis (FST)',
      period: '2021 – 2024',
      description: 'Three-year programme focusing on embedded systems design, IoT protocols, real-time operating systems, microcontroller programming (STM32, Arduino), and full-stack web development fundamentals.',
      tags: ['Embedded Systems', 'IoT', 'STM32', 'RTOS', 'Computer Networks']
    },
    {
      degree: 'High School Diploma — Sciences, with Honors',
      institution: 'Ali Belhouane High School',
      period: '2018 – 2021',
      description: 'Baccalaureate in Sciences, graduated with honors. Strong foundation in mathematics, physics, and computer science that built the analytical and problem-solving skills applied throughout engineering studies.',
      tags: ['Mathematics', 'Physics', 'With Honors']
    }
  ];

  /* ── Credentials ───────────────────────────────────────────────────── */
  const credentials = [
    {
      title: 'Coursera Coursework',
      issuer: 'Coursera',
      description: 'Professional development courses completed on Coursera covering software development, algorithms, and engineering best practices.',
      link: { label: 'View learning profile', href: 'https://www.coursera.org/my-learning' },
      note: "Note: Coursera's my-learning dashboard requires authentication to verify individual certificates.",
      iconType: 'coursera'
    },
    {
      title: 'Software Developer Internship',
      issuer: 'Linedata',
      description: 'Completion certificate for the 6-month internship on the Broker Simulator Execution project — .NET, Angular, FIX Protocol, SQL Server.',
      date: 'Feb 2024 – Aug 2024',
      iconType: 'linedata'
    },
    {
      title: 'QA Analyst Internship',
      issuer: 'Linedata',
      description: 'Certificate for QA Analyst internship covering test automation with Selenium, test case management in Zephyr Scale, and defect lifecycle management in Jira.',
      date: 'Sep 2024 – Dec 2024',
      iconType: 'linedata-qa'
    },
    {
      title: "Bachelor's in Computer Engineering",
      issuer: 'Faculty of Sciences of Tunis',
      description: 'Degree in Computer Engineering with a specialisation in IoT and Embedded Systems.',
      date: '2021 – 2024',
      iconType: 'esprit'
    }
  ];

  /* ── Projects ───────────────────────────────────────────────────────── */
  /* category: space-separated filter keys (all, fullstack, dotnet, embedded, mobile) */
  const projects = [
    {
      title: 'Broker Simulator Execution',
      category: 'fullstack dotnet',
      visual: 'fintech',
      description: 'Full-stack broker order execution simulator built during a 6-month Linedata internship. Implemented FIX protocol session management, order routing, and execution report handling. Angular dashboards display real-time order lifecycle data backed by an ASP.NET Web API and SQL Server.',
      tags: ['.NET', 'ASP.NET Web API', 'Angular', 'SQL Server', 'FIX Protocol', 'C#'],
      links: [{ type: 'github', href: 'https://github.com/Mouhib223/RulesSimulator', label: 'RulesSimulator on GitHub' }]
    },
    {
      title: 'Simple FIX Acceptor',
      category: 'dotnet',
      visual: 'fix',
      description: 'A C# .NET console application implementing a FIX protocol acceptor using QuickFIX.NET. Accepts inbound FIX 4.0 and FIX 4.4 sessions, handles order messages, and logs execution reports. Includes configuration via simpleacc.cfg and distributed QuickFIX DLLs.',
      tags: ['C#', '.NET', 'FIX Protocol', 'QuickFIX.NET', 'FIX 4.4'],
      links: [{ type: 'github', href: 'https://github.com/Mouhib223/Simple-Fix-Acceptor', label: 'Simple-Fix-Acceptor on GitHub' }]
    },
    {
      title: 'Tiki-Taka-Toe',
      category: 'fullstack',
      visual: 'game',
      description: 'Real-time football trivia Tic Tac Toe with live multiplayer via WebSockets, football API integration, and persistent game state. The NestJS backend manages game sessions; Angular frontend handles real-time UI updates and player interactions.',
      tags: ['NestJS', 'Angular', 'WebSockets', 'PostgreSQL', 'TypeScript'],
      links: [{ type: 'github', href: 'https://github.com/Mouhib223/Tiki-Taka-Toe', label: 'Tiki-Taka-Toe on GitHub' }]
    },
    {
      title: 'B2U-HUB — Vision Age VFX Platform',
      category: 'fullstack',
      visual: 'vfx',
      description: 'Led development of a B2B SaaS platform for VFX studio service management as Team Lead. The Angular frontend (Angular CLI v20) provides client/vendor dashboards. The NestJS backend handles project tracking, automated invoicing, and service workflows — all persisted in PostgreSQL.',
      tags: ['Angular', 'NestJS', 'PostgreSQL', 'TypeScript', 'Team Lead'],
      links: [{ type: 'github', href: 'https://github.com/Mouhib223/B2U-HUB', label: 'B2U-HUB on GitHub' }]
    },
    {
      title: 'RetroGames Online Website',
      category: 'fullstack',
      visual: 'game',
      description: 'A vibrant nostalgia gaming portal with classic browser games, a curated game blog, and a merch section. Built with modern web design blended with retro aesthetics. MIT licensed and open source.',
      tags: ['HTML5', 'CSS', 'JavaScript', 'MIT License'],
      links: [{ type: 'github', href: 'https://github.com/Mouhib223/RetroGames---Games-Website', label: 'RetroGames on GitHub' }]
    },
    {
      title: 'Sports Activities Management App',
      category: 'fullstack',
      visual: 'java',
      description: 'ESPRIT university project for managing sports clubs, activities, events, and participants. Full Spring Boot backend with Maven build, Hibernate ORM for MySQL persistence, and a desktop UI layer.',
      tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Maven'],
      links: [{ type: 'github', href: 'https://github.com/Mouhib223/Spring-Boot-Project-esprit', label: 'Spring Boot Project on GitHub' }]
    },
    {
      title: 'Smart Irrigation System',
      category: 'embedded',
      visual: 'embedded',
      description: 'IoT-based smart irrigation controller using STM32 microcontroller with FreeRTOS task scheduling. Reads soil moisture sensors, controls pump actuators automatically, and publishes telemetry data via MQTT for remote monitoring.',
      tags: ['STM32', 'Embedded C', 'FreeRTOS', 'MQTT', 'IoT'],
      links: []
    },
    {
      title: 'Hotel Booking Android App',
      category: 'mobile',
      visual: 'mobile',
      description: 'Native Android hotel booking application built with Java and Android Studio. Features hotel search, availability checking, room booking, and user account management with REST API integration.',
      tags: ['Java', 'Android Studio', 'REST API', 'XML Layouts'],
      links: []
    }
  ];

  /* ── Project visual SVG illustrations ────────────────────────────────── */
  /* Kept separate so content (above) stays clean and readable */
  const projectVisuals = {
    fintech: '<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="225" fill="#071525"/><rect x="18" y="18" width="364" height="189" rx="8" fill="#091e35" stroke="#0fd6a0" stroke-width="0.5" opacity="0.7"/><polyline points="30,170 75,135 120,150 165,92 210,115 255,72 300,98 345,58 370,74" fill="none" stroke="#0fd6a0" stroke-width="2"/><polyline points="30,170 75,135 120,150 165,92 210,115 255,72 300,98 345,58 370,74 370,210 30,210" fill="#0fd6a0" opacity="0.06"/><rect x="30" y="28" width="110" height="8" rx="2" fill="#0fd6a0" opacity="0.3"/><rect x="148" y="28" width="65" height="8" rx="2" fill="#0fd6a0" opacity="0.2"/><rect x="220" y="28" width="85" height="8" rx="2" fill="#0fd6a0" opacity="0.15"/><rect x="30" y="44" width="110" height="8" rx="2" fill="#ffffff" opacity="0.06"/><rect x="148" y="44" width="65" height="8" rx="2" fill="#ffffff" opacity="0.05"/><rect x="220" y="44" width="85" height="8" rx="2" fill="#ef4444" opacity="0.25"/><text x="330" y="210" fill="#0fd6a0" font-size="11" font-family="JetBrains Mono, monospace" opacity="0.7">FIX 4.4</text><circle cx="345" cy="58" r="5" fill="#0fd6a0" opacity="0.6"/></svg>',
    fix: '<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="225" fill="#07121f"/><rect x="20" y="20" width="360" height="185" rx="6" fill="#091a2e" stroke="#3b82f6" stroke-width="0.5" opacity="0.7"/><rect x="30" y="32" width="340" height="16" rx="3" fill="#0a2040"/><text x="40" y="43" fill="#3b82f6" font-size="9" font-family="JetBrains Mono, monospace">SESSION: LOCALHOST:9876 | STATE: LOGON</text><text x="30" y="72" fill="#0fd6a0" font-size="8.5" font-family="JetBrains Mono, monospace">8=FIX.4.4|35=D|49=SENDER|56=TARGET|</text><text x="30" y="87" fill="#0fd6a0" font-size="8.5" font-family="JetBrains Mono, monospace">11=ORD001|55=AAPL|54=1|38=100|40=2</text><text x="30" y="102" fill="#7c96b0" font-size="8.5" font-family="JetBrains Mono, monospace">8=FIX.4.4|35=8|49=TARGET|39=2|</text><text x="30" y="117" fill="#7c96b0" font-size="8.5" font-family="JetBrains Mono, monospace">14=100|31=150.25|32=100 ← ExecReport</text><rect x="30" y="130" width="340" height="1" fill="#3b82f6" opacity="0.2"/><text x="30" y="150" fill="#f59e0b" font-size="8.5" font-family="JetBrains Mono, monospace">QuickFIX .NET  |  DLL: QuickFix.FIX44</text><text x="30" y="165" fill="#f59e0b" font-size="8.5" font-family="JetBrains Mono, monospace">Acceptor Mode  |  Config: simpleacc.cfg</text><rect x="310" y="185" width="60" height="14" rx="3" fill="#0fd6a0" opacity="0.15"/><text x="340" y="195" fill="#0fd6a0" font-size="8" text-anchor="middle" font-family="JetBrains Mono, monospace">C# / .NET</text></svg>',
    vfx: '<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="225" fill="#0d0818"/><defs><linearGradient id="vfxG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#0fd6a0"/></linearGradient></defs><rect x="20" y="20" width="115" height="75" rx="6" fill="url(#vfxG)" opacity="0.15" stroke="#7c3aed" stroke-width="0.5"/><rect x="145" y="20" width="115" height="75" rx="6" fill="#0a2540" stroke="#0fd6a0" stroke-width="0.5"/><rect x="270" y="20" width="110" height="75" rx="6" fill="#0a2540" stroke="#0fd6a0" stroke-width="0.5"/><text x="35" y="50" fill="#7c3aed" font-size="18" font-family="Inter, sans-serif" font-weight="700">128</text><text x="35" y="68" fill="#6b7280" font-size="9" font-family="Inter, sans-serif">Active Projects</text><rect x="35" y="74" width="80" height="4" rx="2" fill="url(#vfxG)" opacity="0.5"/><text x="160" y="50" fill="#0fd6a0" font-size="18" font-family="Inter, sans-serif" font-weight="700">$42k</text><text x="160" y="68" fill="#6b7280" font-size="9" font-family="Inter, sans-serif">Revenue MTD</text><text x="285" y="50" fill="#0fd6a0" font-size="18" font-family="Inter, sans-serif" font-weight="700">98%</text><text x="285" y="68" fill="#6b7280" font-size="9" font-family="Inter, sans-serif">Satisfaction</text><rect x="20" y="108" width="360" height="20" rx="3" fill="#0a2540"/><rect x="20" y="133" width="360" height="20" rx="3" fill="rgba(15,214,160,0.05)"/><rect x="20" y="158" width="360" height="20" rx="3" fill="#0a2540"/><rect x="30" y="116" width="80" height="6" rx="2" fill="#ffffff" opacity="0.12"/><rect x="30" y="141" width="80" height="6" rx="2" fill="#ffffff" opacity="0.12"/><rect x="30" y="166" width="80" height="6" rx="2" fill="#ffffff" opacity="0.12"/></svg>',
    game: '<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="225" fill="#0d1b2a"/><line x1="105" y1="40" x2="105" y2="185" stroke="#0fd6a0" stroke-width="2" opacity="0.6"/><line x1="185" y1="40" x2="185" y2="185" stroke="#0fd6a0" stroke-width="2" opacity="0.6"/><line x1="40" y1="105" x2="230" y2="105" stroke="#0fd6a0" stroke-width="2" opacity="0.6"/><line x1="40" y1="145" x2="230" y2="145" stroke="#0fd6a0" stroke-width="2" opacity="0.6"/><line x1="55" y1="55" x2="88" y2="88" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/><line x1="88" y1="55" x2="55" y2="88" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/><circle cx="145" cy="72" r="19" fill="none" stroke="#0fd6a0" stroke-width="3" opacity="0.9"/><circle cx="205" cy="122" r="19" fill="none" stroke="#0fd6a0" stroke-width="3" opacity="0.9"/><rect x="255" y="40" width="130" height="52" rx="6" fill="#0a2540" stroke="#0fd6a0" stroke-width="0.5"/><circle cx="275" cy="66" r="13" fill="#0fd6a0" opacity="0.25"/><rect x="295" y="58" width="75" height="8" rx="3" fill="#ffffff" opacity="0.15"/><rect x="295" y="70" width="50" height="6" rx="3" fill="#0fd6a0" opacity="0.4"/><rect x="255" y="105" width="130" height="30" rx="6" fill="#0a2540" stroke="#ffffff" stroke-width="0.3" opacity="0.5"/><text x="270" y="124" fill="#0fd6a0" font-size="12" font-family="JetBrains Mono, monospace">⚽ 2 : 1</text><text x="285" y="190" fill="#6b7280" font-size="10" text-anchor="middle" font-family="Inter, sans-serif">Real-time · WebSocket</text></svg>',
    java: '<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="225" fill="#0a1212"/><rect x="20" y="20" width="360" height="185" rx="8" fill="#0a1826"/><rect x="30" y="30" width="340" height="20" rx="3" fill="#1a3040"/><circle cx="46" cy="40" r="5" fill="#ef4444" opacity="0.7"/><circle cx="60" cy="40" r="5" fill="#f59e0b" opacity="0.7"/><circle cx="74" cy="40" r="5" fill="#0fd6a0" opacity="0.7"/><text x="155" y="44" fill="#6b7280" font-size="9" text-anchor="middle" font-family="Inter, sans-serif">Sports Activities Manager</text><rect x="30" y="55" width="80" height="145" rx="3" fill="#091520"/><rect x="38" y="68" width="60" height="8" rx="2" fill="#0fd6a0" opacity="0.5"/><rect x="38" y="82" width="60" height="8" rx="2" fill="#ffffff" opacity="0.07"/><rect x="38" y="96" width="60" height="8" rx="2" fill="#ffffff" opacity="0.07"/><rect x="38" y="110" width="60" height="8" rx="2" fill="#ffffff" opacity="0.07"/><rect x="118" y="60" width="115" height="55" rx="4" fill="#0a2540" stroke="#0fd6a0" stroke-width="0.5"/><rect x="245" y="60" width="120" height="55" rx="4" fill="#0a2540" stroke="#0fd6a0" stroke-width="0.5"/><text x="128" y="78" fill="#0fd6a0" font-size="10" font-family="Inter, sans-serif">⚽ Football</text><rect x="128" y="85" width="70" height="5" rx="2" fill="#ffffff" opacity="0.08"/><rect x="128" y="95" width="50" height="5" rx="2" fill="#0fd6a0" opacity="0.3"/><text x="255" y="78" fill="#0fd6a0" font-size="10" font-family="Inter, sans-serif">🏀 Basketball</text><rect x="255" y="85" width="70" height="5" rx="2" fill="#ffffff" opacity="0.08"/><rect x="255" y="95" width="50" height="5" rx="2" fill="#0fd6a0" opacity="0.3"/><text x="200" y="178" fill="#6b7280" font-size="9" text-anchor="middle" font-family="Inter, sans-serif">Spring Boot · Hibernate · MySQL</text></svg>',
    embedded: '<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="225" fill="#07120e"/><rect x="20" y="20" width="360" height="185" rx="8" fill="#0a1520"/><line x1="20" y1="60" x2="380" y2="60" stroke="#0fd6a0" stroke-width="0.3" stroke-dasharray="4,8" opacity="0.2"/><line x1="20" y1="100" x2="380" y2="100" stroke="#0fd6a0" stroke-width="0.3" stroke-dasharray="4,8" opacity="0.2"/><line x1="20" y1="140" x2="380" y2="140" stroke="#0fd6a0" stroke-width="0.3" stroke-dasharray="4,8" opacity="0.2"/><line x1="80" y1="20" x2="80" y2="200" stroke="#0fd6a0" stroke-width="0.3" stroke-dasharray="4,8" opacity="0.2"/><line x1="160" y1="20" x2="160" y2="200" stroke="#0fd6a0" stroke-width="0.3" stroke-dasharray="4,8" opacity="0.2"/><line x1="240" y1="20" x2="240" y2="200" stroke="#0fd6a0" stroke-width="0.3" stroke-dasharray="4,8" opacity="0.2"/><line x1="320" y1="20" x2="320" y2="200" stroke="#0fd6a0" stroke-width="0.3" stroke-dasharray="4,8" opacity="0.2"/><rect x="130" y="72" width="100" height="70" rx="4" fill="#1a3040" stroke="#0fd6a0" stroke-width="1.5"/><rect x="140" y="82" width="80" height="50" rx="2" fill="#0d2030"/><text x="180" y="109" fill="#0fd6a0" font-size="8" text-anchor="middle" font-family="JetBrains Mono, monospace">STM32F4</text><text x="180" y="120" fill="#6b7280" font-size="7" text-anchor="middle" font-family="JetBrains Mono, monospace">FreeRTOS</text><rect x="120" y="80" width="10" height="4" rx="1" fill="#0fd6a0" opacity="0.7"/><rect x="120" y="88" width="10" height="4" rx="1" fill="#0fd6a0" opacity="0.7"/><rect x="120" y="96" width="10" height="4" rx="1" fill="#0fd6a0" opacity="0.7"/><rect x="230" y="80" width="10" height="4" rx="1" fill="#0fd6a0" opacity="0.7"/><rect x="230" y="88" width="10" height="4" rx="1" fill="#0fd6a0" opacity="0.7"/><rect x="230" y="96" width="10" height="4" rx="1" fill="#0fd6a0" opacity="0.7"/><rect x="40" y="82" width="60" height="40" rx="4" fill="#0a2540" stroke="#3b82f6" stroke-width="1"/><text x="70" y="104" fill="#3b82f6" font-size="8" text-anchor="middle" font-family="JetBrains Mono, monospace">SOIL</text><rect x="280" y="82" width="60" height="40" rx="4" fill="#0a2540" stroke="#f59e0b" stroke-width="1"/><text x="310" y="104" fill="#f59e0b" font-size="8" text-anchor="middle" font-family="JetBrains Mono, monospace">PUMP</text><line x1="100" y1="102" x2="130" y2="102" stroke="#3b82f6" stroke-width="1.5" opacity="0.7"/><line x1="240" y1="102" x2="280" y2="102" stroke="#f59e0b" stroke-width="1.5" opacity="0.7"/><text x="200" y="178" fill="#6b7280" font-size="9" text-anchor="middle" font-family="Inter, sans-serif">STM32 · Embedded C · FreeRTOS · MQTT</text></svg>',
    mobile: '<svg viewBox="0 0 400 225" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="225" fill="#07140e"/><rect x="150" y="12" width="100" height="200" rx="14" fill="#1a3040" stroke="#0fd6a0" stroke-width="1.5"/><rect x="155" y="22" width="90" height="175" rx="8" fill="#0a1826"/><circle cx="200" cy="204" r="5" fill="#2a4060"/><rect x="158" y="28" width="84" height="22" rx="3" fill="#0d2a3a"/><text x="200" y="43" fill="#0fd6a0" font-size="7.5" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600">HOTEL FINDER</text><rect x="160" y="55" width="80" height="46" rx="4" fill="#0a2540"/><rect x="160" y="55" width="80" height="22" rx="4" fill="#1a3a50"/><text x="200" y="70" fill="#0fd6a0" font-size="7" text-anchor="middle" font-family="Inter, sans-serif">🏨 Grand Hotel</text><text x="200" y="82" fill="#6b7280" font-size="6" text-anchor="middle" font-family="Inter, sans-serif">Tunis — ★★★★★</text><rect x="165" y="88" width="50" height="8" rx="2" fill="#0fd6a0" opacity="0.8"/><text x="190" y="95" fill="#0a1826" font-size="6" text-anchor="middle" font-family="Inter, sans-serif" font-weight="600">Book Now</text><rect x="160" y="108" width="80" height="36" rx="4" fill="#0a2540"/><text x="200" y="123" fill="#ffffff" font-size="6" text-anchor="middle" font-family="Inter, sans-serif">🏨 Seaside Resort</text><text x="200" y="134" fill="#6b7280" font-size="6" text-anchor="middle" font-family="Inter, sans-serif">Hammamet — ★★★★</text><rect x="158" y="150" width="84" height="20" rx="0" fill="#0d2030"/><text x="175" y="163" fill="#6b7280" font-size="12">🏠</text><text x="195" y="163" fill="#0fd6a0" font-size="12">🔍</text><text x="215" y="163" fill="#6b7280" font-size="12">♡</text><text x="45" y="80" fill="#6b7280" font-size="9" font-family="Inter, sans-serif">Android</text><text x="45" y="95" fill="#6b7280" font-size="9" font-family="Inter, sans-serif">Studio</text><text x="45" y="120" fill="#f59e0b" font-size="9" font-family="Inter, sans-serif">Java</text><text x="45" y="135" fill="#f59e0b" font-size="9" font-family="Inter, sans-serif">REST API</text></svg>'
  };

  return { profile, experience, education, credentials, projects, projectVisuals };
})();
