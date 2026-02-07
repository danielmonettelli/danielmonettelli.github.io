<p align="center">
  <a href="https://danielmonettelli.github.io/blog/" target="_blank">
    <img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/main/blog/assets/images/brand/logo_brand_blog_of_daniel_monettelli.png" alt="Blog de Daniel Monettelli" height="120" width="120" />
  </a>
</p>

<h1 align="center">Blog de Daniel Monettelli</h1>

<p align="center">
  <a href="README.md">
    <img src="https://img.shields.io/badge/🇺🇸-Read%20in%20English-blue?style=for-the-badge" alt="Read in English" />
  </a>
</p>

<p align="center">
  <a href="https://danielmonettelli.github.io/blog/">
    <img src="https://img.shields.io/badge/Live-danielmonettelli.github.io/blog-0969da?style=flat-square" alt="Sitio en vivo" />
  </a>
  <a href="https://creativecommons.org/licenses/by/4.0/">
    <img src="https://img.shields.io/badge/Artículos-CC%20BY%204.0-lightgrey?style=flat-square" alt="CC BY 4.0" />
  </a>
  <a href="../LICENSE">
    <img src="https://img.shields.io/badge/Código-MIT-blue?style=flat-square" alt="Licencia MIT" />
  </a>
</p>

---

## Stack

| Capa         | Tecnología                                                 |
| ------------ | ---------------------------------------------------------- |
| Generador    | [Jekyll](https://jekyllrb.com/)                            |
| Tema         | [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) |
| Monetización | Google AdSense (solo en el blog)                           |
| Deploy       | GitHub Pages via GitHub Actions                            |

## Artículos Publicados

| Fecha    | Artículo                                                | Tema                 |
| -------- | ------------------------------------------------------- | -------------------- |
| Jul 2025 | MeowApp — The Art of Connecting with TheCatAPI (Part 1) | .NET MAUI, REST API  |
| Jul 2024 | Rantiy — Mobile App with .NET MAUI (Part 1)             | .NET MAUI            |
| Jul 2023 | .NET MAUI Challenge — PlanetAnaka (Part 1)              | .NET MAUI, UI/UX     |
| Mar 2023 | Building a ChatGPT in .NET MAUI (Part 2)                | .NET MAUI, OpenAI    |
| Feb 2023 | Building a ChatGPT in .NET MAUI (Part 1)                | .NET MAUI, OpenAI    |
| Dic 2022 | Migrating Mitawi to .NET MAUI                           | Migración, .NET MAUI |
| Ago 2022 | Xamarin.Forms UI/UX — Mitawi Weather                    | Xamarin.Forms, UI/UX |
| May 2021 | Xamarin.Forms UI/UX — Micuna Food (Part 3)              | Xamarin.Forms, UI/UX |
| Mar 2021 | Xamarin.Forms UI/UX — Micuna Food (Part 2)              | Xamarin.Forms, UI/UX |
| Feb 2021 | Xamarin.Forms UI/UX — Micuna Food (Part 1)              | Xamarin.Forms, UI/UX |

## Desarrollo Local

```bash
cd blog
bundle install
bundle exec jekyll serve --livereload --baseurl /blog
```

El blog estará disponible en `http://localhost:4000/blog/`.

## Estructura

```
blog/
├── _config.yml          # Configuración de Jekyll + Chirpy
├── _posts/              # Artículos en Markdown (YYYY-MM-DD-slug.md)
├── _data/               # Autores, contacto, locales
├── _includes/           # Head personalizado, optimizaciones
├── _plugins/            # AdSense injector, last-modified hook
├── _tabs/               # Páginas: About, Archives, Categories, Tags
└── assets/              # Imágenes, CSS, JS, favicons
```

## Licencias

- **Artículos del blog** — [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
- **Código fuente** — [MIT](../LICENSE)

## Agradecimientos

Construido sobre [Jekyll Theme Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) por [Cotes Chung](https://github.com/cotes2020).
