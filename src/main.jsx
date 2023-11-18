import React from 'react'
import ReactDOM from 'react-dom/client'
import DocEditor from './DocEditor.jsx'
import DocPreviewer from './DocPreviewer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DocEditor />
    <DocPreviewer />
  </React.StrictMode>,
)
