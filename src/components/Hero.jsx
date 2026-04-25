import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, MapPin } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={itemVariants}>
            <span className="greeting-line"></span>
            Hi, my name is
          </motion.p>
          
          <motion.h1 className="hero-name" variants={itemVariants}>
            Maria Mannan
          </motion.h1>
          
          <motion.h2 className="hero-title" variants={itemVariants}>
            I build things for the web & explore AI.
          </motion.h2>
          
          <motion.p className="hero-description" variants={itemVariants}>
            I'm a <span className="highlight">Software Engineer</span> passionate about building 
            efficient, scalable applications at the intersection of AI and modern web technologies. 
            Currently focused on full-stack development with <span className="highlight">FastAPI</span>, 
            <span className="highlight"> React</span>, and <span className="highlight">OpenAI</span> integrations.
          </motion.p>

          <motion.div className="hero-location" variants={itemVariants}>
            <MapPin size={16} />
            <span>Lahore, Pakistan</span>
          </motion.div>

          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.a 
              href="#contact" 
              className="cta-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a 
              href="#projects" 
              className="cta-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <motion.a 
              href="https://github.com/MariaMannan" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <Github size={22} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/maria-malik-090946234" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a 
              href="mailto:malik.maria6200@gmail.com"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Email"
            >
              <Mail size={22} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="profile-container">
            <div className="profile-image-wrapper">
              <img 
                src="/images/profile.png" 
                alt="Maria Mannan" 
                className="profile-image"
              />
              <div className="profile-border"></div>
            </div>
            <div className="profile-decoration">
              <div className="decoration-circle"></div>
              <div className="decoration-dots">
                {[...Array(25)].map((_, i) => (
                  <span key={i} className="dot"></span>
                ))}
              </div>
            </div>
          </div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </motion.div>
      </div>

      <motion.a 
        href="#about" 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  )
}

export default Hero
