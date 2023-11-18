import { useState } from 'react'
import './DocEditor.css'

const DocEditor = () => {

    const [editDisplaySelect, setEditDisplaySelect] = useState('body');

    const handleNavBarClick = (e) => {
        console.log(e.target.id)
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
                {editDisplaySelect}
            </div>
        </div>
    )


};


export default DocEditor;