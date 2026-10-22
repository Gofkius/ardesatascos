import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

import logo from '../assets/ardesatascos.webp'
import callIcon from '../assets/call.png'

const Navbar = () => {
  return (
    <header className='navbar-container'>
        <Link to='/' aria-label='AR Desatascos Tenerife - Inicio'>
          <img src={logo} alt='AR Desatascos - Empresa de desatascos urgentes en Tenerife 24 horas' width={53} height={53}/>
        </Link>
        <nav className='navbar-buttons' aria-label='Navegación principal'>
            <Link to='/' className='navbar-link'>
                <span>Inicio</span>
            </Link>
            <a href='/#servicios' className='navbar-link navbar-link-hide-mobile'>
                <span>Servicios</span>
            </a>
            <a href='/#zonas' className='navbar-link navbar-link-hide-mobile'>
                <span>Zonas</span>
            </a>
            <a href='/#faq' className='navbar-link navbar-link-hide-mobile'>
                <span>FAQ</span>
            </a>
            <a href='tel:+34608238809' className='navbar-link'>
                <span>Contacto</span>
            </a>
            <a href='tel:+34608238809' className='navbar-callbutton'>
                <img src={callIcon} alt='' width={16} height={16}/>
                <span>Llámanos</span>
            </a>
        </nav>
    </header>
  )
}

export default Navbar