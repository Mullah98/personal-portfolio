import React from 'react'
import '../src/styles/Home.css'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import TechStack from './pages/TechStack.jsx'
import TechExp from './pages/TechExp.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <div className='App'>
    <Navbar />
    <div className='sections'>
    <section id='home'><Home /></section>
    <section id='skills'><TechStack /></section>
    <section id='projects'><Projects /></section>
    <section id='experience'><TechExp /></section>
    <section id='contact'><Contact /></section>

    </div>
    </div>
  )
}

export default App
