import './Project.css'
// import myProjects from '../../../myProjects.json'

const myProjects = [
    {
        "title": "Harry Potter",
        "description": "This application allows Harry Potter fans explore the world of wizards and witches that are mentioned in the books or have been seen in the movies.",
        "projImg": "src/assets/harryPotterScreenshot.png",
        "link": "https://harrypotter-red.vercel.app/#"
    },
    {
        "title": "Popcorn Score",
        "description": "An application that would allow the user to see all the movies when they visit the page.",
        "projImg": "src/assets/popcornScoreScreenShot.png",
        "link": "https://drif7er.github.io/popcorn-score/#/"
    },
    {
        "title": "Dangol-Weather",
        "description": "Simple app that delivers the local weather along with an applicable Boomhauer quote.",
        "projImg": "src/assets/dangol-weather.png",
        "link": "https://dangol-weather.vercel.app/"
    },
    {
        "title": "Rock-Paper-Scissors",
        "description": "Play the classic game of Rock, Paper and Scissors or a difficult version inspired by SpongeBob.",
        "projImg": "src/assets/rock-paper-scissors.png",
        "link": "https://ztfitru.github.io/Rock-Paper-Scissors/"
    },
    {
        "title": "Lennon-Lawn-Care",
        "description": "A vibrant and user-friendly lawn service website showcasing a range of professional landscaping solutions, complete with easy booking options, customer testimonials, and helpful lawn care tips.",
        "projImg": "src/assets/lennonlawncare.png",
        "link": "https://lennon-lawn-care.vercel.app/"
    }
]


const Project = ({ toggle })=> {


    return (
        <section className={`project-out ${toggle}`}>
            <h2>My Projects</h2>
            <div className="parent-cont">
                <div className="project-cont">
                    {myProjects.map((project, index)=> (
                        <div key={index} className='project-card'>
                            <h3>{project.title}</h3>
                            <img src={project.projImg} alt='' />
                            <p>{project.description}</p>
                            <a href={project.link} target='_blank' rel='noopener noreferrer'>
                                <button>Visit</button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project;

