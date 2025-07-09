import React from 'react';

const Skills = () => {
  const skillList = [
    'JavaScript',
    'React',
    'HTML & CSS',
    'Python',
    'Node.js',
    'SQL',
    'Java',
    'Git & GitHub',
    'REST APIs',
    'Figma',
    'MoviePy',
    'Socket Programming',
    'PyTorch (Beginner)',
    'Cloud Computing (Learning)',
  ];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <p className="skills-intro">A blend of technical and creative tools I use to build and explore.</p>

      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
