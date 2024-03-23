import jlm from "../../assets/images/jlm.jpg";
import star from "../../assets/icons/star.svg";
import locationMarker from "../../assets/icons/location.svg"

function LocationCategory({location}) {
  return (
    <div className="locationItem">
        <div className="image-container">
            <img src={jlm} alt="jabi_lake_mall" />
        </div>
        <div className="text">
            <p className="name">{location.locationName}</p>
            <div className="rating">
                <p className="rating">{location.rating} / 5</p>
                <img src={star} alt="star"/>
            </div>
            <div className="location">
                <img src={locationMarker} alt="location marker" />
                <p className="address">{location.address}</p>
            </div>
        </div>
    </div>
  )
}

LocationCategory.defaultProps = {
    location: {
        locationName: "Jabi Lake Mall",
        rating: 4.5,
        address: "Bala Sokoto Wy, Jabi, Abuja 900108, Federal Capital Territory"
    }
}

export default LocationCategory