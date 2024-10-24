import './Footer.css'
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = ({ toggle })=> {
    

    return (
        <footer className={`footer-out ${toggle}`}>
            <div className='footer-cont'>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/zelalemfitru/' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='footer-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/ZTFitru' target="_blank" rel="noopener noreferrer">
                            <FaGithub className='footer-icon' />
                        </a>
                    </li>
                    <li>
                    <a href='https://x.com/ZTFitru' target="_blank" rel="noopener noreferrer">
                        <FaTwitterSquare className='footer-icon' />
                        </a>
                    </li>
                    <li>
                    <a href='mailto:zelalemtfitru@gmail.com'>
                        <MdEmail className='footer-icon' />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='footer-text'>
                <p>By: Zelalem Fitru</p>
            </div>
        </footer>
    )
}

export default Footer;