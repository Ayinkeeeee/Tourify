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
        console.log(form)
    }

    return(
        <main>
            <form id="login-form" className="login-form" action="">
                <h1>LOG IN</h1>
                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" placeholder="johndoe@email.com" required value={form.email || ''} onChange={handleChange}/><br/>
                <label htmlFor="password">Password</label><br />
                <input type="password" name="password" required value={form.password || ''} onChange={handleChange}/><br />
            </form>
            <div>
                <button>Log In</button>
                <p>Don't have an account? <Link to='/sign_up'>Sign Up</Link></p>
            </div>
        </main>
    )
}