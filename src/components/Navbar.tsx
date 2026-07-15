import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

import logo from '../assets/ardesatascos.png'
import callIcon from '../assets/call.png'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to='/'><img src={logo} alt='AR Desatascos - Desatascos en Tenerife' width={53} height={53}/></Link>
        <div className='navbar-buttons'>
            <Link to='/' className='navbar-link'>
                <span>Inicio</span>
            </Link>
            <a href='tel:+34608238809' className='navbar-link'>
                <span>Contacto</span>
            </a>
            <a href='tel:+34608238809' className='navbar-callbutton'>
                <img src={callIcon} alt='' width={16} height={16}/>
                <span>Llámanos</span>
            </a>
        </div>
    </div>
  )
}

export default Navbar