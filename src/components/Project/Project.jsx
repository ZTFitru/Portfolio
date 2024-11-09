import './Project.css'
import { getProjects } from '../../../apiCall'
import { useState, useEffect } from 'react'
import { GiAirplaneDeparture } from "react-icons/gi";

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
            <h3>My Projects</h3>
            <div className="parent-cont">
                <div className="project-cont">
                    {myProjects.map((project, index)=> (
                        <div key={index} className='project-card'>
                            <h3>{project.title}</h3>
                            <img src={project.projImg} alt={project.title} />
                            <p>{project.description}</p>
                            <a href={project.link} target='_blank' rel='noopener noreferrer'>
                                <button className='airplane-btn'>
                                    <span className='text-btn'>Vist</span>
                                    <span className='airplane-icon'><GiAirplaneDeparture /></span>
                                    </button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project;

