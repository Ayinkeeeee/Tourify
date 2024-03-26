import './css/App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Food from './pages/Food';
import TourGuides from './pages/TourGuides';
import ContactUs from './pages/ContactUs';
import LocationFull from './pages/templates/LocationFull';
import ScrollToTop from './utils/ScrollToTop';
import { ModalProvider } from './context/ModalContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <ModalProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food/>} />
        <Route path="/tour_guides" element={<TourGuides/>} />
        <Route path="/contact_us" element={<ContactUs/>}/>
        <Route path="/locations/:id" element={<LocationFull/>}/>
      </Routes>
      </ModalProvider>
    </Router>
  );
}

export default App;
