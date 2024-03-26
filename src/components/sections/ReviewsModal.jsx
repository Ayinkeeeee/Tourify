import Review from "../items/Review"

function ReviewsModal({reviews}) {
  return (
    <section className="all_reviews reviewsGroup">
        <h1>Reviews</h1>
        <div className="reviews">
            {reviews && reviews.map((review, index) => <Review/> )}
        </div>
        <button className="main">Close</button>
    </section>
  )
}

export default ReviewsModal