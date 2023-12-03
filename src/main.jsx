import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// this is our resume object that will be passed around

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='title' id='app-title'><strong>Resume Builder</strong></div>
    <App/>
  </React.StrictMode>,
)
