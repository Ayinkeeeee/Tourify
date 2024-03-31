import { Link } from "react-router-dom";

export default function SignUp() {

    return(
        <main className="sign-up">
            <form id="signup-form" className="signup-form" action="">
                <h1>SIGN UP</h1>
                <label htmlFor="fullName">Name</label><br />
                <input type="text" id="fullName" name="fullName" placeholder="John Doe" required/><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" id="email" name="email" placeholder="johndoe@email.com" required/><br />
                <label htmlFor='dOB'>Date of Birth</label><br />
                <input type="date" id="dOB" name="dOB" required/><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" name="password" placeholder="" required/><br />
                <label htmlFor="confirmPass">Confirm Password</label><br />
                <input type="password" id="confirmPass" name="confirmPass" required/><br />
                <div>
                    <button className="main" type="submit">Sign Up</button>
                    <p>Already have an account? <Link to="/log_in">Log In</Link></p>
                </div>
            </form>
        </main>
    );
}