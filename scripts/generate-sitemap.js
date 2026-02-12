const fs = require('fs');
const path = require('path');

const baseUrl = 'https://yanma-empire.net';
const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  '/',
  '/about',
  '/about/constitution',
  '/about/diet',
  '/about/ministries',
  '/about/corporations',
  '/news',
  '/events',
  '/participation',
  '/participation/rules',
  '/participation/roles',
  '/participation/faq',
  '/contact',
  '/disclaimer',
  '/privacy'
];

const newsPath = path.join(__dirname, '..', 'src', 'data', 'news.json');
const newsItems = JSON.parse(fs.readFileSync(newsPath, 'utf8'));

const urls = [];

staticRoutes.forEach((route) => {
  urls.push({
    loc: `${baseUrl}${route}`,
    lastmod: today,
    changefreq: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? '1.0' : '0.7'
  });
});

newsItems.forEach((item) => {
  if (!item.slug || item.url) {
    return;
  }
  urls.push({
    loc: `${baseUrl}/news/${item.slug}`,
    lastmod: item.date || today,
    changefreq: 'monthly',
    priority: '0.6'
  });
});

const escapeXml = (value) => value.replace(/[<>&'"]/g, (char) => {
  switch (char) {
    case '<':
      return '&lt;';
    case '>':
      return '&gt;';
    case '&':
      return '&amp;';
    case '\'':
      return '&apos;';
    case '"':
      return '&quot;';
    default:
      return char;
  }
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((entry) => {
    return [
      '  <url>',
      `    <loc>${escapeXml(entry.loc)}</loc>`,
      `    <lastmod>${entry.lastmod}</lastmod>`,
      `    <changefreq>${entry.changefreq}</changefreq>`,
      `    <priority>${entry.priority}</priority>`,
      '  </url>'
    ].join('\n');
  }).join('\n') +
  '\n</urlset>\n';

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');

console.log(`sitemap generated: ${outputPath}`);
