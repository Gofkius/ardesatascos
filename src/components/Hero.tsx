import '../styles/Hero.css'
import { TextAnimate } from "@/components/ui/text-animate"

import callIcon from '../assets/call.png'
import messageIcon from '../assets/message.png'
import pj1 from '../assets/pj1.png'
import waterSquirt from '../assets/water-squirt.png'
import pipeCrack from '../assets/pipe-crack.png'
import pipe from '../assets/pipe.png'

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
                    <img src={callIcon} alt="Tlf" />
                    <h1>Llámanos</h1>
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className='messagebutton'>
                    <img src={messageIcon} alt="Msg" />
                    <h1>Escribenos</h1>
                </a>
            </div>
        </div>
        <div className='hero-image'>

            <div className='hero-red'>
                <img className='pj1' src={pj1} alt="pj1" />
                <img className='water-squirt' src={waterSquirt} alt="water-squirt" />
                <img className='pipe-crack' src={pipeCrack} alt="pipe-crack" />
                <img className='pipe' src={pipe} alt='pipe' />
            </div>
        </div>
    </div>
  )
}

export default Hero