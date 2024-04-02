import Category from "./templates/Category"

function Food() {
  return (
    <Category 
    category={
      {
      categoryName: 'food',
      headingText: "Food & Drinks in Abuja",
      categoryImage: "food",
      introText: "Of course you cant come to Abuja without trying our best spots, where every bite tells a story and every sip is an experience to remember. Indulge your senses as we take you on a journey through our vibrant world of food and drinks, showcasing the best flavors our region has to offer.",
      categories: ["Fine Dining", "Fast Food", "Native Food", "Ice-Cream", "Chinese / Asian", "Italian", "Shawarma", "Cafe"],
      categoriesIDs: ["fine-dining", "fast-food", "native-food", "ice-cream", "chinese-asian", "italian", "shawarma", "cafe"]
    }
  }/>
  )
}

export default Food