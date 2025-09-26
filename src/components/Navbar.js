import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Change background after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={isScrolled ? 'scrolled' : ''}>
        <ul className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
          <li id="navButtons"><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li id="navButtons"><a href="#education" onClick={handleLinkClick}>Education</a></li>
          <li id="navButtons"><a href="#work" onClick={handleLinkClick}>Work</a></li>
          <li id="navButtons"><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
          <li id="navButtons"><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
          <li id="navContact"><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
        
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

      <div 
        className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={closeMobileMenu}
      ></div>
    </>
  );
};

export default Navbar;