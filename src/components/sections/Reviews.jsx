function Reviews({reviews}) {
  return (
    <section className="reviewsGroup">
        <h1>Reviews</h1>
    </section>
  )
}

Reviews.defaultProps = {
    reviews: [0, 0, 0, 0, 0]
}

export default Reviews