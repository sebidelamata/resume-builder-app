import { useState } from 'react'
import DocEditor from './DocEditor.jsx'
import DocPreviewer from './DocPreviewer.jsx'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {

  const [resume, setResume] = useState({
    generalEdits: {
      name: 'Miguel Sebastian de la Mata',
      email: 'miguel.sebastian.de.la.mata@gmail.com',
      github: 'https://github.com/sebidelamata',
      linkedin: 'https://www.linkedin.com/in/miguel-sebasti%C3%A1n-de-la-mata/',
      location: 'USA'
    },
    skills: [
      {id: uuidv4(), value: 'Solidity'},
      {id: uuidv4(), value: 'Hardhat'},
      {id: uuidv4(), value: 'Ganache'},
      {id: uuidv4(), value: 'React'},
      {id: uuidv4(), value: 'Node'},
      {id: uuidv4(), value: 'Express'},
      {id: uuidv4(), value: 'Jest'},
      {id: uuidv4(), value: 'Webpack'},
      {id: uuidv4(), value: 'JavaScript'},
      {id: uuidv4(), value: 'CSS'},
      {id: uuidv4(), value: 'HTML'}
    ],
    workExperience: [
      {
        id: uuidv4(),
        companyName: 'S&P Global Ratings',
        position: 'Associate, Quantitative Analytics',
        start: '2021-03-08',
        end: '',
        description: '● Owner of two models used to generate forex depreciation and interest rate risks for client transactions.\n● Contributing Author - A Deep Dive into Crypto Valuation, 10 Nov, 2022 - S&P Global.\n● Contributing Author - U.S. Interest Rates in a Post-LIBOR World, 21 Sept, 2022 - S&P Global Ratings'
      },
      {
        id: uuidv4(),
        companyName: 'MThree Technical Consulting',
        position: 'Trainee - DevOps Engineer',
        start: '2020-05-01',
        end: '2021-02-15',
        description: 'Created custom Docker Images and pipelines using Jenkins and AWS resources to reduce downtime for both developers and end users.'
      },
      {
        id: uuidv4(),
        companyName:'Appalachian State University',
        position: 'Data Scientist',
        start: '2018-06-01',
        end: '2020-05-01',
        description: '● Created a curriculum for an online analytics certification program offered through the university with cooperation from SAS and INFORMS. Exceeded initial enrollment estimates by 19%.\n● Collected, ordered, and cleaned data from research participants to the system database for a behavioral economic study on residential energy consumption patterns in cooperation with New River Light and Power and the Appalachian Energy Center.'
      }
    ],
    education: [
      {
        id: uuidv4(),
        institution: 'Appalachian State University',
        degree: 'M.S.',
        concentration: 'Applied Data Analytics',
        start: '2018-08-01',
        end: '2019-08-01'
      },
      {
        id: uuidv4(),
        institution: 'Appalachian State University',
        degree: 'B.S.',
        concentration: 'Appropriate Technologies',
        start: '2012-08-01',
        end: '2017-12-01'
      },
      {
        id: uuidv4(),
        institution: 'Appalachian State University',
        degree: 'B.A.',
        concentration: 'Spanish Literature, Language, and Cultures',
        start: '2012-08-01',
        end: '2017-12-01'
      },
    ],
    projects: [
      {
        id: uuidv4(),
        title: 'Gamma Gamma Hey',
        description: 'Used a Raspberry Pi 4 with an R Shiny Server, R and shell scripts and a PostgreSQL database to automate scraping options data from the CBOE website and perform EDA.'
      },
      {
        id: uuidv4(),
        title: 'Crypto Risk Analysis',
        description: ' - Used R to build a Dash React.js-based app with interactive Plotly.js graphs and daily-updated data to look at the risk factors behind four major cryptocurrencies. Created a Docker image and deployed via Git to Heroku cloud hosting service.'
      },
      {
        id: uuidv4(),
        title: 'Trump Tweets NLP / Market Volatility',
        description: 'Used Trump’s Twitter data to predict whether market volatility will increase that day. Feature engineered data with SVD. The predictions were decided by a weighted voting classifier ensemble of regression, tree-based, and boosted models. Achieved an ROC AUC score of 56.5%.'
      },
      {
        id: uuidv4(),
        title: 'COVID-19 / CPI',
        description: 'Built an ElasticNet Regression model in Python using web-scraped asset data to predict CPI offset by distorted inflation figures after the COVID-19 related market crash of 2020. At the time (Sept 2020) YoY CPI showed 1.3% inflation, while my model indicated it was at 2.6%.'
      },
      {
        id: uuidv4(),
        title: 'Carolina Fintech Hub 2018 Fall University Hackathon',
        description: ' Team Member, Appalachian State University, University Finalist Oct 2018 Developed an Android/IOs mobile application using Python aimed to help Millennials invest more in sustainable and socially conscious Mortgage Funds and ETFs.'
      }
    ]
  })

  const updateResume = (newResume) => {
    setResume(newResume)
  }

  return (
    <>
    <DocEditor resume={resume} updateResume={updateResume}/>
    <DocPreviewer resume={resume} updateResume={updateResume}/>
    </>
  )
}

export default App
