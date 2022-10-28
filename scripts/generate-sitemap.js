const fs = require('fs')
const globby = require('globby')

function addPage(page) {
  const path = page.replace('pages', '').replace('.mdx', '').replace('.jsx', '').replace('.js', '')
  const route = path === '/index' ? '' : path

  return `  <url>
    <loc>${`${process.env.website_url}${route}`}</loc>
    <changefreq>hourly</changefreq>
  </url>`
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*{.js,.mdx,.jsx}',
    '!pages/_*.js',
    '!pages/api',
    '!pages/outstatic',
  ])
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSitemap()