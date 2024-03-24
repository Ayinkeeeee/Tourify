import jlm from "../../assets/images/jlm.jpg";
import star from "../../assets/icons/star.svg";

function LocationHome({location}) {
  return (
    <div className="locationItem">
        <div className="image-container">
            <img src={jlm} alt="jabi_lake_mall" />
            <p>View Location</p>
        </div>
        <div className="text">
            <p className="name">{location.locationName}</p>
            <div>
                <p className="rating">{location.rating} / 5</p>
                <img src={star} alt="star"/>
            </div>
        </div>
    </div>
  )
}

LocationHome.defaultProps = {
    location: {
        locationName: "Jabi Lake Mall",
        rating: 4.5,
        address: "Bala Sokoto Wy, Jabi, Abuja 900108, Federal Capital Territory"
    }
}

export default LocationHome