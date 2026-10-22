import { useEffect } from 'react'

// Must match the defaults in index.html (used by the home page).
const DEFAULT_TITLE = 'Desatascos en Tenerife 24 Horas | Urgentes y Camión Cuba | AR Desatascos'
const DEFAULT_DESCRIPTION = 'Empresa especialista en desatascos urgentes en Tenerife 24 horas (Norte y Sur). Desatasco de tuberías, camión cuba, agua a presión y localización de fugas sin obras. Presupuesto gratis: 608 23 88 09.'
const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1'
const SITE_URL = 'https://ardesatascos.es'

const usePageMeta = (title: string, description?: string, options?: { noindex?: boolean; canonicalPath?: string }) => {
  useEffect(() => {
    document.title = title

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta && description) meta.content = description

    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (robots) {
      robots.content = options?.noindex ? 'noindex, follow' : DEFAULT_ROBOTS
    }

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical && options?.canonicalPath) {
      canonical.href = `${SITE_URL}${options.canonicalPath}`
    }

    return () => {
      document.title = DEFAULT_TITLE
      if (meta) meta.content = DEFAULT_DESCRIPTION
      if (robots) robots.content = DEFAULT_ROBOTS
      if (canonical) canonical.href = `${SITE_URL}/`
    }
  }, [title, description, options?.noindex, options?.canonicalPath])
}

export default usePageMeta
