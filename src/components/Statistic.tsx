import { NumberTicker } from './ui/number-ticker'

type Props = {
  title: string,
  number?: number,
  text?: string,
}

const Statistic = (props: Props) => {
  return (
    <div className='statistic'>
      <h1 className='statistic-title'>
        {props.title}
      </h1>
      <h1 className='statistic-number'>
        {props.number ? 
        <>
          +
          <NumberTicker className='statistic-number' value={props.number}/>
        </> 
        : props.text}
      </h1>
    </div>
  )
}

export default Statistic