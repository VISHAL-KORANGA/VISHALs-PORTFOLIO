import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp, FiCode } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/vishalkoranga', name: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/vishalkoranga', name: 'LinkedIn' },
    { icon: <FiMail />, url: 'mailto:vishalkoranga97@gmail.com', name: 'Email' }
  ];

  // JSX Return
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="brand-logo">
              <motion.span
                className="brand-icon"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FiCode />
              </motion.span>
              <h3 className="brand-name">Vishal Singh Koranga</h3>
            </div>
            <p className="brand-tagline">
              Building the future, one line of code at a time.
            </p>
            <p className="brand-description">
              Computer Science Engineer passionate about creating innovative 
              solutions with cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="link-group">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(link.href.substring(1))?.scrollIntoView({ 
                          behavior: 'smooth' 
                        });
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h4>Connect</h4>
              <ul>
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {social.icon} {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <FiMail /> vishalkoranga97@gmail.com
                </li>
                <li>
                  📱 +91-9548706349
                </li>
                <li>
                  📍 Bazpur, Uttarakhand, India
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </motion.button>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="footer-divider"></div>

          <div className="footer-bottom-content">
            <div className="copyright">
              <p>
                © {currentYear} Vishal Singh Koranga. Made with{' '}
                <motion.span
                  className="heart-icon"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <FiHeart />
                </motion.span>
                {' '}using React & Framer Motion
              </p>
            </div>

            <div className="footer-note">
              <p>
                "The best way to predict the future is to create it." - Peter Drucker
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;