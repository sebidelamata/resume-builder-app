import { useState } from 'react'

const EditDisplay = ({select}) => {

    const [showCard, setShowCard] = useState('general-edits')

    const handleCardClick = (e) => {
        setShowCard(e.target.id)
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
                                <label htmlFor="fullName">Full Name</label><br />
                                <input type="text" id='full-name' name='fullName'/><br />
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
                        <li>
                            <div id='skills' onClick={handleCardClick}>Skills</div>
                            {
                                showCard === 'skills' &&
                                    <div id='skills-card'>
                                        <ul id='skills-list'>
                                            <li>Example skill</li>
                                        </ul>
                                        <div id='add-education'>
                                            <button>+ Education</button>
                                        </div>
                                    </div>
                            }
                        </li>
                        <li className='body-card'>
                            <div id='work-experience' onClick={handleCardClick}>Work Experience</div>
                            {
                                showCard === 'work-experience' &&
                                    <div id='work-experience-card'>
                                        <ul id='work-experience-list'>
                                            <li>Example Work Experience</li>
                                        </ul>
                                        <div id='add-work-experience'>
                                            <button>+ Work Experience</button>
                                        </div>
                                    </div>
                            }
                        </li>
                        <li className='body-card'>
                            <div id='education' onClick={handleCardClick}>Education</div>
                            {
                                showCard === 'education' && 
                                    <div>
                                        <ul id='education-card'>
                                            <li>Example Education</li>
                                        </ul>
                                        <div id='add-education'>
                                            <button>+ Education</button>
                                        </div>
                                    </div>
                            }
                        </li>
                        <li className='body-card'>
                            <div id='projects' onClick={handleCardClick}>Projects</div>
                            {
                                showCard === 'projects' &&
                                    <div>
                                        <ul id='project-card'>
                                            <li>Example Project</li>
                                        </ul>
                                        <div id='add-project'>
                                            <button>+ Project</button>
                                        </div>
                                    </div>
                            }
                        </li>
                    </ul>
                </>
             }
        </section>
    )
}

export default EditDisplay;