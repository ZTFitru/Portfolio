import './About.css'

const About = ({ toggle })=> {

    return (
        <section className={`about-out ${toggle}`}>
            <h2>About me</h2>
            <div className="about-cont">
                <p>My name is <span>Zelalem Fitru</span>, but I go by Z.</p>
                <p>I served as a Communications Sergeant in the <span>United States Army</span> with the 1/509th Infantry Regiment, where I developed strong leadership and communication skills.</p>
                <p>I completed a seven-month coding program at the <span>Turing School of Software & Design</span>, where I honed my skills in web development.</p>
                <p>If you’d like to learn more about me or my work, feel free to check out my resume by clicking <span>My Resume</span> button.</p>
                <p>Or send me a message by clicking on the <span>Email Me</span> button.</p>
                <p>You can also find my social media links at the bottom of the page.</p>
                <a className='contact-btn' 
                    href='https://docs.google.com/document/d/1k16ioZACLJSKqUJD2KOa0le5yLaEXXOkMRRufpF8VDQ/edit?usp=sharing'
                    target='_black'
                    rel='noopener noreferrer'>
                    <button>My Resume</button>
                </a>
                <a href='mailto:zelalemtfitru@gmail.com'>
                    <button>Email Me</button>
                </a>
            </div>
        </section>
    )
}

export default About;