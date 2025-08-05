import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // React Effect Hook for mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/vishalkoranga', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/vishalkoranga', label: 'LinkedIn' },
    { icon: <FiCode />, url: 'https://leetcode.com/vishalkoranga', label: 'LeetCode' },
  ];

  // JSX Return
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Vishal Singh Koranga
            </motion.h1>

            <div className="hero-title">
              <TypeAnimation
                sequence={[
                  'Computer Science Engineer',
                  2000,
                  'Machine Learning Enthusiast',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'React Developer',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="typewriter"
              />
            </div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Passionate about creating innovative solutions with cutting-edge technology. 
              Currently pursuing B.Tech in Computer Science Engineering with expertise in 
              Machine Learning, Web Development, and Data Science.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button 
                className="btn btn-primary" 
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail /> Get In Touch
              </motion.button>
              <motion.a 
                href="/resume.pdf" 
                className="btn btn-secondary" 
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload /> Download CV
              </motion.a>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              <motion.div 
                className="image-placeholder"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  rotateY: (mousePosition.x - window.innerWidth / 2) * 0.01,
                  rotateX: (mousePosition.y - window.innerHeight / 2) * -0.01 
                }}
              >
                <span>VSK</span>
              </motion.div>
              <div className="floating-elements">
                <motion.div 
                  className="floating-element element-1"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  ⚛️
                </motion.div>
                <motion.div 
                  className="floating-element element-2"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  🐍
                </motion.div>
                <motion.div 
                  className="floating-element element-3"
                  animate={{ y: [0, -25, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                >
                  🤖
                </motion.div>
                <motion.div 
                  className="floating-element element-4"
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
                >
                  💻
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;