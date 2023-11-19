import { useState } from 'react'
import './DocEditor.css'
import EditDisplay from './EditDisplay.jsx'

const DocEditor = ({resume, updateResume}) => {

    const [editDisplaySelect, setEditDisplaySelect] = useState('body');

    const handleNavBarClick = (e) => {
        setEditDisplaySelect(e.target.id);
    }

    const NavBar = () => {
        return(
            <ul>
                    <li id='body' onClick={handleNavBarClick}>Body</li>
                    <li id='edit-styles' onClick={handleNavBarClick}>Customize Document Format</li>
                    <li id='save-delete' onClick={handleNavBarClick}>Save, Load an example, Delete doc</li>
            </ul> 
        );
    }

    return (
        <div id='doc-editor'>
            <div id='nav-div'>
                <NavBar/>
             </div>
            <div id='edit-div'>
                <EditDisplay select={editDisplaySelect} resume={resume} updateResume={updateResume}/>
            </div>
        </div>
    )


};


export default DocEditor;