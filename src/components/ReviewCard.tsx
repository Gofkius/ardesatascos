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
        <div className="review-stars">
            {Array.from({ length: 5 }).map((_, i) => (
                <img 
                  key={i} 
                  src={i < props.stars ? filledStar : unfilledStar}
                  alt="star"
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