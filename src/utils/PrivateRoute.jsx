import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const loggedIn = false;

  return loggedIn ? <Outlet/> : <Navigate to="/log_in"/>
}

export default PrivateRoute