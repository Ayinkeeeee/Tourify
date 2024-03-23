import tomski from "../../assets/images/tomski.png"
import quote from "../../assets/icons/quote.svg"

function TourGuide() {
  return (
    <div className="reviewItem">
        <img className="person" src={tomski} alt="tomi" />
        <p className="fname">Tomi</p>
        <p className="location"><img src={location} alt="location marker" />Digital Nomad</p>
        <p className="review">I'm Chinaza, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer
        <img className="q1" src={quote} alt="quote" />
        <img className="q2" src={quote} alt="quote" /></p>
        <p>07068833047</p>
    </div>
  )
}

export default TourGuide