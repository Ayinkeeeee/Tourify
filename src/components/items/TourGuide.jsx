import tomski from "../../assets/images/tomski.png"
import quote from "../../assets/icons/quote.svg"
import { motion } from "framer-motion";

function TourGuide() {
  return (
    <motion.div 
      className="tourGuideItem"
      initial={{opacity: 0, y: 100}}
      whileInView={{opacity: 1, y: 0, transition: {duration: 0.45}}}
      viewport={{once: true, amount: 0.5 }}
    >
        <img className="person" src={tomski} alt="tomi" />
        <p className="fname">Tomi</p>
        <p className="specialty">Domestic tours</p>
        <p className="statement">I'm Chinaza, your friendly neighbourhood tour guide with a passion for showcasing the rich tapestry of culture history, and natural beauty that our destinations have to offer
        <img className="q1" src={quote} alt="quote" />
        <img className="q2" src={quote} alt="quote" /></p>
        <p className="phone">07068833047</p>
    </motion.div>
  )
}

export default TourGuide