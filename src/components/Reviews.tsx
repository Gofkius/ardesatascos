import { Marquee } from "@/components/ui/marquee"
import '../styles/Reviews.css'
import ReviewCard from "./ReviewCard"

const Reviews = () => {
  const reviews = [
    { stars: 5, review: "Un servicio impecable. Llamamos por urgencia y acudieron rapidísimo. Muy profesionales.", by: "Maria T." },
    { stars: 5, review: "Excelente trato y precio justo. Resolvieron el atasco de la cocina en menos de una hora.", by: "Juan R." },
    { stars: 5, review: "Muy atentos, rápidos y profesionales. Nos explicaron todo claramente.", by: "Carlos P." },
    { stars: 5, review: "Muy profesionales, equipamiento moderno y dejaron todo limpio al terminar. De 10.", by: "Andrés M." },
    { stars: 5, review: "Atención 24h de verdad. Nos solucionaron el problema de madrugada. Muy recomendados.", by: "Sofía G." },
    { stars: 5, review: "Presupuesto sin compromiso real y sin sorpresas. Muy honestos.", by: "Laura S." }
  ]

  return (
    <div className='reviews-container'> 
        <Marquee repeat={6} className="reviews-marquee">
            {reviews.map((item, idx) => (
                <ReviewCard key={idx} stars={item.stars} review={item.review} by={item.by} />
            ))}
        </Marquee>
    </div>
  )
}

export default Reviews