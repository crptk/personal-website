import { useEffect, useRef, useState } from "react";
import ResyncbotLogo from "../assets/ResyncbotLogo.png";
import CSClubLogo from "../assets/CSClubLogo.png";
import MSALogo from "../assets/MSALogo.png";
import AirprimeLogo from "../assets/AirprimeLogo.png"
const Work = () => {
  const [activeJob, setActiveJob] = useState('resyncbot');

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
          <button className={`mediaTeamButton ${activeJob === 'resyncbot' ? 'active' : ''}`} onClick={() => toggleJob('resyncbot')}>
            <img src={ResyncbotLogo} alt="ResyncBot Logo" />
            <div className="work-button-content">
              <h4>Founder/Developer</h4>
              <p>ResyncBot</p>
            </div>
          </button>
          
          <button className={`mediaTeamButton ${activeJob === 'csclub' ? 'active' : ''}`} onClick={() => toggleJob('csclub')}>
            <img src={CSClubLogo} alt="CS Club Logo" />
            <div className="work-button-content">
              <h4>Software Developer</h4>
              <p>Ontario Tech Computer Science Club</p>
            </div>
          </button>
          
          <button className={`mediaTeamButton ${activeJob === 'freelance' ? 'active' : ''}`} onClick={() => toggleJob('freelance')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
            </svg>

            <div className="work-button-content">
              <h4>Software Developer</h4>
              <p>Freelance</p>
            </div>
          </button>
          
          <button className={`mediaTeamButton ${activeJob === 'msa' ? 'active' : ''}`} onClick={() => toggleJob('msa')}>
            <img src={MSALogo} alt="MSA Logo" />
            <div className="work-button-content">
              <h4>Videographer</h4>
              <p>Ontario Tech Muslim Student's Association</p>
            </div>
          </button>
          
          <button className={`airprimeButton ${activeJob === 'hvac' ? 'active' : ''}`} onClick={() => toggleJob('hvac')}>
            <img src={AirprimeLogo} alt="MSA Logo" />
            <div className="work-button-content">
              <h4>Assistant Technician</h4>
              <p>Airprime HVAC</p>
            </div>
          </button>
        </div>
        {activeJob === 'resyncbot' && (
          <div className={`work-details ${isVisible ? "active" : ""}`}>
            <h4>Founder/Developer</h4>
            <p><span>ResyncBot</span></p>
            <p>August 2025 - Present</p>
            <ul>
              <li>Built a bot in Python used in 130+ Discord servers by 80,000+ users to resync music videos by replacing audio while keeping cuts on beat.</li>
              <li>Helped video editors preview edits with different audio tracks, making it easier to visualize timing and unlock new creative ideas.</li>
              <li>Reduced re-syncing time from 30+ minutes to 30 seconds using BPM detection and waveform analysis for automatic alignment.</li>
              <li>Engineered a secure Flask + PostgreSQL backend to handle media processing, analytics, user tracking, and payment authentication.</li>
              <li>Built a Discord interface and a React + Vite demo website showcasing the tool with a testable music video for editors and creators.</li>
            </ul>
          </div>
        )}
        {activeJob === 'csclub' && (
          <div className={`work-details ${isVisible ? "active" : ""}`}>
            <h4>Software Developer</h4>
            <p><span>Ontario Tech Computer Science Club</span></p>
            <p>July 2025 - Present</p>
            <ul>
              <li>Delivered CS Club's website for 100+ members with 99% uptime, optimizing for scalability using React, Vite, and Java (Spring Boot).</li>
              <li>Reduced feature delivery from 1 week to 3 days through rigorous testing and modular design, ensuring executive satisfaction.</li>
              <li>Built a member registration system with database support, onboarding 50+ members and enabling automated updates on event creation.</li>
              <li>Implemented a JWT-authenticated admin login system, ensuring secure access for executives managing events and club data.</li>
            </ul>
          </div>
        )}
        {activeJob === 'freelance' && (
          <div className={`work-details ${isVisible ? "active" : ""}`}>
            <h4>Software Developer</h4>
            <p><span>Freelance</span></p>
            <p>August 2024 - May 2025</p>
            <ul>
              <li>Built a custom Discord bot for a film studio to manage editor apps, automate moderation, and drive community engagement.</li>
              <li>Integrated features like text-to-speech voice support, timed reminders, and smart responses to improve usability for non-technical users.</li>
              <li>Collaborated on a Roblox game (Aegis) by scripting in Lua, creating NPC behavior, and working alongside a multi-dev team.</li>
            </ul>
          </div>
        )}
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
            <p>May 2024 - September 2025</p>
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
