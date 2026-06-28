import '../styles/Services.css'
import { TextAnimate } from './ui/text-animate'

const Services = () => {
  return (
    <div className='services-container'>
        <div className='pipe-container'>
            <div className='pipe-body'></div>
            <img className='pipe-head' src="/src/assets/pipe-head.png" alt="Pipe Head" />
        </div>
        <div className='red-lbig'>
            <div className='red-box'>
                <TextAnimate animation="fadeIn" by="word" className="text">
                    Desatascos domesticos
                </TextAnimate>
                <img className='pj2' src="/src/assets/pj2.png" alt="PJ2" />
            </div>
            <div className='light-big'>
                <TextAnimate animation="fadeIn" by="word" className="text">
                    Localización de fugas de agua mediante gas traza y geófono
                </TextAnimate>
            </div>
        </div>
        <div className='light-green'>
            <div className='light'>
                <TextAnimate animation="fadeIn" by="word" className="text">
                    Desatasco con camión de agua a presión
                </TextAnimate>
            </div>
            <div className='green'>
                <TextAnimate animation="fadeIn" by="word" className="text">
                    Camión cuba
                </TextAnimate>
            </div>
        </div>

    </div>
  )
}

export default Services