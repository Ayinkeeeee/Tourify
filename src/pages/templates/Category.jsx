function Category({category}) {
  return (
    <>
        <section className="start">
            <img src={require("../../assets/images/food.png")} alt="food" />
            <h1>{category.name}</h1>
        </section>
    </>
  )
}

Category.defaultProps = {
    category: {
        name: "Food & Drinks in Abuja",
        categoryImage: "food.png"
    }
}

export default Category