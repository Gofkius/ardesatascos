import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-section'>
            <h1>Info</h1>
            <ul>
                <li><Link to="/aviso-legal">Aviso legal</Link></li>
                <li><Link to="/politica-de-cookies">Política de Cookies</Link></li>
                <li><Link to="/politica-de-privacidad">Política de Privacidad</Link></li>
            </ul>
        </div>
        <div className='footer-section'>
            <h1>Navegación</h1>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><a href="tel:+34608238809">Contacto</a></li>
            </ul>
        </div>
        <div className='footer-section-redes'>
            <h1>Redes</h1>
            <div className='redes'>
                <a href="https://www.facebook.com/Acondicionamientos.restauraciones/" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/ar.tenerife.sl/" target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/instagram.png" alt="Instagram" />
                </a>
                <a href="https://wa.me/34608238809?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto%20para%20un%20desatasco." target="_blank" rel="noopener noreferrer">
                    <img src="/src/assets/whatsapp.png" alt="WhatsApp" />
                </a>
            </div>
        </div>
        <div className='footer-section'>
            <h1>Contacto</h1>
            <ul>
                <li><a href="tel:+34608238809">+34 608 23 88 09</a></li>
                <li><a href="mailto:reformasypinturas@outlook.com">reformasypinturas@outlook.com</a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer