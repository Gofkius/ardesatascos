import { NumberTicker } from './ui/number-ticker'

type Props = {
  title: string,
  number?: number,
  text?: string,
}

const Statistic = (props: Props) => {
  return (
    <div className='statistic'>
      <p className='statistic-title'>
        {props.title}
      </p>
      <p className='statistic-number'>
        {props.number ? 
        <>
          +
          <NumberTicker className='statistic-number' value={props.number}/>
        </> 
        : props.text}
      </p>
    </div>
  )
}

export default Statistic