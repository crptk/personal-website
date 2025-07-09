import React from 'react';
import topLeftLines from '../assets/topLeftLines.svg';

const Landing = () => {
  return (
    <section className="landing" id="home">
      <img src={topLeftLines} className="topLeftLines" alt="Decorative lines" />

      <div className="glow-circle" id="circle1"></div>
      <div className="glow-circle" id="circle2"></div>
      {/* <div className="glow-circle" id="circle3"></div> */}

      <h1 className="white-glow">
        Hi, I'm Edrees <span className="cyan-glow">"Crptk"</span> Amiri.
      </h1>
      <h2>Feel free to check out my work.</h2>
    </section>
  );
};

export default Landing;
