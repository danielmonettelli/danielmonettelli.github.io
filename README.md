<p align="center">
  <a href="https://danielmonettelli.github.io/" target="_blank">
    <img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/refs/heads/main/blog/assets/images/Daniel_Monettelli.png" alt="Daniel Monettelli" height="140" width="140" style="border-radius: 50%;" />
  </a>
</p>

<h1 align="center">Daniel Monettelli — Portfolio & Technical Blog</h1>

<p align="center">
  <strong>Full Stack Developer</strong> specialized in <strong>Java (Spring Boot)</strong>, <strong>Angular</strong>, and <strong>Mobile Development</strong> (Kotlin Multiplatform & Native Android).
</p>

<p align="center">
  <a href="README.es.md">
    <img src="https://img.shields.io/badge/🇪🇸-Leer%20en%20Español-red?style=for-the-badge" alt="Leer en Español" />
  </a>
</p>

<p align="center">
  <a href="https://danielmonettelli.github.io/">
    <img src="https://img.shields.io/badge/Portfolio-danielmonettelli.github.io-0969da?style=flat-square&logo=astro&logoColor=white" alt="Portfolio" />
  </a>
  <a href="https://danielmonettelli.github.io/blog/">
    <img src="https://img.shields.io/badge/Blog-Chirpy%20v7.6.0-red?style=flat-square&logo=jekyll&logoColor=white" alt="Blog" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/Code-MIT-blue?style=flat-square" alt="MIT License" />
  </a>
  <img src="https://img.shields.io/badge/Astro-v7.2.0-purple?style=flat-square&logo=astro&logoColor=white" alt="Astro Version" />
</p>

---

## ⚡ Core Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openapi-initiative&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Kotlin_Multiplatform-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin Multiplatform" />
  <img src="https://img.shields.io/badge/Jetpack_Compose-4285F4?style=for-the-badge&logo=android&logoColor=white" alt="Jetpack Compose" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" alt="Azure" />
</p>

- **Backend:** Java, Spring Boot, Spring Security, RESTful APIs, Microservices Architecture, JPA/Hibernate.
- **Frontend:** Angular, TypeScript, HTML5, CSS3, Modern Responsive UI Design.
- **Mobile Development:** Kotlin Multiplatform (KMP) for cross-platform solutions (iOS/Android/Desktop) & Jetpack Compose for Native Android.
- **Database & Cloud:** PostgreSQL, SQL Server, Docker, Azure Cloud Services, Git & CI/CD Pipelines.

---

## 🌐 Dual-Site Architecture

This repository hosts **two integrated applications** deployed on GitHub Pages under a single domain:

| Path | Site | Purpose & Specialization | Tech Stack |
| :--- | :--- | :--- | :--- |
| **`/`** | **Portfolio** | Single-page developer showcase featuring Hero, About, Tech Arsenal, Career Experience, Projects, Blog Previews, and Contact section. | Astro 7.2, Tailwind CSS v4, GSAP 3, anime.js |
| **`/blog/`** | **Technical Blog** | Technical articles, engineering insights, software architecture guides, and mobile development tutorials. | Jekyll + Chirpy Theme v7.6.0 |

---

## 🛠️ Local Development Setup

### 1. Portfolio (Astro 7.2)

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Open http://localhost:4321 in your browser
```

### 2. Technical Blog (Jekyll Chirpy)

```bash
# Navigate to blog directory
cd blog

# Install Ruby gems
bundle install

# Start Jekyll server with livereload
bundle exec jekyll serve --livereload --baseurl /blog

# Open http://localhost:4000/blog/ in your browser
```

---

## 🚀 CI/CD & Automated Deployment

An automated GitHub Actions workflow (`.github/workflows/website.yml`) builds and deploys the unified site:

1. **Blog Data Sync:** Executes `scripts/generate-blog-data.mjs` to extract post metadata into `src/data/blog-posts.json` for live portfolio previews.
2. **Astro Build:** Compiles the portfolio into high-performance static pages in `dist/`.
3. **Jekyll Build:** Compiles the blog into static assets in `blog/_site/`.
4. **Site Merger:** Merges root portfolio and `/blog/` paths into a unified `deploy/` distribution package.
5. **Google AdSense:** Injected **exclusively in the technical blog** (`/blog/`) — the main portfolio remains 100% ad-free.
6. **GitHub Pages Deploy:** Deploys artifact to edge CDN servers.

---

## 📂 Repository Structure

```
danielmonettelli.github.io/
├── src/                 # Portfolio (Astro 5 / 7)
│   ├── components/      # Hero, About, Skills, Experience, Projects, Contact, etc.
│   ├── data/            # Static JSON & generated blog data
│   ├── i18n/            # Internationalization (EN/ES) engine
│   ├── layouts/         # Base HTML & metadata layouts
│   ├── pages/           # index.astro (Single Page App entry)
│   ├── scripts/         # GSAP ScrollTrigger & anime.js logic
│   └── styles/          # Global styles & MUI design system tokens
├── blog/                # Technical Blog (Jekyll + Chirpy 7.6.0)
│   ├── _posts/          # Markdown blog articles
│   ├── assets/          # Blog images and assets
│   └── README.md        # Blog documentation
├── scripts/             # Build utilities & blog data parser
└── .github/workflows/   # CI/CD GitHub Actions workflow
```

---

## 📄 Licenses

- **Blog Articles & Content:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
- **Source Code:** [MIT License](LICENSE)

---

## 📬 Connect with Me

<p align="left">
  <a href="https://github.com/danielmonettelli">
    <img src="https://img.shields.io/badge/GitHub-danielmonettelli-181717?style=flat-square&logo=github" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/danielmonettelli">
    <img src="https://img.shields.io/badge/LinkedIn-danielmonettelli-0A66C2?style=flat-square&logo=linkedin" alt="LinkedIn" />
  </a>
  <a href="https://twitter.com/DaniMonettelli">
    <img src="https://img.shields.io/badge/X-@DaniMonettelli-000000?style=flat-square&logo=x" alt="X / Twitter" />
  </a>
  <a href="mailto:danielmonetelli@hotmail.com">
    <img src="https://img.shields.io/badge/Email-danielmonetelli@hotmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>
