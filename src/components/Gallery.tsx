import { useRef, useState } from 'react'
import '../styles/Gallery.css'

// Las fotos se cargan automáticamente desde src/assets/gallery,
// ordenadas por nombre de archivo. El nombre (sin extensión) se usa como alt.
const modules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
})

const ALT_MAP: Record<string, string> = {
  '04-localizacioncama': 'Inspección de tuberías con cámara TV y localización de arquetas en Tenerife',
  '05-localizacioncama': 'Detección de fugas de agua y atascos con cámara de inspección en Tenerife',
  '06-localizacioncama': 'Equipo profesional de localización de tuberías y fugas sin obras en Tenerife',
  '07-localizacioncama': 'Técnico especialista en desatascos e inspección de redes de saneamiento en Tenerife',
  '08-localizacioncama': 'Reparación y localización de averías en tuberías de desagüe en Tenerife',
  '09-localizacioncama': 'Furgón equipado para desatascos urgentes 24 horas y detección de fugas en Tenerife',
  '10-localizacioncama': 'Inspección técnica de bajantes y colectores en comunidad de propietarios en Tenerife',
  '11-localizacioncama': 'Localización exacta de atasco en tubería enterrada mediante sonda y cámara en Tenerife',
  '12-localizacioncama': 'Servicio de desatasco y diagnóstico de tuberías con geófono y gas traza en Tenerife',
  '13-localizacioncama': 'Trabajos de fontanería técnica y localización de fugas ocultas en Tenerife',
  '15-espacioconfinado': 'Limpieza y desatasco profesional en espacios confinados, arquetas y fosas sépticas en Tenerife',
  '16-desatasco-domestico': 'Desatasco doméstico urgente de tuberías y desagües en vivienda de Tenerife',
  '17-desatasco-domestico': 'Maquinaria profesional para desatascos domésticos de fregaderos y baños en Tenerife',
  '18-desatasco-domestico': 'Intervención rápida de desatasco de tuberías sin obras en Tenerife',
}

const photos = Object.keys(modules)
  .sort()
  .map((path) => {
    const file = path.split('/').pop() ?? ''
    const baseName = file.replace(/\.[^.]+$/, '')
    const fallbackAlt = baseName.replace(/^\d+[-_]+/, '').replace(/[-_]+/g, ' ')
    const alt = ALT_MAP[baseName] ?? `Desatascos en Tenerife - ${fallbackAlt}`
    return { src: modules[path] as string, alt }
  })

const clampIndex = (i: number) => Math.min(photos.length - 1, Math.max(0, i))

const Gallery = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const handleScroll = () => {
    const track = trackRef.current
    if (!track || track.clientWidth === 0) return
    setIndex(clampIndex(Math.round(track.scrollLeft / track.clientWidth)))
  }

  const goTo = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({
      left: clampIndex(i) * track.clientWidth,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  if (photos.length === 0) return null

  return (
    <section className='gallery-container' aria-label='Galería de trabajos de desatascos en Tenerife'>
      <h2 className='gallery-title'>Nuestros trabajos de desatascos en Tenerife</h2>
      <p className='gallery-subtitle'>Fotos reales de desatascos urgentes, camión cuba, agua a presión y localización de fugas en Tenerife Norte y Sur.</p>
      <div className='gallery-frame' aria-roledescription='carrusel'>
        <div className='gallery-track' ref={trackRef} onScroll={handleScroll}>
          {photos.map((photo, i) => (
            <div
              className='gallery-slide'
              key={photo.src}
              role='group'
              aria-roledescription='diapositiva'
              aria-label={`${i + 1} de ${photos.length}`}
            >
              <img
                className='gallery-backdrop'
                src={photo.src}
                alt=''
                aria-hidden='true'
                loading='lazy'
                decoding='async'
                width={900}
                height={600}
                draggable={false}
              />
              <img
                className='gallery-photo'
                src={photo.src}
                alt={photo.alt}
                loading='lazy'
                decoding='async'
                width={900}
                height={600}
                draggable={false}
              />
            </div>
          ))}
        </div>
        {photos.length > 1 && (
          <>
            <button
              type='button'
              className='gallery-arrow gallery-arrow-left'
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              aria-label='Foto anterior'
            >
              <svg viewBox='0 0 24 24' width='22' height='22' fill='none' aria-hidden='true'>
                <path d='M15 5l-7 7 7 7' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </button>
            <button
              type='button'
              className='gallery-arrow gallery-arrow-right'
              onClick={() => goTo(index + 1)}
              disabled={index === photos.length - 1}
              aria-label='Foto siguiente'
            >
              <svg viewBox='0 0 24 24' width='22' height='22' fill='none' aria-hidden='true'>
                <path d='M9 5l7 7-7 7' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round' />
              </svg>
            </button>
          </>
        )}
      </div>
      {photos.length > 1 && (
        <div className='gallery-dots'>
          {photos.map((photo, i) => (
            <button
              type='button'
              key={photo.src}
              className={i === index ? 'gallery-dot is-active' : 'gallery-dot'}
              onClick={() => goTo(i)}
              aria-label={`Ir a la foto ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Gallery
