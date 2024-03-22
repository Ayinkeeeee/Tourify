import jlm from "../../assets/images/jlm.jpg";

function LocationHome({location}) {
  return (
    <div className="locationItem">
        <div className="image-container">
            <img src={jlm} alt="jabi_lake_mall" />
        </div>
        <p className="name">{location.locationName}</p>
        <p className="rating">{location.rating} / 5</p>
    </div>
  )
}

LocationHome.defaultProps = {
    location: {
        locationName: "Jabi Lake Mall",
        rating: 4.5
    }
}

export default LocationHome