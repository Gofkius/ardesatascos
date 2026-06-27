import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className='footer-section'>
            <h1>Info</h1>
            <ul>
                <li><a href="">Aviso legal</a></li>
                <li><a href="">Política de Cookies</a></li>
                <li><a href="">Política de Privacidad</a></li>
            </ul>
        </div>
        <div className='footer-section'>
            <h1>Navegación</h1>
            <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
        </div>
        <div className='footer-section-redes'>
            <h1>Redes</h1>
            <div className='redes'>
                <a href=""><img src="/src/assets/facebook.png" alt="Facebook" /></a>
                <a href=""><img src="/src/assets/instagram.png" alt="Instagram" /></a>
                <a href=""><img src="/src/assets/whatsapp.png" alt="WhatsApp" /></a>
            </div>
        </div>
        <div className='footer-section'>
            <h1>Contacto</h1>
            <ul>
                <li><a href="">+34 608 23 88 09</a></li>
                <li><a href="">reformasypinturas@outlook.com</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer