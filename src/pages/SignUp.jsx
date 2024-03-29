import { NavLink, Outlet } from "react-router-dom";

import Footer from "../components/layouts/Footer";

export default function SignUp() {

    const handleToLogIn = () => {
        const signUpForm = document.getElementById('signup-form');
        signUpForm.style.display = 'none';
    }

    return(
        <div className="sign-up">
            <form id="signup-form" className="signup-form" action="">
                <h1>Sign Up</h1>
                <label htmlFor="fullName">Name</label><br />
                <input type="text" id="fullName" name="fullName" placeholder="John Doe" required/><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" name="email" placeholder="johndoe@email.com" required/><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" name="password" placeholder="John Doe's Doors and Furniture" required/><br />
                <label htmlFor="confirmPass">Confirm Password</label><br />
                <input type="password" id="confirmPass" name="confirmPass" required/><br />

                <div>
                <button type="submit">Sign Up</button>
                <p>Already have an account? <NavLink to="log-in" onClick={handleToLogIn}>Log In</NavLink></p>
                </div>
                

            </form>
            <Outlet/>
            <Footer/>
        </div>
    );
}