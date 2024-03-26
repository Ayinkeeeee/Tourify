import LocationCategory from "../items/LocationCategory"

function RelatedLocations({data}) {
  return (
    <section id="related" className="locationsGroup">
      <h1>Related</h1>
      <div className="locations">
        {data.locations && data.locations.map((location, index) => <LocationCategory key={index} />)}
      </div>
      <p className="full_list">See More</p>
    </section>
  )
}

RelatedLocations.defaultProps = {
    data: {
        header: "Popular Locations",
        text: "Tourists and residents seem to love these  spots. You should probably check some of them out during your stay here.",
        locations: [0, 0, 0]
    }
}

export default RelatedLocations