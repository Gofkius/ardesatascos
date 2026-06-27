import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/LegalPage.css'

const AvisoLegal = () => {
  return (
    <div className='legal-page'>
      <Navbar />
      <div className='legal-content'>
        <Link to='/' className='back-link'>
          <span>←</span> Volver al inicio
        </Link>

        <h1>Aviso Legal</h1>
        <p className='last-updated'>Última actualización: junio de 2025</p>

        <section>
          <h2>1. Datos del Titular</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa de los siguientes datos identificativos del titular de este sitio web:
          </p>
          <ul>
            <li><strong>Razón social:</strong> Acondicionamientos y Restauraciones Tenerife SL</li>
            <li><strong>Nombre comercial:</strong> AR Tenerife</li>
            <li><strong>CIF:</strong> B76781244</li>
            <li><strong>Actividad:</strong> Servicios de desatascos y fontanería</li>
            <li><strong>Teléfono:</strong> +34 608 23 88 09</li>
            <li><strong>Correo electrónico:</strong> reformasypinturas@outlook.com</li>
          </ul>
        </section>

        <section>
          <h2>2. Objeto y Ámbito de Aplicación</h2>
          <p>
            El presente Aviso Legal regula el acceso y uso del sitio web de Acondicionamientos y Restauraciones Tenerife SL (en adelante, AR Tenerife), al que se puede acceder a través de internet. El acceso y uso de este sitio web atribuye la condición de usuario, y supone la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
          </p>
        </section>

        <section>
          <h2>3. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos del sitio web (textos, imágenes, logotipos, gráficos, diseño, código fuente y demás elementos) son propiedad de Acondicionamientos y Restauraciones Tenerife SL (AR Tenerife) o de terceros que han autorizado su uso, y están protegidos por las leyes de propiedad intelectual e industrial.
          </p>
          <p>
            Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación total o parcial de los contenidos de este sitio web sin autorización expresa y por escrito del titular.
          </p>
        </section>

        <section>
          <h2>4. Responsabilidad</h2>
          <p>
            Acondicionamientos y Restauraciones Tenerife SL no se hace responsable de los daños y perjuicios derivados del uso incorrecto del sitio web, ni de posibles errores en los contenidos publicados. El titular se reserva el derecho a modificar o eliminar cualquier contenido del sitio sin previo aviso.
          </p>
        </section>

        <section>
          <h2>5. Legislación Aplicable</h2>
          <p>
            Este Aviso Legal se rige por la legislación española. Para cualquier disputa derivada del acceso o uso de este sitio web, las partes se someten, con renuncia a cualquier otro fuero, a los juzgados y tribunales competentes según la legislación aplicable.
          </p>
        </section>

        <section>
          <h2>6. Recopilación de Datos</h2>
          <div className='highlight-box'>
            <p>
              Este sitio web no recopila, almacena ni procesa ningún dato personal de sus visitantes. No se utilizan cookies de seguimiento, análisis ni publicidad. No se realizan transferencias de datos a terceros.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default AvisoLegal
