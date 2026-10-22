import '../styles/Zones.css'

const Zones = () => {
  return (
    <section id='zonas' className='zones-container' aria-labelledby='zonas-heading'>
      <h2 id='zonas-heading' className='zones-title'>
        Servicio de desatascos en todo Tenerife: Norte, Sur y Área Metropolitana
      </h2>
      <p className='zones-subtitle'>
        Ofrecemos todos nuestros servicios —desatascos domésticos y urgentes 24h, camión cuba, agua a alta presión y localización de fugas sin obras— en todos los municipios de Tenerife, los 365 días del año.
      </p>

      <div className='zones-grid'>
        <article className='zone-card'>
          <h3>Área Metropolitana</h3>
          <p>
            Cobertura completa 24 horas con todos nuestros servicios de desatascos, camión cuba y detección de fugas en:
          </p>
          <ul className='zone-list'>
            <li>Santa Cruz de Tenerife</li>
            <li>San Cristóbal de La Laguna</li>
            <li>El Rosario y Tegueste</li>
            <li>Candelaria</li>
            <li>Arafo</li>
            <li>Güímar</li>
            <li>Fasnia</li>
          </ul>
        </article>

        <article className='zone-card'>
          <h3>Tenerife Sur</h3>
          <p>
            Cobertura completa 24 horas con todos nuestros servicios de desatascos, camión cuba y detección de fugas en:
          </p>
          <ul className='zone-list'>
            <li>Arona (Los Cristianos, Las Américas)</li>
            <li>Adeje (Costa Adeje)</li>
            <li>Granadilla de Abona (El Médano, San Isidro)</li>
            <li>San Miguel de Abona</li>
            <li>Guía de Isora</li>
            <li>Santiago del Teide</li>
            <li>Arico y Vilaflor</li>
          </ul>
        </article>

        <article className='zone-card'>
          <h3>Tenerife Norte</h3>
          <p>
            Cobertura completa 24 horas con todos nuestros servicios de desatascos, camión cuba y detección de fugas en:
          </p>
          <ul className='zone-list'>
            <li>Puerto de la Cruz</li>
            <li>La Orotava y Los Realejos</li>
            <li>Tacoronte y El Sauzal</li>
            <li>La Matanza, La Victoria y Santa Úrsula</li>
            <li>Icod de los Vinos y San Juan de la Rambla</li>
            <li>Garachico y Los Silos</li>
            <li>Buenavista del Norte y El Tanque</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Zones
