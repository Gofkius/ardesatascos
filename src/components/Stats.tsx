import '../styles/Stats.css'
import Statistic from './Statistic'

import metalPipe from '../assets/metal-pipe.webp'

const Stats = () => {
  return (
    <section className='stats-container' aria-label='Experiencia de nuestra empresa de desatascos en Tenerife'>
        <img src={metalPipe} alt="" aria-hidden="true" loading="lazy" decoding="async" />
        <div className='stats'>
          <Statistic title='Desatascos realizados en Tenerife' number={15000}/>
          <Statistic title='Urgencias 24 horas' text='24/7'/>
          <Statistic title='Años de experiencia' number={20}/>
        </div>
    </section>
  )
}

export default Stats