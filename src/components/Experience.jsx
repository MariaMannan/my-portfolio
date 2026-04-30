import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import './Experience.css'

const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'AML Watcher',
    url: 'https://amlwatcher.com/',
    location: 'Lahore',
    period: 'Apr 2025 - Present',
    type: 'Full-time',
    achievements: [
      'Crawled and scraped data by integrating watchlist resources through Selenium, BeautifulSoup, and Requests.',
      'Processed and integrated both structured and raw data across different modules.',
      'Automated data extraction and ensured seamless integration with the core system.',
      'Contributed directly to the core product: amlwatcher.com',
    ],
    technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Requests', 'Web Scraping', 'Automation'],
  },
  {
    id: 2,
    title: 'Automation & Integration Engineer',
    company: 'The KYB',
    url: 'https://thekyb.com/',
    location: 'Lahore',
    period: 'Dec 2025 - Mar 2026',
    type: 'Full-time',
    achievements: [
      'Performed complex web scraping using Selenium across multiple modules.',
      'Successfully integrated scraped data and modules directly into the system.',
      'Developed automated workflows to streamline processes and optimize performance.',
      'Contributed directly to the core product: thekyb.com',
    ],
    technologies: ['Python', 'Selenium', 'Automation', 'System Integration', 'Web Scraping'],
  },
  {
    id: 3,
    title: 'AI Software Engineer',
    company: 'Shufti Pro',
    url: 'https://shuftipro.com/',
    location: 'Lahore',
    period: 'Apr 2025 - Nov 2025',
    type: 'Full-time',
    achievements: [
      'Developed AI features including OCR and risk analysis detection systems.',
      'Connected Large Language Models (LLMs) to applications for enhanced AI capabilities.',
      'Built features utilizing OpenAI agents and Twilio agents.',
      'Contributed to the development of the AI Journey Builder.',
      'Created robust backend API services using FastAPI.',
      'Contributed directly to the core product: shuftipro.com',
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI Agents', 'LLMs', 'OCR', 'Twilio'],
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
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="exp-company-link">
                      {exp.company}
                    </a>
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

