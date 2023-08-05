import React from "react";
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, BurgerIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';
import clublogo from '../navbar/bifclogo.png'; 

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/"><img src= {clublogo} width="50px" alt="birmingham impact fc logo" /> BIRMINGHAM IMPACT FOOTBALL CLUB</NavLogo>
                <BurgerIcon onClick={toggle}>
                    <FaBars />
                </BurgerIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="register">Register</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="matches">Matches</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="teams">Teams</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="legacy">Legacy</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="rules">Team Rules</   NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    );
}

export default Navbar;