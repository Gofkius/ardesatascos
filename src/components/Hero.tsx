import '../styles/Hero.css'
import { TextAnimate } from "@/components/ui/text-animate"

import callIcon from '../assets/call.png'
import messageIcon from '../assets/message.png'
import truck from '../assets/truck.png'
import pipe from '../assets/pipe.png'

const PHONE = 'tel:+34608238809'
const WHATSAPP = 'https://wa.me/34608238809?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto%20para%20un%20desatasco.'

const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-hook'>
            <h1 className='hook'>
                <TextAnimate as="span" animation="fadeIn" by="word" className='hook-question'>
                    ¿El agua no traga y los olores no te dejan vivir?
                </TextAnimate>
                <TextAnimate as="span" animation="fadeIn" by="word" delay={0.35} className='hook-punch'>
                    Lo solucionamos ahora.
                </TextAnimate>
            </h1>
            <ul className='sub-hook'>
                <li className='hook-chip'>Disponible 24/7</li>
                <li className='hook-chip'>Presupuesto gratuito</li>
                <li className='hook-chip'>Sin compromiso</li>
            </ul>
            <div className='button-container'>
                <a href={PHONE} className='callbutton'>
                    <img src={callIcon} alt="" />
                    <span>Llámanos</span>
                </a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className='messagebutton'>
                    <img src={messageIcon} alt="" />
                    <span>Escríbenos</span>
                </a>
            </div>
        </div>
        <div className='hero-image'>
            <div className='hero-red'>
                <img className='truck' src={truck} alt='' />
                <img className='pipe' src={pipe} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Hero
