import "../../css/LocationFull.css"
import jlm from "../../assets/images/jlm.jpg"
import map from "../../assets/images/map.png"
import email from "../../assets/icons/email.svg"
import call from "../../assets/icons/call.svg"
import instagram from "../../assets/icons/instagram.png"
import fb from "../../assets/icons/fb.png"
import locationMarker from "../../assets/icons/location_blue.svg"
import car from "../../assets/icons/car.svg"
import star from "../../assets/icons/star.svg"
import greyStar from "../../assets/icons/star_gray.svg"
import Reviews from "../../components/sections/Reviews"
import ReviewsModal from "../../components/sections/ReviewsModal"
import RelatedLocations from "../../components/sections/RelatedLocations"
import ModalContext from "../../context/ModalContext"
import { toast, ToastContainer } from "react-toastify"
import { useState, useContext } from "react"

function LocationFull({full_location}) {
    const [ review, setReview ] = useState('')
    const { showReviews } = useContext(ModalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(review !== ''){
            toast.success("We got your review")
        }else{
            toast.error("Please enter some text")
        }
        setReview('')
    }

    const handleChange = (e) => {
        setReview(e.target.value);
    }

  return (
        <div className="full_location">
            <ToastContainer/>
            <div className="img-container">
                <img src={jlm} alt="Jabi lake mall" />
            </div>
            <main>
                <h2>{full_location?.locationName}</h2>
                <p className="full_address">{full_location?.address}</p>
                <div className="rating">{full_location.rating} / 5 <img src={star} alt="star"/> </div>
                <div className="budgetItems">
                    {full_location.budget ? full_location.budget.map((budgetItem, index) => 
                    <p className={`budget ${index % 2 === 0 ? "blue" : 'black'}`}>{budgetItem}</p>) : <p className="budget red">Budget unavailable</p>}
                </div>
                <h3>Location</h3>
                <div className="map">
                    <img src={map} alt="Map" />
                </div>
                <div className="contact_trip">
                    <div className="contact">
                        <div>
                            <img src={call} alt="call" />
                            <p>{full_location.phone}</p>
                        </div>
                        <div>
                            <img src={fb} alt="facebook" />
                            <p>{full_location.facebook}</p>
                        </div>
                        <div>
                            <img src={instagram} alt="instagram" />
                            <p>{full_location.instagram}</p>
                        </div>
                        <div>
                            <img src={email} alt="email" />
                            <p>@{full_location.email}</p>
                        </div>
                    </div>
                    <div className="trip">
                        <div className="maps">
                            <img src={locationMarker} alt="location" />
                            <p>Open in Google Maps</p>
                        </div>
                        <div className="bolt">
                            <img src={car} alt="car" />
                            <p>Book a Bolt</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <p>Already visited here? <label htmlFor="review">Leave a Review</label></p>
                    <textarea name="review" id="review" cols="30" rows="10" placeholder="It was okay, I guess" value={review} onChange={handleChange}></textarea>
                    <div className="rating">
                        <p>Rating: </p>
                        <div className="stars">
                            <img src={greyStar} alt="star"/>
                            <img src={greyStar} alt="star"/>
                            <img src={greyStar} alt="star"/>
                            <img src={greyStar} alt="star"/>
                            <img src={greyStar} alt="star"/>
                        </div>
                    </div>
                    <button class="main">Submit</button>
                </form>
                <Reviews/>
                <RelatedLocations/>
            </main>
            {showReviews && <ReviewsModal reviews={[0, 0, 0, 0, 0]}/>}
        </div>
  )
}

LocationFull.defaultProps = {
    full_location : {
        locationName: "Nike Art Gallery",
        address: "5 Usuma St, Three Arms Zone, Abuja 900103, Federal Capital Territory",
        rating: 4.5,
        budget: ["Free for Individual", "Fee for Groups"],
        phone: "080-0000-0000",
        instagram: 'nike_arts',
        facebook: 'nike_arts',
        email: 'nikearts@gmail.com'
    }
}

export default LocationFull