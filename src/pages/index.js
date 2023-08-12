import React, {useState} from 'react';
import Navbar from '../components/navbar';
import Burger from '../components/Burger';

// Allows burger menu to be opened and closed
const HomeNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        // set the state to go from false to true then back
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Burger isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        </>
    );
}

export default HomeNav;