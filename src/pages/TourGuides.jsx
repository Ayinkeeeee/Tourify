import tourGuides from "../assets/images/tour_guides.png"
import TourGuide from "../components/items/TourGuide"
import GuideQnA from "../components/items/GuideQnA"
import Header from "../components/sections/Header"
import Footer from "../components/sections/Footer"
import { motion } from "framer-motion"

function TourGuides() {
  return (
    <motion.div 
        id="tour_guides"
        initial={{width: 0}}
        animate={{width: '100%'}}
        exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
    >
        <Header/>
        <section className="start">
            <img src={tourGuides} alt="tour guides" />
            <h1>Tour Guides</h1>
        </section>
        <main>
            <p>Embark on a journey of discovery with our team of dedicated tour guides, ready to unveil the secrets and wonders of our captivating region. Whether you're want a city guide or museum guide or want to learn more about the culture, our guides are here to ensure an unforgettable experience tailored to your interests.</p>
            <section className="tour_guides">
                <h1>Our Tour Guides</h1>
                <div className="guides">
                    <TourGuide/>
                    <TourGuide/>
                    <TourGuide/>
                    <TourGuide/>
                    <TourGuide/>
                    <TourGuide/>
                    <TourGuide/>
                    <TourGuide/>
                    <TourGuide/>
                    <TourGuide/>
                    <TourGuide/>
                </div>
            </section>
            <section className="qna">
                <h1>Why get a tour guide?</h1>
                <div className="questions">
                    <GuideQnA/>
                    <GuideQnA/>
                    <GuideQnA/>
                </div>
            </section>
            <section className="how-to">
                <h1>How to do I get a tour guide?</h1>
                <p>Call the number for the tour guide you like and you’ll get a prompt response.</p>
            </section>
        </main>
        <Footer/>
    </motion.div>
  )
}

export default TourGuides