import React from 'react';
import '../styles/Projects.css';
import travelogProject from '../assets/travelog-project.png';
import portfolioProject from '../assets/portfolio.png';
import carRentalProject from '../assets/car-rental.png';
import myFootAppProject from '../assets/footy-app.png';
import exhibitionProject from '../assets/exhibit-ease.png'

const Projects = () => {
  const projects = [
    {
      name: 'Exhibit Ease',
      image: exhibitionProject,
      description: "An exhibition curator project built with Next.js and Tailwind CSS. Users can view and select artworks integrated with the Harvard and Met Museum APIs. As my role as a freelance project consultant, I helped design and implement the core features, ensuring an intuitive user experience. The platform also allows users to create and manage exhibitions, offering a seamless experience for exploring art from various collections.",
      techStack: [
        {name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'},
        {name: 'Next.js', icon: 'https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png'},
        {name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png'},
        {name: 'Shadcn/UI', icon: 'https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/20161105/shadcn-ui-logo-EF735EC0E5-seeklogo.com.png'}
      ],
      demoLink: "https://exhibition-curator-project.vercel.app",
      githubLink: "https://github.com/Mullah98/exhibition-curator-project"
    },
    {
      name: 'My Footy App',
      image: myFootAppProject,
      description: "A football data app built with Next.js. View the latest league standings, fixtures, and more with data provided by API-Football. My passion for football inspired me to build this app, as I thought it would be cool to create a platform where fans can stay up to date with their favorite teams. The app features a user-friendly interface to track team performance and match schedules.",
      techStack: [
        {name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'},
        {name: 'Next.js', icon: 'https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png'},
      ],
      demoLink: "https://www.youtube.com/watch?v=vH9TijMc_jo",
      githubLink: "https://github.com/Mullah98/My-Footy-App"
    },
    {
      name: 'Travelog Mobile App',
      image: travelogProject,
      description: "Collaborated with 5 other members to develop a travel diary mobile app. The app allows users to document their holiday journeys through photos and destination logs. This was my first full-stack project during my time at Northcoders. I collaborated with a team to plan, develop, and present the app to mentors, learning valuable teamwork and development skills under tight time constraints.",
      techStack: [
        {name: 'React Native', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s'},
        {name: 'Expo Go', icon: 'https://cdn.worldvectorlogo.com/logos/expo-go-app.svg'},
        {name: 'Firebase', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFwtBOnRhY_EvmqJupnC_rBd8AemYJ7vjcQ&s'}
      ],
      demoLink: "https://northcoders.com/project-phase/travelog",
      githubLink: "https://github.com/Mullah98/TraveLog"
    },
    {
      name: 'Personal Portfolio',
      image: portfolioProject,
      description: "You are currently viewing this project. It's a personal portfolio built with React and Sass, showcasing my development skills, projects, and experiences. I wanted to make it easy for recruiters to find my work, while also continuing to learn and build new things. The portfolio is designed to be clean and user-friendly, offering a seamless navigation experience for visitors.",
      techStack: [
        {name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'},
        {name: 'Sass', icon: 'https://sass-lang.com/assets/img/styleguide/seal-color.png'},
      ],
      githubLink: "https://github.com/Mullah98/portfolio"
    },
    {
      name: 'Elite Car Rental',
      image: carRentalProject,
      description: "Developed a frontend website using Vue.js for an elite car rental service. Users are provided with a platform that allows seamless selection of supercars, with dynamic options for dates, times, and rental durations. This project gave me the opportunity to further hone my Vue.js skills while also focusing on creating a responsive and intuitive user experience. The website is designed to be accessible and fast, ensuring an exceptional user journey from start to finish.",
      techStack: [
        {name: 'Vue JS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'},
      ],
      demoLink: "https://elite-car-rental.netlify.app/",
      githubLink: "https://github.com/Mullah98/Car-Rental-app"
    },
  ];

  return (
    <div className='project-container'>
      <div className='header'>
        <h2>Each project is a unique piece of development...</h2>
      </div>
      {projects.map((project, index) => (
        <div className='project' key={index}>
          <div className='image-container'>
            <img src={project.image} className='project-img' alt={project.name} />
          </div>
          <div className='project-content'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className='tech-stack'>
              {project.techStack?.map((tech, i) => (
                <div key={i} className='tech'>
                  <img src={tech.icon} alt={tech.name} />
                  <h4>{tech.name}</h4>
                </div>
              ))}
            </div>
            <div className='project-links'>
              <a href={project.demoLink} target='_blank' rel='noopener noreferrer'>
                <button>Live demo</button>
              </a>
              <a href={project.githubLink} target='_blank' rel='noopener noreferrer'>
                <button>Github Repository</button>
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className='more-links'>
      <a href='https://github.com/Mullah98?tab=repositories' target='_blank' rel='noopener noreferrer'>
        <button className='more-btn'>See More Projects</button>
      </a>
      </div>
    </div>
  );
}

export default Projects;
