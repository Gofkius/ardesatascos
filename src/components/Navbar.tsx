import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <Link to='/'><img src='/src/assets/ardesatascos.png' alt='Logo' width={53} height={53}/></Link>
        <div className='navbar-buttons'>
            <Link to='/' className='navbar-link'>
                <h1>Inicio</h1>
            </Link>
            <a href='tel:+34608238809' className='navbar-link'>
                <h1>Contacto</h1>
            </a>
            <a href='tel:+34608238809' className='navbar-callbutton'>
                <img src='/src/assets/call.png' alt='Tlf' width={16} height={16}/>
                <h1>Llámanos</h1>
            </a>
        </div>
    </div>
  )
}

export default Navbar