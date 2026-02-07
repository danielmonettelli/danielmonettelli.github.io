<p align="center">
  <a href="https://danielmonettelli.github.io/" target="_blank">
    <img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/refs/heads/main/blog/assets/images/Daniel_Monettelli.png" alt="Daniel Monettelli" height="140" width="140" style="border-radius: 50%;" />
  </a>
</p>

<h1 align="center">danielmonettelli.github.io</h1>

<p align="center">
  Professional portfolio and technical blog by <strong>Daniel Monettelli</strong> — Full Stack Developer specialized in .NET and cross-platform mobile development.
</p>

<p align="center">
  <a href="README.es.md">
    <img src="https://img.shields.io/badge/🇪🇸-Leer%20en%20Español-red?style=for-the-badge" alt="Leer en Español" />
  </a>
</p>

<p align="center">
  <a href="https://danielmonettelli.github.io/">
    <img src="https://img.shields.io/badge/Portfolio-danielmonettelli.github.io-0969da?style=flat-square" alt="Portfolio" />
  </a>
  <a href="https://danielmonettelli.github.io/blog/">
    <img src="https://img.shields.io/badge/Blog-.NET%20MAUI%20%26%20more-0969da?style=flat-square" alt="Blog" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/Code-MIT-blue?style=flat-square" alt="MIT License" />
  </a>
  <img src="https://img.shields.io/badge/Status-In%20Development-orange?style=flat-square" alt="In Development" />
</p>

---

> **⚠️ This portfolio is currently under active development.** Some features may change or be added before the stable release.

## About this repository

This repository hosts **two sites** deployed on GitHub Pages under a single domain:

| Path     | Description                                                                                  | Stack                                    |
| -------- | -------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `/`      | **Portfolio** — Sections: Hero, About, Skills, Experience, Projects, Blog Preview, Contact   | Astro 5, Tailwind CSS v4, GSAP, anime.js |
| `/blog/` | **Technical blog** — Articles about .NET MAUI, software architecture, and mobile development | Jekyll + Chirpy Theme                    |

## Tech Stack

### Portfolio (root `/`)

| Layer         | Technology                                                                  |
| ------------- | --------------------------------------------------------------------------- |
| Framework     | Astro 5 (static output)                                                     |
| Styles        | Tailwind CSS v4 (CSS-first, `@tailwindcss/vite`)                            |
| Animations    | GSAP 3 + ScrollTrigger, anime.js                                            |
| Design System | Tokens extracted from MUI brandingTheme (dark/light)                        |
| Typography    | General Sans (headings), IBM Plex Sans (body)                               |
| i18n          | Client-side EN/ES toggle with `data-i18n` attributes                        |
| Accessibility | WCAG 2.2 — skip link, ARIA landmarks, focus-visible, prefers-reduced-motion |

### Blog (`/blog/`)

Full blog documentation, published articles, and configuration can be found in [`blog/README.md`](blog/README.md).

## Local Development

```bash
# Portfolio (Astro)
npm install
npm run dev            # http://localhost:4321

# Blog (Jekyll)
cd blog
bundle install
bundle exec jekyll serve --livereload --baseurl /blog   # http://localhost:4000/blog/
```

## Deploy

A single GitHub Actions workflow (`.github/workflows/website.yml`) handles:

1. Generate blog data for the portfolio (`scripts/generate-blog-data.mjs`)
2. Build Astro → `dist/`
3. Build Jekyll → `blog/_site/`
4. Merge into `deploy/` (portfolio at root, blog at `/blog/`)
5. Deploy to GitHub Pages

Google AdSense is injected **exclusively in the blog** — the portfolio shows no ads.

## Repository Structure

```
├── src/                 # Portfolio (Astro)
│   ├── components/      # Hero, About, Skills, Experience, Projects, etc.
│   ├── i18n/            # Translations (EN/ES) & i18n engine
│   ├── layouts/         # Main layout
│   ├── pages/           # index.astro
│   ├── scripts/         # GSAP animations
│   └── styles/          # Design system (global.css)
├── blog/                # Blog (Jekyll + Chirpy)
│   ├── _posts/          # Markdown articles
│   └── README.md        # Blog documentation
├── scripts/             # Blog → portfolio data generator
└── .github/workflows/   # CI/CD
```

## Licenses

- **Blog articles** — [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
- **Source code** — [MIT](LICENSE)

## Contact

<p>
  <a href="https://github.com/danielmonettelli">
    <img src="https://img.shields.io/badge/GitHub-danielmonettelli-181717?style=flat-square&logo=github" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/danielmonettelli">
    <img src="https://img.shields.io/badge/LinkedIn-danielmonettelli-0A66C2?style=flat-square&logo=linkedin" alt="LinkedIn" />
  </a>
  <a href="https://twitter.com/DaniMonettelli">
    <img src="https://img.shields.io/badge/X-@DaniMonettelli-000?style=flat-square&logo=x" alt="X / Twitter" />
  </a>
  <a href="mailto:danielmonetelli@hotmail.com">
    <img src="https://img.shields.io/badge/Email-danielmonetelli@hotmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>
