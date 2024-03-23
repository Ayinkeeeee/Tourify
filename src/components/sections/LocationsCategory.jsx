import LocationCategory from "../items/LocationCategory"

function LocationsCategory({data}) {
  return (
    <section className="locationsGroup">
      <h1>{data.header}</h1>
      <div className="locations">
        {data.locations && data.locations.map((location, index) => <LocationCategory key={index} />)}
      </div>
      <p className="full_list">View Full List</p>
    </section>
  )
}

LocationsCategory.defaultProps = {
    data: {
        header: "Popular Locations",
        locations: [0, 0, 0, 0, 0, 0]
    }
}

export default LocationsCategory