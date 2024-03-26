import Review from "../items/Review"

function Reviews({reviews}) {
  return (
    <section className="reviewsGroup">
        <h1>Reviews</h1>
        <div className="reviews">
          {reviews && reviews.slice(0, 3).map((review, index) => <Review key={index}/>)}
        </div>
        {reviews.length > 3 && <p>+{reviews.length - 3} More Reviews</p>}
    </section>
  )
}

Reviews.defaultProps = {
    reviews: [0, 0, 0, 0, 0]
}

export default Reviews