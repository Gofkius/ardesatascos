import '../styles/Rehook.css'

import callIcon from '../assets/call.png'
import messageIcon from '../assets/message.png'

const PHONE = 'tel:+34608238809'
const WHATSAPP = 'https://wa.me/34608238809?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20un%20presupuesto%20para%20un%20desatasco.'

const Rehook = () => {
  return (
    <div className='rehook-container'>
        <h2 className='hook'>
            ¿Listo para pedir tu presupuesto?
        </h2>
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
  )
}

export default Rehook