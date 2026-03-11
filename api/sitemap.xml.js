/**
 * Sitemap generator — Vercel Edge Function
 *
 * To add a new page:  add one entry to the `pages` array below.
 * lastmod is derived from the VERCEL_GIT_COMMIT_SHA env var (set on every deploy)
 * so dates stay accurate without manual edits.
 */

export const config = { runtime: 'edge' };

const BASE_URL = 'https://kyburn.com';

const pages = [
  { path: '/',              priority: '1.0', changefreq: 'weekly'  },
  { path: '/team.html',     priority: '0.8', changefreq: 'monthly' },
  { path: '/tech.html',     priority: '0.7', changefreq: 'monthly' },
  { path: '/philippe.html', priority: '0.6', changefreq: 'monthly' },
  { path: '/jaap.html',     priority: '0.6', changefreq: 'monthly' },
  { path: '/julien.html',   priority: '0.6', changefreq: 'monthly' },
];

export default function handler() {
  // Use today's date on each deploy (VERCEL_GIT_COMMIT_SHA is set per deployment)
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = pages
    .map(
      ({ path, priority, changefreq }) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
