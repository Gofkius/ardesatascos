import '../styles/Stats.css'
import Statistic from './Statistic'

import metalPipe from '../assets/metal-pipe.png'

const Stats = () => {
  return (
    <div className='stats-container'>
        <img src={metalPipe} alt="MPipe" />
        <div className='stats'>
          <Statistic title='Desatascos realizados' number={15000}/>
          <Statistic title='Disponibilidad' text='24/7'/>
          <Statistic title='Años de experiencia' number={20}/>
        </div>
    </div>
  )
}

export default Stats