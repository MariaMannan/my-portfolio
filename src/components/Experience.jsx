import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import './Experience.css'

const experiences = [
  {
    id: 1,
    title: 'Associate Software Engineer',
    company: 'Programmers Force',
    location: 'Lahore',
    period: 'Apr 2025 - Present',
    type: 'Full-time',
    achievements: [
      'Working as Full Stack Software Engineer in both frontend and backend development',
      'Developing useful AI features for projects using OpenAI agent SDK and different models',
      'Creating robust APIs using FastAPI framework',
      'Containerizing projects using Docker for consistent deployment',
      'Running postman collection test cases for API validation',
      'Implementing and maintaining CI/CD pipelines for automated deployments',
    ],
    technologies: ['Python', 'FastAPI', 'React', 'OpenAI SDK', 'Docker', 'CI/CD'],
  },
  {
    id: 2,
    title: 'AI & Robotics Learning Projects',
    company: 'PIAIC',
    location: 'Pakistan',
    period: 'Ongoing',
    type: 'Learning Program',
    achievements: [
      'Developing AI-based projects using Python & Streamlit for interactive web applications',
      'Working with Chainlit for conversational AI interfaces',
      'Building applications using OpenAI Agent SDK for intelligent automation',
      'Creating real-time data processing and visualization tools',
    ],
    technologies: ['Python', 'Streamlit', 'Chainlit', 'OpenAI Agent SDK'],
  },
  {
    id: 3,
    title: 'Medicine Price Analyzer',
    company: 'Final Year Project',
    location: 'GCUL',
    period: '2018 - 2019',
    type: 'Academic Project',
    achievements: [
      'Implemented dynamic data management backend using PHP and MySQL',
      'Built real-time analysis and price comparison across multiple suppliers',
      'Designed responsive user interface with HTML, CSS, and JavaScript',
      'Developed robust search and filter capabilities for medicine discovery',
      'Optimized website for seamless interaction across devices',
    ],
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeExp, setActiveExp] = useState(0)

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and the projects that have shaped my skills
          </p>
        </motion.div>

        <div className="experience-content">
          <motion.div 
            className="experience-tabs"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                className={`exp-tab ${activeExp === index ? 'active' : ''}`}
                onClick={() => setActiveExp(index)}
              >
                <span className="tab-company">{exp.company}</span>
                <span className="tab-indicator"></span>
              </button>
            ))}
          </motion.div>

          <motion.div 
            className="experience-details"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`exp-detail ${activeExp === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: activeExp === index ? 1 : 0, y: activeExp === index ? 0 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="exp-header">
                  <h3 className="exp-title">
                    {exp.title} 
                    <span className="exp-at">@</span>
                    <span className="exp-company">{exp.company}</span>
                  </h3>
                  <div className="exp-meta">
                    <span className="exp-meta-item">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="exp-meta-item">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                    <span className="exp-type">{exp.type}</span>
                  </div>
                </div>

                <ul className="exp-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: activeExp === index ? 1 : 0, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <ChevronRight size={16} className="achievement-icon" />
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="exp-technologies">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience

