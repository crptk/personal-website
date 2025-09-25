import { useEffect, useRef, useState } from "react";
import HSLogo from '../assets/HS Logo.svg';
import OtechLogo from '../assets/OTECH Logo.svg';

const Education = () => {
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
    <section className="education" id="education" ref={ref}>
      <div className={`educationTitle ${isVisible ? "active" : ""}`}>
        <p className="edu-title-subheading">WHERE I'VE STUDIED</p>
        <h2>Education</h2>  
      </div>

      <div className="educationContentWrapper">
        <svg
          className={`educationLine ${isVisible ? "active" : ""}`}
          width="1700"
          height="1351"
          viewBox="0 0 1700 1351"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.7813 1C74.585 60.5626 187.406 148.029 373.897 148.029C607.011 148.029 1375.6 4.89589 1602.11 130.747C1712.06 191.837 1704.98 338.177 1662.63 407.17C1569.3 559.202 1343.85 442.222 1013.15 485.234L921.949 502.017L861.007 518.8C635.564 621.965 613.808 772.911 651.758 816.868C707.16 881.037 843.243 891.628 892.117 895.846C1218.14 923.982 1698 961.496 1698 1138.7C1698 1400.81 373.897 1408.22 1 1214.72"
            stroke="url(#paint0_linear_12_40)"
            strokeWidth="4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_12_40"
              x1="1717.18"
              y1="538.477"
              x2="185.488"
              y2="524.494"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>


        {/* Ontario Tech */}
        <div className="educationItem otech">
          <div className={`eduInfoBox ${isVisible ? "active" : ""}`}>
            <h4>Honours Computer Science (H. BSc)</h4>
            <p>Ontario Tech University, Oshawa, ON</p>
            <ul>
              <li>Data Structures and Algorithms, OOP, REST API</li>
              <li>Software Design, Python Data Analysis, Discrete Mathematics</li>
              <li>Computer Architecture, Operating Systems, PostgreSQL</li>
            </ul>
          </div>
          <img src={OtechLogo} className={`eduLogo ${isVisible ? "active" : ""}`} alt="Ontario Tech Logo" />
        </div>

        {/* St. Francis Xavier */}
        <div className="educationItem hs">
          <img src={HSLogo} className={`eduLogo ${isVisible ? "active" : ""}`} alt="High School Logo" />
          <div className={`eduInfoBox ${isVisible ? "active" : ""}`}>
            <h4>St. Francis Xavier</h4>
            <p>Milton, Ontario</p>
            <ul>
              <li>Took two classes for Python and Java</li>
              <li>Developed a low-scale Galaga replica in Pygame</li>
              <li>Built a text-based RPG game in Java</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
