import './Footer.css'
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";

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
                </ul>
            </div>
        </footer>
    )
}

export default Footer;