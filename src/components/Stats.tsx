import '../styles/Stats.css'
import Statistic from './Statistic'

const Stats = () => {
  return (
    <div className='stats-container'>
        <img src="/src/assets/metal-pipe.png" alt="MPipe" />
        <div className='stats'>
          <Statistic title='Desatascos realizados' number={15000}/>
          <Statistic title='Disponibilidad' text='24/7'/>
          <Statistic title='Años de experiencia' number={20}/>
        </div>
    </div>
  )
}

export default Stats