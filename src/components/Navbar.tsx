import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <img src='/src/assets/ardesatascos.png' alt='Logo' width={53} height={53}/>
        <div className='navbar-buttons'>
            <h1>
                Inicio
            </h1>
            <h1>
                Contacto
            </h1>
            <div className='navbar-callbutton'>
                <img src='/src/assets/call.png' alt='Tlf' width={16} height={16}/>
                <h1>
                    Llámanos
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar