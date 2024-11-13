import './MainPage.css'
import mainImg from '../../assets/mainPage.png'
import mySkills from '../../../mySkills.json'

const MainPage = ({ toggle })=> {


    return (
        <section className={`mainpage-out ${toggle}`}>
            <div className="mainpage-cont">
                <div className='main-text'>
                    <h1>
                        Hi, i'm <span>Z</span>
                    </h1>
                    <p>
                        Aspiring Front-End Developer
                    </p>
                </div>
                <div className='orb'>
                    <img  src={mainImg} alt="" />
                </div>
                <div className="skill-set"> 
                    <p>Skills</p>
                    <div className="skills-display"> 
                        {mySkills.map((skill, index) => (
                            <div className='skill-card' key={skill.id || `${skill.name}-${index}`}>
                                <p>{skill.title}</p>
                                <div className='skill'> 
                                    <div className='skill-level' style={{ width: `${skill.level}%` }}></div> 
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainPage;