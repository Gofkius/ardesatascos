import { useEffect } from 'react'

// Must match the defaults in index.html (used by the home page).
const DEFAULT_TITLE = 'Desatascos en Tenerife 24h | AR Desatascos'
const DEFAULT_DESCRIPTION = 'Empresa de desatascos en Tenerife, disponible 24/7. Desatascos domésticos, camión cuba, agua a presión y localización de fugas. Presupuesto gratuito: 608 23 88 09.'

const usePageMeta = (title: string, description?: string) => {
  useEffect(() => {
    document.title = title

    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta && description) meta.content = description

    return () => {
      document.title = DEFAULT_TITLE
      if (meta) meta.content = DEFAULT_DESCRIPTION
    }
  }, [title, description])
}

export default usePageMeta
