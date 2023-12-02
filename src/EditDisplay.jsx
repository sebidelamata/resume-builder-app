import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const EditDisplay = ({select, resume, updateResume}) => {

    const [showCard, setShowCard] = useState('general-edits')
    const [showSkillForm, setShowSkillForm] = useState(false)
    const [showExperienceForm, setShowExperienceForm] = useState(false)
    const [showEducationForm, setShowEducationForm] = useState(false)
    const [showProjectForm, setShowProjectForm] = useState(false)

    const [showEditWork, setShowEditWork] = useState('')
    const [showEditEducation, setShowEditEducation] = useState('')
    const [showEditProject, setShowEditProject] = useState('')

    const [newGeneralEdits, setNewGeneralEdits] = useState({})
    const [newSkill, setNewSkill] = useState('')
    const [newWorkExperience, setNewWorkExperience] = useState({
        companyName: '',
        position: '',
        start: '',
        end: '',
        description: ''
    })
    const [workPresentChecked, setWorkPresentChecked] = useState(true)

    const [newEducation, setNewEducation] = useState({
        institution: '',
        degree: '',
        concentration: '',
        start: '',
        end: ''
    })
    const [educationPresentChecked, setEducationPresentChecked] = useState(true)

    const [newProject, setNewProject] = useState({
        title: '',
        description: ''
    })

    let editWorkIndex = resume.workExperience.findIndex(workExperience => workExperience.id === showEditWork)
    const [editWorkExperience, setEditWorkExperience] = useState({
        companyName: '',
        position: '',
        start: '',
        end: '',
        description: ''
    })

    let editEducationIndex = resume.education.findIndex(education => education.id === showEditEducation)
    const [editEducationExperience, setEditEducationExperience] = useState({
        institution: '',
        degree: '',
        concentration: '',
        start: '',
        end: ''
    })

    let editProjectIndex = resume.projects.findIndex(project => project.id === showEditProject)
    const [editProjectExperience, setEditProjectExperience] = useState({
        title: '',
        description: ''
    })

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

    const handleSkillCancel = (e) => {
        e.preventDefault()
        if(showSkillForm === true){
            setShowSkillForm(false)
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

    const handleWorkCheckboxChange = () => {
        setWorkPresentChecked(!workPresentChecked)
    }

    const handleWorkCancel = (e) => {
        e.preventDefault()
        if(showExperienceForm === true){
            setShowExperienceForm(false)
        }
    }

    const handleEducationCheckboxChange = () => {
        setEducationPresentChecked(!educationPresentChecked)
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

    const handleEducationCancel = (e) => {
        e.preventDefault()
        if(showEducationForm === true){
            setShowEducationForm(false)
        }
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

    const handleProjectCancel = (e) => {
        e.preventDefault()
        if(showProjectForm === true){
            setShowProjectForm(false)
        }
    }

    const handleWorkEditClick = (workId) => {
        if(showEditWork === ''){
            setShowEditWork(workId)
            const selectedWorkExperience = resume.workExperience.find((work) => work.id === workId) || {}
            setEditWorkExperience({
                companyName: selectedWorkExperience.companyName || '',
                position: selectedWorkExperience.position || '',
                start: selectedWorkExperience.start || '',
                end: selectedWorkExperience.end || '',
                description: selectedWorkExperience.description || ''
            })
        }
    }

    const editWork = (e, workId, editWorkExperience) => {
        e.preventDefault()
        let workForm = e.target
        let formData = new FormData(workForm)
        let updatedWork = {}
        formData.forEach((value, key) => (
            updatedWork[key] = value
        ))
        updatedWork.id = workId
        let workIDIndex = resume.workExperience.findIndex(workExperience => workExperience.id === updatedWork.id)
        let updatedResume = {
            ...resume
        }
        if(workIDIndex !== -1){
            updatedResume.workExperience[workIDIndex] = updatedWork
        }
        updateResume(updatedResume)
        setShowEditWork('')
    }

    const handleWorkEditCancel = (e) => {
        e.preventDefault()
        if(showEditWork !== ''){
            setShowEditWork('')
        }
    }

    const handleEducationEditClick = (educationID) => {
        if(showEditEducation === ''){
            setShowEditEducation(educationID)
            const selectedEducation = resume.education.find((educationExperience) => educationExperience.id === educationID)
            setEditEducationExperience({
                institution: selectedEducation.institution || '',
                degree: selectedEducation.degree || '',
                concentration: selectedEducation.concentration,
                start: selectedEducation.start || '',
                end: selectedEducation.end || ''
            })
        }
    }

    const handleEducationEditCancel = (e) => {
        e.preventDefault()
        if(showEditEducation !== ''){
            setShowEditEducation('')
        }
    }

    const editEducation = (e, educationID, editEducationExperience) => {
        e.preventDefault()
        let educationForm = e.target
        let formData = new FormData(educationForm)
        let updatedEducation = {}
        formData.forEach((value, key) => (
            updatedEducation[key] = value
        ))
        updatedEducation.id = educationID
        let EducationIDIndex = resume.education.findIndex(education => education.id === updatedEducation.id)
        let updatedResume = {
            ...resume
        }
        if(EducationIDIndex !== -1){
            updatedResume.education[EducationIDIndex] = updatedEducation
        }
        updateResume(updatedResume)
        setShowEditEducation('')
    }

    const handleProjectEditClick = (projectID) => {
        if(showEditProject === ''){
            setShowEditProject(projectID)
            const selectedProject = resume.projects.find((project) => project.id === projectID)
            setEditProjectExperience({
                title: selectedProject.title || '',
                description: selectedProject.description || ''
            })
        }
    }

    const editProject = (e, projectID, editProjectExperience) => {
        e.preventDefault()
        let projectForm = e.target
        let formData = new FormData(projectForm)
        let updatedProject = {}
        formData.forEach((value, key) => (
            updatedProject[key] = value
        ))
        updatedProject.id = projectID
        let projectIDIndex = resume.projects.findIndex(project => project.id === updatedProject.id)
        let updatedResume = {
            ...resume
        }
        if(projectIDIndex !== -1){
            updatedResume.projects[projectIDIndex] = updatedProject
        }
        updateResume(updatedResume)
        setShowEditProject('')
    }

    const handleProjectEditCancel = (e) => {
        e.preventDefault()
        if(showEditProject !== ''){
            setShowEditProject('')
        }
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
                                    <label htmlFor="name">Full Name</label><br />
                                    <input type="text" id='name' name='name' defaultValue={resume.generalEdits.name} onChange={(e) => setNewGeneralEdits({...newGeneralEdits, name: e.target.value })}/><br />
                                    <label htmlFor="email">Email</label><br />
                                    <input type="email"  id='email' name='email' defaultValue={resume.generalEdits.email} onChange={(e) => setNewGeneralEdits({...newGeneralEdits, email: e.target.value })}/><br />
                                    <label htmlFor="github">Github</label><br />
                                    <input type="github" id='github' name='github' defaultValue={resume.generalEdits.github} onChange={(e) => setNewGeneralEdits({...newGeneralEdits, github: e.target.value })}/><br />
                                    <label htmlFor="linkedin">LinkedIn</label><br />
                                    <input type="linkedin" id='linkedin' name='linkedin' defaultValue={resume.generalEdits.linkedin} onChange={(e) => setNewGeneralEdits({...newGeneralEdits, linkedin: e.target.value })}/><br />
                                    <label htmlFor="location">Location</label><br />
                                    <input type="location" id='location' name='location' defaultValue={resume.generalEdits.location} onChange={(e) => setNewGeneralEdits({...newGeneralEdits, location: e.target.value })}/><br />
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
                                        /><br />
                                        <input type="submit"/><br/>
                                        <input type="submit" name='cancel' value={"Cancel"} onClick={(e) => handleSkillCancel(e)}/>
                                    </form>
                            }
                        </li>
                        <li className='body-card'>
                            <div id='work-experience' onClick={handleCardClick}>Work Experience</div>
                            {
                                showCard === 'work-experience' &&
                                    showExperienceForm === false &&
                                        showEditWork === '' &&
                                            <div id='work-experience-card'>
                                                <ul id='work-experience-list'>
                                                    {
                                                        resume.workExperience.map((work) => (
                                                            <li key={work.id}>
                                                                <div className='work-experience-card'>
                                                                    <div>
                                                                        <div className='company-name'>{work.companyName}</div>
                                                                        <i className='fa fa-pencil' onClick={() => handleWorkEditClick(work.id)}></i>
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
                                showEditWork === '' &&
                                showExperienceForm === true &&
                                    <form method='post' id='add-experience' onSubmit={(e) => handleExperienceSubmit(e, showEditWork, newWorkExperience)}><br></br>
                                        <label htmlFor="companyName">Company Name</label><br></br>
                                        <input type="text" id='companyName' name='companyName' onChange={(e) => setNewWorkExperience(e.target.value)}/><br></br>
                                        <label htmlFor="position">Position</label><br></br>
                                        <input type="text" id='position' name='position' onChange={(e) => setNewWorkExperience(e.target.value)}/><br></br>
                                        <label htmlFor="start">Start Date</label><br></br>
                                        <input 
                                            type="date" 
                                            id='start' 
                                            name='start' 
                                            value={new Date().toISOString().split('T')[0]} 
                                            min='1900-01-01' 
                                            max={new Date().toISOString().split('T')[0]}
                                            onChange={(e) => setNewWorkExperience(e.target.value)}
                                        /><br></br>
                                        <label htmlFor="present">Present</label><br></br>
                                        <input type="checkbox" id='present' name='present' onChange={handleWorkCheckboxChange} defaultChecked={workPresentChecked}/><br></br>
                                        {
                                            workPresentChecked === false &&
                                                <>
                                                    <input 
                                                    type="date" 
                                                    id='end' 
                                                    name='end' 
                                                    value={new Date().toISOString().split('T')[0]} 
                                                    min='1900-01-01' 
                                                    max={new Date().toISOString().split('T')[0]}
                                                    onChange={(e) => setNewWorkExperience(e.target.value)}
                                                    /><br></br>
                                                </>
                                        }
                                        <label htmlFor="description">Description</label><br></br>
                                        <textarea name="description" id="description" cols="30" rows="10" onChange={(e) => setNewWorkExperience(e.target.value)}></textarea><br />
                                        <input type="submit" value={'+'}/><br></br>
                                        <input type="submit" name="cancel" value="Cancel" onClick={(e) => handleWorkCancel(e)}/>
                                    </form>
                            }
                            {
                                showCard === 'work-experience' &&
                                showEditWork !== '' &&
                                showExperienceForm === false &&
                                    <form method='post' id='edit-work-form' onSubmit={(e) => editWork(e, showEditWork, editWorkExperience)}>
                                        <label htmlFor="companyName">Company Name</label><br></br>
                                            <input type="text" id='companyName' name='companyName' value={editWorkExperience.companyName} onChange={(e) => setEditWorkExperience({
                                                ...editWorkExperience,
                                                companyName: e.target.value
                                                })}/><br></br>
                                            <label htmlFor="position">Position</label><br></br>
                                            <input type="text" id='position' name='position' value={editWorkExperience.position} onChange={(e) => setEditWorkExperience({
                                                ...editWorkExperience,
                                                position: e.target.value
                                                })}/><br></br>
                                            <label htmlFor="start">Start Date</label><br></br>
                                            <input 
                                                type="date" 
                                                id='start' 
                                                name='start' 
                                                value={editWorkExperience.start}
                                                min='1900-01-01' 
                                                max={new Date().toISOString().split('T')[0]}
                                                onChange={(e) => setEditWorkExperience({
                                                    ...editWorkExperience,
                                                    start: e.target.value
                                                    })}
                                            /><br></br>
                                            <label htmlFor="end">End Date</label><br></br>
                                             <input 
                                                type="date" 
                                                id='end' 
                                                name='end'                                                     value={
                                                resume.workExperience[editWorkIndex].end === undefined
                                                    ? new Date().toISOString().split('T')[0]
                                                    : editWorkExperience.end
                                                    } 
                                                min='1900-01-01' 
                                                max={new Date().toISOString().split('T')[0]}
                                                onChange={(e) => setEditWorkExperience({
                                                    ...editWorkExperience,
                                                    end: e.target.value
                                                    })}
                                                /><br></br>
                                            <label htmlFor="description">Description</label><br></br>
                                            <textarea name="description" id="description" cols="30" rows="10" value={editWorkExperience.description} onChange={(e) => setEditWorkExperience({
                                        ...editWorkExperience,
                                        description: e.target.value
                                    })}></textarea><br />
                                            <input type="submit" value={'+'}/><br></br>
                                            <input type="submit" name="cancel" value="Cancel" onClick={(e) => handleWorkEditCancel(e)}/>
                                    </form>
                            }
                        </li>
                        <li className='body-card'>
                            <div id='education' onClick={handleCardClick}>Education</div>
                            {
                                showCard === 'education' && 
                                showEducationForm === false &&
                                showEditEducation === '' &&
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
                                                            <i className='fa fa-pencil' onClick={() => handleEducationEditClick(education.id)}></i>
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
                                showEditEducation === '' &&
                                    <form action='' id='add-education' onSubmit={(e) => handleEducationSubmit(e, showEditEducation, newEducation)}>
                                        <label htmlFor="institution" name='institution'>Institution</label>
                                        <input type="text" id='institution' name='institution' onChange={(e) => setNewEducation(e.target.value)}/>
                                        <label htmlFor="degree">Degree</label>
                                        <select name="degree" id="degree" onChange={(e) => setNewEducation(e.target.value)}>
                                            <option value="High School Diploma">High School Diploma</option>
                                            <option value="Associates Degree">Associates Degree</option>
                                            <option value="Coding Bootcamp">Coding Bootcamp</option>
                                            <option value="B.A.">B.A.</option>
                                            <option value="B.S.">B.S.</option>
                                            <option value="M.A.">M.A.</option>
                                            <option value="M.S.">M.S.</option>
                                            <option value="PhD">PhD</option>
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
                                        <label htmlFor="present">Present</label><br></br>
                                        <input type="checkbox" id='present' name='present' onChange={handleEducationCheckboxChange} defaultChecked={educationPresentChecked}/><br></br>

                                        {
                                            educationPresentChecked === false &&
                                                <>
                                                    <label htmlFor="end-date">End Date</label>
                                                     <input
                                                        type="date" 
                                                        id='end' 
                                                        name='end' 
                                                        value={new Date().toISOString().split('T')[0]} 
                                                        min='1900-01-01' 
                                                        max={new Date().toISOString().split('T')[0]}
                                                        onChange={(e) => setNewEducation(e.target.value)}
                                                    />
                                                </>
                                        }
                                        <input type="submit" value={'+'}/>
                                        <input type="submit" value={'Cancel'} onClick={(e) => handleEducationCancel(e)}/>
                                    </form>
                            }
                            {
                                showCard === 'education' && 
                                showEducationForm === false &&
                                showEditEducation !== '' &&
                                    <form method='post' id='edit-education' onSubmit={(e) => editEducation(e, showEditEducation, editEducationExperience)}>
                                        <label htmlFor="institution" name='institution'>Institution</label><br></br>
                                        <input type="text" id='institution' name='institution' value={editEducationExperience.institution} onChange={(e) => setEditEducationExperience({
                                            ...editEducationExperience,
                                            institution: e.target.value
                                            })}/><br></br>
                                        <label htmlFor="degree">Degree</label><br></br>
                                        <select name="degree" id="degree" value={editEducationExperience.degree} onChange={(e) => setEditEducationExperience({
                                            ...editEducationExperience,
                                            degree: e.target.value
                                            })}>
                                            <option value="High School Diploma">High School Diploma</option>
                                            <option value="Associates Degree">Associates Degree</option>
                                            <option value="Coding Bootcamp">Coding Bootcamp</option>
                                            <option value="B.A.">B.A.</option>
                                            <option value="B.S.">B.S.</option>
                                            <option value="M.A.">M.A.</option>
                                            <option value="M.S.">M.S.</option>
                                            <option value="PhD">PhD</option>
                                        </select><br></br>
                                        <label htmlFor="concentration">Concentration</label><br></br>
                                        <input type="text" id='concentration' name='concentration' value={editEducationExperience.concentration} onChange={(e) => setEditEducationExperience({
                                            ...editEducationExperience,
                                            concentration: e.target.value
                                            })}/><br></br>
                                        <label htmlFor="start">Start Date</label><br></br>
                                        <input
                                            type="date" 
                                            id='start' 
                                            name='start' 
                                            min='1900-01-01' 
                                            max={new Date().toISOString().split('T')[0]}
                                            value={editEducationExperience.start} 
                                            onChange={(e) => setEditEducationExperience({
                                                ...editEducationExperience,
                                                start: e.target.value
                                                })}
                                        /><br></br>
                                        <label htmlFor="end">End Date</label><br></br>
                                        <input
                                            type="date" 
                                            id='end' 
                                            name='end'
                                            min='1900-01-01' 
                                            max={new Date().toISOString().split('T')[0]}
                                            value={
                                                resume.education[editEducationIndex].end === undefined
                                                    ? new Date().toISOString().split('T')[0]
                                                    :editEducationExperience.end
                                            } 
                                            onChange={(e) => setEditEducationExperience({
                                                ...editEducationExperience,
                                                end: e.target.value
                                                })}
                                        /><br></br>
                                        <input type="submit" value={'+'}/><br></br>
                                        <input type="submit" value={'Cancel'} onClick={(e) => handleEducationEditCancel(e)}/>
                                    </form>
                            }
                        </li>
                        <li className='body-card'>
                            <div id='projects' onClick={handleCardClick}>Projects</div>
                            {
                                showCard === 'projects' &&
                                showProjectForm === false &&
                                showEditProject === '' &&
                                    <div>
                                        <ul id='project-card'>
                                            {
                                                resume.projects.map((project) => (
                                                    <li key={project.id}>
                                                        <div className='project-card'>
                                                            <div>
                                                                <div>{project.title}</div>
                                                                <i className='fa fa-pencil' onClick={() => handleProjectEditClick(project.id)}></i>
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
                                showEditProject === '' &&
                                    <form className='new-project-form' onSubmit={(e) => handleProjectSubmit(e, newProject)}>
                                        <label htmlFor="title">Project Title</label><br></br>
                                        <input type="text" id='title' name='title' onChange={(e) => setNewProject(e.target.value)}/><br></br>
                                        <label htmlFor="description">Description</label><br></br>
                                        <textarea name="description" id="description" cols="30" rows="10" onChange={(e) => setNewProject(e.target.value)}></textarea><br></br>
                                        <input type="submit" value={'+'}/><br></br>
                                        <input type='submit' value={'Cancel'} onClick={(e) => handleProjectCancel(e)}/>
                                    </form>
                            }
                            {
                                showCard === 'projects' &&
                                showProjectForm === false &&
                                showEditProject !== '' &&
                                <form className='edit-project-form' onSubmit={(e) => editProject(e, showEditProject, editProjectExperience)}>
                                <label htmlFor="title">Project Title</label><br></br>
                                <input type="text" id='title' name='title' value={editProjectExperience.title} onChange={(e) => setEditProjectExperience({
                                            ...editProjectExperience,
                                            title: e.target.value
                                            })}/><br></br>
                                <label htmlFor="description">Description</label><br></br>
                                <textarea name="description" id="description" cols="30" rows="10" value={editProjectExperience.description} onChange={(e) => setEditProjectExperience({
                                            ...editProjectExperience,
                                            description: e.target.value
                                            })}></textarea><br></br>
                                <input type="submit" value={'+'}/><br></br>
                                <input type='submit' value={'Cancel'} onClick={(e) => handleProjectEditCancel(e)}/>
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