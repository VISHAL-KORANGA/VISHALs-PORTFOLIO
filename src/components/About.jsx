import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiUsers, FiTrendingUp, FiCode, FiDownload } from 'react-icons/fi';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: <FiCode />, value: '15+', label: 'Projects Completed', color: '#3B82F6' },
    { icon: <FiAward />, value: '8.75', label: 'CGPA', color: '#10B981' },
    { icon: <FiTrendingUp />, value: '98%', label: 'ML Model Accuracy', color: '#F59E0B' },
    { icon: <FiUsers />, value: '2+', label: 'Years Experience', color: '#8B5CF6' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FiCode /> },
    { id: 'achievements', label: 'Achievements', icon: <FiAward /> },
    { id: 'experience', label: 'Experience', icon: <FiTrendingUp /> },
  ];

  const tabContent = {
    overview: {
      title: "About Me",
      content: "I'm a passionate Computer Science Engineering student at Graphic Era Hill University with a strong foundation in machine learning, web development, and data science. Currently maintaining an impressive CGPA of 8.75, I strive to bridge the gap between theoretical knowledge and practical applications.",
      details: [
        "🎓 B.Tech CSE student with 8.75 CGPA",
        "🤖 Machine Learning enthusiast with hands-on experience",
        "💻 Full-stack developer with modern web technologies",
        "📊 Data science practitioner with real-world projects",
        "🚀 Problem solver who loves building innovative solutions"
      ]
    },
    achievements: {
      title: "Key Achievements",
      content: "Throughout my academic and professional journey, I've consistently demonstrated excellence and leadership, earning recognition for both technical skills and personal development.",
      details: [
        "🏆 School Topper with 91.6% in Class 10 and 94% in Class 12",
        "👨‍💼 Head Boy (2019-20) - Leadership and organizational skills",
        "🤖 98.44% accuracy in ML-based Job Role Prediction system",
        "🎓 Multiple certifications from Coursera, NPTEL, and UDEMY",
        "💡 Active contributor to open-source projects"
      ]
    },
    experience: {
      title: "Experience & Skills",
      content: "My journey spans across multiple domains including machine learning, web development, and data science, with hands-on experience in building production-ready applications.",
      details: [
        "🐍 2+ years of Python development experience",
        "⚛️ React.js and modern web development",
        "🧠 Machine Learning model development and deployment",
        "🔥 Flask and Streamlit web application development",
        "📈 Data analysis and visualization with pandas/plotly"
      ]
    }
  };

  const downloadResume = () => {
    // In a real app, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Vishal_Singh_Koranga_Resume.pdf';
    link.click();
  };

  // JSX Return
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div ref={ref} className="about-content">
          <motion.div
            className="about-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{ '--stat-color': stat.color }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <motion.div 
                    className="stat-value"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-tabs">
              <div className="tab-buttons">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="tab-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{tabContent[activeTab].title}</h3>
                  <p className="tab-description">{tabContent[activeTab].content}</p>

                  <ul className="details-list">
                    {tabContent[activeTab].details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              className="about-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <button 
                className="btn btn-primary"
                onClick={downloadResume}
              >
                <FiDownload /> Download Resume
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => {
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;