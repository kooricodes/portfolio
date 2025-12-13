import React from 'react';
import '../styles/Hero.css';
import heroImage from '../images/profile-2.jpeg';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            <span className="title-word">Thomas</span>
            <br />
            <span className="gradient-text">Software Engineering & Cybersecurity specialist</span>
          </h1>

          <p className="hero-subtitle">
            Passionate about building scalable software solutions and implementing security measures to keep data,users and platforms safe. 
            Driven by curiosity, discipline, and the pursuit of excellence in both domains.
          </p>

          <div className="hero-cta">
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('projects')}
            >
              Explore My Work
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => scrollToSection('about')}
            >
              See My Journey
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat">
              <span className="stat-number">8+</span>
              <span className="stat-label">Skills</span>
            </div>
            <div className="stat">
              <span className="stat-number">2</span>
              <span className="stat-label">Specializations</span>
            </div>
          </div>
                 <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>
        </div>

        <div className="hero-visual">
          <div className="profile-placeholder">
            <div className="avatar-glow"></div>
            <img 
              src={heroImage} 
              alt="Thomas - Software Engineer & Cybersecurity Specialist" 
              className="avatar-image"
            />
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;
