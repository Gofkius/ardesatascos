import '../styles/Services.css'
import { TextAnimate } from './ui/text-animate'

const Services = () => {
  return (
    <section className='services-container' aria-label='Servicios'>
        <div className='services-main'>
            <article className='service-card card-red'>
                <TextAnimate as="h2" animation="fadeIn" by="word" className="text">
                    Desatascos domésticos
                </TextAnimate>
                <p className='service-desc'>
                    Fregaderos, inodoros, bajantes y arquetas. Intervención rápida y sin obras.
                </p>
            </article>
            <article className='service-card card-light'>
                <TextAnimate as="h2" animation="fadeIn" by="word" className="text">
                    Localización de fugas de agua mediante gas traza y geófono
                </TextAnimate>
                <p className='service-desc'>
                    Detectamos la fuga con precisión, sin abrir paredes ni suelos innecesariamente.
                </p>
            </article>
        </div>
        <div className='services-side'>
            <article className='service-card card-light card-tall'>
                <TextAnimate as="h2" animation="fadeIn" by="word" className="text">
                    Desatasco con camión de agua a presión
                </TextAnimate>
                <p className='service-desc'>
                    Limpieza de tuberías y colectores con agua a alta presión.
                </p>
            </article>
            <article className='service-card card-green'>
                <TextAnimate as="h2" animation="fadeIn" by="word" className="text">
                    Camión cuba
                </TextAnimate>
                <p className='service-desc'>
                    Vaciado de fosas sépticas y pozos negros.
                </p>
            </article>
        </div>
    </section>
  )
}

export default Services
