/**
 * i18n Client Engine
 *
 * Handles language switching for the static Astro portfolio.
 * - Default language: English (rendered in HTML)
 * - Supports: EN, ES
 * - Stores preference in localStorage
 * - Swaps text via data-i18n attributes on DOM elements
 *
 * Attribute conventions:
 *   data-i18n="component.key"        → textContent replacement
 *   data-i18n-html="component.key"   → innerHTML replacement
 *   data-i18n-aria="component.key"   → aria-label replacement
 */

import { translations } from "./translations";

export type Lang = "en" | "es";

const STORAGE_KEY = "lang";

/**
 * Get the current language from localStorage or browser preference.
 */
export function getLang(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "es") return saved;
  // Detect from browser (first-time visitors)
  const browserLang = navigator.language || "";
  return browserLang.startsWith("es") ? "es" : "en";
}

/**
 * Set language and persist.
 */
export function setLang(lang: Lang): void {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.setAttribute("lang", lang);
  applyTranslations(lang);
  // Dispatch custom event so components can react (e.g., typewriter)
  window.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

/**
 * Toggle between EN and ES.
 */
export function toggleLang(): void {
  const current = getLang();
  setLang(current === "en" ? "es" : "en");
}

/**
 * Look up a translation value by dotted key like "hero.greeting"
 */
function resolve(lang: Lang, key: string): string | undefined {
  const parts = key.split(".");
  if (parts.length !== 2) return undefined;
  const [component, field] = parts;
  const section = translations[lang]?.[component];
  if (!section) return undefined;
  const val = section[field];
  return typeof val === "string" ? val : undefined;
}

/**
 * Apply all translations to the DOM for the given language.
 */
export function applyTranslations(lang: Lang): void {
  // textContent replacements
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const text = resolve(lang, key);
    if (text !== undefined) el.textContent = text;
  });

  // innerHTML replacements (elements with styled spans)
  document.querySelectorAll<HTMLElement>("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (!key) return;
    const html = resolve(lang, key);
    if (html !== undefined) el.innerHTML = html;
  });

  // aria-label replacements
  document.querySelectorAll<HTMLElement>("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (!key) return;
    const text = resolve(lang, key);
    if (text !== undefined) el.setAttribute("aria-label", text);
  });
}

/**
 * Initialize i18n on page load.
 * Call this once after DOM is ready.
 */
export function initI18n(): void {
  const lang = getLang();
  document.documentElement.setAttribute("lang", lang);

  // Only apply translations if not the default (English).
  // English is already rendered in the HTML for zero-flash.
  if (lang !== "en") {
    applyTranslations(lang);
  }

  // Update the toggle button text
  updateToggleButton(lang);
}

/**
 * Update the language toggle button's label to show the CURRENT language.
 */
export function updateToggleButton(lang: Lang): void {
  const toggleBtns =
    document.querySelectorAll<HTMLElement>("[data-lang-toggle]");
  toggleBtns.forEach((btn) => {
    const t = translations[lang]?.navbar;
    if (t) {
      // Desktop buttons show full name, mobile show short code
      const isMobile = btn.classList.contains("w-10");
      btn.textContent = isMobile
        ? (t.langToggleMobile as string)
        : (t.langToggle as string);
      btn.setAttribute("aria-label", t.langToggleAria as string);
    }
  });
}
