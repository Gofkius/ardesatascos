import '../styles/ReviewCard.css'
import filledStar from '../assets/filled-star.svg'
import unfilledStar from '../assets/unfilled-star.svg'

type Review = {
    stars: number,
    review: string,
    by: string,
}

const ReviewCard = (props: Review) => {
  return (
    <div className="review-card">
        <div className="review-stars" role="img" aria-label={`${props.stars} de 5 estrellas`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <img
                  key={i}
                  src={i < props.stars ? filledStar : unfilledStar}
                  alt=""
                  aria-hidden="true"
                  className="star-icon"
                />
            ))}
        </div>
        <p className="review-text">
            "{props.review}"
        </p>
        <p className="review-author">
            - {props.by}
        </p>
    </div>
  )
}

export default ReviewCard