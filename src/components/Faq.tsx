import '../styles/Faq.css'

const FAQ_ITEMS = [
  {
    question: '¿Cuál es el precio de un desatasco en Tenerife?',
    answer:
      'El precio de un desatasco en Tenerife depende del tipo de avería (fregadero, inodoro, bajante comunitaria, arqueta o vaciado con camión cuba) y de la maquinaria necesaria. En AR Desatascos ofrecemos presupuesto gratuito, personalizado y sin compromiso antes de empezar cualquier trabajo, con precios claros y sin sorpresas.',
  },
  {
    question: '¿Realizan desatascos urgentes las 24 horas en toda la isla de Tenerife?',
    answer:
      'Sí, somos una empresa de desatascos urgentes en Tenerife disponible las 24 horas del día, los 7 días de la semana (incluidos domingos y festivos). Acudimos con rapidez tanto a Santa Cruz de Tenerife y La Laguna como a cualquier municipio de Tenerife Sur y Tenerife Norte.',
  },
  {
    question: '¿Cómo funciona la localización de fugas de agua sin obras?',
    answer:
      'Utilizamos tecnología avanzada de detección mediante gas traza (gas trazador inocuo) y geófono acústico, además de cámaras de inspección de tuberías. Esto nos permite localizar el punto exacto de la fuga bajo el suelo o dentro de la pared sin necesidad de romper ni levantar pavimentos innecesariamente.',
  },
  {
    question: '¿Disponen de camión cuba y agua a alta presión para comunidades y fosas sépticas?',
    answer:
      'Sí, contamos con camión cuba y equipos de agua a alta presión en Tenerife para el vaciado y limpieza de fosas sépticas, pozos negros, arquetas, colectores generales y achique de inundaciones en garajes de comunidades de propietarios, hoteles, empresas y viviendas particulares.',
  },
  {
    question: '¿Qué problemas de tuberías y malos olores solucionan?',
    answer:
      'Solucionamos cualquier obstrucción en redes de fontanería y saneamiento: fregaderos de cocina que no tragan, inodoros y platos de ducha atascados, malos olores procedentes de arquetas o sifones, raíces o cal en tuberías, y limpieza preventiva para evitar futuras urgencias.',
  },
]

const Faq = () => {
  return (
    <section id='faq' className='faq-container' aria-labelledby='faq-heading'>
      <h2 id='faq-heading' className='faq-title'>
        Preguntas frecuentes sobre desatascos y precios en Tenerife
      </h2>
      <p className='faq-subtitle'>
        Resolvemos las dudas más habituales sobre nuestros servicios de desatascos 24 horas, tarifas y tiempos de respuesta.
      </p>

      <div className='faq-list'>
        {FAQ_ITEMS.map((item, idx) => (
          <details key={idx} className='faq-item' open={idx === 0}>
            <summary className='faq-question'>
              <span>{item.question}</span>
              <span className='faq-icon' aria-hidden='true'>+</span>
            </summary>
            <div className='faq-answer'>
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}

export default Faq

