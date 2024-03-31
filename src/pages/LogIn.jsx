import eyeSlash from '../assets/icons/visibility_off.svg'
import eye from '../assets/icons/eye.svg'
import { toast } from 'react-toastify'
import { useState } from "react"
import { Link } from "react-router-dom"

export default function LogIn() {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success(`Welcome back ${form.email}`)
        console.log(form)
    }

    return(
        <main>
            <form id="login-form" className="login-form" onSubmit={handleSubmit}>
                <h1>LOG IN</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="johndoe@email.com" required value={form.email || ''} onChange={handleChange}/>
                </div>
                <div className='passwordInput'>
                    <label htmlFor="password">Password</label>
                    <div>
                        <input type={showPassword ? 'text' : 'password'} name="password" required value={form.password || ''} onChange={handleChange}/>
                        <img src={showPassword ? eyeSlash : eye} type="button" onClick={() => setShowPassword(!showPassword)}/>
                    </div>
                </div>
                <div className="account">
                <button>Log In</button>
                <p>Don't have an account? <Link to='/sign_up'>Sign Up</Link></p>
            </div>
            </form>
        </main>
    )
}