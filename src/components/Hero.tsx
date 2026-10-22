import '../styles/Hero.css'

import callIcon from '../assets/call.png'
import messageIcon from '../assets/message.png'
import truck from '../assets/truck.webp'
import pipe from '../assets/pipe.webp'

const PHONE = 'tel:+34608238809'
const WHATSAPP = 'https://wa.me/34608238809?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto%20para%20un%20desatasco.'

const Hero = () => {
  return (
    <section className='hero-container' aria-label='Desatascos urgentes en Tenerife 24 horas'>
        <div className='hero-hook'>
            <h1 className='hook'>
                <span className='hero-kicker'>Desatascos urgentes en Tenerife 24 horas</span>
                ¿El agua no traga y los olores no te dejan vivir? Lo solucionamos ahora.
            </h1>
            <p className='sub-hook'>
                Empresa especialista en desatascos de tuberías en Tenerife Norte y Sur, disponible 24/7. ¡Presupuestos gratuitos y precios sin compromiso!
            </p>
            <div className='button-container'>
                <a href={PHONE} className='callbutton'>
                    <img src={callIcon} alt="" width={20} height={20} />
                    <span>Llámanos</span>
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className='messagebutton'>
                    <img src={messageIcon} alt="" width={20} height={20} />
                    <span>Escríbenos</span>
                </a>
            </div>
        </div>
        <div className='hero-image'>
            <div className='hero-red'>
                <img className='truck' src={truck} alt='Furgón de AR Desatascos urgentes 24 horas en Tenerife' fetchPriority='high' decoding='async' />
                <img className='pipe' src={pipe} alt='' aria-hidden='true' decoding='async' />
            </div>
        </div>
    </section>
  )
}

export default Hero
