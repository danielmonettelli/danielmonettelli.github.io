<p align="center">
  <a href="https://danielmonettelli.github.io/blog/" target="_blank">
    <img src="https://raw.githubusercontent.com/danielmonettelli/danielmonettelli.github.io/main/blog/assets/images/brand/logo_brand_blog_of_daniel_monettelli.png" alt="Daniel Monettelli's Blog" height="120" width="120" />
  </a>
</p>

<h1 align="center">Daniel Monettelli's Blog</h1>

<p align="center">
  <a href="README.es.md">
    <img src="https://img.shields.io/badge/🇪🇸-Leer%20en%20Español-red?style=for-the-badge" alt="Leer en Español" />
  </a>
</p>

<p align="center">
  <a href="https://danielmonettelli.github.io/blog/">
    <img src="https://img.shields.io/badge/Live-danielmonettelli.github.io/blog-0969da?style=flat-square" alt="Live Site" />
  </a>
  <a href="https://creativecommons.org/licenses/by/4.0/">
    <img src="https://img.shields.io/badge/Posts-CC%20BY%204.0-lightgrey?style=flat-square" alt="CC BY 4.0" />
  </a>
  <a href="../LICENSE">
    <img src="https://img.shields.io/badge/Code-MIT-blue?style=flat-square" alt="MIT License" />
  </a>
</p>

---

## Stack

| Layer        | Technology                                                 |
| ------------ | ---------------------------------------------------------- |
| Generator    | [Jekyll](https://jekyllrb.com/)                            |
| Theme        | [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) |
| Monetization | Google AdSense (blog only)                                 |
| Deploy       | GitHub Pages via GitHub Actions                            |

## Published Articles

| Date     | Article                                                 | Topic                |
| -------- | ------------------------------------------------------- | -------------------- |
| Jul 2025 | MeowApp — The Art of Connecting with TheCatAPI (Part 1) | .NET MAUI, REST API  |
| Jul 2024 | Rantiy — Mobile App with .NET MAUI (Part 1)             | .NET MAUI            |
| Jul 2023 | .NET MAUI Challenge — PlanetAnaka (Part 1)              | .NET MAUI, UI/UX     |
| Mar 2023 | Building a ChatGPT in .NET MAUI (Part 2)                | .NET MAUI, OpenAI    |
| Feb 2023 | Building a ChatGPT in .NET MAUI (Part 1)                | .NET MAUI, OpenAI    |
| Dec 2022 | Migrating Mitawi to .NET MAUI                           | Migration, .NET MAUI |
| Aug 2022 | Xamarin.Forms UI/UX — Mitawi Weather                    | Xamarin.Forms, UI/UX |
| May 2021 | Xamarin.Forms UI/UX — Micuna Food (Part 3)              | Xamarin.Forms, UI/UX |
| Mar 2021 | Xamarin.Forms UI/UX — Micuna Food (Part 2)              | Xamarin.Forms, UI/UX |
| Feb 2021 | Xamarin.Forms UI/UX — Micuna Food (Part 1)              | Xamarin.Forms, UI/UX |

## Local Development

```bash
cd blog
bundle install
bundle exec jekyll serve --livereload --baseurl /blog
```

The blog will be available at `http://localhost:4000/blog/`.

## Structure

```
blog/
├── _config.yml          # Jekyll + Chirpy configuration
├── _posts/              # Markdown articles (YYYY-MM-DD-slug.md)
├── _data/               # Authors, contact, locales
├── _includes/           # Custom head, optimizations
├── _plugins/            # AdSense injector, last-modified hook
├── _tabs/               # Pages: About, Archives, Categories, Tags
└── assets/              # Images, CSS, JS, favicons
```

## Licenses

- **Blog articles** — [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
- **Source code** — [MIT](../LICENSE)

## Acknowledgments

Built on [Jekyll Theme Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) by [Cotes Chung](https://github.com/cotes2020).
