import './About.css'

const About = ({ toggle })=> {

    return (
        <section className={`about-out ${toggle}`}>
            <h4>About me</h4>
            <div className="about-cont">
                {/* <h4>About me</h4> */}
                <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
                obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in 
                classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 
                of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                </p>
                <p>
                here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in 
                some form, by injected humour, or randomised words which don't look even slightly believable. If you are going 
                to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of 
                text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this 
                the first true generator on the Internet.
                </p>
                <a className='contact-btn'>
                    <button>Contact Me</button>
                </a>
            </div>
        </section>
    )
}

export default About;