import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/LegalPage.css'

const PoliticaCookies = () => {
  return (
    <div className='legal-page'>
      <Navbar />
      <div className='legal-content'>
        <Link to='/' className='back-link'>
          <span>←</span> Volver al inicio
        </Link>

        <h1>Política de Cookies</h1>
        <p className='last-updated'>Última actualización: junio de 2025</p>

        <section>
          <h2>1. ¿Qué son las Cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web colocan en el dispositivo del usuario al visitarlos. Se utilizan ampliamente para recordar preferencias, analizar el tráfico o mostrar publicidad personalizada.
          </p>
        </section>

        <section>
          <h2>2. Cookies Utilizadas en Este Sitio</h2>
          <div className='highlight-box'>
            <p>
              Este sitio web <strong>no utiliza cookies de seguimiento, análisis, publicidad ni de terceros</strong>. No se instala ninguna cookie en tu dispositivo para rastrear tu comportamiento, identificarte o compartir datos con terceros.
            </p>
          </div>
          <p style={{ marginTop: '16px' }}>
            La única información que este sitio puede guardar en tu navegador es tu <strong>preferencia sobre el aviso de cookies</strong> (si has aceptado o rechazado el banner), almacenada únicamente en el <code>localStorage</code> de tu propio dispositivo. Esta información nunca se envía a ningún servidor y no es accesible por terceros.
          </p>
        </section>

        <section>
          <h2>3. Tipos de Cookies por Propósito (No Utilizadas)</h2>
          <p>A modo informativo, los tipos de cookies que este sitio <strong>NO utiliza</strong> son:</p>
          <ul>
            <li><strong>Cookies analíticas:</strong> Para medir el tráfico y comportamiento de los usuarios (ej. Google Analytics).</li>
            <li><strong>Cookies publicitarias:</strong> Para mostrar anuncios personalizados.</li>
            <li><strong>Cookies de terceros:</strong> De redes sociales, plataformas externas, etc.</li>
            <li><strong>Cookies de sesión con datos personales:</strong> Ninguna información personal es almacenada.</li>
          </ul>
        </section>

        <section>
          <h2>4. Cómo Gestionar tus Preferencias</h2>
          <p>
            Puedes configurar tu navegador para rechazar todas las cookies, aceptar sólo las de determinados sitios o ser notificado cuando se instale una cookie. Consulta la ayuda de tu navegador para más información:
          </p>
          <ul>
            <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
            <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad</li>
            <li><strong>Safari:</strong> Preferencias → Privacidad</li>
            <li><strong>Microsoft Edge:</strong> Configuración → Privacidad, búsqueda y servicios</li>
          </ul>
        </section>

        <section>
          <h2>5. Base Legal</h2>
          <p>
            Esta política se ha elaborado en cumplimiento del Reglamento (UE) 2016/679 (RGPD), la Directiva 2002/58/CE sobre privacidad y comunicaciones electrónicas, y la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSICE).
          </p>
        </section>

        <section>
          <h2>6. Contacto</h2>
          <p>
            Para cualquier consulta sobre esta política, puedes contactarte con <strong>Acondicionamientos y Restauraciones Tenerife SL</strong> (CIF: B76781244) en: <strong>reformasypinturas@outlook.com</strong> o llamar al <strong>+34 608 23 88 09</strong>.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default PoliticaCookies
