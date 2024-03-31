import { NavLink, Outlet } from "react-router-dom";
import tourifyLogoBlue from "../../assets/images/tourifyLogoBlue.png";
import MenuIcon from "../../assets/icons/menu.svg"
import BackBtn from "../../assets/icons/backBtn.png"

export default function RootLayout() {
    const handleOpenMenu = () => {
        const displayMenu = document.getElementById('mob-menu');
        const menuBtn = document.getElementById('menu-btn');
        const backBtn = document.getElementById('back-btn');

        displayMenu.style.position = 'fixed';
        displayMenu.style.display = 'block';
        menuBtn.style.display = 'none';
        backBtn.style.display = 'block';


        console.log('Clicked');
    }

    const handleCloseMenu = () => {
        const displayMenu = document.getElementById('mob-menu');
        const menuBtn = document.getElementById('menu-btn');
        const backBtn = document.getElementById('back-btn');

        displayMenu.style.display = 'none';
        menuBtn.style.display = 'block';
        backBtn.style.display = 'none';
    }

    return(
        <div>
            <header id="top">
                <nav id="nav">
                    <img src={tourifyLogoBlue} alt="logo"/>
                    <div className="nav-mobile">
                        <div className="nav-section1">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="restaurants">Restaurants</NavLink>
                            <NavLink to="commercial">Commercial</NavLink>
                            <NavLink to="healthcare">Healthcare</NavLink>
                        </div>
                        <div className="nav-section2">
                            <NavLink to="tour-guides">Tour Guides</NavLink>
                            <NavLink to="contact">Contact Us</NavLink>
                            <NavLink to="sign-up" className="signupBtn">Sign Up</NavLink>

                        </div>
                    </div>
                    <button id="menu-btn" onClick={handleOpenMenu} style={{background: "none", border:"none"}}>
                        <img  className="menu-icon" src={MenuIcon} alt="menu"/>
                    </button>
                    <button id="back-btn" onClick={handleCloseMenu} style={{background: "none", border:"none", display: "none"}}>
                        <img className="back-icon" src={BackBtn} alt="menu"/>
                    </button>
                </nav>
            </header>
            <nav>
                <div id="mob-menu" className="mobile-menu" style={{display: 'none'}}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <hr />
                        <li><NavLink to="restaurants">Restaurants</NavLink></li>
                        <hr />
                        <li><NavLink to="commercial">Commercial</NavLink></li>
                        <hr />
                        <li><NavLink to="healthcare">Healthcare</NavLink></li>
                        <hr />
                        <li><NavLink to="tour-guides">Tour Guides</NavLink></li>
                        <hr />
                        <li><NavLink to="contact">Contact Us</NavLink></li>
                        <hr />
                        <li><NavLink to="sign-up">Sign Up</NavLink></li>
                    </ul>
                </div>
            </nav>

            
                <Outlet/>
        
        </div>
    );
}

