import cityVideo from "../assets/videos/city_gate.mp4"
import fAQ from "../assets/images/faq.png"
import tourBus from "../assets/images/tour_bus.jpeg"
import LocationsHome from "../components/sections/LocationsHome"
import { useState, useRef } from "react"

function Home() {
    const [isPlaying, setIsPlaying] = useState(true)
    const videoRef = useRef()
  
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
            <p className="large_text">New to Abuja?</p>
            <p>Don't worry, we would love to show you around</p>
            <button className="main">Explore Locations</button>
            </div>
            {isPlaying ?
            <button className="controls" onClick={pauseVideo}> || Pause Video</button> :
            <button className="controls" onClick={playVideo}> |Play Video</button>
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
            </section>
        </main>
      </>
    )
}

export default Home