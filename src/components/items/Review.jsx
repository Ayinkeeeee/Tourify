function Review({review}) {
  return (
    <div className="review">
        <img src={require(`../../assets/images/${review.pic}`)} alt="" />
        <p>{review.review}</p>
    </div>
  )
}

Review.defaultProps = {
    review: {
        pic: 'tomski.png',
        fname: 'Jane',
        rating: 4,
        review: 'I love art and I enjoyed visiting Nike Art gallery and discovering new forms of art. I also love that you can buy some of the pieces on display'
    }
}

export default Review