import './css/App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Food from './pages/Food';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food/>} />
      </Routes>
    </Router>
  );
}

export default App;
