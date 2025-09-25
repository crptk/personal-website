import topLeftLines from "../assets/topLeftLines.svg";

const Landing = () => {
  return (
    <section className="landing" id="home">
      <img src={topLeftLines} className="topLeftLines fade-in" alt="Decorative lines" />

      <div className="glow-circle-landing fade-in" id="circle1"></div>
      <div className="glow-circle-landing fade-in" id="circle2"></div>

      <h1 className="white-glow fade-in delay-1">
        Hi, I'm Edrees <span className="cyan-glow">"Crptk"</span> Amiri.
      </h1>
      <h2 className="fade-in delay-2">Feel free to check out my work.</h2>
    </section>
  );
};

export default Landing;
