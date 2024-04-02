import Category from "./templates/Category"

function Healthcare() {
  return (
    <Category 
    category={
      {
      categoryName: 'healthcare',
      headingText: "Healthcare",
      categoryImage: "healthcarebackground.png",
      introText: "Prioritizing healthcare while enjoying life is crucial for maintaining overall well-being and longevity. While it's essential to have fun and pursue activities that bring joy and fulfillment, neglecting health can lead to long-term consequences that diminish the quality of life.",
      categories: ["Hospitals", "Pharmacies", "Clinics",],
      categoriesIDs: ["hospitals", "pharmacies", "clinics",]
    }
  }/>
  )
}

export default Healthcare