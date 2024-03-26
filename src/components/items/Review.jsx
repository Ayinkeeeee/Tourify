import {ReactComponent as Star} from "../../assets/icons/star.svg"

function Review({review}) {
  return (
    <div className="reviewItem">
        <div className="person">
          <img src={require(`../../assets/images/${review.pic}`)} alt="" />
          <div className="name_rating">
            <div className="fname">{review.fname}</div>
            <div className="rating"><Star/><Star/><Star/><Star/><Star/> <p>{review.rating}</p></div>
          </div>
        </div>
        <p>{review.review}</p>
        <div className="time">
          {review.time}
        </div>
    </div>
  )
}

Review.defaultProps = {
    review: {
        pic: 'tomski.png',
        fname: 'Tomi',
        rating: '4.0',
        review: 'I love art and I enjoyed visiting Nike Art gallery and discovering new forms of art. I also love that you can buy some of the pieces on display',
        time: '1 week ago'
    }
}

export default Review