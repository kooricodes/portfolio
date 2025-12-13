import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experience = [
    {
      id: 1,
      type: 'education',
      title: 'Bachelor of Science in Informatics and Computer Science',
      institution: 'Strathmore University',
      period: 'july 2025 - Present',
      description: 'Pursuing comprehensive computer science education with focus on software engineering principles, data structures, algorithms, and system design.',
      highlights: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development'],
    },
    {
      id: 2,
      type: 'learning',
      title: 'Full-Stack Web Development',
      institution: 'Modcom Institute of Technology',
      period: 'Jan 2025 - May 2025',
      description: 'Mastering modern web development stack including React, Node.js, MongoDB, and building production-ready applications.',
      highlights: ['React Ecosystem', 'REST APIs', 'Database Design', 'Deployment'],
    },
    {
      id: 3,
      type: 'learning',
      title: 'Cybersecurity Fundamentals',
      institution: 'Self-Learning + Online Courses',
      period: '2024 - Present',
      description: 'In-depth study of network security, ethical hacking, penetration testing, and vulnerability assessment using industry-standard tools.',
      highlights: ['Network Security', 'Penetration Testing', 'Linux Security', 'Ethical Hacking'],
    },
    {
      id: 4,
      type: 'project',
      title: 'Open Source Contributions',
      institution: 'GitHub Community',
      period: 'Ongoing',
      description: 'Active contributor to open-source projects, improving code quality, fixing bugs, and implementing new features for the developer community.',
      highlights: ['Code Review', 'Bug Fixes', 'Feature Development', 'Community'],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">My learning journey and professional growth</p>

        <div className="timeline">
          {experience.map((item, index) => (
            <div key={item.id} className={`timeline-item ${item.type}`}>
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < experience.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="content-header">
                  <h3 className="content-title">{item.title}</h3>
                  <span className="content-type">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
                </div>

                <p className="content-institution">{item.institution}</p>
                <p className="content-period">{item.period}</p>
                <p className="content-description">{item.description}</p>

                <div className="content-highlights">
                  {item.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-badge">{highlight}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
