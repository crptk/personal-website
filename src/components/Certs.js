import React, { useRef } from "react";

const Certs = () => {
  const certs = [
    {
      title: "CS50x Certification of Completion",
      institution: "Harvard University",
      date: "September 2024",
      details: "C++, Python, Flask, SQL, AI, Memory Management, Debugging",
      logo: "/images/harvard.png", // swap with your logo
    },
    {
      title: "AWS Cloud Practitioner",
      institution: "Amazon Web Services",
      date: "June 2025",
      details: "Cloud fundamentals, IAM, EC2, S3, Networking",
      logo: "/images/aws.png",
    },
    {
      title: "Machine Learning Specialization",
      institution: "Stanford University",
      date: "May 2025",
      details: "Supervised/unsupervised learning, Neural networks, Deployment",
      logo: "/images/stanford.png",
    },
  ];
  const carouselRef = useRef(null);
  const handleMouseDown = (e) => {
    const carousel = carouselRef.current;
    carousel.isDown = true;
    carousel.startX = e.pageX - carousel.offsetLeft;
    carousel.scrollLeftStart = carousel.scrollLeft;
  };

  const handleMouseLeave = () => {
    carouselRef.current.isDown = false;
  };

  const handleMouseUp = () => {
    carouselRef.current.isDown = false;
  };

  const handleMouseMove = (e) => {
    const carousel = carouselRef.current;
    if (!carousel.isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - carousel.startX) * 1.5; // scroll speed
    carousel.scrollLeft = carousel.scrollLeftStart - walk;
  };
  return (
    <section className="certifications" id="certifications">
      <div className="certs-title">
        <p>CONTINUOUS LEARNING</p>
        <h2>Certifications</h2>
      </div>

      {/* Hanger line */}
      <div className="certs-hanger" />

      {/* Scrollable carousel */}
      <div className="certs-carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        >
        {certs.map((cert, i) => (
          <div className="cert-card" key={i}>
            <img src={cert.logo} alt={cert.institution} className="cert-logo" />
            <h4>{cert.title}</h4>
            <p className="institution">Proof of Completion | {cert.institution}</p>
            <p className="date">{cert.date}</p>
            <p className="details">{cert.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certs;
