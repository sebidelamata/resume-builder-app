import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const EditDisplay = ({select, resume, updateResume}) => {

    const [showCard, setShowCard] = useState('general-edits')
    const [showSkillForm, setShowSkillForm] = useState(false)
    const [showExperienceForm, setShowExperienceForm] = useState(false)
    const [showEducationForm, setShowEducationForm] = useState(false)
    const [showProjectForm, setShowProjectForm] = useState(false)

    const [newGeneralEdits, setNewGeneralEdits] = useState({})
    const [newSkill, setNewSkill] = useState('')
    const [newWorkExperience, setNewWorkExperience] = useState([])
    const [newEducation, setNewEducation] = useState([])
    const [newProject, setNewProject] = useState([])

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

    const handleGeneralEditsSubmit = (e, newGeneralEdits) => {
        e.preventDefault()
        let submitForm = e.target
        let formData = new FormData(submitForm)
        let updatedNewGeneralEdits = {...newGeneralEdits};
        formData.forEach((value, key) => {
            updatedNewGeneralEdits[key] = value
        })

        setNewGeneralEdits(updatedNewGeneralEdits)
        
        let updatedResume = {
            ...resume,
            generalEdits: updatedNewGeneralEdits,
        }
        updateResume(updatedResume)
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

    const handleExperienceSubmit = (e, newWorkExperience) => {
        e.preventDefault();
        let WorkForm = e.target
        let formData = new FormData(WorkForm)
        let updatedNewWorkExperience = {}
        formData.forEach((value, key) => {
            updatedNewWorkExperience[key] = value
        })
        updatedNewWorkExperience.id = uuidv4()
        updatedNewWorkExperience = [
            ...resume.workExperience,
            updatedNewWorkExperience
        ]
        setNewWorkExperience(updatedNewWorkExperience)
        let updatedResume = {
            ...resume,
            workExperience: updatedNewWorkExperience
        }
        updateResume(updatedResume)
        setShowExperienceForm(false)
    }

    const handleEducationSubmit = (e, newEducation) => {
        e.preventDefault();
        let EducationForm = e.target
        let formData = new FormData(EducationForm)
        let updatedNewEducation = {}
        formData.forEach((value, key) => {
            updatedNewEducation[key] = value
        })
        updatedNewEducation.id = uuidv4()
        updatedNewEducation = [
            ...resume.education,
            updatedNewEducation
        ]
        setNewEducation(updatedNewEducation)
        let updatedResume = {
            ...resume,
            education: updatedNewEducation
        }
        updateResume(updatedResume)
        setShowEducationForm(false)
    }

    const handleProjectSubmit = (e, newProject) => {
        e.preventDefault();
        let ProjectForm = e.target
        let formData = new FormData(ProjectForm)
        let updatedNewProject = []
        formData.forEach((value, key) => {
            updatedNewProject[key] = value
        })
        updatedNewProject.id = uuidv4()
        updatedNewProject = [
            ...resume.projects,
            updatedNewProject
        ]
        setNewProject(updatedNewProject)
        let updatedResume = {
            ...resume,
            projects: updatedNewProject
        }
        updateResume(updatedResume)
        setShowProjectForm(false)
    }

    const removeSkill = (skillID) => {
        let updatedSkills = resume.skills.filter(skill => skill.id !== skillID)
        let updatedResume = {
            ...resume,
            skills: updatedSkills
        }
        updateResume(updatedResume)
    }

    const removeWork = (workID) => {
        let updatedWork = resume.workExperience.filter(work => work.id !== workID)
        let updatedResume = {
            ...resume,
            workExperience: updatedWork
        }
        updateResume(updatedResume)
    }

    const removeEducation = (educationID) => {
        let updatedEducation = resume.education.filter(education => education.id !== educationID)
        let updatedResume = {
            ...resume,
            education: updatedEducation
        }
        updateResume(updatedResume)
    }

    const removeProject = (projectID) => {
        let updatedProjects = resume.projects.filter(project => project.id !== projectID)
        let updatedResume = {
            ...resume,
            projects: updatedProjects
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
                                <form method="post" onSubmit={(e) => handleGeneralEditsSubmit(e, newGeneralEdits)}>
                                    <label htmlFor="full-name">Full Name</label><br />
                                    <input type="text" id='full-name' name='full-name' defaultValue={resume.generalEdits.name} onChange={(e) => setNewGeneralEdits({...newGeneralEdits, name: e.target.value })}/><br />
                                    <label htmlFor="email">Email</label><br />
                                    <input type="email"  id='email' name='email' defaultValue={resume.generalEdits.email} onChange={(e) => setNewGeneralEdits({...newGeneralEdits, email: e.target.value })}/><br />
                                    <label htmlFor="github">Github</label><br />
                                    <input type="github" id='github' name='github' defaultValue={resume.generalEdits.github} onChange={(e) => setNewGeneralEdits({...newGeneralEdits, github: e.target.value })}/><br />
                                    <label htmlFor="linkedin">LinkedIn</label><br />
                                    <input type="linkedin" id='linkedin' name='linkedin' defaultValue={resume.generalEdits.linkedin} onChange={(e) => setNewGeneralEdits({...newGeneralEdits, linkedin: e.target.value })}/><br />
                                    <label htmlFor="location">Location</label><br />
                                    <input type="location" id='location' name='location' defaultValue={resume.generalEdits.location} onChange={(e) => setNewGeneralEdits({...newGeneralEdits, location: e.target.value })}/>
                                    <input type="submit" value={'Submit'}/>
                                </form>
                            }
                        </li>
                        <li className='body-card'>
                            <div id='skills' onClick={(e) => handleCardClick(e, newGeneralEdits)}>Skills</div>
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
                                                {
                                                    resume.workExperience.map((work) => (
                                                        <li key={work.id}>
                                                            <div className='work-experience-card'>
                                                                <div>
                                                                    <div className='company-name'>{work.companyName}</div>
                                                                    <div onClick={() => removeWork(work.id)}>&#x2717;</div>
                                                                </div>
                                                                <div className='position'>{work.position}</div>
                                                            </div>
                                                            <div></div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <div id='add-work-experience'>
                                                <button onClick={handleExperienceClick}>+ Work Experience</button>
                                            </div>
                                        </div>
                            }
                            {
                                showCard === 'work-experience' &&
                                showExperienceForm === true &&
                                    <form method='post' id='add-experience' onSubmit={(e) => handleExperienceSubmit(e, newWorkExperience)}>
                                        <label htmlFor="companyName">Company Name</label>
                                        <input type="text" id='companyName' name='companyName' onChange={(e) => setNewWorkExperience(e.target.value)}/>
                                        <label htmlFor="position">Position</label>
                                        <input type="text" id='position' name='position' onChange={(e) => setNewWorkExperience(e.target.value)}/>
                                        <label htmlFor="start">Start Date</label>
                                        <input 
                                            type="date" 
                                            id='start' 
                                            name='start' 
                                            value={new Date().toISOString().split('T')[0]} 
                                            min='1900-01-01' 
                                            max={new Date().toISOString().split('T')[0]}
                                            onChange={(e) => setNewWorkExperience(e.target.value)}
                                        />
                                        <input 
                                            type="date" 
                                            id='end' 
                                            name='end' 
                                            value={new Date().toISOString().split('T')[0]} 
                                            min='1900-01-01' 
                                            max={new Date().toISOString().split('T')[0]}
                                            onChange={(e) => setNewWorkExperience(e.target.value)}
                                        />
                                        <label htmlFor="description">Description</label>
                                        <textarea name="description" id="description" cols="30" rows="10" onChange={(e) => setNewWorkExperience(e.target.value)}></textarea>
                                        <input type="submit" value={'+'}/>
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
                                            {
                                                resume.education.map((education) => (
                                                    <li key={education.id}>
                                                        <div className='education-card'>
                                                            <div className='institution'>{education.institution}</div>
                                                            <div>
                                                                <div className='degree'>{education.degree}</div>
                                                                <div className='concentration'>{education.concentration}</div>
                                                            </div>
                                                            <div onClick={() => removeEducation(education.id)}>&#x2717;</div>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div id='add-education'>
                                            <button onClick={handleEducationClick}>+ Education</button>
                                        </div>
                                    </div>
                            }
                            {
                                showCard === 'education' && 
                                showEducationForm === true &&
                                    <form action='' id='add-education' onSubmit={(e) => handleEducationSubmit(e, newEducation)}>
                                        <label htmlFor="institution" name='institution'>Institution</label>
                                        <input type="text" id='institution' name='institution' onChange={(e) => setNewEducation(e.target.value)}/>
                                        <label htmlFor="degree">Degree</label>
                                        <select name="degree" id="degree" onChange={(e) => setNewEducation(e.target.value)}>
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
                                        <input type="text" id='concentration' name='concentration' onChange={(e) => setNewEducation(e.target.value)}/>
                                        <label htmlFor="start-date">Start Date</label>
                                        <input
                                            type="date" 
                                            id='start-date' 
                                            name='start-date' 
                                            value={new Date().toISOString().split('T')[0]} 
                                            min='1900-01-01' 
                                            max={new Date().toISOString().split('T')[0]}
                                            onChange={(e) => setNewEducation(e.target.value)}
                                        />
                                        <label htmlFor="end-date">End Date</label>
                                        <input
                                            type="date" 
                                            id='end-date' 
                                            name='end-date' 
                                            value={new Date().toISOString().split('T')[0]} 
                                            min='1900-01-01' 
                                            max={new Date().toISOString().split('T')[0]}
                                            onChange={(e) => setNewEducation(e.target.value)}
                                        />
                                        <input type="submit"/>
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
                                            {
                                                resume.projects.map((project) => (
                                                    <li key={project.id}>
                                                        <div className='project-card'>
                                                            <div>
                                                                <div>{project.title}</div>
                                                                <div onClick={() => removeProject(project.id)}>&#x2717;</div>
                                                            </div>
                                                    </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div id='add-project'>
                                            <button onClick={handleProjectClick}>+ Project</button>
                                        </div>
                                    </div>
                            }
                            {
                                showCard === 'projects' &&
                                showProjectForm === true &&
                                    <form className='new-project-form' onSubmit={(e) => handleProjectSubmit(e, newProject)}>
                                        <label htmlFor="title">Project Title</label>
                                        <input type="text" id='title' name='title' onChange={(e) => setNewProject(e.target.value)}/>
                                        <label htmlFor="description">Description</label>
                                        <textarea name="description" id="description" cols="30" rows="10" onChange={(e) => setNewProject(e.target.value)}></textarea>
                                        <input type="submit"/>
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