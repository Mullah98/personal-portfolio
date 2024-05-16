import React from 'react'
import '../styles/Projects.css'
import backendProject from '../assets/backend-project.png'
import frontendProject from '../assets/frontend-project.png'
import travelogProject from '../assets/travelog-project.png'
import GitHubIcon from "@material-ui/icons/GitHub";


const Projects = () => {
  const ncNews = [
    {name: "Northcoders News", image: backendProject}
  ]

  const ncMarketPlace = [
    {name: "Northcoders Market Place", image: frontendProject}
  ]

  const travelog = [
    {name: 'Travelog App', image: travelogProject}
  ]

  return (
    <div className='project-container'>

    <div className='project backend'>
      {ncNews.map((project) => (
        <div className='project-grid'>
        <h3>{project.name}</h3>
        <div className='image-container'>
        <img src={project.image} className='project-img'></img>
        <div className='description'>
        <p>Backend project involved designing and implementing a dynamic API utilizing SQL, JEST and Test-driven Development methologies.
        Hosted on Render to allow easy access for users.</p>
        </div>
        </div>
        <div className='btn-container'>
        <a href='https://nc-news-4rxh.onrender.com/api/' target='_blank'><button>Link to website</button></a>
        <a href='https://github.com/Mullah98/backend-nc-news' target='_blank'><button className='github'><GitHubIcon style={{fontSize: 55}}/></button></a>
        </div>
      </div>
      ))}
    </div>

    <div className='project frontend'>
      {ncMarketPlace.map((project) => (
        <div className='project-grid'>
        <h3>{project.name}</h3>
        <div className='image-container'>
        <img src={project.image} className='project-img'></img>
        <div className='description'>
        <p>Frontend project for the Northcoders News backend project. A website for social news collection and discussions. 
        Developed using React and implementing CRUD funcionality for a user-friendly and interactive experience.
        Deployed the website on Netifly for seamless user accessibility.</p>
        </div>
        </div>
        <div className='btn-container'>
        <a href='https://northcoders-marketplace.netlify.app/' target='_blank'><button>Link to website</button></a>
        <a href='https://github.com/Mullah98/frontend-nc-news' target='_blank'><button className='github'><GitHubIcon style={{fontSize: 55}}/></button></a>
        </div>
      </div>
      ))}
    </div>

    <div className='project travelog'>
      {travelog.map((project) => (
        <div className='project-grid'>
        <h3>{project.name}</h3>
        <div className='image-container'>
        <img src={project.image} className='project-img'></img>
        <div className='description'>
        <p>Collaborated with 5 other members to develop a travel diary mobile app which allows users to document their holiday
        journies through photos and destination logs. Within 3 weeks, we had to plan, develop and present the app to other mentors.
        React Native used for the frontend development, and Firebase for the backend whilst using Expo Go for mobile development</p>
        </div>
        </div>
        <div className='btn-container'>
        <a href='https://northcoders.com/project-phase/travelog' target='_blank'><button>Link to live demo</button></a>
        <a href='https://github.com/Mullah98/TraveLog' target='_blank'><button className='github'><GitHubIcon style={{fontSize: 55}}/></button></a>
        </div>
      </div>
      ))}
    </div>


    <div className='more-container'>
      <a href='https://github.com/Mullah98' target='_blank'><button className='more'>More projects here</button></a>
    </div>
    </div>
  )
}

export default Projects
