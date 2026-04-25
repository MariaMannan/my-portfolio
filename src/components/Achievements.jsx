import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, BookOpen, Users, Star } from 'lucide-react'
import './Achievements.css'

const achievements = [
  {
    icon: <BookOpen size={28} />,
    title: 'Agentic & Robotics AI Course',
    organization: 'PIAIC',
    description: 'Currently enrolled in cutting-edge AI course focusing on autonomous agents and robotics integration.',
    type: 'ongoing',
  },
  {
    icon: <Award size={28} />,
    title: 'Director of Social Team',
    organization: 'All Pakistan Tech and Art Fest\'19',
    description: 'Led the social team for one of Pakistan\'s largest tech and art festivals.',
    type: 'leadership',
  },
  {
    icon: <Users size={28} />,
    title: 'Sub-Director of Social Team',
    organization: 'All Pakistan Tech and Art Fest\'18',
    description: 'Coordinated social media campaigns and community engagement for the festival.',
    type: 'leadership',
  },
  {
    icon: <Star size={28} />,
    title: 'General Manager',
    organization: 'GCU ACM Student Chapter',
    description: 'Managed the university\'s ACM chapter, organizing tech events and workshops.',
    type: 'leadership',
  },
]

const interests = [
  'Software Development',
  'Artificial Intelligence & Robotics',
  'UI/UX Design',
  'Problem Solving & Coding Challenges',
  'Learning New Technologies',
  'Quality Assurance',
  'Website Optimization',
  'Content Management Systems',
  'Blogging',
  'Tech Communities',
  'Shopify Store Creation',
]

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="achievements" className="achievements" ref={ref}>
      <div className="container">
        <motion.div
          className="achievements-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Recognition and leadership roles that have shaped my professional journey
          </p>
        </motion.div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.title}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`achievement-icon ${achievement.type}`}>
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <span className="achievement-org">{achievement.organization}</span>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-desc">{achievement.description}</p>
              </div>
              <div className={`achievement-badge ${achievement.type}`}>
                {achievement.type === 'ongoing' ? 'Currently Enrolled' : 'Leadership'}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="interests-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="interests-title">Areas of Interest</h3>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <motion.span 
                key={interest}
                className="interest-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements

