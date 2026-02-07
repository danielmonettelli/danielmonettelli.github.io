<p align="center">
  <a href="https://danielmonettelli.github.io/" target="_blank">
    <img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/refs/heads/main/blog/assets/images/Daniel_Monettelli.png" alt="Daniel Monettelli" height="140" width="140" style="border-radius: 50%;" />
  </a>
</p>

<h1 align="center">danielmonettelli.github.io</h1>

<p align="center">
  Portafolio profesional y blog técnico de <strong>Daniel Monettelli</strong> — Desarrollador Full Stack especializado en .NET y desarrollo móvil multiplataforma.
</p>

<p align="center">
  <a href="README.md">
    <img src="https://img.shields.io/badge/🇺🇸-Read%20in%20English-blue?style=for-the-badge" alt="Read in English" />
  </a>
</p>

<p align="center">
  <a href="https://danielmonettelli.github.io/">
    <img src="https://img.shields.io/badge/Portfolio-danielmonettelli.github.io-0969da?style=flat-square" alt="Portfolio" />
  </a>
  <a href="https://danielmonettelli.github.io/blog/">
    <img src="https://img.shields.io/badge/Blog-.NET%20MAUI%20%26%20más-0969da?style=flat-square" alt="Blog" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/Código-MIT-blue?style=flat-square" alt="Licencia MIT" />
  </a>
  <img src="https://img.shields.io/badge/Estado-En%20Desarrollo-orange?style=flat-square" alt="En Desarrollo" />
</p>

---

> **⚠️ Este portafolio se encuentra actualmente en desarrollo activo.** Algunas funcionalidades pueden cambiar o agregarse antes del lanzamiento estable.

## Sobre este repositorio

Este repositorio aloja **dos sitios** desplegados en GitHub Pages bajo un mismo dominio:

| Ruta     | Descripción                                                                                            | Stack                                    |
| -------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| `/`      | **Portfolio** — Secciones: Hero, Sobre Mí, Habilidades, Experiencia, Proyectos, Blog Preview, Contacto | Astro 5, Tailwind CSS v4, GSAP, anime.js |
| `/blog/` | **Blog técnico** — Artículos sobre .NET MAUI, arquitectura de software y desarrollo móvil              | Jekyll + Chirpy Theme                    |

## Stack Técnico

### Portfolio (raíz `/`)

| Capa          | Tecnología                                                                  |
| ------------- | --------------------------------------------------------------------------- |
| Framework     | Astro 5 (static output)                                                     |
| Estilos       | Tailwind CSS v4 (CSS-first, `@tailwindcss/vite`)                            |
| Animaciones   | GSAP 3 + ScrollTrigger, anime.js                                            |
| Design System | Tokens extraídos de MUI brandingTheme (dark/light)                          |
| Tipografía    | General Sans (headings), IBM Plex Sans (body)                               |
| i18n          | Toggle EN/ES del lado del cliente con atributos `data-i18n`                 |
| Accesibilidad | WCAG 2.2 — skip link, ARIA landmarks, focus-visible, prefers-reduced-motion |

### Blog (`/blog/`)

Toda la documentación del blog, artículos publicados y configuración se encuentra en [`blog/README.es.md`](blog/README.es.md).

## Desarrollo Local

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

Un solo workflow de GitHub Actions (`.github/workflows/website.yml`) se encarga de:

1. Generar datos del blog para el portfolio (`scripts/generate-blog-data.mjs`)
2. Build Astro → `dist/`
3. Build Jekyll → `blog/_site/`
4. Merge en `deploy/` (portfolio en raíz, blog en `/blog/`)
5. Deploy a GitHub Pages

Google AdSense se inyecta **exclusivamente en el blog** — el portfolio no muestra publicidad.

## Estructura del Repositorio

```
├── src/                 # Portfolio (Astro)
│   ├── components/      # Hero, About, Skills, Experience, Projects, etc.
│   ├── i18n/            # Traducciones (EN/ES) y motor i18n
│   ├── layouts/         # Layout principal
│   ├── pages/           # index.astro
│   ├── scripts/         # Animaciones GSAP
│   └── styles/          # Design system (global.css)
├── blog/                # Blog (Jekyll + Chirpy)
│   ├── _posts/          # Artículos Markdown
│   └── README.md        # Documentación del blog
├── scripts/             # Generador de datos blog → portfolio
└── .github/workflows/   # CI/CD
```

## Licencias

- **Artículos del blog** — [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
- **Código fuente** — [MIT](LICENSE)

## Contacto

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
