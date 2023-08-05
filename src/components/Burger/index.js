import React from "react";
import { BurgerNavContainer, ArrowIcon, Icon, CloseIcon,BurgerWrapper, BurgerMenu, BurgerLink } from "./BurgerElements";


const BurgerNav = ({isOpen, toggle}) => { 
    return (
        <BurgerNavContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <BurgerWrapper>
                <BurgerMenu>
                    <BurgerLink to="register" onClick={toggle}>Register <ArrowIcon></ArrowIcon></BurgerLink>

                    <BurgerLink to="matches" onClick={toggle}>Matches <ArrowIcon></ArrowIcon> </BurgerLink>

                    <BurgerLink to='Teams' onClick={toggle}>Teams <ArrowIcon></ArrowIcon></BurgerLink>

                    <BurgerLink to='Legacy' onClick={toggle}>Legacy <ArrowIcon></ArrowIcon></BurgerLink>

                    <BurgerLink to='rules' onClick={toggle}>Team Rules <ArrowIcon></ArrowIcon></BurgerLink>

                    <BurgerLink to='Contact' onClick={toggle}>Contact <ArrowIcon></ArrowIcon></BurgerLink>
                </BurgerMenu>
            </BurgerWrapper>
        </BurgerNavContainer>
    );
}

export default BurgerNav;