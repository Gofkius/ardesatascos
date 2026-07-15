// Prerenders each route to static HTML in dist/, so crawlers and users
// get full content before JavaScript loads. Runs after both vite builds.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const { render } = await import(path.join(root, 'dist-ssr/entry-server.js'))

const SITE = 'https://ardesatascos.es'

const routes = [
  { path: '/' },
  {
    path: '/aviso-legal',
    title: 'Aviso Legal | AR Desatascos Tenerife',
    description: 'Aviso legal de AR Desatascos (Acondicionamientos y Restauraciones Tenerife SL), empresa de desatascos en Tenerife.',
  },
  {
    path: '/politica-de-cookies',
    title: 'Política de Cookies | AR Desatascos Tenerife',
    description: 'Política de cookies del sitio web de AR Desatascos, empresa de desatascos en Tenerife.',
  },
  {
    path: '/politica-de-privacidad',
    title: 'Política de Privacidad | AR Desatascos Tenerife',
    description: 'Política de privacidad de AR Desatascos, empresa de desatascos en Tenerife.',
  },
]

const template = readFileSync(path.join(root, 'dist/index.html'), 'utf8')

for (const route of routes) {
  const appHtml = render(route.path)
  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const url = SITE + (route.path === '/' ? '/' : route.path)
  html = html
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`)
    .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`)

  if (route.title) {
    html = html
      .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
      .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${route.description}"`)
      .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${route.title}"`)
      .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${route.description}"`)
  }

  // Flat files (aviso-legal.html) so Cloudflare serves /aviso-legal with a
  // 200 instead of redirecting to a trailing-slash URL (auto-trailing-slash).
  const outFile = route.path === '/'
    ? path.join(root, 'dist/index.html')
    : path.join(root, 'dist', `${route.path.slice(1)}.html`)
  mkdirSync(path.dirname(outFile), { recursive: true })
  writeFileSync(outFile, html)
  console.log(`prerendered ${route.path} -> ${path.relative(root, outFile)}`)
}
