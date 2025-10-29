import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const SITE = process.env.VITE_SITE_URL || process.env.SITE_URL || "https://example.com";

const staticRoutes = [
  "/",
  "/quem-somos",
  "/blog",
  "/privacidade",
  "/termos",
  "/cookies",
  "/contato",
  "/suporte",
  "/precos",
  "/integracoes",
  "/cases",
];

function extractPostSlugs() {
  try {
    const p = resolve("src/content/posts.ts");
    const txt = readFileSync(p, "utf8");
    const re = /slug:\s*"([^"]+)"/g;
    const slugs = [];
    let m;
    while ((m = re.exec(txt))) slugs.push(m[1]);
    return slugs.map((s) => `/blog/${s}`);
  } catch (e) {
    return [];
  }
}

const urls = [...new Set([...staticRoutes, ...extractPostSlugs()])];
const today = new Date().toISOString().split("T")[0];

const body = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...urls.map(
    (u) => `  <url><loc>${new URL(u, SITE).toString()}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${u === "/" ? "1.0" : "0.7"}</priority></url>`
  ),
  `</urlset>`,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), body);
console.log(`Generated sitemap with ${urls.length} URLs at public/sitemap.xml`);

