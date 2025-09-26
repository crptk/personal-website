import React from 'react';
import { useEffect, useRef, useState } from "react";
import photo from '../assets/Photo.png';
import resume from '../assets/Edrees_Amiri_resume.pdf';

const AboutMe = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // % of element visible before triggering
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section className="introduction" id="about" ref={ref}>
      <div className={`introTitle ${isVisible ? "active" : ""}`}>
        <p className="intro-text">INTRODUCTION</p>
        <h2>About Me</h2>
      </div>

      <div className="introContentWrapper">
        <img src={photo} alt="Edrees" className={`myPhoto ${isVisible ? "active" : ""}`} />

        <svg
          className={`aboutMeLine ${isVisible ? "active" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1311 1766"
        >
          <path
            d="M1303.19 1C1268.92 125.726 1148.39 438.239 840.277 682.463C716.682 780.432 530.064 917.242 258.093 917.242C171.209 917.242 22.2455 891.779 16.4086 824.453C10.5717 757.126 82.4894 746.337 91.3614 793.379C99.4494 836.264 63.8277 906.884 26.5043 988.453C-10.8191 1070.02 44.6562 1135.91 72.3938 1168.85L330.292 1395C330.292 1395 362.048 1425.56 349.566 1464.92C341.294 1491 308.804 1501.73 133.5 1539.5C43 1559 2.00001 1563 1.99994 1603.5C1.99987 1644 61.9999 1655.24 174.5 1655.24H452.052H731.672H970.603C1148.39 1655.24 1284.77 1723.26 1309 1764"
            stroke="url(#paint0_linear_10_3)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_3"
              x1="-175.676"
              y1="956.516"
              x2="1168.88"
              y2="906.57"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00C8FF" />
              <stop offset="1" stopColor="#007899" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>


        <div className={`introText ${isVisible ? "active" : ""}`}>
          <ul>
            <li>I'm a 3rd year Computer Science student working to become  a full-stack AI engineer.</li>
            <li>I love working with others on projects, hackathons are something I'm extremely passionate about, and I always try to bring that same energy to any dev team I work with.</li>
            <li>Creating films and music videos is one of my favourite hobbies, I've been doing it for 6 years, and I'm currently working on creating tools that make video editing more accessible.</li>
            <li>I'm very project-oriented, I love working on things and slowly see it build into something amazing. It's one of the things that brought me to this field!</li>
          </ul>
        </div>
      </div>

      <div className={`links ${isVisible ? "active" : ""}`}>
        <a href={resume} target="_blank" rel="noopener noreferrer">
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
