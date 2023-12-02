import { useState } from 'react'
import './DocPreviewer.css'

const DocPreviewer = ({resume, updateResume}) => {
    console.log(resume.skills.length)
    return (
        <div id='doc-previewer'>
            <div id='paper'>
                <div id='general-edits-preview'>
                    <div id='full-name-preview'>
                        <strong>
                            {resume.generalEdits.name}
                        </strong>
                    </div>
                    {   
                        Object.keys(resume.generalEdits).map((key) => {
                            if(key !== 'name'){
                                return <div key={key}>{resume.generalEdits[key]}</div>
                            }
                        })
                    }
                </div>
                {
                    resume.skills.length !== 0 &&
                        <div className='resume-section' id='skills-preview' >
                            <div className='section-title'><strong>Skills</strong></div>
                            <ul className='preview-list'>
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
                            <ul className='preview-list'>
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
                                                    workExperience.end !== undefined &&
                                                    <div>
                                                        <div> - </div>
                                                        <div>{workExperience.end}</div>
                                                    </div>   
                                                }{
                                                    workExperience.end === undefined &&
                                                        <div>
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
                            <ul className='preview-list'>
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
                            <ul className='preview-list'>
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
                                                    education.end !== undefined &&
                                                    <div>
                                                        <div> - </div>
                                                        <div>{education.end}</div>
                                                    </div>   
                                                }{
                                                    education.end === undefined &&
                                                        <div>
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