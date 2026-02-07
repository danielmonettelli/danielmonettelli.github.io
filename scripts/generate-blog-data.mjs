/**
 * generate-blog-data.mjs
 *
 * Reads Jekyll posts from blog/_posts/, extracts front matter,
 * and writes the latest 3 posts as JSON for the Astro BlogPreview component.
 *
 * Usage: node scripts/generate-blog-data.mjs
 * Output: src/data/blog-posts.json
 */

import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { join, basename } from "node:path";

const POSTS_DIR = join(process.cwd(), "blog", "_posts");
const OUTPUT_DIR = join(process.cwd(), "src", "data");
const OUTPUT_FILE = join(OUTPUT_DIR, "blog-posts.json");
const MAX_POSTS = 3;

/**
 * Minimal YAML front matter parser — handles the fields we need
 * without requiring a dependency.
 */
function parseFrontMatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, body: content };

  const raw = match[1];
  const data = {};

  for (const line of raw.split("\n")) {
    // Skip continuation lines (indented), comment lines, or empty
    if (/^\s/.test(line) || line.startsWith("#") || !line.includes(":")) continue;

    const colonIdx = line.indexOf(":");
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();

    // Strip surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    data[key] = value;
  }

  const body = content.slice(match[0].length).trim();
  return { data, body };
}

/**
 * Parse categories from front matter value.
 * Handles: [Cat1, Cat2] or Cat1
 */
function parseCategories(raw) {
  if (!raw) return [];
  const inner = raw.replace(/^\[|\]$/g, "").trim();
  return inner.split(",").map((c) => c.trim()).filter(Boolean);
}

/**
 * Estimate reading time from markdown body (words / 200 wpm).
 */
function estimateReadingTime(body) {
  const words = body.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min`;
}

/**
 * Extract the first meaningful paragraph as excerpt (~160 chars).
 */
function extractExcerpt(body, maxLen = 160) {
  // Remove HTML tags, prompt blocks, horizontal rules, headings
  const lines = body
    .replace(/<[^>]+>/g, "")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) =>
      l.length > 20 &&
      !l.startsWith("#") &&
      !l.startsWith(">") &&
      !l.startsWith("---") &&
      !l.startsWith("![") &&
      !l.startsWith("{:")
    );

  const excerpt = lines[0] || "";
  return excerpt.length > maxLen ? excerpt.slice(0, maxLen).replace(/\s\S*$/, "…") : excerpt;
}

/**
 * Format date: "2025-07-24" → "Jul 2025"
 */
function formatDate(dateStr) {
  if (!dateStr) return "";
  // Take just the date portion (ignore time/timezone)
  const datePart = dateStr.split(" ")[0];
  const d = new Date(datePart + "T00:00:00");
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/**
 * Derive the post URL slug from filename.
 * "2025-07-24-my-post-slug.md" → "/blog/posts/my-post-slug/"
 */
function filenameToUrl(filename) {
  const slug = basename(filename, ".md").replace(/^\d{4}-\d{2}-\d{2}-/, "");
  return `/blog/posts/${slug}/`;
}

async function main() {
  // Read all markdown files
  const files = (await readdir(POSTS_DIR))
    .filter((f) => f.endsWith(".md"))
    .sort()
    .reverse(); // newest first by filename date

  const posts = [];

  for (const file of files) {
    if (posts.length >= MAX_POSTS) break;

    const content = await readFile(join(POSTS_DIR, file), "utf-8");
    const { data, body } = parseFrontMatter(content);

    if (!data.title) continue; // skip invalid

    const categories = parseCategories(data.categories);
    const dateStr = data.date || file.slice(0, 10);

    posts.push({
      title: data.title,
      date: formatDate(dateStr),
      rawDate: dateStr.split(" ")[0],
      excerpt: extractExcerpt(body),
      url: filenameToUrl(file),
      category: categories[0] || "General",
      readingTime: estimateReadingTime(body),
      image: data.image ? undefined : undefined, // Image handled by CDN in Jekyll
    });
  }

  // Write output
  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(OUTPUT_FILE, JSON.stringify(posts, null, 2), "utf-8");

  console.log(`✅ Generated ${posts.length} blog posts → ${OUTPUT_FILE}`);
  posts.forEach((p) => console.log(`   • ${p.title} (${p.date})`));
}

main().catch((err) => {
  console.error("❌ Failed to generate blog data:", err);
  process.exit(1);
});
