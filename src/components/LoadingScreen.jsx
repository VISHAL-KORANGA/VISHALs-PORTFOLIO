import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const containerVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const progressVariants = {
    initial: { width: 0 },
    animate: { 
      width: "100%",
      transition: { duration: 2.2, ease: "easeInOut" }
    }
  };

  // JSX Return
  return (
    <motion.div
      className="loading-screen"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="loading-content">
        <motion.div
          className="loading-logo"
          variants={logoVariants}
          initial="initial"
          animate="animate"
        >
          <motion.span
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            VSK
          </motion.span>
        </motion.div>

        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <p className="loading-title">Vishal Singh Koranga</p>
          <p className="loading-subtitle">Computer Science Engineer</p>
        </motion.div>

        <motion.div
          className="loading-progress"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="progress-container">
            <motion.div
              className="progress-bar"
              variants={progressVariants}
              initial="initial"
              animate="animate"
            />
          </div>
          <motion.p 
            className="loading-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading Portfolio...
          </motion.p>
        </motion.div>

        <motion.div
          className="loading-dots"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="dot"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;