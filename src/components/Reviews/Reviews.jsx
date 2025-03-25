import { Review } from '../Review/Review';

export function Reviews({ reviews }) {
    return (
        reviews.map(review => (
            <Review key={review.id} review={review}/>
        ))
    )
}