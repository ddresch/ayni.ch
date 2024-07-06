// const fs = require('fs')
// const globby = require('globby')
// import fs from 'fs'
// import globby from 'globby'
import {globby} from 'globby'
import fs from 'fs'

const replaceWithBlank = (str, toReplace) => {
  return toReplace.reduce((acc, item) => acc.replace(new RegExp(item, 'g'), ""), str)
}

const addPage = (page) => {
  // const path = page.replace('pages', '').replace('.mdx', '').replace('.jsx', '').replace('.js', '').replace('.md', '')
  const path = replaceWithBlank(page, ['pages', '.mdx', '.jsx', '.js', '.md', 'index'])
    .replace('content/posts/', '/aktuelles/')
    .replace('content/informationen/', '/informationen/')
    .replace('content/angebote/', '/angebot/')
    .replace('content/allgemein/', '/')
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
    '!pages/aktuelles/[slug].jsx',
    '!pages/informationen/[slug].jsx',
    '!pages/angebot/[slug].jsx',
    '!pages/[slug].jsx',
  ])
  // blog posts pages
  const posts = await globby([
    'content/posts/**/*.md',
    'content/angebote/**/*.md',
    'content/informations/**/*.md',
  ])
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(addPage).join('\n')}
    ${posts.map(addPage).join('\n')}
  </urlset>`
  console.log(sitemap)
  fs.writeFileSync('public/sitemap.xml', sitemap)  
}

generateSitemap()