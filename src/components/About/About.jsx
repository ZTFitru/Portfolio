import './About.css'

const About = ({ toggle })=> {

    return (
        <section className={`about-out ${toggle}`}>
            <h4>About me</h4>
            <div className="about-cont">
                {/* <h4>About me</h4> */}
                <p>My name is <span>Zelalem Fitru</span> but I go by Z.</p>
                <p>
                I was a Communications Sergeant while serving in the United Sates Army with the 1/509th Infantry Regiment. 
                </p>
                <p>
                here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in 
                some form, by injected humour, or randomised words which don't look even slightly believable. If you are going 
                to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of 
                text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this 
                the first true generator on the Internet.
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