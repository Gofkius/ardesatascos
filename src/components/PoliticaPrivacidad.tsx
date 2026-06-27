import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/LegalPage.css'

const PoliticaPrivacidad = () => {
  return (
    <div className='legal-page'>
      <Navbar />
      <div className='legal-content'>
        <Link to='/' className='back-link'>
          <span>←</span> Volver al inicio
        </Link>

        <h1>Política de Privacidad</h1>
        <p className='last-updated'>Última actualización: junio de 2025</p>

        <section>
          <h2>1. Responsable del Tratamiento</h2>
          <ul>
            <li><strong>Razón social:</strong> Acondicionamientos y Restauraciones Tenerife SL</li>
            <li><strong>Nombre comercial:</strong> AR Tenerife</li>
            <li><strong>CIF:</strong> B76781244</li>
            <li><strong>Actividad:</strong> Servicios de desatascos y fontanería</li>
            <li><strong>Contacto:</strong> reformasypinturas@outlook.com | +34 608 23 88 09</li>
          </ul>
        </section>

        <section>
          <h2>2. Datos que Recopilamos</h2>
          <div className='highlight-box'>
            <p>
              Este sitio web <strong>no recopila ningún dato personal</strong> de los visitantes. No existe ningún formulario de registro, formulario de contacto integrado, sistema de comentarios ni herramienta de análisis que capture información sobre ti.
            </p>
          </div>
          <p style={{ marginTop: '16px' }}>
            Los únicos datos que podrían asociarse a tu visita son los registros técnicos generados automáticamente por el servidor de alojamiento web (como la dirección IP de conexión), que son gestionados exclusivamente por el proveedor de hosting y fuera del control de este sitio.
          </p>
        </section>

        <section>
          <h2>3. Finalidad del Tratamiento</h2>
          <p>
            Al no recopilar datos personales a través del sitio web, no existe tratamiento de datos personales que deba ser comunicado al usuario.
          </p>
          <p>
            Si nos contactas directamente por teléfono o correo electrónico (medios externos al sitio web), los datos que nos proporciones en ese contexto serán tratados única y exclusivamente para atender tu consulta, sin cederlos a terceros.
          </p>
        </section>

        <section>
          <h2>4. Base Jurídica del Tratamiento</h2>
          <p>
            En virtud del artículo 6 del RGPD, el tratamiento de datos que pudiera realizarse fuera del sitio (por contacto directo) se basa en el consentimiento explícito del interesado y/o en la ejecución de medidas precontractuales.
          </p>
        </section>

        <section>
          <h2>5. Derechos del Usuario</h2>
          <p>
            Conforme al RGPD y a la Ley Orgánica 3/2018 (LOPDGDD), tienes derecho a:
          </p>
          <ul>
            <li><strong>Acceso:</strong> Conocer qué datos tuyos tratamos.</li>
            <li><strong>Rectificación:</strong> Corregir datos inexactos.</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos ("derecho al olvido").</li>
            <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos.</li>
            <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado.</li>
            <li><strong>Limitación:</strong> Solicitar la restricción del tratamiento.</li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, contáctanos en <strong>reformasypinturas@outlook.com</strong> (Acondicionamientos y Restauraciones Tenerife SL, CIF: B76781244). También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
          </p>
        </section>

        <section>
          <h2>6. Seguridad</h2>
          <p>
            Dado que no recopilamos datos personales a través del sitio web, el riesgo de exposición de datos es nulo. Si en el futuro se implementara algún tipo de formulario, se adoptarían las medidas técnicas y organizativas necesarias para garantizar la seguridad de la información.
          </p>
        </section>

        <section>
          <h2>7. Cambios en Esta Política</h2>
          <p>
            Nos reservamos el derecho a modificar esta Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. En tal caso, anunciaremos los cambios en esta misma página con indicación de la fecha de la última actualización.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default PoliticaPrivacidad
