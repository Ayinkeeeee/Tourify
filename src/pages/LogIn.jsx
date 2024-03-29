import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"

export default function LogIn() {
    const navigate = useNavigate();

    const handleToSignUp = () => {
                
        const signUpForm = document.getElementById('signup-form');
        const logInForm = document.getElementById('login-form');

        logInForm.style.display = 'none';
        signUpForm.style.display = 'block';

    }

    return(
        <div>
            <form id="login-form" className="login-form" action="">
                <h1>Log In</h1>
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" placeholder="johndoe@email.com" required/><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" placeholder="John Doe's Doors and Furniture" required/><br />

                <div>
                <button>Log In</button>
                <p>Don't have an account? <a href="" onClick={()=> {
                        navigate("/sign-up"); 
                        handleToSignUp();
                    }
                }>Sign Up</a></p>
                </div>
            </form>
        </div>
    )
}