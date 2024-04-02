import tomski from "../assets/images/tomski.png"
import backBtn from "../assets/icons/back.svg"
import Header from "../components/sections/Header"
import Footer from "../components/sections/Footer"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import { useState } from "react"

function Profile() {
    const [ edit, setEdit ] = useState(false)
    const [ form, setForm ] = useState({
        fname: 'John',
        lname: 'Doe',
        location: "Abuja, Nigeria",
        dOB: new Date('2004-03-04'),
        email: 'tourifyuser@mail.com'
    })

    function formatDateToString(date) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const formattedDate = formatter.format(date);
        
        // Extract day, month, and year from the formatted date
        const [month, day, year] = formattedDate.split(' ');
        
        // Add suffix to the day (e.g., "2nd", "3rd", "4th", etc.)
        let dayWithSuffix;
        switch (day.slice(0, -1)) {
            case '1':
            dayWithSuffix = `${day.slice(0, -1)}st`;
            break;
            case '2':
            dayWithSuffix = `${day.slice(0, -1)}nd`;
            break;
            case '3':
            dayWithSuffix = `${day.slice(0, -1)}rd`;
            break;
            default:
            dayWithSuffix = `${day.slice(0, -1)}th`;
        }
        
        // Return the formatted date string with the day suffix
        return `${dayWithSuffix} ${month},  ${year}`;
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setEdit(false)
        console.log(form)
        toast.success('Profile updated')
    }

  return (
    <motion.div
        id="profile"
        initial={{width: 0}}
        animate={{width: '100%'}}
        exit={{x: window.innerWidth, transition: { duration: 0.1 }}}
    >
        <Header/>
        <div className="heading">
            <img src={backBtn} alt="back" />
            <h1>Profile</h1>
        </div>
        <main>
            <div>
                <img src={tomski} alt="person" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputItem">
                    <label htmlFor="fname">First Name:</label>
                    { edit ? 
                    <input value={form.fname} type="text" name="fname" id="fname" onChange={handleChange} /> : 
                    <p>{form.fname}</p>}
                </div>
                <div className="inputItem">
                    <label htmlFor="lname">Last Name:</label>
                    { edit ? 
                    <input value={form.lname} type="text" name="lname" id="lname" onChange={handleChange} /> : 
                    <p>{form.lname}</p>}
                </div>
                <div className="inputItem">
                    <label htmlFor="location">Location:</label>
                    { edit ? 
                    <input value={form.location} type="text" name="location" id="location" onChange={handleChange} /> : 
                    <p>{form.location}</p>}
                </div>
                <div className="inputItem">
                    <label htmlFor="dOB">Date of Birth:</label>
                    <p>{formatDateToString(form.dOB)}</p>
                </div>
                <div className="inputItem">
                    <label htmlFor="email">Email:</label>
                    <p>{form.email}</p>
                </div>
                <div className="buttons">
                    {edit ? 
                    <>
                    <button className="red" onClick={(e) => { e.preventDefault(); setEdit(false);}}>Cancel</button>
                    <button className="blue" type="submit">Update</button>
                    </> : 
                    <button className="blue" onClick={(e) => { e.preventDefault(); setEdit(true);}}>Edit Profile</button>}
                </div>
            </form>
        </main>
        <Footer/>
    </motion.div>
  )
}

export default Profile