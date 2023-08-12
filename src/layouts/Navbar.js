import { NavLink, Outlet } from "react-router-dom";
import clublogo from '../images/bifclogo.png'; 
import Footer from "../components/Footer";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Navbar = () => {
    // allows the burger menu to be opened and closed
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <div className="root-layout">
        <header>
            <nav>
                <div className="navContainer">
                <div className="logo">
                <NavLink to ="/">
                <img className="crest" src= {clublogo} width="50px" alt="birmingham impact fc logo" /> BIRMINGHAM IMPACT FOOTBALL CLUB
                </NavLink>
                </div>

                {/* once the burgerMenu icon/button is clicked then burger will open */}
                <div className="burgerMenu" 
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* When an NavLinks are clicked then the burger menu will be hidden */}
                <ul className={menuOpen ? "open" : ""}
                onClick={() => setMenuOpen(false)}
                >
                {/* <NavLink to="/">Home</NavLink> */}
                <NavLink to="register">Register 
                <FaChevronRight className="arrowIcon"></FaChevronRight>
                </NavLink>

                <NavLink to="matches">Matches
                <FaChevronRight className="arrowIcon"></FaChevronRight></NavLink>

                <NavLink to="teams">Teams 
                <FaChevronRight className="arrowIcon"></FaChevronRight></NavLink>

                <NavLink to="legacy">Legacy 
                <FaChevronRight className="arrowIcon"></FaChevronRight></NavLink>

                <NavLink to="rules">Rules 
                <FaChevronRight className="arrowIcon"></FaChevronRight></NavLink>

                <NavLink to="contact">Contact
                <FaChevronRight className="arrowIcon"></FaChevronRight></NavLink>
                </ul>
                </div>
                </nav>
                </header>
                <main>
                     {/* allows for the nav to be outputted to the page */}
                    <Outlet />
                    <Footer />
                </main>
                </div>
    );
    
};
export default Navbar;
