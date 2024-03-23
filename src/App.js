import './css/App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Category from './pages/templates/Category';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Category/>} />
      </Routes>
    </Router>
  );
}

export default App;
