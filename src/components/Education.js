import React from 'react';

const Education = () => {
  return (
    <section className="education" id="education">
      <h2>WHERE I'VE STUDIED</h2>
      <h3>Education</h3>

      <div className="edu-item">
        <h4>Honours Computer Science (H. BSc)</h4>
        <p><span>Ontario Tech University, Oshawa, ON</span></p>
        <ul>
          <li>Courses: Data Structures and Algorithms, OOP, REST API, Software Design, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, PostgreSQL.</li>
        </ul>
      </div>

      <div className="edu-item">
        <h4>St. Francis Xavier</h4>
        <p><span>Milton, Ontario</span></p>
        <ul>
          <li>Took two classes for Python and Java.</li>
          <li>Developed a low-scale Galaga replica in Pygame.</li>
          <li>Developed a large text-based RPG game in Java.</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
