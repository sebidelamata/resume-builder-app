import { useState } from 'react'

const DocPreviewer = ({resume, updateResume}) => {
    
    const previewStyles = {
        fontFamily: resume.font,
        listStyle: resume.bullets
    }

    return (
        <div id='doc-previewer' style={previewStyles}>
            <div id='paper'>
                <div id='general-edits-preview'>
                    <div id='full-name-preview'>
                        <strong>
                            {resume.generalEdits.name}
                        </strong>
                    </div>
                    <div id='gen-edits-row-2'>
                    {   
                        Object.keys(resume.generalEdits).map((key) => {
                            if(key === 'email' || key === 'github'){
                                return <div key={key} id={key}>{resume.generalEdits[key]}</div>
                            }
                        })
                    }
                    </div>
                    <div id='gen-edits-row-3'>
                    {   
                        Object.keys(resume.generalEdits).map((key) => {
                            if(key === 'linkedin' || key === 'location'){
                                return <div key={key} id={key}>{resume.generalEdits[key]}</div>
                            }
                        })
                    }
                    </div>
                </div>
                {
                    resume.skills.length !== 0 &&
                        <div className='resume-section' id='skills-preview' >
                            <div className='section-title'><strong>Skills</strong></div>
                            <ul className='preview-list' style={{listStyle: 'inherit'}}>
                                {
                                    resume.skills.map((skill) => (
                                        <li key={skill.id}>
                                            {skill.value}
                                        </li>
                                    )
                                    )
                                }
                            </ul>
                        </div>
                }
                {
                    resume.workExperience.length !== 0 &&
                        <div className='resume-section' id='work-experience-preview'>
                            <div className='section-title'><strong>Experience</strong></div>
                            <ul className='preview-list' style={{listStyle: 'inherit'}}>
                                {
                                    resume.workExperience.map((workExperience) => (
                                        <li key={workExperience.id}>
                                            <div className='resume-subsection-title work-experience-title'>
                                                <strong>
                                                    {workExperience.companyName}
                                                </strong>
                                            </div>
                                            <div className='resume-subsection-dates work-experience-dates'>
                                                {
                                                    workExperience.start
                                                }{
                                                    workExperience.end !== undefined && workExperience.end !== ''
                                                    ? <div>
                                                        <div> - </div>
                                                        <div>{workExperience.end}</div>
                                                    </div> 
                                                    : <div>
                                                        <div> - </div>
                                                        <div>Present</div>
                                                     </div>   
                                                }
                                            </div>
                                            <div className='resume-subsection-body work-body'>
                                                {workExperience.description}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                }
                {
                    resume.projects.length !== 0 &&
                        <div className='resume-section' id='projects-preview'>
                            <div className='section-title'><strong>Projects</strong></div>
                            <ul className='preview-list' style={{listStyle: 'inherit'}}>
                                {
                                    resume.projects.map((project) => (
                                        <li key={project.id}>
                                            <div className='resume-subsection-title project-title'>
                                                <strong>
                                                    {project.title}
                                                </strong>
                                            </div>
                                            <div className='resume-subsection-body projects-body'>
                                                {project.description}
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                }
                {
                    resume.education.length !== 0 &&
                        <div className='resume-section' id='education-preview'>
                            <div className='section-title'><strong>Education</strong></div>
                            <ul className='preview-list' style={{listStyle: 'inherit'}}>
                                {
                                    resume.education.map((education) => (
                                        <li key={education.id}>
                                            <div className='resume-subsection-title education-institution'>
                                                <strong>
                                                    {education.institution}
                                                </strong>
                                            </div>
                                            <div className='resume-subsection-dates education-dates'>
                                                {
                                                    education.start
                                                }{
                                                    education.end !== undefined && education.end !== ''
                                                    ? <div>
                                                        <div> - </div>
                                                        <div>{education.end}</div>
                                                    </div> 
                                                    : <div>
                                                        <div> - </div>
                                                        <div>Present</div>
                                                    </div>   
                                                }
                                            </div>
                                            <div className='resume-subsection-body education-body'>
                                                <div className='degree-preview'>{education.degree}</div>
                                                <div className='concentration-preview'>{education.concentration}</div>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                }
            </div>
        </div>
    )
};

export default DocPreviewer;