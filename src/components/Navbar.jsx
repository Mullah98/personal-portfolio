import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
const [expandNavBar, setExpandNavBar] = useState(false)

// useEffect(() => {
//   setExpandNavBar(false)
// }, [pathname])

  return (
    <div className='navbar' id={expandNavBar ? 'open' : 'close'}>
      <div className='toggleButton'>
        <button onClick={()=> setExpandNavBar((prev) => !prev)}>
        <ReorderIcon style={{fontSize:50}}/> 
        </button>
      </div>
      <div className='links'>
        <ScrollLink 
          to="home" 
          smooth={true} 
          duration={500} 
          className="item"
          onClick={() => setExpandNavBar(false)}>
          Home
        </ScrollLink>
        <ScrollLink 
          to="skills" 
          smooth={true} 
          duration={500} 
          className="item"
          onClick={() => setExpandNavBar(false)}>
          Tech Skills
        </ScrollLink>
        <ScrollLink 
          to="projects" 
          smooth={true} 
          duration={500} 
          className="item"
          onClick={() => setExpandNavBar(false)}>
          Projects
        </ScrollLink>
        <ScrollLink 
          to="experience" 
          smooth={true} 
          duration={500} 
          className="item"
          onClick={() => setExpandNavBar(false)}>
          Experience
        </ScrollLink>
        <ScrollLink 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="item"
          onClick={() => setExpandNavBar(false)}>
          Contact me
        </ScrollLink>
      </div>
    </div>
  )
}

export default Navbar
