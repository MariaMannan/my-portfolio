import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Skills.css'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'FastAPI', level: 88 },
      { name: 'JavaScript / Vue.js', level: 85 },
      { name: 'React', level: 80 },
      { name: 'PHP / Laravel', level: 70 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    title: 'AI & ML',
    skills: [
      { name: 'OpenAI SDK', level: 85 },
      { name: 'MCP Servers', level: 85 },
      { name: 'Chainlit / Streamlit', level: 82 },
      { name: 'Web Scraping', level: 80 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Git', level: 88 },
      { name: 'CI/CD', level: 78 },
      { name: 'Postman', level: 85 },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'Pytest', level: 82 },
      { name: 'Jest', level: 75 },
      { name: 'Vitest', level: 75 },
    ],
  },
]

const allTags = [
  'Python', 'JavaScript', 'Vue.js', 'React', 'FastAPI', 'MySQL', 
  'MongoDB', 'PostgreSQL', 'Laravel', 'Version Control (Git)', 'Streamlit',
  'Prompt Engineering', 'MCP Servers', 'Web Scraping', 'Selenium / BS4',
  'Debugging & Problem-Solving', 'Postman', 'CI/CD', 'Chainlit', 'Jest',
  'Vitest', 'Pytest', 'Docker', 'OpenAI SDK'
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            The tools and technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-content">
          <motion.div 
            className="skills-bars"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {skillCategories.map((category, catIndex) => (
              <div key={category.title} className="skill-category">
                <motion.h3 
                  className="category-title"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + catIndex * 0.1 }}
                >
                  {category.title}
                </motion.h3>
                <div className="category-skills">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className="skill-bar"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="skill-track">
                        <motion.div 
                          className="skill-fill"
                          initial={{ scaleX: 0 }}
                          animate={isInView ? { scaleX: skill.level / 100 } : {}}
                          transition={{ 
                            duration: 0.8, 
                            delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="skills-cloud"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="cloud-title">All Technologies</h3>
            <div className="tags-container">
              {allTags.map((tag, index) => (
                <motion.span 
                  key={tag}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

