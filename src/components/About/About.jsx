import './About.css'

const About = ({ toggle })=> {

    return (
        <section className={`about-out ${toggle}`}>
            <h4>About me</h4>
            <div className="about-cont">
                {/* <h4>About me</h4> */}
                <p>My name is <span>Zelalem Fitru</span> but I go by Z.</p>
                <p>
                    I was a Communications Sergeant while serving in the <span>United Sates Army</span> with the 1/509th Infantry Regiment. 
                </p>
                <p>
                    Attended a coding school program that lasts seven months at <span>Turing School of Software & Design</span>.
                </p>
                <p>
                    If you would like to reach out or get more information about me, click on my resume <span>button</span>.
                </p>
                <p>
                    I also have all my socials on the bottom.
                </p>
                <a className='contact-btn' 
                    href='https://docs.google.com/document/d/1k16ioZACLJSKqUJD2KOa0le5yLaEXXOkMRRufpF8VDQ/edit?usp=sharing'
                    target='_black'
                    rel='noopener noreferrer'>
                    <button>My Resume</button>
                </a>
            </div>
        </section>
    )
}

export default About;