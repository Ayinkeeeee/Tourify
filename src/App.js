import './css/App.css';
import './css/index.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Food from './pages/Food';
import SignUp from './pages/SignUp';
import RootLayout from './components/layouts/RootLayout';

import { createBrowserRouter, 
  createRoutesFromElements,
  Route,
  RouterProvider
  } from "react-router-dom";
import LogIn from './pages/LogIn';


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="restaurants" element={<Food/>}/>
          {/* <Route path="commercial" element={<Commercial/>}/>
          <Route path="healthcare" element={<Healthcare/>}/>
          <Route path="tour-guides" element={<TourGuides/>}/>
          <Route path="contact" element={<Contact/>}/> */}
          <Route path="sign-up" element={<SignUp/>}>
            <Route path="log-in" element={<LogIn/>}/>
          </Route>
      </Route>
    )
  );  

function App() {

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/food" element={<Food/>} />
    //   </Routes>
    // </Router>
    <RouterProvider router={router}/>
  );
}

export default App;
