import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Task Management API',
      description: 'A RESTful API for task management with user authentication, role-based access control, and real-time notifications. Built with scalability and performance in mind.',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'JWT', 'Redis'],
      github: '#',
      demo: '#',
      category: 'Backend',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with product catalog, shopping cart, payment integration, and admin dashboard. Features include real-time inventory tracking.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      category: 'Full Stack',
    },
    {
      id: 3,
      title: 'Network Security Analyzer',
      description: 'A comprehensive network scanning and vulnerability assessment tool. Detects open ports, running services, and potential security weaknesses using network reconnaissance.',
      technologies: ['Python', 'Nmap', 'Scapy', 'Linux', 'Security'],
      github: '#',
      demo: '#',
      category: 'Cybersecurity',
    },
    {
      id: 4,
      title: 'Real-Time Chat Application',
      description: 'WebSocket-based chat application with user authentication, real-time messaging, typing indicators, and user presence. Fully responsive and production-ready.',
      technologies: ['JavaScript', 'React', 'Socket.io', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
      category: 'Frontend',
    },
    {
      id: 5,
      title: 'Password Strength Validator',
      description: 'Advanced password strength analyzer with entropy calculation, breach detection integration, and security recommendations. Educates users on cybersecurity best practices.',
      technologies: ['Python', 'JavaScript', 'Flask', 'Security', 'API'],
      github: '#',
      demo: '#',
      category: 'Cybersecurity',
    },
    {
      id: 6,
      title: 'System Performance Monitor',
      description: 'Linux-based system monitoring tool with real-time metrics, resource tracking, and alert system. Includes web dashboard for visualization and historical data.',
      technologies: ['Python', 'Linux', 'Docker', 'Flask', 'React'],
      github: '#',
      demo: '#',
      category: 'DevOps',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcasing my work across software engineering and cybersecurity</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href="https://github.com" className="project-link github-link" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                  <span className="link-icon">→</span>
                </a>
                <a href="#demo" className="project-link demo-link" onClick={(e) => e.preventDefault()}>
                  <span>Demo</span>
                  <span className="link-icon">→</span>
                </a>
              </div>

              <div className="project-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
