import { NavLink } from "react-router-dom";
import tourifyLogoWhite from "../../assets/images/tourifyLogoWhite.png"
import instaLogo from "../../assets/images/instaLogo.svg"
import fbLogo from "../../assets/images/fbLogo.svg"
import linkedInLogo from "../../assets/images/linkedInLogo.svg"
import xLogo from "../../assets/images/xLogo.svg"
import phoneIcon from "../../assets/images/phoneIcon.svg"
import emailIcon from "../../assets/images/emailIcon.svg"
import locationWhiteIcon from "../../assets/images/locationWhiteIcon.svg"
import '../../css/index.css'


export default function() {
    return(
        <div className="footer">
            <div className="footer-flex">
                <div className="footer-start">
                    <img src={tourifyLogoWhite} alt="tourify" className="footer-logo"/>
                    <p className="logo-subtext">Where your journey begins</p>
                </div>
                <div className="links footer-column">
                    <h3>LINKS</h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="tour-guides">Tour Guides</NavLink></li>
                        <li><NavLink to="contact">Contact Us</NavLink></li>
                        <li><NavLink to="sign-up">Sign Up</NavLink></li>
                        <li><NavLink to="log-in">Log In</NavLink></li>
                        <li><NavLink to="coming-soon">Coming Soon</NavLink></li>
                        <li><NavLink to="privacy">Privacy Policy</NavLink></li>
                        <li><NavLink to="terms">Terms of Use</NavLink></li>
                    </ul>
                </div>
                <div className="categories footer-column">
                    <h3>CATEGORIES</h3>
                    <ul>
                        <li><NavLink to="explore">Explore All</NavLink></li>
                        <li><NavLink to="popular">Popular Places</NavLink></li>
                        <li><NavLink to="for-kids">For Kids</NavLink></li>
                        <li><NavLink to="recreation">Recreation</NavLink></li>
                        <li><NavLink to="healthcare">Healthcare</NavLink></li>
                        <li><NavLink to="accomodation">Accomodation</NavLink></li>
                        <li><NavLink to="commercial">Commercial</NavLink></li>
                    </ul>
                </div>
                <div className="footer-contact footer-column" style={{marginTop: 0}}>
                    <div className="contact-info">
                    <h3>CONTACT INFO</h3>
                    <ul>
                        <li><a href="tel:08000000000"><img src={phoneIcon} alt=""/>080-0000-0000</a></li>
                        <li><a href="mailto:tourify@gmail.com"><img src={emailIcon} alt=""/>tourify@gmail.com</a></li>
                        <li><NavLink to=""><img src={locationWhiteIcon} alt=""/>29 Boulevard, Garki, Abuja</NavLink></li>
                    </ul>
                    </div>
                    <div className="socials">
                    <h3 style={{marginTop: "25px"}}>SOCIALS</h3>
                        <a href="https://www.instagram.com" className="footer-social"><img src={instaLogo} alt="IG"/></a>
                        <a href="https://twitter.com" className="footer-social"><img src={xLogo} alt="X"/></a>
                        <a href="https://www.linkedin.com" className="footer-social"><img src={linkedInLogo} alt="IN"/></a>
                        <a href="https://www.facebook.com" className="footer-social"><img src={fbLogo} alt="FB"/></a>
                    </div>
                </div>
            </div>
            <div style={{textAlign: "center", marginTop: "35px"}}>
                <a href="#top" className="back" style={{fontSize: "13px", color:"#FF9C54", textShadow:"1px 1px 3px darkblue"}}>
                    Back to Top
                </a>
                <p className="copyright" style={{fontSize: "12px", marginTop:"8px"}}>
                    Copyright © Tourify 2024
                </p>
            </div>
            
        </div>
            
    );
}