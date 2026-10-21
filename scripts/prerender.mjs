// Injeta o HTML gerado no servidor em dist/index.html (pré-renderização).
import fs from "node:fs"
import path from "node:path"
import { pathToFileURL } from "node:url"

const distIndex = path.resolve("dist/index.html")
const { render } = await import(pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href)

const placeholder = '<div id="root"></div>'
const template = fs.readFileSync(distIndex, "utf8")
if (!template.includes(placeholder)) {
  throw new Error(`Não encontrei ${placeholder} em dist/index.html`)
}

const html = render()
fs.writeFileSync(distIndex, template.replace(placeholder, `<div id="root">${html}</div>`))
console.log(`Pré-renderizado: dist/index.html (${Math.round(html.length / 1024)} KB de HTML)`)
