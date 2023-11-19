import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const EditDisplay = ({select, resume, updateResume}) => {

    const [showCard, setShowCard] = useState('general-edits')
    const [showSkillForm, setShowSkillForm] = useState(false)
    const [showExperienceForm, setShowExperienceForm] = useState(false)
    const [showEducationForm, setShowEducationForm] = useState(false)
    const [showProjectForm, setShowProjectForm] = useState(false)

    const [newSkill, setNewSkill] = useState('')

    const handleCardClick = (e) => {
        setShowCard(e.target.id)
    }

    const handleSkillClick = () => {
        if(showSkillForm === false){
            setShowSkillForm(true)
        }
    }

    const handleExperienceClick = () => {
        if(showExperienceForm === false){
            setShowExperienceForm(true)
        }
    }

    const handleEducationClick = () => {
        if(showEducationForm === false){
            setShowEducationForm(true)
        }
    }

    const handleProjectClick = () => {
        if(showProjectForm === false){
            setShowProjectForm(true)
        }
    }

    const handleSkillSubmit = (e, newSkill) => {
        e.preventDefault();
        if(showSkillForm === true){
            let updatedResume = {
                ...resume,
                skills: [
                    ...resume.skills,
                    {
                        id: uuidv4(),
                        value: newSkill
                    }
                ]
            }
            updateResume(updatedResume)
            setShowSkillForm(false)
            setNewSkill('')
        }
    }

    const handleExperienceSubmit = (e) => {
        e.preventDefault();
        if(showExperienceForm === true){
            setShowExperienceForm(false)
        }
    }

    const handleEducationSubmit = (e) => {
        e.preventDefault();
        if(showEducationForm === true){
            setShowEducationForm(false)
        }
    }

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        if(showProjectForm === true){
            setShowProjectForm(false)
        }
    }

    const removeSkill = (skillID) => {
        console.log(skillID)
        let updatedSkills = resume.skills.filter(skill => skill.id !== skillID)
        let updatedResume = {
            ...resume,
            skills: updatedSkills
        }
        updateResume(updatedResume)
    }

    return (
        <section className='edit-display' id={select}>
            {
                select === 'body' &&
                <>
                    <ul className='body-list'>
                        <li className='body-card'>
                            <div id='general-edits' onClick={handleCardClick}>General Edits</div>
                            {
                                showCard === 'general-edits' &&
                                <form action="">
                                <label htmlFor="full-name">Full Name</label><br />
                                <input type="text" id='full-name' name='full-name'/><br />
                                <label htmlFor="email">Email</label><br />
                                <input type="email"  id='email' name='email'/><br />
                                <label htmlFor="github">Github</label><br />
                                <input type="github" id='github' name='github'/><br />
                                <label htmlFor="linkedin">LinkedIn</label><br />
                                <input type="linkedin" id='linkedin' name='linkedin'/><br />
                                <label htmlFor="location">Location</label><br />
                                <input type="location" id='location' name='location'/>
                            </form>
                            }
                        </li>
                        <li className='body-card'>
                            <div id='skills' onClick={handleCardClick}>Skills</div>
                            {
                                showCard === 'skills' &&
                                showSkillForm === false &&
                                    <div id='skills-card'>
                                        <ul id='skills-list'>
                                            {resume.skills.map((skill) => (
                                                <li key={skill.id}>
                                                    <div>{skill.value}</div>
                                                    <div onClick={() => removeSkill(skill.id)}>&#x2717;</div>
                                                </li>
                                            ))}
                                        </ul>
                                        <div id='add-skill'>
                                            <button onClick={handleSkillClick}>+ Skill</button>
                                        </div>
                                    </div>
                            }
                            {
                                showCard === 'skills' &&
                                showSkillForm === true &&
                                    <form action='' id='add-skill-form' onSubmit={(e) => handleSkillSubmit(e, newSkill)}>
                                        <label htmlFor="add-skill">+ Skill</label>
                                        <input 
                                            type="text" 
                                            id='add-skill' 
                                            name='add-skill'
                                            onChange={(e) => setNewSkill(e.target.value)}
                                        />
                                        <input type="submit"/>
                                    </form>
                            }
                        </li>
                        <li className='body-card'>
                            <div id='work-experience' onClick={handleCardClick}>Work Experience</div>
                            {
                                showCard === 'work-experience' &&
                                    showExperienceForm === false &&
                                        <div id='work-experience-card'>
                                            <ul id='work-experience-list'>
                                                <li>Example Work Experience</li>
                                            </ul>
                                            <div id='add-work-experience'>
                                                <button onClick={handleExperienceClick}>+ Work Experience</button>
                                            </div>
                                        </div>
                            }
                            {
                                showCard === 'work-experience' &&
                                showExperienceForm === true &&
                                    <form action="" id='add-experience'>
                                        <label htmlFor="company-name">Company Name</label>
                                        <input type="text" id='company-name' name='company-name'/>
                                        <label htmlFor="position">Position</label>
                                        <input type="text" id='position' name='position'/>
                                        <label htmlFor="start-date">Start Date</label>
                                        <input 
                                            type="date" 
                                            id='start-date' 
                                            name='start-date' 
                                            value={new Date().toISOString().split('T')[0]} 
                                            min='1900-01-01' 
                                            max={new Date().toISOString().split('T')[0]}
                                        />
                                        <input 
                                            type="date" 
                                            id='end-date' 
                                            name='end-date' 
                                            value={new Date().toISOString().split('T')[0]} 
                                            min='1900-01-01' 
                                            max={new Date().toISOString().split('T')[0]}
                                        />
                                        <label htmlFor="description">Description</label>
                                        <textarea name="description" id="description" cols="30" rows="10"></textarea>
                                        <input type="submit" value={'+'} onClick={handleExperienceSubmit}/>
                                    </form>
                            }
                        </li>
                        <li className='body-card'>
                            <div id='education' onClick={handleCardClick}>Education</div>
                            {
                                showCard === 'education' && 
                                showEducationForm === false &&
                                    <div>
                                        <ul id='education-card'>
                                            <li>Example Education</li>
                                        </ul>
                                        <div id='add-education'>
                                            <button onClick={handleEducationClick}>+ Education</button>
                                        </div>
                                    </div>
                            }
                            {
                                showCard === 'education' && 
                                showEducationForm === true &&
                                    <form action='' id='add-education'>
                                        <label htmlFor="institution" name='institution'>Institution</label>
                                        <input type="text" id='institution' name='institution'/>
                                        <label htmlFor="degree">Degree</label>
                                        <select name="degree" id="degree">
                                            <option value="high-school-diploma">High School Diploma</option>
                                            <option value="associates-degree">Associates Degree</option>
                                            <option value="bootcamp">Coding Bootcamp</option>
                                            <option value="ba">B.A.</option>
                                            <option value="bs">B.S.</option>
                                            <option value="ma">M.A.</option>
                                            <option value="ms">M.S.</option>
                                            <option value="phd">PhD</option>
                                        </select>
                                        <label htmlFor="concentration">Concentration</label>
                                        <input type="text" id='concentration' name='concentration'/>
                                        <label htmlFor="start-date">Start Date</label>
                                        <input
                                            type="date" 
                                            id='start-date' 
                                            name='start-date' 
                                            value={new Date().toISOString().split('T')[0]} 
                                            min='1900-01-01' 
                                            max={new Date().toISOString().split('T')[0]}
                                        />
                                        <label htmlFor="end-date">End Date</label>
                                        <input
                                            type="date" 
                                            id='end-date' 
                                            name='end-date' 
                                            value={new Date().toISOString().split('T')[0]} 
                                            min='1900-01-01' 
                                            max={new Date().toISOString().split('T')[0]}
                                        />
                                        <input type="submit" onClick={handleEducationSubmit}/>
                                    </form>
                            }
                        </li>
                        <li className='body-card'>
                            <div id='projects' onClick={handleCardClick}>Projects</div>
                            {
                                showCard === 'projects' &&
                                showProjectForm === false &&
                                    <div>
                                        <ul id='project-card'>
                                            <li>Example Project</li>
                                        </ul>
                                        <div id='add-project'>
                                            <button onClick={handleProjectClick}>+ Project</button>
                                        </div>
                                    </div>
                            }
                            {
                                showCard === 'projects' &&
                                showProjectForm === true &&
                                    <form>
                                        <label htmlFor="title">Project Title</label>
                                        <input type="text" id='title' name='title'/>
                                        <label htmlFor="description">Description</label>
                                        <textarea name="description" id="description" cols="30" rows="10"></textarea>
                                        <input type="submit" onClick={handleProjectSubmit}/>
                                    </form>
                            }
                        </li>
                    </ul>
                </>
             }
        </section>
    )
}

export default EditDisplay;