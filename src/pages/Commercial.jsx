import Category from "./templates/Category"

function Commercial() {
  return (
    <Category 
    category={
      {
      categoryName: 'commercial',
      headingText: "Commercial Locations",
      categoryImage: "commercialbackgrounf.png",
      introText: "Welcome to the heart of adventure, where every moment is a new opportunity for excitement! Whether you're seeking a serene escape or a pulse-quickening thrill, our handpicked selection of leisure activities, accommodations, and shopping destinations promises to make your stay unforgettable.",
      categories: ["Leisure", "Shopping Malls", "Hotels", "For The Kids",],
      categoriesIDs: ["leisure", "shopping-malls", "hotels", "for-the-kids",]
    }
  }/>
  )
}

export default Commercial