import './Project.css'
import { getProjects } from '../../../apiCall'
import { useState, useEffect } from 'react'

const Project = ({ toggle })=> {

    const [myProjects, setMyProjects] = useState([])

    useEffect(()=> {
        getProjects()
        .then(data => {
            setMyProjects(data)
        })
        .catch(error => console.log(error))
    }, [])


    return (
        <section className={`project-out ${toggle}`}>
            <h2>My Projects</h2>
            <div className="parent-cont">
                <div className="project-cont">
                    {myProjects.map((project, index)=> (
                        <div key={index} className='project-card'>
                            <h3>{project.title}</h3>
                            <img src={project.projImg} alt={project.title} />
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

