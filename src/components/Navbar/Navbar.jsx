import './Navbar.css'
import Daylogo from '../../assets/ZNavbarLogo.png'
import Nightlogo from '../../assets/ZF-dark-noBack.png'
import MoonIcon from '../../assets/moonIcon.png'
import SunIcon from '../../assets/day.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from "react-icons/fa6";



const Navbar = ({ toggle, setToggle }) => {
    const [open, setOpen] = useState(false)


    const toggleFunction = () => {
        const newTheme = toggle === 'light' ? 'dark' : 'light'
        setToggle(newTheme);
        document.body.setAttribute('data-theme', newTheme)
    }


    useEffect(() => {
        document.body.setAttribute('data-theme', toggle);
    }, [toggle])

    const showMenu = ()=> {
        setOpen(!open)
    }

    return (
        <header className='nav-bar'>
            <Link to='home' smooth={true} duration={300}>
                <img src={toggle === 'light' ? Daylogo : Nightlogo} alt="my logo" className='logo'/>
            </Link>
            <div className="menu-icon" onClick={showMenu}>
                {open ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`nav-links ${open ? 'open': ''}`}>
                <li>
                    <Link to='home' smooth={true} duration={300} onClick={()=> setOpen(false)}>Home</Link>
                </li>
                <li>
                    <Link to='projects' smooth={true} duration={300} onClick={()=> setOpen(false)}>Projects</Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={300} onClick={()=> setOpen(false)}>About</Link>
                </li>
            </ul>
            <img onClick={toggleFunction} src={toggle === 'light' ? MoonIcon : SunIcon} alt="" className='toggle'/>
        </header>
    );
}

export default Navbar;
