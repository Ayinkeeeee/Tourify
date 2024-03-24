import tomski from "../../assets/images/tomski.png"
import quote from "../../assets/icons/quote.svg"
import location from "../../assets/icons/location.svg"

function Testimonial() {
  return (
    <div className="reviewItem">
        <img className="person" src={tomski} alt="tomi" />
        <p className="fname">Tomi</p>
        <p className="location"><img src={location} alt="location marker" />Digital Nomad</p>
        <p className="review">Tourify gave me a warm welcome to the city of Abuja and let me know the best places to go to.
        <img className="q1" src={quote} alt="quote" />
        <img className="q2" src={quote} alt="quote" /></p>
    </div>
  )
}

export default Testimonial