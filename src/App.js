import './css/App.css';
import cityVideo from "./assets/city_gate.mp4"
import LocationsHome from './components/sections/LocationsHome';
import { useState, useRef } from "react";

function App() {
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
    </main>
    </>
  );
}

export default App;
