import Home from "../pages/Home"
import Food from "../pages/Food"
import Commercial from "../pages/Commercial"
import Healthcare from "../pages/Healthcare"
import TourGuides from "../pages/TourGuides"
import ContactUs from "../pages/ContactUs"
import SignUp from "../pages/SignUp"
import LogIn from "../pages/LogIn"
import LocationFull from "../pages/templates/LocationFull"
import Profile from "../pages/Profile"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
    const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} key={location.key}>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food/>} />
            <Route path="/commerce" element={<Commercial />}/>
            <Route path="/health" element={<Healthcare />} />
            <Route path="/tour_guides" element={<TourGuides/>} />
            <Route path="/contact_us" element={<ContactUs/>}/>
            <Route path="/locations/:id" element={<LocationFull/>}/>
            <Route path='/sign_up' element={<SignUp/>} />
            <Route path='/log_in' element={<LogIn/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes