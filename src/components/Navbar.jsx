import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
// const [expandNavBar, setExpandNavBar] = useState(false)


  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <span className='brand'>Ibrahim.dev</span>
      </div>
      <div className='links'>
        <ScrollLink 
          to="home" 
          smooth={true} 
          duration={500} 
          className="item">
          Home
        </ScrollLink>
        <ScrollLink 
          to="skills" 
          smooth={true} 
          duration={500} 
          className="item">
          Tech Skills
        </ScrollLink>
        <ScrollLink 
          to="projects" 
          smooth={true} 
          duration={500} 
          className="item">
          Projects
        </ScrollLink>
        <ScrollLink 
          to="experience" 
          smooth={true} 
          duration={500} 
          className="item">
          Experience
        </ScrollLink>
        <ScrollLink 
          to="contact" 
          smooth={true} 
          duration={500} 
          className="item">
          Contact me
        </ScrollLink>
      </div>
    </div>
  )
}

export default Navbar
