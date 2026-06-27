import { Marquee } from "@/components/ui/marquee"
import '../styles/Reviews.css'
import ReviewCard from "./ReviewCard"

const Reviews = () => {
  return (
    <div className='reviews-container'> 
        <Marquee repeat={15}>
            <ReviewCard stars={5} review="Un servicio impecable. Llamamos por un problema urgente y acudieron muy rápido. El equipo fue muy profesional, explicaron detalladamente el origen de la avería y dejaron todo completamente limpio al terminar. Totalmente recomendados." by="Maria T." />
        </Marquee>
    </div>
  )
}

export default Reviews