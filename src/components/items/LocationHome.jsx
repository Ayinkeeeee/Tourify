function LocationHome({location}) {
  return (
    <div className="locationItem">
        <div className="image-container">{location.locationName}</div>
        <div>{location.rating} / 5</div>
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