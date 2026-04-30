import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Cloud, Cpu } from 'lucide-react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    { icon: <Code2 size={24} />, label: 'Full Stack Development' },
    { icon: <Cpu size={24} />, label: 'AI Integration' },
    { icon: <Database size={24} />, label: 'Database Design' },
    { icon: <Cloud size={24} />, label: 'Cloud & DevOps' },
  ]

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A glimpse into who I am and what drives my passion for technology
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image-section"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <img
                src="/images/profile.png"
                alt="Maria Mannan"
                className="about-image"
              />
              <div className="about-image-border"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p>
              Hello! I'm Maria, a motivated and detail-oriented Computer Science graduate
              with a solid foundation in <span className="highlight">AI software development</span>.
              I'm passionate about building efficient, scalable applications and exploring the
              intersection of <span className="highlight">AI</span> and modern web technologies.
            </p>
            <p>
              My journey in tech began during my bachelor's at Government College University,
              where I developed a strong foundation in programming principles and software
              engineering. Since then, I've been committed to continuous learning and have
              expanded my expertise to include modern frameworks and AI technologies.
            </p>
            <p>
              Currently, I'm working as an <span className="highlight"> Software Engineer</span> at
              Programmers Force, where I develop full-stack applications and integrate AI features
              using OpenAI's agent SDK. I'm also enrolled in an Agentic & Robotics AI course at PIAIC
              to further deepen my knowledge in artificial intelligence.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to
              tech communities, or working on personal projects that challenge me to grow.
            </p>

            <div className="about-highlights-inline">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="highlight-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className="highlight-icon">{item.icon}</div>
                  <span>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="education-card">
            <div className="edu-badge">Education</div>
            <h4>Bachelor of Computer Science</h4>
            <p className="edu-school">Government College University (GCUL)</p>
            <div className="edu-details">
              <span className="edu-year">2015 - 2019</span>
              <span className="edu-gpa">CGPA: 3.2</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
