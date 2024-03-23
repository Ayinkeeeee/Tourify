import LocationCategory from "../items/LocationCategory"

function LocationsCategory({data, id, categoryName}) {
  return (
    <section id={id} className="locationsGroup">
      <h1>{categoryName}</h1>
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