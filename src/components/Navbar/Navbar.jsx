import './Navbar.css'
import Daylogo from '../../assets/ZNavbarLogo.png'
import Nightlogo from '../../assets/ZF-dark-noBack.png'
import MoonIcon from '../../assets/moonIcon.png'
import SunIcon from '../../assets/day.png'

import React, { useEffect } from 'react';
import { Link } from 'react-scroll'

const Navbar = ({ toggle, setToggle }) => {
    const toggleFunction = () => {
        const newTheme = toggle === 'light' ? 'dark' : 'light'
        setToggle(newTheme);
        document.body.setAttribute('data-theme', newTheme)
    }


    useEffect(() => {
        document.body.setAttribute('data-theme', toggle);
    }, [toggle])
    return (
        <header className='nav-bar'>
            <Link to='home' smooth={true} duration={300}>
                <img src={toggle === 'light' ? Daylogo : Nightlogo} alt="my logo" className='logo'/>
            </Link>
            <ul>
                <li>
                    <Link to='home' smooth={true} duration={300}>Home</Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={300}>Projects</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={300}>About</Link>
                </li>
            </ul>
            <img onClick={toggleFunction} src={toggle === 'light' ? MoonIcon : SunIcon} alt="" className='toggle'/>
        </header>
    );
}

export default Navbar;
