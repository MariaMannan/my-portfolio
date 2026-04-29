import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, ChevronRight, CheckCircle2, Cpu, Sparkles, Layout } from 'lucide-react'
import './ProjectDetails.css'

const ProjectDetails = ({ project, onClose }) => {
  if (!project) return null

  // SupportAI specific content, for other projects we could render a simpler view
  const isSupportAI = project.id === 'support-ai'

  return (
    <AnimatePresence>
      <motion.div 
        className="project-details-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="project-details-container"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        >
          <div className="pd-header-actions">
            <button className="pd-close-btn" onClick={onClose}>
              <X size={24} />
            </button>
          </div>

          <div className="pd-content">
            <div className="pd-header">
              <span className="pd-overline">Project Showcase</span>
              <h1 className="pd-title">{project.title}</h1>
              <p className="pd-subtitle">{project.subtitle}</p>
              
              <div className="pd-links">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="pd-btn primary">
                    <ExternalLink size={18} />
                    View Live App
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="pd-btn secondary">
                    <Github size={18} />
                    Source Code
                  </a>
                )}
              </div>
            </div>

            <div className="pd-tech-stack">
              {project.technologies.map(tech => (
                <span key={tech} className="pd-tech-tag">{tech}</span>
              ))}
            </div>

            {isSupportAI ? (
              <div className="pd-rich-content">
                <section className="pd-section pd-hero-image">
                  <motion.img 
                    src="/images/support-ai/full_ui.png" 
                    alt="SupportAI Full UI" 
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  />
                </section>

                <div className="pd-grid-2">
                  <section className="pd-section pd-problem-solution">
                    <h2><Sparkles className="inline-icon" /> The Problem & Solution</h2>
                    <p>
                      Customer support teams are often overwhelmed by high volumes of emails, inconsistent response quality, and agent burnout. <strong>SupportAI</strong> solves these issues by acting as an "AI co-pilot" that handles the heavy lifting of drafting, allowing agents to focus on complex problem-solving.
                    </p>
                    <ul className="pd-feature-list">
                      <li><CheckCircle2 size={18} /> Instant Drafting of complete email replies</li>
                      <li><CheckCircle2 size={18} /> Tone Control (Professional, Friendly, Formal)</li>
                      <li><CheckCircle2 size={18} /> Context-aware Category Intelligence</li>
                    </ul>
                  </section>

                  <section className="pd-section">
                    <motion.img 
                      src="/images/support-ai/tone.png" 
                      alt="Tone Selection" 
                      className="pd-rounded-img" 
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </section>
                </div>

                <section className="pd-section pd-how-it-works">
                  <h2><Cpu className="inline-icon" /> How It Works</h2>
                  <div className="pd-steps">
                    <div className="pd-step">
                      <div className="pd-step-number">1</div>
                      <h3>Intelligent Prompt Engineering</h3>
                      <p>Uses Dynamic System Prompting. Depending on the selected tone and category, the engine injects specific behavioral guidelines into the AI model.</p>
                    </div>
                    <div className="pd-step">
                      <div className="pd-step-number">2</div>
                      <h3>The AI Engine</h3>
                      <p>Powered by Google Gemini 3.1 Flash Lite via the google-genai SDK for lightning-fast, high-reasoning responses. Context-aware processing.</p>
                    </div>
                    <div className="pd-step">
                      <div className="pd-step-number">3</div>
                      <h3>Premium Frontend</h3>
                      <p>Built with Streamlit and enhanced with custom Glassmorphism CSS UI. Integrated utility functions for text processing and clipboard management.</p>
                    </div>
                  </div>
                </section>

                <div className="pd-gallery">
                  <h2><Layout className="inline-icon" /> Interface Details</h2>
                  <div className="pd-gallery-grid">
                    <motion.img 
                      src="/images/support-ai/category.png" 
                      alt="Category Intelligence" 
                      whileHover={{ scale: 1.04, y: -5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.img 
                      src="/images/support-ai/ai_response.png" 
                      alt="AI Generated Response" 
                      whileHover={{ scale: 1.04, y: -5 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="pd-rich-content">
                <p>{project.description}</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectDetails
