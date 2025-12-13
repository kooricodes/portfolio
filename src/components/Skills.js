import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Software Engineering',
      icon: '⚙️',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Flask', level: 85 },
        { name: 'SQL', level: 88 },
        { name: 'Git', level: 90 },
      ],
    },
    {
      title: 'Cybersecurity',
      icon: '🔒',
      skills: [
        { name: 'Kali Linux', level: 80 },
        { name: 'Network Security', level: 75 },
        { name: 'Nmap', level: 85 },
        { name: 'Wireshark', level: 78 },
        { name: 'Penetration Testing', level: 72 },
        { name: 'Vulnerability Assessment', level: 80 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Docker', level: 78 },
        { name: 'Linux', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'GitHub', level: 92 },
        { name: 'Virtual Machines', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and tools I've mastered</p>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-highlight">
          <div className="highlight-item">
            <span className="highlight-number">15+</span>
            <span className="highlight-text">Technologies</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">2</span>
            <span className="highlight-text">Specializations</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-number">100%</span>
            <span className="highlight-text">Dedication</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
