<p align="center">
  <a href="https://danielmonettelli.github.io/" target="_blank">
    <img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/refs/heads/main/blog/assets/images/Daniel_Monettelli.png" alt="Daniel Monettelli" height="140" width="140" style="border-radius: 50%;" />
  </a>
</p>

<h1 align="center">Daniel Monettelli — Portafolio & Blog Técnico</h1>

<p align="center">
  <strong>Desarrollador Full Stack</strong> especializado en <strong>Java (Spring Boot)</strong>, <strong>Angular</strong> y <strong>Desarrollo Móvil</strong> (Kotlin Multiplatform & Android Nativo).
</p>

<p align="center">
  <a href="README.md">
    <img src="https://img.shields.io/badge/🇺🇸-Read%20in%20English-blue?style=for-the-badge" alt="Read in English" />
  </a>
</p>

<p align="center">
  <a href="https://danielmonettelli.github.io/">
    <img src="https://img.shields.io/badge/Portafolio-danielmonettelli.github.io-0969da?style=flat-square&logo=astro&logoColor=white" alt="Portafolio" />
  </a>
  <a href="https://danielmonettelli.github.io/blog/">
    <img src="https://img.shields.io/badge/Blog-Chirpy%20v7.6.0-red?style=flat-square&logo=jekyll&logoColor=white" alt="Blog" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/Código-MIT-blue?style=flat-square" alt="Licencia MIT" />
  </a>
  <img src="https://img.shields.io/badge/Astro-v7.2.0-purple?style=flat-square&logo=astro&logoColor=white" alt="Versión Astro" />
</p>

---

## ⚡ Stack Técnico Principal

<p align="center">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openapi-initiative&logoColor=white" alt="Java" />
  <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/Kotlin_Multiplatform-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" alt="Kotlin Multiplatform" />
  <img src="https://img.shields.io/badge/Jetpack_Compose-4285F4?style=for-the-badge&logo=android&logoColor=white" alt="Jetpack Compose" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" alt="Azure" />
</p>

- **Backend:** Java, Spring Boot, Spring Security, APIs RESTful, Arquitectura de Microservicios, JPA/Hibernate.
- **Frontend:** Angular, TypeScript, HTML5, CSS3, Diseño UI Responsivo Moderno.
- **Desarrollo Móvil:** Kotlin Multiplatform (KMP) para soluciones multiplataforma (iOS/Android/Desktop) & Jetpack Compose para Android Nativo.
- **Bases de Datos & Nube:** PostgreSQL, SQL Server, Docker, Servicios en la Nube de Azure, Git & Pipelines CI/CD.

---

## 🌐 Arquitectura de Sitios Integrados

Este repositorio aloja **dos aplicaciones integradas** desplegadas en GitHub Pages bajo un mismo dominio:

| Ruta | Sitio | Propósito & Especialización | Stack Técnico |
| :--- | :--- | :--- | :--- |
| **`/`** | **Portafolio** | Aplicación single-page que presenta la sección Hero, Sobre Mí, Arsenal Tecnológico, Experiencia Profesional, Proyectos, Previsualización del Blog y Contacto. | Astro 7.2, Tailwind CSS v4, GSAP 3, anime.js |
| **`/blog/`** | **Blog Técnico** | Artículos técnicos, reflexiones de ingeniería, guías de arquitectura de software y tutoriales de desarrollo móvil. | Jekyll + Tema Chirpy v7.6.0 |

---

## 🛠️ Configuración de Desarrollo Local

### 1. Portafolio (Astro 7.2)

```bash
# Instalar dependencias
npm install

# Iniciar servidor local de desarrollo
npm run dev

# Abrir http://localhost:4321 en tu navegador
```

### 2. Blog Técnico (Jekyll Chirpy)

```bash
# Navegar al directorio del blog
cd blog

# Instalar gemas de Ruby
bundle install

# Iniciar servidor Jekyll con recarga en vivo
bundle exec jekyll serve --livereload --baseurl /blog

# Abrir http://localhost:4000/blog/ en tu navegador
```

---

## 🚀 CI/CD & Despliegue Automatizado

Un workflow automatizado de GitHub Actions (`.github/workflows/website.yml`) construye y despliega el sitio unificado:

1. **Sincronización del Blog:** Ejecuta `scripts/generate-blog-data.mjs` para extraer la metadata de las publicaciones en `src/data/blog-posts.json` para previsualizaciones en vivo en el portafolio.
2. **Build de Astro:** Compila el portafolio en páginas estáticas de alto rendimiento en `dist/`.
3. **Build de Jekyll:** Compila el blog en recursos estáticos en `blog/_site/`.
4. **Fusión de Sitios:** Fusiona el portafolio raíz y la ruta `/blog/` en un paquete de distribución unificado `deploy/`.
5. **Google AdSense:** Inyectado **exclusivamente en el blog técnico** (`/blog/`) — el portafolio principal permanece 100% libre de anuncios.
6. **Despliegue en GitHub Pages:** Despliega el artefacto en los servidores CDN globales.

---

## 📂 Estructura del Repositorio

```
danielmonettelli.github.io/
├── src/                 # Portafolio (Astro 5 / 7)
│   ├── components/      # Hero, About, Skills, Experience, Projects, Contact, etc.
│   ├── data/            # JSON estáticos y datos generados del blog
│   ├── i18n/            # Motor de internacionalización (EN/ES)
│   ├── layouts/         # Layouts HTML base y metadatos
│   ├── pages/           # index.astro (Punto de entrada Single Page App)
│   ├── scripts/         # Lógica de animaciones con GSAP ScrollTrigger & anime.js
│   └── styles/          # Estilos globales y tokens del design system MUI
├── blog/                # Blog Técnico (Jekyll + Chirpy 7.6.0)
│   ├── _posts/          # Artículos de blog en Markdown
│   ├── assets/          # Imágenes y recursos del blog
│   └── README.md        # Documentación del blog
├── scripts/             # Utilidades de build y parser de datos del blog
└── .github/workflows/   # Workflow de CI/CD para GitHub Actions
```

---

## 📄 Licencias

- **Artículos & Contenido del Blog:** [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
- **Código Fuente:** [Licencia MIT](LICENSE)

---

## 📬 Contacto Profesional

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
