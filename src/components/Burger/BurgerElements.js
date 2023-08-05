import styled from 'styled-components';
import {FaTimes, FaChevronRight} from 'react-icons/fa';
import {Link as LinkR} from 'react-router-dom'

// burger menu display
export const BurgerNavContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background-color: black;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0ms.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 
`

// x icon when burger is open
export const CloseIcon = styled(FaTimes)`
color: white;
`
// arrow icons that appear after the nav-links when burger is open
export const ArrowIcon = styled(FaChevronRight)`
color: #DAA520;
width: 200% ;
margin: -45px;
`

export const Icon = styled.div`
position: absolute;
top: 1rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const BurgerWrapper = styled.div`
color: white;
`

export const BurgerMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6,  100px);
text-align: center;

@media screen and (max-width: 950px) {
    grid-template-rows: repeat(13, 60px);
}

@media screen and (max-width: 850px) {
    grid-template-rows: repeat(6, 100px);
}

@media screen and (max-width: 750px) {
    /* grid-template-rows: repeat(5, 60px); */
    grid-template-rows: repeat(6, 43px);
}

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 100px);
}
`
// navbar links within the burger menu
export const BurgerLink = styled(LinkR)`
display: flex;
align-items: flex-start;
flex: no-wrap ;
flex-direction: column;
justify-content: center;
padding: 15px;
font-size: 2rem;
text-decoration: none;
text-transform: uppercase;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
font-family: 'Teko', sans-serif;
cursor: pointer;
margin-top: 0em;

@media screen and (max-width: 720px) {
    font-size: 2rem;
    padding: 25px;
}

&:hover {
    color: #DAA520;
    transition: 0.2s ease-in-out
}
`