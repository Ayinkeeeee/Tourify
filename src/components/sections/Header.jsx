import tourifyLogoBlue from "../../assets/icons/logo_blue.png";
import MenuIcon from "../../assets/icons/menu.svg"
import closeBtn from "../../assets/icons/close_x.svg"
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const navigator = useNavigate()
    const { pathname } = useLocation()

    const openMenu = () => {
        setMenuOpen(true)
    }
    
    const closeMenu = () => {
        setMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if(scrollPosition > 300){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return(
        <nav className={pathname !== '/' || isScrolled ? 'opaque' : 'transparent'}>
            <div className="logo">
                <img src={tourifyLogoBlue} alt="tourify logo" />
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/food'>Restaurants</Link>
                <Link to='/commerce'>Commercial</Link>
                <Link to='/health'>Healthcare</Link>
            </div>
            <div>
                <Link to='/tour_guides'>Tour Guides</Link>
                <Link to='/contact_us'>Contact Us</Link>
                <button onClick={() => {navigator('/sign_up')}} className="main">Sign Up</button>
            </div>
            <div className="openBtn">
                <img src={MenuIcon} onClick={openMenu} alt="menu bars" />
            </div>
            <div className={`responsiveMenu ${menuOpen ? '' : "close"}`}>
                <div>
                    <Link to='/'>Home</Link>
                    <Link to='/food'>Restaurants</Link>
                    <Link to='/commerce'>Commercial</Link>
                    <Link to='/health'>Healthcare</Link>
                </div>
                <div>
                    <Link to='/tour_guides'>Tour Guides</Link>
                    <Link to='/contact_us'>Contact Us</Link>
                </div>
                <div>
                    <button onClick={() => {navigator('/sign_up')}} className="main">Sign Up</button>
                </div>
                <div className="close">
                    <img src={closeBtn} onClick={closeMenu} alt="close" />
                </div>
            </div>
        </nav>
        // <div>
        //     <header id="top">
        //         <nav id="nav">
        //             <img src={tourifyLogoBlue} alt="logo"/>
        //             <div className="nav-mobile">
        //                 <div className="nav-section1">
        //                     <Link to="/">Home</Link>
        //                     <Link to="restaurants">Restaurants</Link>
        //                     <Link to="commercial">Commercial</Link>
        //                     <Link to="healthcare">Healthcare</Link>
        //                 </div>
        //                 <div className="nav-section2">
        //                     <Link to="tour-guides">Tour Guides</Link>
        //                     <Link to="contact">Contact Us</Link>
        //                     <Link to="sign-up" className="signupBtn">Sign Up</Link>

        //                 </div>
        //             </div>
        //             <button id="menu-btn" style={{background: "none", border:"none"}}>
        //                 <img  className="menu-icon" src={MenuIcon} alt="menu"/>
        //             </button>
        //             <button id="back-btn" style={{background: "none", border:"none", display: "none"}}>
        //                 <img className="back-icon" src={BackBtn} alt="menu"/>
        //             </button>
        //         </nav>
        //     </header>
        //     <nav>
        //         <div id="mob-menu" className="mobile-menu" style={{display: 'none'}}>
        //             <ul>
        //                 <li><Link to="/">Home</Link></li>
        //                 <hr />
        //                 <li><Link to="restaurants">Restaurants</Link></li>
        //                 <hr />
        //                 <li><Link to="commercial">Commercial</Link></li>
        //                 <hr />
        //                 <li><Link to="healthcare">Healthcare</Link></li>
        //                 <hr />
        //                 <li><Link to="tour-guides">Tour Guides</Link></li>
        //                 <hr />
        //                 <li><Link to="contact">Contact Us</Link></li>
        //                 <hr />
        //                 <li><Link to="sign-up">Sign Up</Link></li>
        //             </ul>
        //         </div>
        //     </nav>
        // </div>
    );
}

