import cityVideo from "../assets/videos/city_gate.mp4"
import fAQ from "../assets/images/faq.png"
import tourBus from "../assets/images/tour_bus.jpeg"
import play from "../assets/icons/play_arrow.svg"
import pause from "../assets/icons/pause_white.svg"
import FAQItem from "../components/items/FAQItem"
import Testimonial from "../components/items/Testimonial"
import LocationsHome from "../components/sections/LocationsHome"
import NewsLetter from "../components/forms/NewsLetter"
import { useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { useState, useRef } from "react"

function Home() {
    const [isPlaying, setIsPlaying] = useState(true)
    const videoRef = useRef()
    const mover = useNavigate()
  
    let pauseVideo = () => {
        videoRef.current.pause()
        setIsPlaying(false)
    }
  
    let playVideo = () => {
        videoRef.current.play()
        setIsPlaying(true)
    }
  
  
    return (
      <>
        <div className="hero">
            <video ref={videoRef} muted autoPlay loop width="1000px" height="1000px" src={cityVideo}></video>
            <div>
            <h1 className="large_text">New to Abuja?</h1>
            <p>Don't worry, we would love to show you around</p>
            <button className="main">Explore Locations</button>
            </div>
            {isPlaying ?
            <button className="controls" onClick={pauseVideo}><img className="pause" src={pause} alt="pause"/>Pause Video</button> :
            <button className="controls" onClick={playVideo}><img className="play" src={play} alt="play"/>Play Video</button>
            }
        </div>
        <main>
            <p>Welcome to Abuja! Discover the best of Abuja with Tourify, the best guide for the Capital. Find things to do in Abuja, from iconic leisure spots and fun-filled days out to top restaurants and unmissable Abuja events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.</p>
            <LocationsHome/>
            <LocationsHome/>
            <LocationsHome/>
            <section className="about">
                <div className="text">
                    <h1>About Us</h1>
                    <p>Tourify is the go-to platform for discovering new locations in any city. Whether you’re new to the city, a tourist, or a long-time resident, we have something for you.</p>
                    <ul>
                        <li>As a long-time resident Tourify can help you discover new locations you didn’t know about.</li>
                        <li>As a tourist or new comer to a city, we know it can be overwhelming. So we provide a list  popular places to visit. </li>
                        <li>We also provide a tour guides to show you around so you don’t get lost.</li>
                    </ul>
                </div>
                <div className="image-container">
                    <img src={tourBus} alt="tour_bus" />
                </div>
            </section>
            <section className="faq">
                <div className="image-container">
                    <img src={fAQ} alt="faq" />
                </div>
                <div className="text">
                    <h1>FAQs</h1>
                    <p>Here are some freqently asked questions about Tourify</p>
                    <div className="faqs">
                        <FAQItem/>
                        <FAQItem/>
                        <FAQItem/>
                    </div>
                </div>
            </section>
            <section className="testimonials">
                <h1>Testimonials</h1>
                <p>Don’t just take our word for it. Here are some reviews from satisfied our customers. We’d love to see a review from you too 🥹</p>
                <div className="reviews">
                    <Testimonial/>
                    <Testimonial/>
                    <Testimonial/>
                    <Testimonial/>
                </div>
                <button className="main" onClick={() => mover('/tour_guides')}>Get a Tour Guide</button>
            </section>
            <NewsLetter/>
        </main>
      </>
    )
}

export default Home