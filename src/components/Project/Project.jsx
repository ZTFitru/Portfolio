import './Project.css'
// import myProjects from '../../../myProjects.json'
import myProjects from '../../../data.js'

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

