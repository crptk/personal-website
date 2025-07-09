import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <p className="projects-intro">Here are some things I've worked on:</p>

      <div className="project-grid">
        <div className="project-card">
          <h3>Unbeatable Tic Tac Toe</h3>
          <p>Mini game using the Minimax algorithm with unbeatable AI.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">Play Demo</a>
        </div>

        <div className="project-card">
          <h3>Stock Trading Web App</h3>
          <p>Built using Yahoo Finance API to simulate buying and selling stocks.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        {/* Add more project cards here */}
      </div>
    </section>
  );
};

export default Projects;
