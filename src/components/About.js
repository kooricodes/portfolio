import React from 'react';
import '../styles/About.css';
import aboutImage from '../images/about_pic.jpeg';

const About = () => {
  const traits = [
    { icon: '🧠', label: 'Problem Solving' },
    { icon: '⚡', label: 'Adaptability' },
    { icon: '🎯', label: 'Attention to Detail' },
    { icon: '🚀', label: 'Innovation' },
    { icon: '🤝', label: 'Collaboration' },
    { icon: '📚', label: 'Continuous Learning' },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
         <h2 className="section-title">Who I am and what drives me</h2>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Computer Science student with a deep passion for software engineering and cybersecurity. 
              My journey in tech is driven by curiosity and a commitment to building robust, scalable solutions 
              while understanding the systems that power them.
            </p>

            <p>
              As an aspiring software engineer, I'm fascinated by elegant code architecture, system design, 
              and the art of solving complex problems through technology. I love building applications that 
              not only work flawlessly but are also maintainable and efficient.
            </p>

            <p>
              In parallel, I'm diving deep into cybersecurity, mastering the fundamentals of ethical hacking, 
              network security, and vulnerability assessment. I believe that security is not an afterthought 
              but a core principle of software development.
            </p>

            <p>
              Every project I undertake is an opportunity to refine my skills, learn new technologies, 
              and push the boundaries of what I can create. I'm committed to excellence in everything I do.
            </p>
          </div>

          <div className="about-visual">
            <div className="profile-image">
              <div className="image-border"></div>
              <img 
                src={aboutImage} 
                alt="Thomas - Professional Portrait" 
                className="about-profile-image"
              />
            </div>
          </div>
        </div>

        <div className="traits-grid">
          <h3 className="traits-title">Skills That Drive My Work</h3>
          <div className="traits-container">
            {traits.map((trait, index) => (
              <div key={index} className="trait-card">
                <span className="trait-icon">{trait.icon}</span>
                <span className="trait-label">{trait.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
