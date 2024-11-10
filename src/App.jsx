// CyberpunkPortfolio.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './contact/ContactForm';

const CyberpunkPortfolio = () => {
  const [glitchText, setGlitchText] = useState('CYBER_SECURITY');
  
  // Simulate random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.8) {
        const chars = 'AB<>_/@#$%&';
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        const position = Math.floor(Math.random() * glitchText.length);
        const newText = 
          glitchText.substring(0, position) + 
          randomChar + 
          glitchText.substring(position + 1);
        setGlitchText(newText);
        
        // Reset text after short delay
        setTimeout(() => {
          setGlitchText('JEFFEREY_SOLING');
        }, 100);
      }
    }, 150);

    return () => clearInterval(glitchInterval);
  }, [glitchText]);

  return (
    <div className="container">
      <div className="content-wrapper">
        {/* Glitch Effect Title */}
        <div className="glitch-container">
          <h1 className="glitch-text" data-text={glitchText}>
            {glitchText}
          </h1>
        </div>

        {/* Main Content */}
        <div>
          {/* About Section */}
          <section className="section">
            <h2 className="section-title">SYSTEM::ABOUT</h2>
            <p className="section-content">
            Cybersecurity specialist in training, with a growing passion for front end and emerging full-stack developer. 
            Breaking and securing systems is my mission, while building engaging web experiences is my creative outlet. 
            Expanding my digital arsenal through self-taught 3D modeling in Blender and vector graphics using Adobe Photoshop, Adobe Illustrator 
            and Affinity Designer. Constantly evolving, learning, and pushing the boundaries of digital creation and security.
            </p>
          </section>

          {/* Skills Section */}
          <section className="section">
            <h2 className="section-title">SYSTEM::SKILLS</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="skill-title">SECURITY_PROTOCOLS</h3>
                <ul className="skill-list">
                  <li>Network Security</li>
                  <li>Risk Analysis</li>
                  <li>Security Analysis</li>
                  <li>Security Engineer</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3 className="skill-title">DEV_STACK</h3>
                <ul className="skill-list">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Python - Limited</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="section">
            <h2 className="section-title">SYSTEM::PROJECTS</h2>
            <div>
              <div className="project-card">
                <h3 className="project-title"><a href="https://xo-byss.netlify.app">XObyss</a></h3>
                <p className="section-content">Tic Tac Toe mini game, centered and scaled to be easier on the eyes</p>
              </div>
              <div className="project-card">
                <h3 className="project-title">Camp4x4</h3>
                <p className="section-content">A still in development e-commerce store relevant to camping, vanlife and camper vehicle conversions</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default CyberpunkPortfolio;