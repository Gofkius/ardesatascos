import '../styles/Hero.css'
import { TextAnimate } from "@/components/ui/text-animate"

const PHONE = 'tel:+34608238809'
const WHATSAPP = 'https://wa.me/34608238809?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto%20para%20un%20desatasco.'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-hook'>
            <TextAnimate animation="fadeIn" by="word" className='hook'>
                ¿El agua no traga y los olores no te dejan vivir? Lo solucionamos ahora.
            </TextAnimate>
            <TextAnimate animation="fadeIn" by="word" delay={0.25} className='sub-hook'>
                Servicio disponible 24/7, presupuestos gratuitos y sin compromiso!
            </TextAnimate>
            <div className='button-container'>
                <a href={PHONE} className='callbutton'>
                    <img src="/src/assets/call.png" alt="Tlf" />
                    <h1>Llámanos</h1>
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className='messagebutton'>
                    <img src="/src/assets/message.png" alt="Msg" />
                    <h1>Escribenos</h1>
                </a>
            </div>
        </div>
        <div className='hero-image'>

            <div className='hero-red'>
                <img className='pj1' src="/src/assets/pj1.png" alt="pj1" />
                <img className='water-squirt' src="/src/assets/water-squirt.png" alt="water-squirt" />
                <img className='pipe-crack' src="/src/assets/pipe-crack.png" alt="pipe-crack" />
                <img className='pipe' src='/src/assets/pipe.png' alt='pipe' />
            </div>
        </div>
    </div>
  )
}

export default Hero