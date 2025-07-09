import React, { useState } from 'react';

const Work = () => {
  const [activeJob, setActiveJob] = useState(null);

  const toggleJob = (jobId) => {
    setActiveJob((prev) => (prev === jobId ? null : jobId));
  };

  return (
    <section className="experience" id="work">
      <h2>MY PROFESSIONAL JOURNEY</h2>
      <h3>Work Experience</h3>

      <div className="work-buttons">
        <button className="mediaTeamButton" onClick={() => toggleJob('msa')}>
          <h4>Media Team Member</h4>
          <p>Ontario Tech Muslim Student's Association</p>
        </button>
        <button className="airprimeButton" onClick={() => toggleJob('hvac')}>
          <h4>Assistant Technician</h4>
          <p>Airprime HVAC</p>
        </button>
      </div>

      {activeJob === 'msa' && (
        <div className="work-details">
          <h4>Media Team Member</h4>
          <p><span>Ontario Tech Muslim Student's Association</span></p>
          <p>September 2024 - Present</p>
          <ul>
            <li>Filming and helping to coordinate events for 100+ attendees, showcasing teamwork and event setup skills.</li>
            <li>Managing tasks under tight deadlines, demonstrating adaptability and event setup skills.</li>
            <li>Delivering high-quality footage on time, showcasing strong organization and time management.</li>
            <li>Enhanced event coverage, capturing visually appealing content to boost social media engagement.</li>
          </ul>
        </div>
      )}

      {activeJob === 'hvac' && (
        <div className="work-details">
          <h4>Assistant Technician</h4>
          <p><span>Airprime HVAC</span></p>
          <ul>
            <li>Assisted an HVAC technician on multiple sites, providing support for the installation, repair, and maintenance of air conditioning units for residential and commercial clients.</li>
            <li>Gained hands-on experience with tools, equipment, and industry best practices in a dynamic and fast-paced environment demonstrating quick learning.</li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Work;
