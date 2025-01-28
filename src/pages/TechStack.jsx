import React from 'react'
import '../styles/TechStack.css'

const TechStack = () => {
  const frontend = [
    {name: 'Javascript', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'},
    {name: 'Next.js', icon: 'https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png'},
    {name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'},
    {name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png'},
    {name: 'Vue JS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'},
    {name: 'Sass', icon: 'https://sass-lang.com/assets/img/styleguide/seal-color.png'},
    {name: 'React Native', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTw3HApB4bsvabXW3L14cV-LhFo0L71QmEESJN3vW9Ow&s'},
  ]

  const backend = [
    {name: 'PostgreSQL', icon: 'https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png'},
    {name: 'Node.js', icon: 'https://www.svgrepo.com/download/303360/nodejs-logo.svg'},
    {name: 'Express', icon: 'https://seeklogo.com/images/E/express-js-logo-FA36FF1D3F-seeklogo.com.png'},
  ]

  const development = [
    {name: 'Git', icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'},
    {name: 'Jest', icon: 'https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png'},
    {name: 'Expo Go', icon: 'https://cdn.worldvectorlogo.com/logos/expo-go-app.svg'}
  ]

  return (
    <div className='skills-container'>
    <div className='category frontend'>
      <h1>Frontend Development</h1>
        <div className='icon-grid'>
          {frontend.map((skill) => (
          <div className='icon-item' key={skill.name}>
          <h4>{skill.name}</h4>
          <img src={skill.icon} className='img-icons'/>
        </div>
          ))}
          </div>
      </div>

      <div className='category backend'>
        <h1>Backend Development</h1>
        <div className='icon-grid'>
          {backend.map((skill) => (
          <div className='icon-item' key={skill.name}>
          <h4>{skill.name}</h4>
          <img src={skill.icon} className='img-icons' alt={skill.name}/>
        </div>
          ))}
        </div>
      </div>

      <div className='category development'>
        <h1>Development Tools</h1>
        <div className='icon-grid'>
          {development.map((skill) => (
            <div className='icon-item' key={skill.name}>
            <h4>{skill.name}</h4>
            <img src={skill.icon} className='img-icons' alt={skill.name}/>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default TechStack
