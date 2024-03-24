import LocationHome from "../items/LocationHome"

function RelatedLocations() {
  return (
    <section className="locationsGroup">
      <h1>{data.header}</h1>
      <div className="locations">
        {data.locations && data.locations.map((location, index) => <LocationHome key={index} />)}
      </div>
      <p className="full_list">View Full List</p>
    </section>
  )
}

export default RelatedLocations