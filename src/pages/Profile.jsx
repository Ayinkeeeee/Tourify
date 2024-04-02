import tomski from "../assets/images/tomski.png"
import backBtn from "../assets/icons/back.svg"
import { toast } from "react-toastify"
import { useState } from "react"

function Profile() {
    const [ edit, setEdit ] = useState(false)
    const [ form, setForm ] = useState({
        fname: 'John',
        lname: 'Doe',
        location: "Abuja, Nigeria",
        dOB: new Date('1991-02-26'),
        email: 'tourifyuser@mail.com'
    })

    const handleSubmit = () => {
        console.log(form)
        toast.success('Profile updated')
    }

  return (
    <div>
        <div>
            <img src={backBtn} alt="back" />
            <h1>Profile</h1>
        </div>
        <main>
            <div>
                <img src={tomski} alt="person" />
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fname">First Name:</label>
                    { edit ? <input value={form.fname} /> : form.fname}
                </div>
            </form>
        </main>
    </div>
  )
}

export default Profile