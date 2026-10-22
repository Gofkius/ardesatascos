import '../styles/Services.css'

const Services = () => {
  return (
    <section id='servicios' className='services-section' aria-labelledby='servicios-heading'>
      <div className='services-header'>
        <h2 id='servicios-heading' className='services-title'>
          Especialistas en desatascos en Tenerife 24 horas
        </h2>
        <p className='services-subtitle'>
          Empresa de desatascos urgentes de tuberías para particulares, comunidades de propietarios y negocios en toda la isla de Tenerife.
        </p>
      </div>
      <div className='services-container'>
        <div className='services-main'>
            <article className='service-card card-red'>
                <h3 className='text'>
                    Desatascos domésticos y de urgencia
                </h3>
                <p className='service-desc'>
                    Desatasco de tuberías, fregaderos, inodoros, duchas, bajantes, sifones y arquetas en viviendas y comunidades de vecinos. Intervención rápida las 24 horas y sin obras.
                </p>
            </article>
            <article className='service-card card-light'>
                <h3 className='text'>
                    Localización de fugas de agua mediante gas traza y geófono
                </h3>
                <p className='service-desc'>
                    Detectamos fugas ocultas e inspeccionamos tuberías con cámara, gas trazador y geófono acústico de alta precisión, sin romper paredes ni suelos innecesariamente.
                </p>
            </article>
        </div>
        <div className='services-side'>
            <article className='service-card card-light card-tall'>
                <h3 className='text'>
                    Desatasco de tuberías con camión de agua a presión
                </h3>
                <p className='service-desc'>
                    Limpieza y desatasco de redes de saneamiento, colectores generales, arquetas y alcantarillado en Tenerife mediante camión impulsor de agua a alta presión.
                </p>
            </article>
            <article className='service-card card-green'>
                <h3 className='text'>
                    Camión cuba en Tenerife
                </h3>
                <p className='service-desc'>
                    Vaciado, absorción y limpieza de fosas sépticas, pozos negros, aljibes e inundaciones en garajes o sótanos.
                </p>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Services
