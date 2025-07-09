import React from 'react';
import photo from '../assets/Photo.png';
import aboutMeLine from '../assets/AboutMeLine.svg';

const AboutMe = () => {
  return (
    <section className="introduction" id="about">
      <div className="introTitle">
        <p className="intro-text">Introduction</p>
        <h2>About Me</h2>
      </div>

      <div className="introContentWrapper">
        <img src={photo} alt="Edrees" className="myPhoto" />

        <img src={aboutMeLine} className="aboutMeLine" alt="Wavy line" />

        <div className="introText">
          <ul>
            <li>A programmer, video editor, and deep thinker with a passion for innovation and meaningful impact.</li>
            <li>Computer Science student at Ontario Tech University, actively exploring AI, Full-Stack Development, and Cloud Computing.</li>
            <li>Passionate about building projects that create a positive change in the world.</li>
            <li>Driven by the vision of developing technological solutions that elevate society rather than hinder it.</li>
          </ul>
        </div>
      </div>

      <div className="links">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button id="resumeButton">Resume</button>
        </a>
        <a href="https://www.linkedin.com/in/edrees-amiri/" target="_blank" rel="noopener noreferrer">
          <button id="linkedinButton">LinkedIn</button>
        </a>
        <a href="https://github.com/crptk" target="_blank" rel="noopener noreferrer">
          <button id="githubButton">GitHub</button>
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
