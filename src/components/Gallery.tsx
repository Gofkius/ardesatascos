import { useRef, useState } from 'react'
import '../styles/Gallery.css'

// Las fotos se cargan automáticamente desde src/assets/gallery,
// ordenadas por nombre de archivo. El nombre (sin extensión) se usa como alt.
const modules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
})

const photos = Object.keys(modules)
  .sort()
  .map((path) => {
    const file = path.split('/').pop() ?? ''
    const alt = file.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ')
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
    <section className='gallery-container' aria-label='Galería de trabajos'>
      <h2 className='gallery-title'>Nuestros trabajos</h2>
      <p className='gallery-subtitle'>Fotos reales de nuestros servicios en Tenerife.</p>
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
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding='async'
                draggable={false}
              />
              <img
                className='gallery-photo'
                src={photo.src}
                alt={photo.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding='async'
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
