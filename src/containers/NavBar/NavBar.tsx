import React, {useEffect, useState} from 'react';
import '../../styles/style.scss'

import NavButton from "../../components/buttons/navButton/navButton";
import ContactButton from "../../components/buttons/contactButton/contactButton";

interface INavBar {
    navButtons: any[];
}

const NavBar = ({navButtons}: INavBar) => {
    return (
        <ul className='nav-bar'>
            {navButtons.map((navButton: any) => (
                <NavButton title={navButton.title} key={navButton.title} icon={navButton?.icon} bgColor={navButton.color}/>
            ))}
            <ContactButton/>
        </ul>
    );
}

export default NavBar;