import LocationsCategory from "../../components/sections/LocationsCategory"
import Header from "../../components/sections/Header"
import Footer from "../../components/sections/Footer"
import { motion } from "framer-motion"

function Category({category}) {

  return (
    <motion.div 
      className="category" 
      id={`${category.categoryName}`}
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
    >
      <Header/>
        <section className="start">
            <motion.img 
              src={require(`../../assets/images/${category.categoryImage}`)} alt="food" 
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.3}}
            />
            <h1>{category.headingText}</h1>
        </section>
        <main>
          <p>{category.introText}</p>
          <div className="categoriesBtns">
            {category.categories && category.categories.map((categoryName, index) => (
              <a  href={`#${category.categoriesIDs[index]}`} key={index} className={`categoryBtn ${index % 2 === 0 ? 'blue' : 'black'}`}>
                {categoryName}
              </a>
            ))}
          </div>
          {category.categories && category.categories.map((categoryItem, index)  =>     <LocationsCategory key={index} categoryName={categoryItem} id={category.categoriesIDs[index]} stagger={index}/>)
          }
        </main>
        <Footer/>
    </motion.div>
  )
}

Category.defaultProps = {
    category: {
      categoryName: 'food.png',
      headingText: "Food & Drinks in Abuja",
      categoryImage: "food",
      introText: "Of course you cant come to Abuja without trying our best spots, where every bite tells a story and every sip is an experience to remember. Indulge your senses as we take you on a journey through our vibrant world of food and drinks, showcasing the best flavors our region has to offer.",
      categories: ["Fine Dining", "Fast Food", "Native Food", "Ice-Cream", "Chinese / Asian", "Italian", "Shawarma", "Cafe"],
      categoriesIDs: ["fine-dining", "fast-food", "native-food", "ice-cream", "chinese-asian", "italian", "shawarma", "cafe"]
    }
}

export default Category