import Review from "../items/Review"

function ReviewsModal({reviews}) {
  return (
    <div className="all_reviews">
        {reviews && reviews.map((review, index) => <Review/> )}
    </div>
  )
}

export default ReviewsModal