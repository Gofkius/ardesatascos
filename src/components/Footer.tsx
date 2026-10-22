import { Link } from 'react-router-dom'
import '../styles/Footer.css'

import facebookIcon from '../assets/facebook.png'
import instagramIcon from '../assets/instagram.png'
import whatsappIcon from '../assets/whatsapp.png'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-section'>
            <h2>Info</h2>
            <ul>
                <li><Link to="/aviso-legal">Aviso legal</Link></li>
                <li><Link to="/politica-de-cookies">Política de Cookies</Link></li>
                <li><Link to="/politica-de-privacidad">Política de Privacidad</Link></li>
            </ul>
        </div>
        <div className='footer-section'>
            <h2>Navegación</h2>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><a href="/#servicios">Servicios de desatascos</a></li>
                <li><a href="/#zonas">Zonas en Tenerife</a></li>
                <li><a href="/#faq">Precios y preguntas frecuentes</a></li>
                <li><a href="tel:+34608238809">Contacto urgente 24h</a></li>
            </ul>
        </div>
        <div className='footer-section-redes'>
            <h2>Redes</h2>
            <div className='redes'>
                <a href="https://www.facebook.com/Acondicionamientos.restauraciones/" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook AR Desatascos Tenerife" width={25} height={25} />
                </a>
                <a href="https://www.instagram.com/ar.tenerife.sl/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram AR Desatascos Tenerife" width={25} height={25} />
                </a>
                <a href="https://wa.me/34608238809?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto%20para%20un%20desatasco." target="_blank" rel="noopener noreferrer">
                    <img src={whatsappIcon} alt="WhatsApp AR Desatascos Tenerife" width={25} height={25} />
                </a>
            </div>
        </div>
        <div className='footer-section'>
            <h2>Contacto</h2>
            <ul>
                <li><a href="tel:+34608238809">+34 608 23 88 09</a></li>
                <li><a href="mailto:desatascosartenerife@outlook.es">desatascosartenerife@outlook.es</a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer