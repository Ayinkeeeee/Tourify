import LocationHome from "../items/LocationHome"
import { useState } from "react"

function LocationsHome({data}) {
  return (
    <section className="locationsGroup">
      <h2>{data.header}</h2>
      <p>{data.text}</p>
      <div className="locations">
        {data.locations && data.locations.map((location, index) => <LocationHome key={index} />)}
      </div>
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