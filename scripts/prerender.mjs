// Runs after `vite build` (npm "postbuild" lifecycle hook). Boots the built
// dist/ via Vite's preview server, visits each known route in headless
// Chrome, waits for React to hoist its <PageMeta> head tags, and freezes the
// rendered DOM as a static dist/<route>/index.html — so a plain HTTP fetch
// (no JS execution) returns real content instead of an empty #root div.
import { preview } from 'vite'
import puppeteer from 'puppeteer'
import { writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'

const ROUTES = ['/', '/services']
const PORT = 4173

async function main() {
  const server = await preview({ preview: { port: PORT, strictPort: true } })
  const base = server.resolvedUrls?.local?.[0] ?? `http://localhost:${PORT}/`

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  // Capture every route from the ORIGINAL dist/ before writing anything back.
  // Vite's preview server falls back to dist/index.html for any unmatched
  // path (SPA appType), so overwriting it mid-loop would corrupt the shell
  // still needed by routes not yet captured.
  const captured = []
  try {
    for (const route of ROUTES) {
      const page = await browser.newPage()
      const url = new URL(route, base).toString()
      await page.goto(url, { waitUntil: 'networkidle0' })
      await page.waitForFunction('window.__PRERENDER_READY__ === true')
      const html = await page.content() // includes the doctype already
      captured.push({ route, html })
      await page.close()
    }
  } finally {
    await browser.close()
    await server.close()
  }

  for (const { route, html } of captured) {
    const outDir =
      route === '/' ? 'dist' : path.join('dist', route.replace(/^\//, ''))
    await mkdir(outDir, { recursive: true })
    await writeFile(path.join(outDir, 'index.html'), html)
    console.log(`prerendered ${route} -> ${path.join(outDir, 'index.html')}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
