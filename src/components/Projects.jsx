import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Folder } from 'lucide-react'
import './Projects.css'

const featuredProjects = [
  {
    id: 1,
    title: 'AI-Powered Web Applications',
    description: 'Developed interactive AI-based applications using Python, Streamlit, and Chainlit. Integrated OpenAI Agent SDK for intelligent automation and conversational interfaces.',
    image: null,
    technologies: ['Python', 'Streamlit', 'Chainlit', 'OpenAI SDK'],
    github: 'https://github.com/MariaMannan',
    live: null,
    featured: true,
  },
  {
    id: 2,
    title: 'Medicine Price Analyzer',
    description: 'A comprehensive web platform for comparing medicine prices across multiple suppliers. Features real-time analysis, dynamic data management, and robust search capabilities.',
    image: null,
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/MariaMannan',
    live: null,
    featured: true,
  },
  {
    id: 3,
    title: 'Full Stack API Development',
    description: 'Built scalable RESTful APIs using FastAPI with comprehensive documentation. Implemented authentication, database integrations, and containerized deployments.',
    image: null,
    technologies: ['FastAPI', 'Python', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/MariaMannan',
    live: null,
    featured: true,
  },
]

const otherProjects = [
  {
    id: 4,
    title: 'CI/CD Pipeline Setup',
    description: 'Configured automated deployment pipelines for streamlined software delivery and continuous integration.',
    technologies: ['GitHub Actions', 'Docker', 'CI/CD'],
    github: 'https://github.com/MariaMannan',
  },
  {
    id: 5,
    title: 'API Testing Suite',
    description: 'Developed comprehensive Postman collection test cases for API validation and quality assurance.',
    technologies: ['Postman', 'API Testing', 'Jest'],
    github: 'https://github.com/MariaMannan',
  },
  {
    id: 6,
    title: 'Responsive Web Interfaces',
    description: 'Created mobile-first responsive web designs ensuring seamless user experience across all devices.',
    technologies: ['React', 'CSS3', 'JavaScript'],
    github: 'https://github.com/MariaMannan',
  },
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <motion.article 
              key={project.id}
              className={`featured-project ${index % 2 !== 0 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <Folder size={48} />
                  <span>Project {index + 1}</span>
                </div>
              </div>
              
              <div className="project-content">
                <span className="project-overline">Featured Project</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="project-tech">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.github && (
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="other-projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Other Noteworthy Projects</h3>
        </motion.div>

        <div className="other-projects-grid">
          {otherProjects.map((project, index) => (
            <motion.article 
              key={project.id}
              className="other-project"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="other-project-top">
                <Folder className="folder-icon" size={40} />
                <div className="other-project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="other-project-title">{project.title}</h4>
              <p className="other-project-desc">{project.description}</p>
              <ul className="other-project-tech">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a 
            href="https://github.com/MariaMannan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

