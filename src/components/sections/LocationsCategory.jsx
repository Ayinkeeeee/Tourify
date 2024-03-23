import LocationCategory from "../items/LocationCategory"

function LocationsCategory({data, id}) {
  return (
    <section id={id} className="locationsGroup">
      <h1>{id}</h1>
      <div className="locations">
        {data.locations && data.locations.map((location, index) => <LocationCategory key={index} />)}
      </div>
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