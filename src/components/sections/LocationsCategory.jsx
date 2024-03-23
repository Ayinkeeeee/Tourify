import LocationHome from "../items/LocationHome"

function LocationsHome({data}) {
  return (
    <section className="locationsGroup">
      <h1>{data.header}</h1>
      <p>{data.text}</p>
      <div className="locations">
        {data.locations && data.locations.map((location, index) => <LocationHome key={index} />)}
      </div>
      <p className="full_list">View Full List</p>
    </section>
  )
}

LocationsHome.defaultProps = {
    data: {
        header: "Popular Locations",
        text: "Tourists and residents seem to love these  spots. You should probably check some of them out during your stay here.",
        locations: [0, 0, 0]
    }
}

export default LocationsHome