import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './App.css'
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';
import Project from '../Project/Project';
import { Element } from 'react-scroll';
import About from '../About/About';

const App = ()=> {

    const [toggle, setToggle] = useState('light')

    return (
        <main className={`app-cont ${toggle}`}>
            <Navbar toggle={toggle} setToggle={setToggle}/>
                <Element name='home' className='section'>
                    <MainPage toggle={toggle}/>
                </Element>
                <Element name='projects' className='section'>
                    <Project toggle={toggle} />
                </Element>
                <Element name='about' className='section'>
                    <About toggle={toggle} />
                </Element>
            <Footer toggle={toggle} />
        </main>
    )
}

export default App;