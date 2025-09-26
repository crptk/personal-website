import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu when a nav link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav>
        <ul className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
          <li id="navButtons"><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li id="navButtons"><a href="#education" onClick={handleLinkClick}>Education</a></li>
          <li id="navButtons"><a href="#work" onClick={handleLinkClick}>Work</a></li>
          {/* <li id="navButtons"><a href="#certifications" onClick={handleLinkClick}>Certifications</a></li> */}
          <li id="navButtons"><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li id="navButtons"><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li id="navContact"><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
        
        {/* Hamburger Button */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Overlay */}
      <div 
        className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={closeMobileMenu}
      ></div>
    </>
  );
};

export default Navbar;