import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/CookieBanner.css'

const COOKIE_KEY = 'cookie-consent'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show banner if user hasn't responded yet
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      // Small delay so it doesn't flash immediately on load
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className='cookie-banner' role='dialog' aria-label='Aviso de cookies'>
      <div className='cookie-banner-text'>
        <h2>Aviso de Cookies</h2>
        <p>
          Este sitio web <strong>no utiliza cookies de seguimiento ni recopila datos personales</strong>.
          Solo guardamos tu respuesta a este aviso en tu propio navegador.{' '}
          <Link to='/politica-de-cookies'>Política de Cookies</Link> ·{' '}
          <Link to='/politica-de-privacidad'>Privacidad</Link>
        </p>
      </div>
      <div className='cookie-banner-actions'>
        <button id='cookie-accept-btn' className='cookie-accept' onClick={handleAccept}>
          Entendido
        </button>
        <button id='cookie-reject-btn' className='cookie-reject' onClick={handleReject}>
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default CookieBanner
