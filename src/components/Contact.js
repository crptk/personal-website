import { useEffect, useRef, useState } from "react";
import userIcon from "../assets/user-icon-form.svg";
import emailIcon from "../assets/email-icon-form.svg";
import messageIcon from "../assets/message-icon-form.svg";

const Contact = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xdkwkoqo", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    
    // Clear status message after 5 seconds
    setTimeout(() => setSubmitStatus(''), 5000);
  };
  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="glow-circle-contact fade-in" id="circle1"></div>
      <div className="glow-circle-contact fade-in" id="circle2"></div>
      <p className={`contact-subtitle ${isVisible ? "active" : ""}`}>GET IN TOUCH</p>
      <h2 className={`contact-title ${isVisible ? "active" : ""}`}>Contact Me</h2>
      <svg
      className={`left-arrow ${isVisible ? "active" : ""}`}
      width="271" 
      height="308" 
      viewBox="0 0 271 308" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
        <path d="M269.292 290.906C270.621 289.916 270.895 288.036 269.906 286.708L253.774 265.056C252.784 263.728 250.905 263.453 249.576 264.443C248.248 265.433 247.973 267.312 248.963 268.641L263.302 287.887L244.056 302.225C242.727 303.215 242.453 305.095 243.443 306.424C244.433 307.752 246.312 308.027 247.641 307.037L269.292 290.906ZM33.5002 0.841196C6.07338 42.1711 -2.93986 79.8054 1.77116 113.416C6.47867 147.002 24.8275 176.125 51.2759 200.578C104.08 249.398 189.75 280.172 267.066 291.468L267.934 285.532C191.25 274.328 106.92 243.852 55.349 196.172C29.6099 172.375 12.1775 144.435 7.71308 112.584C3.2522 80.7571 11.6764 44.5789 38.4996 4.1588L33.5002 0.841196Z" fill="url(#paint0_linear_57_104)"/>
        <defs>
          <linearGradient id="paint0_linear_57_104" x1="679.502" y1="511.499" x2="34.0013" y2="26.999" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0F0F0F" stop-opacity="0.13"/>
            <stop offset="0.489544" stop-color="#00C8FF"/>
            <stop offset="1" stop-color="#0F0F0F" stop-opacity="0.23"/>
          </linearGradient>
        </defs>
      </svg>
      <svg 
      className={`right-arrow ${isVisible ? "active" : ""}`}
      width="199" 
      height="364" 
      viewBox="0 0 199 364" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
        <path d="M1.29718 340.463C0.17242 341.68 0.246852 343.578 1.46343 344.703L21.2888 363.032C22.5054 364.157 24.4034 364.082 25.5282 362.866C26.6529 361.649 26.5785 359.751 25.3619 358.626L7.73938 342.334L24.0319 324.711C25.1567 323.495 25.0822 321.597 23.8657 320.472C22.6491 319.347 20.751 319.422 19.6263 320.638L1.29718 340.463ZM166.087 1.71861C173.927 33.4927 186.568 84.5754 190.936 135.021C193.12 160.24 193.225 185.183 189.672 207.4C186.117 229.634 178.934 248.912 166.73 263.039L171.27 266.961C184.466 251.688 191.942 231.204 195.597 208.347C199.255 185.473 199.122 159.998 196.914 134.504C192.499 83.5246 179.74 32.0073 171.913 0.28139L166.087 1.71861ZM166.73 263.039C116.682 320.968 36.9375 338.186 3.38244 339.502L3.61756 345.498C38.0625 344.147 119.718 326.632 171.27 266.961L166.73 263.039Z" fill="url(#paint0_linear_57_105)"/>
        <defs>
          <linearGradient id="paint0_linear_57_105" x1="232.5" y1="132" x2="-113" y2="420" gradientUnits="userSpaceOnUse">
            <stop stop-color="#0F0F0F" stop-opacity="0.13"/>
            <stop offset="0.47" stop-color="#00C8FF"/>
            <stop offset="1" stop-color="#0F0F0F" stop-opacity="0.23"/>
          </linearGradient>
        </defs>
      </svg>

      <div className={`contact-card ${isVisible ? "active" : ""}`}>
        <form onSubmit={handleSubmit}>
          {submitStatus === 'success' && (
            <div style={{color: '#00C8FF', marginBottom: '20px', textAlign: 'center'}}>
              Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div style={{color: '#ff4444', marginBottom: '20px', textAlign: 'center'}}>
              Something went wrong. Please try again.
            </div>
          )}
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">
                <img src={userIcon} alt="user" className="form-icon" />
                Name
              </label>
              <input type="text" name="name" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <img src={emailIcon} alt="email" className="form-icon" />
                Email
              </label>
              <input type="email" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="message">
              <img src={messageIcon} alt="message" className="form-icon" />
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hey Edrees! Love the website, I'd love to discuss some opportunities with you! When are you available?"
              required
            ></textarea>
          </div>

          <button type="submit" className="send-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
