/**
 * i18n Translations — English (default) & Spanish
 *
 * Structure: translations[lang][component][key]
 * Usage: data-i18n="component.key" on elements
 *        data-i18n-html="component.key" for innerHTML (elements with nested tags)
 *        data-i18n-aria="component.key" for aria-label attributes
 *        data-i18n-placeholder="component.key" for placeholder attributes
 */

export interface Translations {
  [lang: string]: {
    [component: string]: {
      [key: string]: string | string[];
    };
  };
}

export const translations: Translations = {
  // ═══════════════════════════════════════════
  // ENGLISH (DEFAULT — rendered in HTML)
  // ═══════════════════════════════════════════
  en: {
    layout: {
      skipLink: "Skip to main content",
      progressBar: "Reading progress",
    },
    navbar: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      navLabel: "Main navigation",
      toggleTheme: "Toggle theme",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      goHome: "Go to top",
      langToggle: "English",
      langToggleMobile: "EN",
      langToggleAria: "Switch to Spanish",
    },
    hero: {
      greeting: "Hi, I'm",
      subtitle: "Full Stack Developer",
      description:
        'Developer with solid experience in the <span class="accent-text font-medium">.NET</span> ecosystem and cross-platform mobile development. <span class="accent-text font-medium">Microsoft MVP</span> Nominee. I build clean, secure, and deeply functional software.',
      ctaProjects: "View Projects",
      ctaContact: "Contact →",
      scrollLabel: "Scroll",
      scrollAria: "Go to About section",
    },
    about: {
      overline: "About",
      titleHtml:
        'Who I am and <span class="gradient-text">the value I deliver</span>',
      bio1Html:
        "As a Full Stack Developer, I build end-to-end solutions from analysis and architecture to backend, frontend, and mobile development. I work with .NET, Spring Boot, Angular, React, and mobile technologies to turn complex processes into clear, traceable, and maintainable systems.",
      bio2Html:
        "I bring value by combining technical judgment, architecture best practices, documentation, and applied security, ensuring each solution can evolve with quality.",
      identityNote:
        "I use Daniel Monettelli as my professional name. Monettelli comes from my grandmother’s family name, and I chose to preserve it as part of my identity across my networks, projects, and technical community.",
      highlight0:
        "Microsoft MVP Nominee for technical contributions to the community",
      highlight1:
        "Planet Xamarin member — curated elite community in Microsoft's mobile ecosystem",
      highlight2: "Official contributor at WeAreDotnet.io",
      highlight3:
        "Focus on architectural order, simplicity, and high-value solutions",
      stat0: "Years of Experience",
      stat1: "Key Projects",
      stat2: "Published Articles",
      stat3: "MVP Nomination",
      badge: "Full Stack Developer",
      location: "Arequipa, Peru 🇵🇪",
    },
    skills: {
      overline: "Technical Skills",
      titleHtml: 'My <span class="gradient-text">tech arsenal</span>',
      description:
        "Tools and technologies I master to build end-to-end solutions, from mobile apps to robust backend architectures.",
      tabsAria: "Skill categories",
      mainStack: "Main Stack",
      complementary: "Complementary",
      role_mobile: "Mobile",
      role_backend: "Backend",
      role_frontend: "Frontend",
      role_cloud: "Cloud",
      role_database: "Database",
      cat_mobile: "Mobile",
      cat_backend: "Backend",
      cat_frontend: "Frontend",
      cat_databases: "Databases",
      cat_architecture: "Engineering / Arch.",
      cat_cloud: "Cloud / DevOps",
      cat_tools: "Tools",
      tag_advanced: "Advanced",
      tag_intermediate: "Intermediate",
      tag_basic_intermediate: "Basic-Intermediate",
      tag_basic: "Basic",
    },
    experience: {
      overline: "Experience",
      titleHtml: 'My <span class="gradient-text">professional journey</span>',
      // ── Timeline items ──
      "0_period": "Nov 2021 – Present",
      "0_title": "Independent Full Stack Developer",
      "0_company": "Freelance / Remote",
      "0_location": "Arequipa, Peru",
      "0_type": "Full Time",
      "0_desc0":
        "Autonomous development of comprehensive technology solutions, building complex systems with .NET, Spring Boot, Angular, and React under industry standards.",
      "0_desc1":
        "Relational database design through normalization and NoSQL structure modeling, applying SOLID principles under RUP methodology.",
      "0_desc2":
        "Full software lifecycle management on high-impact projects, demonstrating technical maturity in web, mobile, and backend architectures.",
      "1_period": "Feb 2021 – Present",
      "1_title": "Content Creator & Microsoft MVP Nominee",
      "1_company": "Daniel Monettelli's Blog / WeAreDotnet.io",
      "1_location": "Global",
      "1_type": "Community",
      "1_desc0":
        "Selected member and official contributor at WeAreDotnet.io, driving knowledge in the global .NET community.",
      "1_desc1":
        "Publishing technical guides on architecture and .NET MAUI, promoting transparency in software development.",
      "2_period": "Jan 2019 – Present",
      "2_title": "Elite Mobile Community Member",
      "2_company": "Planet Xamarin (currently .NET MAUI)",
      "2_location": "Global",
      "2_type": "Community",
      "2_desc0":
        "Part of the curated community of developers with advanced experience in Microsoft's mobile ecosystem since its inception.",
    },
    projects: {
      overline: "Projects",
      titleHtml: 'What I\'ve <span class="gradient-text">built</span>',
      description:
        "Engineering and innovation projects that reflect my commitment to clean, scalable, and functional software.",
      viewDetails: "View details",
      viewDetailsAria: "View details of",
      closeModal: "Close modal",
      featured: "⭐ Featured",
      // ── Status labels ──
      statusPublished: "Published",
      statusInDev: "In Development",
      statusCompleted: "Completed",
      // ── Modal section headings ──
      screenshots: "Project Screenshots",
      screenshotsHint: "— Click an image to enlarge",
      overview: "Overview",
      problemSolved: "Problem Solved",
      myContribution: "My Contribution",
      keyFeatures: "Key Features",
      impact: "Impact",
      architecture: "Architecture",
      techStack: "Tech Stack",
      achievements: "Key Achievements",
      closeExpandedAria: "Close expanded view",
      prevImageAria: "Previous image",
      nextImageAria: "Next image",
      enlargeAria: "Enlarge:",
      // ── Project 0: MeowApp ──
      "0_title": "MeowApp",
      "0_subtitle": "Open Source App — .NET MAUI",
      "0_description":
        "Mobile app published on Google Play Store that allows exploring cat breeds through external API consumption.",
      "0_status": "Published",
      "0_projectType": "Open Source Mobile App",
      "0_role": "Lead developer and software architect",
      "0_screenshot0": "Main screen — exploring random cat images",
      "0_screenshot1": "Breed catalog — browsing and searching cat breeds",
      "0_screenshot2": "Add to favorites — managing user's favorite cats",
      "0_screenshot3": "Favorites list — offline persistence with SQLite",
      "0_problemSolved":
        "The .NET MAUI ecosystem needed a real reference project — published in production — demonstrating how to build a complete app with best practices: Clean Architecture, REST API consumption, offline persistence, and automated CI/CD. Not a demo, but a real product.",
      "0_myContribution":
        "I designed and developed the app from scratch autonomously: defined the 4-layer architecture, implemented the entire data flow (HTTP → Cache → UI), configured the CI/CD pipeline with GitHub Actions, and published the app on Google Play Store. Additionally, I documented the entire process in a series of technical blog articles.",
      "0_fullDescription":
        "MeowApp is a mobile application successfully published on Google Play Store that demonstrates complete mastery of the mobile development lifecycle — from architectural design to production deployment. The app consumes TheCatAPI to offer a rich cat breed exploration experience, implementing local caching with SQLite for offline functionality, advanced state management, and professional UI/UX following Material Design guidelines adapted to the .NET MAUI ecosystem.",
      "0_feature0":
        "Professional TheCatAPI (REST) consumption with robust error handling, retries, and timeout",
      "0_feature1":
        "Offline caching with SQLite for data persistence and no-connection experience",
      "0_feature2":
        "MVVM architecture with 4-layer Clean Architecture strictly separated",
      "0_feature3": "Smooth tab navigation with correct lifecycle management",
      "0_feature4":
        "Automated CI/CD with GitHub Actions for building, testing, and deployment",
      "0_feature5":
        "Series of technical articles documenting every architecture and development decision",
      "0_achievement0":
        "App published and available on Google Play Store with active users",
      "0_achievement1":
        "Open source project referenced by the .NET MAUI community on GitHub",
      "0_achievement2":
        "Complete series of technical blog posts documenting the process",
      "0_achievement3":
        "Demonstrates end-to-end mastery: design → architecture → development → testing → deployment",
      "0_arch":
        "4-layer Clean Architecture with strict MVVM pattern, dependency injection, and absolute separation of concerns.",
      "0_layer0": "Domain",
      "0_layer0_detail":
        "Business entities, repository interfaces, and service contracts",
      "0_layer1": "Application",
      "0_layer1_detail":
        "Use cases, DTOs, orchestration logic, and validations",
      "0_layer2": "Infrastructure",
      "0_layer2_detail":
        "HTTP implementations (HttpClient), SQLite, platform services",
      "0_layer3": "Presentation",
      "0_layer3_detail":
        "XAML Views, ViewModels, Converters, navigation, and DI container",
      "0_impact":
        "Technical reference for .NET MAUI community developers who need a real example of how to take an app from idea to Google Play Store with professional standards.",
      // ── Project 1: SAIP ──
      "1_title": "SAIP Platform & TTAIP Appeals",
      "1_subtitle": "Academic Innovation Project",
      "1_description":
        "Comprehensive solution to modernize the right to Public Information Access, digitizing the complete cycle of requests and appeals.",
      "1_status": "In Development",
      "1_projectType": "Government Web + Mobile Platform",
      "1_role":
        "Full Stack Developer and architect of the comprehensive solution",
      "1_problemSolved":
        "In Peru, the Public Information Access (SAIP) process and its appeals before the TTAIP are bureaucratic procedures managed manually, generating delays, documentation loss, and lack of transparency. No digital platform existed covering the complete process cycle.",
      "1_myContribution":
        "I led the design and implementation of the entire solution: modeled processes with professional UML (IBM Rhapsody), designed the normalized database up to 3NF, built the RESTful API with Spring Boot, developed the frontend SPA with Angular, and created the native mobile app in Kotlin. Applied RUP methodology in all development phases.",
      "1_fullDescription":
        "Academic innovation project that digitizes the constitutional right to Public Information Access in Peru. It covers the complete SAIP process cycle: from citizen request to appeal resolution before the TTAIP, with three interconnected modules — web management platform (Angular), RESTful backend (Spring Boot), and native mobile app (Kotlin for Android) — all integrated over a SQL Server database normalized up to 3NF.",
      "1_feature0":
        "Robust RESTful backend with Spring Boot (Java), secure authentication, and role management",
      "1_feature1":
        "Complete SPA frontend with Angular, responsive design, and state management",
      "1_feature2":
        "Native Android app in Kotlin with XML Layouts and Material Design",
      "1_feature3":
        "SQL Server database normalized up to 3NF with complete referential integrity",
      "1_feature4":
        "Professional UML modeling with IBM Rhapsody: use case, class, and sequence diagrams",
      "1_feature5":
        "Complete RUP methodology: inception, elaboration, construction, and transition",
      "1_achievement0":
        "Complete digitization of a real constitutional government process",
      "1_achievement1":
        "Successful integration of 3 heterogeneous platforms (web + API + mobile)",
      "1_achievement2":
        "Database normalized up to 3NF with 20+ interrelated tables",
      "1_achievement3":
        "Exhaustive technical documentation following RUP standard with artifacts from each phase",
      "1_arch":
        "Service architecture with central RESTful API, SPA frontend, and native mobile module.",
      "1_layer0": "Backend (Spring Boot)",
      "1_layer0_detail":
        "REST API, JWT authentication, business logic, data validation",
      "1_layer1": "Frontend (Angular)",
      "1_layer1_detail":
        "SPA with reusable components, HTTP services, route guards",
      "1_layer2": "Mobile (Kotlin)",
      "1_layer2_detail":
        "Native Android app with Retrofit, Room, and MVVM pattern",
      "1_layer3": "Database (SQL Server)",
      "1_layer3_detail": "3NF normalized schema, stored procedures, triggers",
      "1_impact":
        "Solution that modernizes a real government process, potentially benefiting millions of Peruvian citizens in their constitutional right to public information access.",
      // ── Project 2: Aloha Patitas ──
      "2_title": "Aloha Patitas",
      "2_subtitle": "Pet-Friendly Tourism Platform",
      "2_description":
        "Pioneer solution for finding pet-friendly tourism services. ASP.NET Core backend, MVC Razor Views web, and .NET MAUI mobile.",
      "2_status": "In Development",
      "2_projectType": "Full Stack Web + Mobile Platform",
      "2_role": "Full Stack Developer and solution designer",
      "2_problemSolved":
        "Pet owners in Peru face great difficulty when planning trips: there is no centralized platform to find hotels, restaurants, and tourism services that accept pets. Information is scattered and unreliable.",
      "2_myContribution":
        "I designed the complete system architecture and developed all three modules: REST API with ASP.NET Core, web interface with MVC Razor Views, and cross-platform mobile app with .NET MAUI. Implemented geospatial queries in MongoDB for proximity-based establishment search.",
      "2_fullDescription":
        "Pioneer platform that solves a real problem in the Peruvian tourism market: the difficulty of finding establishments and services that accept pets. It combines a robust ASP.NET Core backend with a web interface in MVC Razor Views and a cross-platform mobile app in .NET MAUI, using MongoDB for flexible geospatial data management.",
      "2_feature0":
        "RESTful API with ASP.NET Core and token-based authentication (JWT)",
      "2_feature1":
        "Responsive web interface with MVC Razor Views, Bootstrap, and server-side validation",
      "2_feature2":
        "Cross-platform mobile app with .NET MAUI for iOS and Android",
      "2_feature3":
        "MongoDB with geospatial indexes (2dsphere) for proximity search",
      "2_feature4":
        "Pet profile management with personalized travel preferences",
      "2_feature5": "Review and rating system for pet-friendly establishments",
      "2_achievement0":
        "Solution to a real unsolved problem in the Peruvian tourism market",
      "2_achievement1":
        "Functional implementation of geospatial queries with MongoDB",
      "2_achievement2":
        "Complete Full Stack architecture with 3 different presentation layers",
      "2_arch":
        "Modular monolithic architecture with ASP.NET Core as the central core.",
      "2_layer0": "API (ASP.NET Core)",
      "2_layer0_detail":
        "REST controllers, authentication middleware, dependency injection",
      "2_layer1": "Web (MVC Razor)",
      "2_layer1_detail": "Compiled Razor views, Tag Helpers, form validation",
      "2_layer2": "Mobile (.NET MAUI)",
      "2_layer2_detail":
        "HTTP client, MVVM, Shell navigation, and platform-specific UI",
      "2_layer3": "Data (MongoDB)",
      "2_layer3_detail":
        "Collections with flexible schemas, geospatial indexes, aggregations",
      "2_impact":
        "First project to address the digital gap in pet-friendly tourism in Peru, with potential for regional expansion.",
      // ── Project 3: MonettelliUIKIT ──
      "3_title": "MonettelliUIKIT",
      "3_subtitle": "Architecture Template — Clean UI",
      "3_description":
        "Multi-project template for iOS, Android, and Windows based on Clean UI Architecture, optimizing maintainability in Xamarin.Forms.",
      "3_status": "Completed",
      "3_projectType": "Open Source Architecture Template",
      "3_role": "Creator and open source project maintainer",
      "3_problemSolved":
        "When starting Xamarin.Forms projects, developers faced repetitive setups, inconsistent folder structure, and messy mixing of styles, controls, and behaviors. No template existed with a clear UI layer architecture.",
      "3_myContribution":
        "I designed and published Clean UI Architecture: a proprietary methodology that separates UI responsibilities into 4 pillars — Themes, Controls, Converters, and Behaviors. Created the complete multi-project template, wrote usage documentation, and maintained the repository as a community reference.",
      "3_fullDescription":
        "Multi-project architectural template designed to accelerate Xamarin.Forms application development (now migrable to .NET MAUI). It implements Clean UI Architecture, a proprietary methodology that separates UI responsibilities into maintainable and reusable layers, allowing developers to start projects with a solid and well-organized foundation.",
      "3_feature0":
        "Complete cross-platform support: iOS, Android, and Windows from a single project",
      "3_feature1":
        "Clean UI Architecture: Themes, Controls, Converters, and Behaviors as separate pillars",
      "3_feature2": "Reusable, extensible, and documented UI components",
      "3_feature3":
        "Ready-to-use project templates with professional structure",
      "3_feature4": "Verified compatibility with .NET MAUI migration",
      "3_feature5":
        "Complete documentation with step-by-step implementation guide",
      "3_achievement0":
        "Open source project adopted by Xamarin community developers",
      "3_achievement1":
        "Clean UI Architecture methodology referenced in technical forums",
      "3_achievement2": "~60% reduction in initial setup time for new projects",
      "3_arch":
        "Proprietary Clean UI Architecture with 4 vertical separation pillars.",
      "3_layer0": "Themes",
      "3_layer0_detail":
        "Global XAML resources, color palettes, typographic styles",
      "3_layer1": "Controls",
      "3_layer1_detail":
        "Custom reusable UI components with bindable properties",
      "3_layer2": "Converters",
      "3_layer2_detail":
        "IValueConverter implementations for data transformations in binding",
      "3_layer3": "Behaviors",
      "3_layer3_detail":
        "Reusable behaviors for validation, animations, and interactions",
      "3_impact":
        "Established an architectural standard for the UI layer in Xamarin.Forms projects, adopted by developers seeking professional structure.",
      // ── Project 4: MauiUX Guide ──
      "4_title": "MauiUX Guide",
      "4_subtitle": "Educational UI/UX Platform — .NET MAUI",
      "4_description":
        "Educational project focused on mastering high-level user interfaces and experiences in .NET MAUI.",
      "4_status": "In Development",
      "4_projectType": "Open Source Educational Project",
      "4_role": "Creator, technical educator, and content author",
      "4_problemSolved":
        "Most .NET MAUI resources focus on functionality, leaving a gap in professional UI/UX. Developers lack specific guides for creating interfaces that compete with native apps designed by professional design teams.",
      "4_myContribution":
        "I'm creating a collection of guides, functional examples, and design patterns that demonstrate how to achieve professional-level UI/UX in .NET MAUI without relying on third-party libraries, using the framework's native capabilities.",
      "4_fullDescription":
        "Educational project focused on raising the UI/UX standard within the .NET MAUI ecosystem. It documents advanced design patterns, reference implementations with fluid animations, and accessibility best practices for creating professional interfaces and memorable user experiences in cross-platform applications.",
      "4_feature0":
        "Detailed UI/UX guides specific to .NET MAUI with functional code",
      "4_feature1":
        "Reference implementations of fluid animations and transitions",
      "4_feature2":
        "Advanced mobile design patterns adapted to the .NET ecosystem",
      "4_feature3":
        "Accessibility and responsive cross-platform design best practices",
      "4_feature4": "Advanced techniques with Handlers and Custom Renderers",
      "4_feature5": "Community Toolkit integration for extended components",
      "4_achievement0":
        "Reference educational resource for the .NET MAUI community",
      "4_achievement1":
        "Promotion of professional quality standards in mobile UI/UX",
      "4_achievement2":
        "Active contribution to the growth of the .NET MAUI ecosystem",
      "4_arch": "Example projects with MVVM, focus on the presentation layer.",
      "4_layer0": "Presentation",
      "4_layer0_detail":
        "Advanced XAML Views with animations, gradients, and complex layouts",
      "4_layer1": "Custom Handlers",
      "4_layer1_detail": "Native per-platform handlers for custom controls",
      "4_layer2": "Community Toolkit",
      "4_layer2_detail":
        "Integration with CommunityToolkit.Maui for extensions",
      "4_layer3": "Accessibility",
      "4_layer3_detail":
        "SemanticProperties, AutomationProperties, and accessibility testing",
      "4_impact":
        "Fills the gap of professional UI/UX resources in the .NET MAUI ecosystem, raising the community's quality standard.",
    },
    blog: {
      overline: "Blog",
      titleHtml: 'Latest <span class="gradient-text">articles</span>',
      description:
        "Technical guides, tutorials, and reflections on .NET MAUI, software architecture, and mobile development.",
      viewAll: "View all articles",
      readArticle: "Read article",
    },
    contact: {
      overline: "Contact",
      titleHtml: 'Shall we <span class="gradient-text">work together</span>?',
      description:
        "I'm available for new projects, collaborations, and opportunities in the .NET ecosystem and mobile development.",
      email: "Email",
      locationLabel: "Location",
      locationValue: "Arequipa, Peru 🇵🇪",
      available: "Available for projects",
      availableDesc:
        "Open to new challenges in .NET development, cross-platform mobile apps, and backend architecture. Let's talk!",
      findMe: "Find me on",
      sendEmail: "Send me an email",
      opensNewTab: "(opens in a new tab)",
    },
    footer: {
      copyright: "All rights reserved.",
      backToTop: "Back to top",
      topLabel: "Top",
      tagline: "Full Stack Developer | .NET & Mobile Specialist",
    },
    maintenance: {
      ariaLabel: "Site under maintenance",
      toggleTheme: "Toggle theme",
      badge: "Under Maintenance",
      titleHtml:
        'My portfolio is<br/><span class="gradient-text">being renovated</span>',
      description:
        'I\'m working on a new version with better experiences and a more refined design. In the meantime, you can visit my blog with articles about <strong style="color: var(--mui-text-secondary);">.NET MAUI</strong> and software development.',
      cta: "Visit my Blog",
      footer: "All rights reserved.",
      langToggle: "English",
      langToggleMobile: "EN",
      langToggleAria: "Switch to Spanish",
    },
  },

  // ═══════════════════════════════════════════
  // SPANISH
  // ═══════════════════════════════════════════
  es: {
    layout: {
      skipLink: "Ir al contenido principal",
      progressBar: "Progreso de lectura",
    },
    navbar: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      navLabel: "Navegación principal",
      toggleTheme: "Cambiar tema",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      goHome: "Ir al inicio",
      langToggle: "Español",
      langToggleMobile: "ES",
      langToggleAria: "Cambiar a inglés",
    },
    hero: {
      greeting: "Hola, soy",
      subtitle: "Full Stack Developer",
      description:
        'Desarrollador con sólida experiencia en el ecosistema <span class="accent-text font-medium">.NET</span> y desarrollo móvil multiplataforma. Nominado <span class="accent-text font-medium">Microsoft MVP</span>. Construyo software ordenado, seguro y profundamente funcional.',
      ctaProjects: "Ver Proyectos",
      ctaContact: "Contactar →",
      scrollLabel: "Scroll",
      scrollAria: "Ir a la sección Sobre Mí",
    },
    about: {
      overline: "Sobre Mí",
      titleHtml: 'Quién soy y <span class="gradient-text">el valor que aporto</span>',
      bio1Html:
        "Como Full Stack Developer, construyo soluciones completas desde el análisis y la arquitectura hasta backend, frontend y mobile. Trabajo con .NET, Spring Boot, Angular, React y desarrollo móvil para convertir procesos complejos en sistemas claros, trazables y mantenibles.",
      bio2Html:
        "Aporto valor uniendo criterio técnico, buenas prácticas de arquitectura, documentación y seguridad aplicada, cuidando que cada solución pueda evolucionar con calidad.",
      identityNote:
        "Uso Daniel Monettelli como nombre profesional. Monettelli es el apellido de mi abuelita y decidí conservarlo como parte de mi identidad en redes, proyectos y comunidad técnica.",
      highlight0:
        "Nominado Microsoft MVP por contribuciones técnicas a la comunidad",
      highlight1:
        "Miembro de Planet Xamarin — comunidad curada de élite en el ecosistema móvil de Microsoft",
      highlight2: "Contribuidor oficial en WeAreDotnet.io",
      highlight3: "Enfoque en orden arquitectónico, simplicidad y soluciones de valor real",
      stat0: "Años de Experiencia",
      stat1: "Proyectos Clave",
      stat2: "Artículos Publicados",
      stat3: "Nominación MVP",
      badge: "Full Stack Developer",
      location: "Arequipa, Perú 🇵🇪",
    },
    skills: {
      overline: "Habilidades Técnicas",
      titleHtml: 'Mi <span class="gradient-text">arsenal tecnológico</span>',
      description:
        "Herramientas y tecnologías que domino para construir soluciones integrales, desde apps móviles hasta arquitecturas backend robustas.",
      tabsAria: "Categorías de habilidades",
      mainStack: "Stack Principal",
      complementary: "Complementario",
      role_mobile: "Móvil",
      role_backend: "Backend",
      role_frontend: "Frontend",
      role_cloud: "Nube",
      role_database: "Base de Datos",
      cat_mobile: "Móvil",
      cat_backend: "Backend",
      cat_frontend: "Frontend",
      cat_databases: "Bases de Datos",
      cat_architecture: "Ingeniería / Arq.",
      cat_cloud: "Cloud / DevOps",
      cat_tools: "Herramientas",
      tag_advanced: "Avanzado",
      tag_intermediate: "Intermedio",
      tag_basic_intermediate: "Básico-Intermedio",
      tag_basic: "Básico",
    },
    experience: {
      overline: "Experiencia",
      titleHtml:
        'Mi <span class="gradient-text">trayectoria profesional</span>',
      "0_period": "Nov 2021 – Presente",
      "0_title": "Desarrollador Full Stack Independiente",
      "0_company": "Freelance / Remoto",
      "0_location": "Arequipa, Perú",
      "0_type": "Tiempo Completo",
      "0_desc0":
        "Desarrollo autónomo de soluciones tecnológicas integrales, construyendo sistemas complejos con .NET, Spring Boot, Angular y React bajo estándares industriales.",
      "0_desc1":
        "Diseño de bases de datos relacionales mediante normalización y modelado de estructuras NoSQL, aplicando principios SOLID bajo metodología RUP.",
      "0_desc2":
        "Gestión del ciclo de vida completo del software en proyectos de alto impacto, demostrando madurez técnica en arquitecturas web, móviles y backend.",
      "1_period": "Feb 2021 – Presente",
      "1_title": "Creador de Contenido & Nominado Microsoft MVP",
      "1_company": "Daniel Monettelli's Blog / WeAreDotnet.io",
      "1_location": "Global",
      "1_type": "Comunidad",
      "1_desc0":
        "Participación como miembro seleccionado y contribuidor oficial en WeAreDotnet.io, impulsando conocimiento en la comunidad global .NET.",
      "1_desc1":
        "Divulgación de guías técnicas sobre arquitectura y .NET MAUI, promoviendo la transparencia en el desarrollo de software.",
      "2_period": "Ene 2019 – Presente",
      "2_title": "Miembro Elite de Comunidad Móvil",
      "2_company": "Planet Xamarin (actualmente .NET MAUI)",
      "2_location": "Global",
      "2_type": "Comunidad",
      "2_desc0":
        "Integro la comunidad curada de desarrolladores con experiencia avanzada en el ecosistema móvil de Microsoft desde sus inicios.",
    },
    projects: {
      overline: "Proyectos",
      titleHtml: 'Lo que he <span class="gradient-text">construido</span>',
      description:
        "Proyectos de ingeniería e innovación que reflejan mi compromiso con el software ordenado, escalable y funcional.",
      viewDetails: "Ver detalles",
      viewDetailsAria: "Ver detalles de",
      closeModal: "Cerrar modal",
      featured: "⭐ Destacado",
      statusPublished: "Publicado",
      statusInDev: "En Desarrollo",
      statusCompleted: "Completado",
      screenshots: "Capturas del Proyecto",
      screenshotsHint: "— Click en una imagen para ampliar",
      overview: "Visión General",
      problemSolved: "El Problema que Resuelve",
      myContribution: "Mi Contribución",
      keyFeatures: "Características Clave",
      impact: "Impacto",
      architecture: "Arquitectura",
      techStack: "Stack Técnico",
      achievements: "Logros Destacados",
      closeExpandedAria: "Cerrar vista ampliada",
      prevImageAria: "Imagen anterior",
      nextImageAria: "Imagen siguiente",
      enlargeAria: "Ampliar:",
      "0_title": "MeowApp",
      "0_subtitle": "Aplicación Open Source — .NET MAUI",
      "0_description":
        "Aplicación móvil publicada en Google Play Store que permite explorar razas de gatos mediante el consumo de APIs externas.",
      "0_status": "Publicado",
      "0_projectType": "Aplicación Móvil Open Source",
      "0_role": "Desarrollador principal y arquitecto de software",
      "0_screenshot0":
        "Pantalla principal — exploración de imágenes aleatorias de gatos",
      "0_screenshot1":
        "Catálogo de razas — navegación y búsqueda de razas felinas",
      "0_screenshot2":
        "Agregar a favoritos — gestión de gatos favoritos del usuario",
      "0_screenshot3": "Lista de favoritos — persistencia offline con SQLite",
      "0_problemSolved":
        "El ecosistema .NET MAUI necesitaba un proyecto de referencia real — publicado en producción — que demostrara cómo construir una app completa con buenas prácticas: Clean Architecture, consumo de APIs REST, persistencia offline y CI/CD automatizado. No un demo, sino un producto real.",
      "0_myContribution":
        "Diseñé y desarrollé la aplicación de principio a fin de forma autónoma: definí la arquitectura de 4 capas, implementé todo el flujo de datos (HTTP → Cache → UI), configuré el pipeline CI/CD con GitHub Actions, y publiqué la app en Google Play Store. Además, documenté todo el proceso en una serie de artículos técnicos en mi blog.",
      "0_fullDescription":
        "MeowApp es una aplicación móvil publicada exitosamente en Google Play Store que demuestra dominio completo del ciclo de vida del desarrollo móvil — desde el diseño arquitectónico hasta el despliegue en producción. La app consume TheCatAPI para ofrecer una experiencia rica de exploración de razas felinas, implementando caché local con SQLite para funcionamiento offline, gestión avanzada de estados y una UI/UX profesional siguiendo las directrices de Material Design adaptadas al ecosistema .NET MAUI.",
      "0_feature0":
        "Consumo profesional de TheCatAPI (REST) con manejo robusto de errores, reintentos y timeout",
      "0_feature1":
        "Caché offline con SQLite para persistencia de datos y experiencia sin conexión",
      "0_feature2":
        "Arquitectura MVVM con Clean Architecture de 4 capas estrictamente separadas",
      "0_feature3":
        "Navegación fluida por pestañas con gestión correcta del ciclo de vida",
      "0_feature4":
        "CI/CD automatizado con GitHub Actions para compilación, testing y despliegue",
      "0_feature5":
        "Serie de artículos técnicos documentando cada decisión de arquitectura y desarrollo",
      "0_achievement0":
        "App publicada y disponible en Google Play Store con usuarios activos",
      "0_achievement1":
        "Proyecto open source referenciado por la comunidad .NET MAUI en GitHub",
      "0_achievement2":
        "Serie completa de blog posts técnicos documentando el proceso",
      "0_achievement3":
        "Demuestra dominio end-to-end: diseño → arquitectura → desarrollo → testing → despliegue",
      "0_arch":
        "Clean Architecture de 4 capas con patrón MVVM estricto, inyección de dependencias y separación absoluta de responsabilidades.",
      "0_layer0": "Domain",
      "0_layer0_detail":
        "Entidades de negocio, interfaces de repositorios y contratos de servicios",
      "0_layer1": "Application",
      "0_layer1_detail":
        "Casos de uso, DTOs, lógica de orquestación y validaciones",
      "0_layer2": "Infrastructure",
      "0_layer2_detail":
        "Implementaciones HTTP (HttpClient), SQLite, servicios de plataforma",
      "0_layer3": "Presentation",
      "0_layer3_detail":
        "Views XAML, ViewModels, Converters, navegación y DI container",
      "0_impact":
        "Referencia técnica para desarrolladores de la comunidad .NET MAUI que necesitan un ejemplo real de cómo llevar una app desde la idea hasta Google Play Store con estándares profesionales.",
      "1_title": "Plataforma SAIP y Apelaciones TTAIP",
      "1_subtitle": "Proyecto de Innovación Académica",
      "1_description":
        "Solución integral para modernizar el derecho al Acceso a la Información Pública, digitalizando el ciclo completo de solicitudes y apelaciones.",
      "1_status": "En Desarrollo",
      "1_projectType": "Plataforma Web + Móvil Gubernamental",
      "1_role": "Desarrollador Full Stack y arquitecto de la solución integral",
      "1_problemSolved":
        "En Perú, el proceso de Acceso a la Información Pública (SAIP) y sus apelaciones ante el TTAIP son procedimientos burocráticos que se gestionan de forma manual, generando demoras, pérdida de documentación y falta de transparencia. No existía una plataforma digital que abarcara el ciclo completo del proceso.",
      "1_myContribution":
        "Lideré el diseño e implementación de toda la solución: modelé los procesos con UML profesional (IBM Rhapsody), diseñé la base de datos normalizada hasta 3FN, construí la API RESTful con Spring Boot, desarrollé el frontend SPA con Angular, y creé la app móvil nativa en Kotlin. Apliqué metodología RUP en todas las fases del desarrollo.",
      "1_fullDescription":
        "Proyecto de innovación académica que digitaliza el derecho constitucional al Acceso a la Información Pública en Perú. Abarca el ciclo completo del proceso SAIP: desde la solicitud ciudadana hasta la resolución de apelaciones ante el TTAIP, con tres módulos interconectados — plataforma web de gestión (Angular), backend RESTful (Spring Boot) y aplicación móvil nativa (Kotlin para Android) — todos integrados sobre una base de datos SQL Server normalizada hasta 3FN.",
      "1_feature0":
        "Backend RESTful robusto con Spring Boot (Java), autenticación segura y manejo de roles",
      "1_feature1":
        "Frontend SPA completo con Angular, diseño responsivo y gestión de estado",
      "1_feature2":
        "Aplicación Android nativa en Kotlin con XML Layouts y Material Design",
      "1_feature3":
        "Base de datos SQL Server normalizada hasta 3FN con integridad referencial completa",
      "1_feature4":
        "Modelado UML profesional con IBM Rhapsody: casos de uso, diagramas de clases y secuencia",
      "1_feature5":
        "Metodología RUP completa: inception, elaboración, construcción y transición",
      "1_achievement0":
        "Digitalización completa de un proceso gubernamental constitucional real",
      "1_achievement1":
        "Integración exitosa de 3 plataformas heterogéneas (web + API + móvil)",
      "1_achievement2":
        "Base de datos normalizada hasta 3FN con 20+ tablas interrelacionadas",
      "1_achievement3":
        "Documentación técnica exhaustiva siguiendo estándar RUP con artefactos de cada fase",
      "1_arch":
        "Arquitectura de servicios con API RESTful central, frontend SPA y módulo móvil nativo.",
      "1_layer0": "Backend (Spring Boot)",
      "1_layer0_detail":
        "API REST, autenticación JWT, lógica de negocio, validación de datos",
      "1_layer1": "Frontend (Angular)",
      "1_layer1_detail":
        "SPA con componentes reutilizables, servicios HTTP, guards de ruta",
      "1_layer2": "Móvil (Kotlin)",
      "1_layer2_detail": "App Android nativa con Retrofit, Room y patrón MVVM",
      "1_layer3": "Base de datos (SQL Server)",
      "1_layer3_detail":
        "Esquema normalizado 3FN, procedimientos almacenados, triggers",
      "1_impact":
        "Solución que moderniza un proceso gubernamental real, beneficiando potencialmente a millones de ciudadanos peruanos en su derecho constitucional de acceso a la información pública.",
      "2_title": "Aloha Patitas",
      "2_subtitle": "Plataforma Turística Pet-Friendly",
      "2_description":
        "Solución pionera para encontrar servicios turísticos pet-friendly. Backend ASP.NET Core, web MVC Razor Views y móvil .NET MAUI.",
      "2_status": "En Desarrollo",
      "2_projectType": "Plataforma Web + Móvil Full Stack",
      "2_role": "Desarrollador Full Stack y diseñador de la solución",
      "2_problemSolved":
        "Los dueños de mascotas en Perú enfrentan una gran dificultad al planificar viajes: no existe una plataforma centralizada para encontrar hoteles, restaurantes y servicios turísticos que acepten mascotas. La información está dispersa y es poco confiable.",
      "2_myContribution":
        "Diseñé la arquitectura completa del sistema y desarrollé los tres módulos: API REST con ASP.NET Core, interfaz web con MVC Razor Views, y app móvil multiplataforma con .NET MAUI. Implementé las consultas geoespaciales en MongoDB para búsqueda por proximidad de establecimientos.",
      "2_fullDescription":
        "Plataforma pionera que resuelve un problema real del mercado turístico peruano: la dificultad de encontrar establecimientos y servicios que acepten mascotas. Combina un backend robusto en ASP.NET Core con una interfaz web en MVC Razor Views y una aplicación móvil multiplataforma en .NET MAUI, utilizando MongoDB para la gestión flexible de datos geoespaciales.",
      "2_feature0":
        "API RESTful con ASP.NET Core y autenticación basada en tokens (JWT)",
      "2_feature1":
        "Interfaz web responsiva con MVC Razor Views, Bootstrap y validación server-side",
      "2_feature2":
        "App móvil multiplataforma con .NET MAUI para iOS y Android",
      "2_feature3":
        "MongoDB con índices geoespaciales (2dsphere) para búsqueda por proximidad",
      "2_feature4":
        "Gestión de perfiles de mascotas con preferencias de viaje personalizadas",
      "2_feature5":
        "Sistema de reseñas y calificaciones de establecimientos pet-friendly",
      "2_achievement0":
        "Solución a un problema real no resuelto en el mercado turístico peruano",
      "2_achievement1":
        "Implementación funcional de consultas geoespaciales con MongoDB",
      "2_achievement2":
        "Arquitectura Full Stack completa con 3 capas de presentación distintas",
      "2_arch":
        "Arquitectura monolítica modular con ASP.NET Core como núcleo central.",
      "2_layer0": "API (ASP.NET Core)",
      "2_layer0_detail":
        "Controladores REST, middleware de autenticación, inyección de dependencias",
      "2_layer1": "Web (MVC Razor)",
      "2_layer1_detail":
        "Vistas Razor compiladas, Tag Helpers, validación de formularios",
      "2_layer2": "Móvil (.NET MAUI)",
      "2_layer2_detail":
        "Client HTTP, MVVM, navegación Shell y UI platform-specific",
      "2_layer3": "Datos (MongoDB)",
      "2_layer3_detail":
        "Colecciones con esquemas flexibles, índices geoespaciales, agregaciones",
      "2_impact":
        "Primer proyecto en abordar la brecha digital del turismo pet-friendly en Perú, con potencial de expansión a nivel regional.",
      "3_title": "MonettelliUIKIT",
      "3_subtitle": "Plantilla de Arquitectura — Clean UI",
      "3_description":
        "Plantilla multiproyecto para iOS, Android y Windows basada en Clean UI Architecture, optimizando la mantenibilidad en Xamarin.Forms.",
      "3_status": "Completado",
      "3_projectType": "Plantilla Arquitectónica Open Source",
      "3_role": "Creador y mantenedor del proyecto open source",
      "3_problemSolved":
        "Al iniciar proyectos Xamarin.Forms, los desarrolladores enfrentaban configuraciones repetitivas, estructura de carpetas inconsistente y mezcla desordenada de estilos, controles y comportamientos. No existía una plantilla con arquitectura clara para la capa de UI.",
      "3_myContribution":
        "Diseñé y publiqué Clean UI Architecture: una metodología propia que separa las responsabilidades de UI en 4 pilares — Themes, Controls, Converters y Behaviors. Creé la plantilla multiproyecto completa, escribí la documentación de uso y mantuve el repositorio como referencia comunitaria.",
      "3_fullDescription":
        "Plantilla arquitectónica multiproyecto diseñada para acelerar el desarrollo de aplicaciones Xamarin.Forms (ahora migrable a .NET MAUI). Implementa Clean UI Architecture, una metodología propia que separa las responsabilidades de UI en capas mantenibles y reutilizables, permitiendo a los desarrolladores iniciar proyectos con una base sólida y bien organizada.",
      "3_feature0":
        "Soporte multiplataforma completo: iOS, Android y Windows desde un solo proyecto",
      "3_feature1":
        "Clean UI Architecture: Themes, Controls, Converters y Behaviors como pilares separados",
      "3_feature2": "Componentes UI reutilizables, extensibles y documentados",
      "3_feature3":
        "Templates de proyecto listos para usar con estructura profesional",
      "3_feature4": "Compatibilidad verificada con migración a .NET MAUI",
      "3_feature5":
        "Documentación completa con guía de implementación paso a paso",
      "3_achievement0":
        "Proyecto open source adoptado por desarrolladores de la comunidad Xamarin",
      "3_achievement1":
        "Metodología Clean UI Architecture referenciada en foros técnicos",
      "3_achievement2":
        "Reducción de ~60% del tiempo de configuración inicial en nuevos proyectos",
      "3_arch":
        "Clean UI Architecture propia con 4 pilares verticales de separación.",
      "3_layer0": "Themes",
      "3_layer0_detail":
        "Recursos XAML globales, paletas de color, estilos tipográficos",
      "3_layer1": "Controls",
      "3_layer1_detail":
        "Componentes UI customizados y reutilizables con bindable properties",
      "3_layer2": "Converters",
      "3_layer2_detail":
        "IValueConverter implementations para transformaciones de datos en binding",
      "3_layer3": "Behaviors",
      "3_layer3_detail":
        "Comportamientos reutilizables para validación, animaciones e interacciones",
      "3_impact":
        "Estableció un estándar arquitectónico para la capa de UI en proyectos Xamarin.Forms, adoptado por desarrolladores que buscaban estructura profesional.",
      "4_title": "MauiUX Guide",
      "4_subtitle": "Plataforma Educativa UI/UX — .NET MAUI",
      "4_description":
        "Proyecto educativo enfocado en dominar interfaces y experiencias de usuario de alto nivel en .NET MAUI.",
      "4_status": "En Desarrollo",
      "4_projectType": "Proyecto Educativo Open Source",
      "4_role": "Creador, educador técnico y autor de contenido",
      "4_problemSolved":
        "La mayoría de recursos de .NET MAUI se centran en funcionalidad, dejando un vacío en UI/UX profesional. Los desarrolladores carecen de guías específicas para crear interfaces que compitan con apps nativas diseñadas por equipos de diseño profesional.",
      "4_myContribution":
        "Estoy creando una colección de guías, ejemplos funcionales y patrones de diseño que demuestran cómo lograr UI/UX de nivel profesional en .NET MAUI sin depender de librerías de terceros, usando capacidades nativas del framework.",
      "4_fullDescription":
        "Proyecto educativo enfocado en elevar el estándar de UI/UX dentro del ecosistema .NET MAUI. Documenta patrones de diseño avanzados, implementaciones de referencia con animaciones fluidas, y mejores prácticas de accesibilidad para crear interfaces profesionales y experiencias de usuario memorables en aplicaciones multiplataforma.",
      "4_feature0":
        "Guías detalladas de UI/UX específicas para .NET MAUI con código funcional",
      "4_feature1":
        "Implementaciones de referencia de animaciones fluidas y transiciones",
      "4_feature2":
        "Patrones avanzados de diseño móvil adaptados al ecosistema .NET",
      "4_feature3":
        "Mejores prácticas de accesibilidad y diseño responsivo multiplataforma",
      "4_feature4": "Técnicas avanzadas con Handlers y Custom Renderers",
      "4_feature5":
        "Integración con Community Toolkit para componentes extendidos",
      "4_achievement0":
        "Recurso educativo de referencia para la comunidad .NET MAUI",
      "4_achievement1":
        "Promoción del estándar de calidad profesional en UI/UX móvil",
      "4_achievement2":
        "Contribución activa al crecimiento del ecosistema .NET MAUI",
      "4_arch":
        "Proyectos de ejemplo con MVVM, enfoque en la capa de presentación.",
      "4_layer0": "Presentation",
      "4_layer0_detail":
        "Views XAML avanzadas con animaciones, gradientes y layouts complejos",
      "4_layer1": "Custom Handlers",
      "4_layer1_detail":
        "Handlers nativos por plataforma para controles personalizados",
      "4_layer2": "Community Toolkit",
      "4_layer2_detail":
        "Integración con CommunityToolkit.Maui para extensiones",
      "4_layer3": "Accessibility",
      "4_layer3_detail":
        "SemanticProperties, AutomationProperties y testing de accesibilidad",
      "4_impact":
        "Llena el vacío de recursos de UI/UX profesional en el ecosistema .NET MAUI, elevando el estándar de calidad de la comunidad.",
    },
    blog: {
      overline: "Blog",
      titleHtml: 'Últimos <span class="gradient-text">artículos</span>',
      description:
        "Guías técnicas, tutoriales y reflexiones sobre .NET MAUI, arquitectura de software y desarrollo móvil.",
      viewAll: "Ver todos los artículos",
      readArticle: "Leer artículo",
    },
    contact: {
      overline: "Contacto",
      titleHtml: '¿<span class="gradient-text">Trabajamos juntos</span>?',
      description:
        "Estoy disponible para nuevos proyectos, colaboraciones y oportunidades en el ecosistema .NET y desarrollo móvil.",
      email: "Email",
      locationLabel: "Ubicación",
      locationValue: "Arequipa, Perú 🇵🇪",
      available: "Disponible para proyectos",
      availableDesc:
        "Abierto a nuevos desafíos en desarrollo .NET, apps móviles multiplataforma, y arquitectura de backend. ¡Conversemos!",
      findMe: "Encuéntrame en",
      sendEmail: "Envíame un correo",
      opensNewTab: "(se abre en nueva pestaña)",
    },
    footer: {
      copyright: "Todos los derechos reservados.",
      backToTop: "Volver arriba",
      topLabel: "Inicio",
      tagline: "Full Stack Developer | .NET & Mobile Specialist",
    },
    maintenance: {
      ariaLabel: "Sitio en mantenimiento",
      toggleTheme: "Cambiar tema",
      badge: "En Mantenimiento",
      titleHtml:
        'Mi portafolio está<br/><span class="gradient-text">siendo renovado</span>',
      description:
        'Estoy trabajando en una nueva versión con mejores experiencias y un diseño más refinado. Mientras tanto, puedes visitar mi blog con artículos sobre <strong style="color: var(--mui-text-secondary);">.NET MAUI</strong> y desarrollo de software.',
      cta: "Visitar mi Blog",
      footer: "Todos los derechos reservados.",
      langToggle: "Español",
      langToggleMobile: "ES",
      langToggleAria: "Cambiar a inglés",
    },
  },
};
