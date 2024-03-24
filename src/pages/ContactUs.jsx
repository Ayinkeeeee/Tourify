import contactTelephone from "../assets/images/telephone.png";
import phoneHand from "../assets/images/phone_hand.png";
import call from "../assets/icons/call.svg";
import email from "../assets/icons/email.svg";
import home from "../assets/icons/home.svg";
import eggSauce from "../assets/images/egg-sauce.jpeg";

function ContactUs() {
  return (
    <div id='contact'>
        <section className="start">
            <img src={contactTelephone} alt="telephone" />
            <h1>Contact Us</h1>
        </section>
        <main>
            <p>Plan your stay in Abuja. We would love to help you find the best spots for absolutely anything. Please use the contact information  or form below to let us know what you think and we will get back to you as soon as possible.</p>
            <section className="contact_form">
                <div className="contact">
                    <img src={phoneHand} alt="phone_hand" />
                </div>
                <form>
                    <h1>Leave a Message</h1>
                    <p>Kindly fill out the form with your details or questions and we will get back to you shortly.</p>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="John Doe" required/>
                    <label htmlFor="institution">Institution (Optional)</label>
                    <input id="name" name="institution" type="institution" placeholder="John Doe’s Doors and Furniture"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="johndoe@email.com" required/>
                    <label htmlFor="purpose">Purpose</label>
                    <select name="purpose" id="purpose">
                        <option value="question">Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                        <option value="suggestion">Suggestion</option>
                        <option value="feature">Request for Feature</option>
                        <option value="others">Others</option>
                    </select>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </section>
            <section className="contact_info">
                <h1>CONTACT INFO</h1>
                <div className="contacts">
                    <div>
                        <img src={call} alt="call"/>
                        <p>0800-0000-0000</p>
                    </div>
                    <div>
                        <img src={home} alt="home" />
                        <p>Nile University, Abuja</p>
                    </div>
                    <div>
                        <img src={email} alt="email"/>
                        <p>tourify@contactus.com</p>
                    </div>
                </div>
            </section>
            <section className="instagram">
                <h1>Follow our instagram</h1>
                <p>Check us out on Instagram @tourify. Here are some of our recent posts.</p>
                <div className="posts">
                    <img src={eggSauce} alt="egg_sauce" />
                    <img src={eggSauce} alt="egg_sauce" />
                    <img src={eggSauce} alt="egg_sauce" />
                    <img src={eggSauce} alt="egg_sauce" />
                    <img src={eggSauce} alt="egg_sauce" />
                    <img src={eggSauce} alt="egg_sauce" />
                </div>
            </section>
        </main>
    </div>
  )
}

export default ContactUs