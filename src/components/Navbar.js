import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li id="navButtons"><a href="#about">About</a></li>
        <li id="navButtons"><a href="#education">Education</a></li>
        <li id="navButtons"><a href="#work">Work</a></li>
        <li id="navButtons"><a href="#certifications">Certifications</a></li>
        <li id="navButtons"><a href="#projects">Projects</a></li>
        <li id="navButtons"><a href="#skills">Skills</a></li>
        <li id="navContact"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
