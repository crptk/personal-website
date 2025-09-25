import { useEffect, useRef, useState } from "react";

const Work = () => {
  const [activeJob, setActiveJob] = useState('msa');

  const toggleJob = (jobId) => {
    setActiveJob(jobId);
  };
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
    <section className="experience" id="work" ref={ref}>
    <svg
    className={`experience-line ${isVisible ? "active" : ""}`} 
    width="1389" 
    height="853" 
    viewBox="0 0 1389 853" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
      <path d="M1 2C84.0805 2.83333 291.566 50.3 491.872 181.5C742.255 345.5 721.327 549.214 923.384 663C1165.78 799.5 1295.91 849.5 1388 851" stroke="url(#paint0_linear_25_174)" stroke-width="4"/>
      <defs>
        <linearGradient id="paint0_linear_25_174" x1="1453.45" y1="415" x2="1.38046" y2="415" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0F0F0F" stop-opacity="0.13"/>
          <stop offset="0.47" stop-color="#00C8FF"/>
          <stop offset="1" stop-color="#0F0F0F" stop-opacity="0.23"/>
        </linearGradient>
      </defs>
    </svg>

      <div className={`experience-title ${isVisible ? "active" : ""}`}>
        <p>MY PROFESSIONAL JOURNEY</p>
        <h3>Work Experience</h3>
      </div>
      <div className={`work-content ${isVisible ? "active" : ""}`}>
        <div className="work-buttons">
          <button className={`mediaTeamButton ${activeJob === 'msa' ? 'active' : ''}`} onClick={() => toggleJob('msa')}>
            <h4>Media Team Member</h4>
            <p>Ontario Tech Muslim Student's Association</p>
          </button>
          <button className={`airprimeButton ${activeJob === 'hvac' ? 'active' : ''}`} onClick={() => toggleJob('hvac')}>
            <h4>Assistant Technician</h4>
            <p>Airprime HVAC</p>
          </button>
        </div>

        {activeJob === 'msa' && (
          <div className={`work-details ${isVisible ? "active" : ""}`}>
            <h4>Videographer</h4>
            <p><span>Ontario Tech Muslim Student's Association</span></p>
            <p>September 2024 - April 2025</p>
            <ul>
              <li>Filming and helping to coordinate events for 100+ attendees, showcasing teamwork and event setup skills.</li>
              <li>Managing tasks under tight deadlines, demonstrating adaptability and event setup skills.</li>
              <li>Delivering high-quality footage on time, showcasing strong organization and time management.</li>
              <li>Enhanced event coverage, capturing visually appealing content to boost social media engagement.</li>
            </ul>
          </div>
        )}

        {activeJob === 'hvac' && (
          <div className={`work-details ${isVisible ? "active" : ""}`}>
            <h4>Assistant Technician</h4>
            <p><span>Airprime HVAC</span></p>
            <ul>
              <li>Assisted an HVAC technician on multiple sites, providing support for the installation, repair, and maintenance of air conditioning units for residential and commercial clients.</li>
              <li>Gained hands-on experience with tools, equipment, and industry best practices in a dynamic and fast-paced environment demonstrating quick learning.</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
