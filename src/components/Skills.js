import { useEffect, useRef, useState } from "react";
import pythonLogo from "../assets/python-logo.svg";
import cLogo from "../assets/C_Logo.svg";
import htmlLogo from "../assets/html-logo.svg";
import cssLogo from "../assets/css-logo.svg";
import tsLogo from "../assets/ts-logo.svg";
import sqlLogo from "../assets/sql-logo.svg";
import javaLogo from "../assets/java-logo.svg";
import texLogo from "../assets/tex-logo.svg";
import flaskLogo from "../assets/flask-logo.svg";
import bootstrapLogo from "../assets/bootstrap-logo.svg";
import nodeLogo from "../assets/node-logo.svg";
import pytorchLogo from "../assets/pytorch-logo.svg";
import sklearnLogo from "../assets/scikit-learn-logo.svg";
import springbootLogo from "../assets/springboot-logo.svg";
import viteLogo from "../assets/vite-logo.svg";
import reactLogo from "../assets/React-Logo.svg";
import dockerLogo from "../assets/docker-logo.svg";
import gitLogo from "../assets/git-logo.svg";
import linuxLogo from "../assets/linux-logo.svg";
import powershellLogo from "../assets/powershell-logo.svg";
import excelLogo from "../assets/excel-logo.svg";
import azureLogo from "../assets/azure-logo.svg";
import ubuntuLogo from "../assets/ubungu-logo.svg";
import supabaseLogo from "../assets/supabase-logo.svg";
import vercelLogo from "../assets/vercel-logo.svg";
import figmaLogo from "../assets/figma-logo.svg";
import aeLogo from "../assets/AE-logo.svg";
import psLogo from "../assets/PS-logo.svg";

const skillCategories = {
  programming: [
    { name: "Python", icon: pythonLogo },
    { name: "C", icon: cLogo },
    { name: "HTML5", icon: htmlLogo },
    { name: "CSS3", icon: cssLogo },
    { name: "TypeScript", icon: tsLogo },
    { name: "SQL", icon: sqlLogo },
    { name: "Java", icon: javaLogo },
    { name: "LaTeX", icon: texLogo },
    { name: "Flask", icon: flaskLogo },
    { name: "Bootstrap", icon: bootstrapLogo },
    { name: "Node.js", icon: nodeLogo },
    { name: "PyTorch", icon: pytorchLogo },
    { name: "Scikit-learn", icon: sklearnLogo },
    { name: "Spring Boot", icon: springbootLogo },
    { name: "Vite", icon: viteLogo },
    { name: "React", icon: reactLogo },
    { name: "Docker", icon: dockerLogo },
  ],
  tools: [
    { name: "Git", icon: gitLogo },
    { name: "Linux", icon: linuxLogo },
    { name: "PowerShell", icon: powershellLogo },
    { name: "Excel", icon: excelLogo },
    { name: "Azure", icon: azureLogo },
    { name: "Ubuntu", icon: ubuntuLogo },
  ],
  technology: [
    { name: "Supabase", icon: supabaseLogo },
    { name: "Vercel", icon: vercelLogo },
    { name: "Figma", icon: figmaLogo },
    { name: "After Effects", icon: aeLogo },
    { name: "Photoshop", icon: psLogo },
  ]
};

const Skills = () => {
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
    <section className="skills" id="skills" ref={ref}>
      <h2 className={`skills-title ${isVisible ? "active" : ""}`}>Technical Proficiencies</h2>

      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="skills-category">
          <h3 className={`category-title ${isVisible ? "active" : ""}`}>{category.replace(/^\w/, c => c.toUpperCase())}</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className={`skill-card ${isVisible ? "active" : ""}`}key={index}>
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
