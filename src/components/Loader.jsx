import { motion } from 'framer-motion'
import './Loader.css'

const Loader = () => {
  return (
    <motion.div 
      className="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="loader-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="loader-logo"
          animate={{ 
            rotateY: [0, 360],
          }}
          transition={{ 
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity
          }}
        >
          <span className="loader-letter">M</span>
        </motion.div>
        <motion.div 
          className="loader-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <motion.p 
          className="loader-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading Portfolio...
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default Loader

