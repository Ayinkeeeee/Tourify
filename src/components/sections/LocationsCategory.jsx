import LocationCategory from "../items/LocationCategory"

function LocationsCategory({data, id}) {
  return (
    <section id={id} className="locationsGroup">
      <h1>{data.header}</h1>
      <div className="locations">
        {data.locations && data.locations.map((location, index) => <LocationCategory key={index} location={location}/> )}
      </div>
    </section>
  )
}

LocationsCategory.defaultProps = {
    data: {
        header: "Popular Locations",
        locations: [
          [
            {
              locationName: "Jabi Lake Mall",
              address: "Bala Sokoto Way, Jabi, Abuja",
              rating: 4.5,
              pic: 'lake_mall.jpg'
            },
            {
              locationName: "Jabi Lake Mall",
              address: "Bala Sokoto Way, Jabi, Abuja",
              rating: 4.5,
              pic: 'lake_mall.jpg'
            },
            {
              locationName: "Jabi Lake Mall",
              address: "Bala Sokoto Way, Jabi, Abuja",
              rating: 4.5,
              pic: 'lake_mall.jpg'
            },
            {
              locationName: "Jabi Lake Mall",
              address: "Bala Sokoto Way, Jabi, Abuja",
              rating: 4.5,
              pic: 'lake_mall.jpg'
            },
            {
              locationName: "Jabi Lake Mall",
              address: "Bala Sokoto Way, Jabi, Abuja",
              rating: 4.5,
              pic: 'lake_mall.jpg'
            }
          ]
        ]
    }
}

export default LocationsCategory