import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/LegalPage.css'
import usePageMeta from '../lib/usePageMeta'

const NotFound = () => {
  usePageMeta('Página no encontrada | AR Desatascos Tenerife', 'La página que buscas no existe. Vuelve al inicio o llámanos: 608 23 88 09.')

  return (
    <div className='legal-page'>
      <Navbar />
      <div className='legal-content'>
        <h1>Página no encontrada</h1>
        <p>
          La página que buscas no existe o ha cambiado de dirección.
        </p>
        <p>
          Si tienes una urgencia, llámanos al <a href='tel:+34608238809'>608 23 88 09</a> — atendemos 24/7.
        </p>
        <Link to='/' className='back-link'>
          <span>←</span> Volver al inicio
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
