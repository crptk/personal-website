import TicTacToe from './game.js';
import { useEffect, useRef, useState } from "react";
import NutriDetectThumb from '../assets/NutriDetect.png';
import ResyncBotThumb from '../assets/ResyncBotThumb.png';
import HandwrittenThumb from '../assets/handwritten-thumbnail.jpg';
import GithubLogo from '../assets/GithubLogo.svg';
import ImageFilteringThumb from '../assets/image-filtering.png'
const Projects = () => {
  const [ticTacHovered, setTicTacHovered] = useState(false);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => setSelectedProject(null);
  useEffect(() => {
    const target = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } 
    );

    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);
  return (
    <section className="projects" id="projects" ref={ref}>
      <div className={`projects-title ${isVisible ? "active" : ""}`}>
        <p>WHAT I’VE MADE</p>
        <h3>Projects</h3>
      </div>

      <div className={`projects-content ${isVisible ? "active" : ""}`}>
        {/* ResyncBot Card */}
        <div className="project-wrapper">
          <div className="user-count">Over 80,000 users!</div>
          <div 
          className="project-card"
          onClick={() => setSelectedProject("ResyncBot")}
          >
            <div className="preview">
              <img src={ResyncBotThumb} alt="ResyncBot preview" />
            </div>
            {/* <div className="user-count">Over 80,000 users!</div> */}
            <div className="card-header">
              <div className="title-date">
                <h4>ResyncBot</h4>
                <p className="date">2025</p>
              </div>
              <a 
                href="https://resyncbot.xyz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="header-btn demo-btn"
              >
                View Demo
              </a>
            </div>
            <p>
              ResyncBot is a verified Discord bot that automates video resynchronization, letting editors swap 
              audio tracks while keeping cuts aligned. Used in 130+ servers by 80,000+ users, it reduces editing 
              time from over 30 minutes to just 30 seconds with BPM and waveform analysis. Built with Python, 
              Flask, and PostgreSQL, it also includes a React + Vite demo site for creators to test the tool.
            </p>

            <div className="card-footer">
              <div className="tags">
                <span>#python</span>
                <span>#flask</span>
                <span>#postgresql</span>
                <span>#react</span>
                <span>#vite</span>
                <span>#ffmpeg</span>
                <span>#azure</span>
                <span>#discordbot</span>
              </div>
            </div>
          </div>
        </div>
        {/* NutriDetect Card */}
        <div 
        className="project-card"
        onClick={() => setSelectedProject("NutriDetect")}
        >
          <div className="preview">
            <img src={NutriDetectThumb} alt="NutriDetect preview" />
          </div>

        <div className="card-header">
          <div className="title-date">
            <h4>NutriDetect</h4>
            <p className="date">February 2025</p>
          </div>
        </div>

          <p>
            NutriDetect is an AI-powered nutrition assistant built during the Hackhive X Microsoft Hackathon. 
            It helps users track food intake and receive personalized health suggestions in real time. 
            Using Python, Flask, and the Cohere API, the app acts like a chatbot nutritionist, while a responsive 
            frontend showcases how AI can improve daily health choices.
          </p>
          <div className="card-footer">
            <div className="tags">
              <span>#python</span>
              <span>#javascript</span>
              <span>#webdesign</span>
              <span>#flask</span>
              <span>#sql</span>
              <span>#azure</span>
            </div>
            <a
              href="https://github.com/TahoorSheikh/NutriDetector"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <img src={GithubLogo} alt="GitHub" />
            </a>
          </div>
        </div>

        {/* Tic Tac Toe Card */}
        <div 
          className="project-card"
          onMouseEnter={() => setTicTacHovered(false)}
          onMouseLeave={() => setTicTacHovered(true)}>
          <div className="preview">
            <div className="tic-tac-container">
              <TicTacToe hideMessage={ticTacHovered} />
            </div>
          </div>

          <div className="card-header">
            <div className="title-date">
              <h4>Tic-Tac-Nope</h4>
              <p className="date">September 2024</p>
            </div>
            <button
              className="reset-btn header-btn"
              onClick={() => window.dispatchEvent(new Event('reset-tictactoe'))}
            >
              Reset Game
            </button>
          </div>
          <p>
            An unbeatable Tic-Tac-Toe AI designed with the Minimax Algorithm. 
            This project demonstrates game theory and AI decision-making, ensuring 
            the AI never loses. Built with Python and JavaScript, it serves as a 
            fun interactive demo of algorithmic problem-solving and adversarial search.
          </p>
          <div className="card-footer">
            <div className="tags">
              <span>#javascript</span>
              <span>#algorithms</span>
            </div>
            <a
              href="https://github.com/crptk/Tic-Tac-Nope"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              <img src={GithubLogo} alt="GitHub" />
            </a>
          </div>
        </div>
        {/* Handwritten Alphabet Recognizer */}
        <div 
        className="project-card"
        onClick={() => setSelectedProject("Handwritten Alphabet Recognizer")}
        >
          <div className="preview">
            <img src={HandwrittenThumb} alt="Thumbnail"/>
          </div>

          <div className="card-header">
            <div className="title-date">
              <h4>Handwritten Alphabet Recognizer</h4>
              <p className="date">July 2025</p>
            </div>
          </div>
          <p>
            A neural network built from scratch in NumPy, later optimized in PyTorch to
            achieve 99% accuracy on the MNIST dataset. Gained hands-on
            experience with deep learning concepts including backpropagation, ReLU/Softmax
            activations, and weight initialization.
          </p>

          <div className="card-footer">
            <div className="tags">
              <span>#python</span>
              <span>#numpy</span>
              <span>#pytorch</span>
              <span>#scikit-learn</span>
              <span>#neural-networks</span>
            </div>
            <a href="https://github.com/crptk/handwritten-letter-recognizer.git" target="_blank" rel="noopener noreferrer" className="github-btn">
              <img src={GithubLogo} alt="GitHub" />
            </a>
          </div>
        </div>

        {/* Image Filtering Program */}
        <div 
        className="project-card"
        onClick={() => setSelectedProject("Image Filtering Program")}>
          <div className="preview">
            <img src={ImageFilteringThumb} alt="ImageThumb"></img>
          </div>

          <div className="card-header">
            <h4>Image Filtering Program</h4>
          </div>

          <p className="date">August 2024</p>
          <p>
            Implemented image filters in C with pixel-level precision, applying
            grayscale, blur, edge detection, and Sobel filters on BMP files. Built a
            flexible CLI tool with user-selectable flags and managed compilation using
            a custom Makefile for modular, maintainable code.
          </p>

          <div className="card-footer">
            <div className="tags">
              <span>#c</span>
              <span>#makefile</span>
              <span>#cli</span>
              <span>#sobel</span>
              <span>#bmp</span>
            </div>
            <a href="https://github.com/crptk/Image-Filtering-Program" target="_blank" rel="noopener noreferrer" className="github-btn">
              <img src={GithubLogo} alt="GitHub" />
            </a>
          </div>
        </div>

      </div>
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✖</button>

            {selectedProject === "ResyncBot" && (
              <>
                <h2>ResyncBot</h2>
                <div className="modal-body">
                  <img src={ResyncBotThumb} alt="ResyncBot preview" />
                  
                  {/* YouTube Demo */}
                  <div className="youtube-embed">
                    <iframe 
                      src="https://www.youtube.com/embed/zV8PnmXrJCs?start=1" 
                      title="ResyncBot Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      frameBorder="0"
                    ></iframe>
                  </div>
                  
                  <h3>What is ResyncBot?</h3>
                  <p>
                    ResyncBot is a verified Discord bot that streamlines video editing by automating 
                    audio replacement with precision synchronization. Trusted by over 80,000 users 
                    across 130+ communities, it reduces manual editing time from 30+ minutes to 
                    under 30 seconds. Built for scalability and reliability with Python, Flask, 
                    PostgreSQL, and Azure, with a React + Vite web demo for creators.
                  </p>

                  <h3>ResyncBot's Story</h3>
                  <p>
                    I originally started this project as a fun tool for me and my friends—we were all editors 
                    and wanted to experiment with different kinds of resyncs. To my surprise, people outside our 
                    circle began joining our Discord server just to use the bot. That was the moment I realized 
                    the potential of what I had built.
                  </p>

                  <p>
                    Over the next two months, I dedicated myself to scaling ResyncBot for global use. I implemented 
                    payment authentication and subscriptions, created a queue handler that processes requests in order, 
                    and heavily optimized both backend and frontend systems. What started as a small experiment grew 
                    into my Capstone project, combining backend systems design, distributed job handling, 
                    frontend integration, and real-world deployment at scale.
                  </p>
                </div>
              </>
            )}

            {selectedProject === "NutriDetect" && (
              <>
                <h2>NutriDetect</h2>
                <div className="modal-body">
                  <h3>What is NutriDetect?</h3>
                  <p>
                    Built at HackHive 2025 in less than two nights, NutriDetect is an AI-powered health 
                    assistant that leverages Cohere's API to help users monitor 
                    their nutrition and live healthier lifestyles. It provides personalized 
                    suggestions based on daily food logs, tracks nutrient levels, and adapts its 
                    recommendations for users with unique health considerations or disabilities.
                  </p>

                  <h3>NutriDetect's Story</h3>
                  <p>
                    Even though our team didn't win the hackathon, NutriDetect was the project 
                    that marked the start of my journey into building full-stack applications. 
                    I worked on integrating AI with real-time input, setting up a simple but effective 
                    frontend, and learning how to structure a complete app from scratch.
                  </p>
                  <p>
                    The skills I developed during this project—AI integration, frontend design, 
                    and backend APIs—would later form the foundation for my Capstone project, ResyncBot. 
                    NutriDetect was more than a hackathon experiment; it was the first step toward building 
                    production-ready AI applications.
                  </p>
                </div>
              </>
            )}

            {selectedProject === "Handwritten Alphabet Recognizer" && (
              <>
                <h2>Handwritten Alphabet Recognizer</h2>
                <div className="modal-body">
                  <img src={HandwrittenThumb} alt="Handwritten Alphabet Recognizer preview" />

                  <h3>What is it?</h3>
                  <p>
                    A neural network built from scratch in NumPy, later optimized in PyTorch to
                    achieve 99% accuracy on the MNIST dataset. This project provided hands-on
                    experience with deep learning concepts including backpropagation, ReLU/Softmax
                    activations, and weight initialization techniques.
                  </p>

                  <h3>The Challenge</h3>
                  <p>
                    Building a neural network from scratch without relying on high-level frameworks 
                    taught me the fundamental mathematics behind deep learning. Starting with raw 
                    NumPy implementations helped me understand gradient descent, loss functions, 
                    and the intricate details of how neural networks actually learn.
                  </p>
                </div>
              </>
            )}

            {selectedProject === "Image Filtering Program" && (
              <>
                <h2>Image Filtering Program</h2>
                <div className="modal-body">
                  <img src={ImageFilteringThumb} alt="Image Filtering Program preview" />

                  <h3>What is it?</h3>
                  <p>
                    A C program that implements various image filters with pixel-level precision, 
                    applying grayscale, blur, edge detection, and Sobel filters on BMP files. 
                    Built as a flexible CLI tool with user-selectable flags and managed 
                    compilation using a custom Makefile for modular, maintainable code.
                  </p>

                  <h3>Technical Implementation</h3>
                  <p>
                    This project involved low-level image manipulation, working directly with 
                    BMP file structures and implementing mathematical filter algorithms. 
                    The Sobel edge detection filter required understanding convolution matrices 
                    and gradient calculations, while the blur filter used averaging techniques 
                    across pixel neighborhoods.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
