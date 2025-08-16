export function parseShortcodes(markdown: string): string {
  return markdown.replace(
    /\[cta\s+(.*?)\]/g,
    (_, rawAttrs) => {
      const attrs: Record<string, string | boolean> = {}

      // Einfache Attribut-Extraktion (unterstützt auch booleans wie boxlink)
      rawAttrs.match(/([a-zA-Z0-9_-]+)="([^"]*)"/g)?.forEach(attr => {
        const [key, value] = attr.split('=')
        attrs[key] = value.replace(/"/g, '')
      })

      // boolean ohne Wert (z. B. boxlink)
      rawAttrs.match(/\s([a-zA-Z0-9_-]+)(?=\s|$)/g)?.forEach(flag => {
        const key = flag.trim()
        if (!(key in attrs)) {
          attrs[key] = true
        }
      })

      const title = attrs.title || ''
      const description = attrs.description || ''
      const href = attrs.href || '#'
      const linktext = attrs.linktext || 'Jetzt anmelden'
      const boxlink = attrs.boxlink === true || attrs.boxlink === 'true'

      const content = `
        <h3>${title}</h3>
        <p>${description}</p>
        ${!boxlink ? `<a href="${href}" class="cta-link">${linktext}</a>` : ''}
      `.trim()

      return `

${boxlink
  ? `<div class="cta-box boxlink-wrapper">
<a href="${href}" class="cta-overlay-link" aria-label="${title}"></a>
${content}
</div>`
  : `<div class="cta-box">
${content}
</div>`}

`
    }
  )
}
