import './css/App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Food from './pages/Food';
import TourGuides from './pages/TourGuides';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food/>} />
        <Route path="/tour_guides" element={<TourGuides/>} />
      </Routes>
    </Router>
  );
}

export default App;
