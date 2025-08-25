import { useState, useEffect } from 'react'
import Navbar from './navbar.jsx' 
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <section id="home" className="hero-section">  
          <h1 className="fade-in-text">
            NATHANIEL FEDERIS
          </h1>
          <p className="fade-in-text-delayed">SOFTWARE ENGINEERING, APP DEVELOPER, AND ASPIRING CYBERSECURITY PROFESSIONAL</p>
        </section>

        <section id="expertise" className="section">
          <h2>Expertise</h2>
          <p>Web Development, App Development, Cybersecurity</p>
        </section>

        <section id="work" className="section">
          <h2>Work</h2>
          <p>Check out my projects on GitHub</p>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <p>Check out my work experience</p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Get in touch with me</p>
        </section>
      </main>
    </div>
  )
}

export default App
