import React from 'react';
import './style.css';
import Navbar from './components/Navbar';
// import all your other components below
import Landing from './components/Landing';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import WorkExperience from './components/Work';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="window">
      <Navbar />
      <Landing />
      <AboutMe />
      <Education />
      <WorkExperience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
