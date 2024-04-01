import eyeSlash from '../assets/icons/visibility_off.svg'
import eye from '../assets/icons/eye.svg'
import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'
import { toast } from 'react-toastify'
import { useState } from "react"
import { Link } from "react-router-dom";

export default function SignUp() {

    const [form, setForm] = useState({
        fullName: '',
        email: '',
        dOB: '',
        password: '',
        confirmPass: ''
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(form.password !== form.confirmPass){
            toast.error(`Passwords do not match`)
        }else{
            console.log(form)
            toast.success(`Welcome ${form.fullName}`)
        }
    }

    return(
        <>
            <Header/>
            <main className="sign-up">
                <form id="signup-form" className="signup-form" onSubmit={handleSubmit}>
                    <h1>SIGN UP</h1>
                    <div>
                        <label htmlFor="fullName">Name</label>
                        <input type="text" value={form.fullName || ''} id="fullName" name="fullName" placeholder="John Doe" onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={form.email || ''} name="email" placeholder="johndoe@email.com" onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor='dOB'>Date of Birth</label>
                        <input type="date" id="dOB" name="dOB" onChange={handleChange} value={form.dOB || ''} required/>
                    </div>
                    <div className='passwordInput'>
                        <label htmlFor="password">Password</label>
                        <div>
                            <input type={showPassword ? 'text' : 'password'} name="password" required value={form.password || ''} onChange={handleChange}/>
                            <img src={showPassword ? eyeSlash : eye} type="button" onClick={() => setShowPassword(!showPassword)}/>
                        </div>
                    </div>
                    <div className='passwordInput'>
                        <label htmlFor="confirmPass">Confirm Password</label>
                        <div>
                            <input type={showConfirmPass ? 'text' : 'password'} name="confirmPass" required value={form.confirmPass || ''} onChange={handleChange}/>
                            <img src={showConfirmPass ? eyeSlash : eye} type="button" onClick={() => setShowConfirmPass(!showPassword)}/>
                        </div>
                    </div>
                    <div className="account">
                        <button className="main" type="submit">Sign Up</button>
                        <p>Already have an account? <Link to="/log_in">Log In</Link></p>
                    </div>
                </form>
            </main>
            <Footer/>
        </>
    );
}