import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiDatabase, 
  FiLayers, 
  FiTool,
  FiMonitor,
  FiCpu,
  FiSettings
} from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState(0);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FiCode />,
      color: '#3B82F6',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'ReactJS', level: 85, icon: '⚛️' },
        { name: 'JavaScript', level: 85, icon: '📜' },
        { name: 'C++', level: 80, icon: '⚡' },
        { name: 'SQL', level: 75, icon: '🗄️' },
        { name: 'C', level: 70, icon: '💾' },
      ]
    },
    {
      title: 'ML & Data Science',
      icon: <FiCpu />,
      color: '#8B5CF6',
      skills: [
        { name: 'TensorFlow', level: 85, icon: '🧠' },
        { name: 'Scikit-learn', level: 80, icon: '📊' },
        { name: 'Pandas', level: 90, icon: '🐼' },
        { name: 'NumPy', level: 85, icon: '🔢' },
        { name: 'NLP', level: 88, icon: '💬' },
        { name: 'Deep Learning', level: 82, icon: '🤖' },
      ]
    },
    {
      title: 'Web Technologies',
      icon: <FiLayers />,
      color: '#10B981',
      skills: [
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'Bootstrap', level: 80, icon: '📱' },
        { name: 'Flask', level: 80, icon: '🔥' },
        { name: 'Streamlit', level: 85, icon: '📈' },
        { name: 'REST API', level: 78, icon: '🔗' },
      ]
    },
    {
      title: 'Tools & IDEs',
      icon: <FiTool />,
      color: '#F59E0B',
      skills: [
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'PyCharm', level: 85, icon: '🐍' },
        { name: 'Git', level: 85, icon: '📋' },
        { name: 'Figma', level: 75, icon: '🎯' },
        { name: 'Jupyter', level: 90, icon: '📓' },
        { name: 'Docker', level: 70, icon: '🐳' },
      ]
    }
  ];

  // JSX Return
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <div ref={ref} className="skills-content">
          {/* Category Tabs */}
          <motion.div
            className="skills-tabs"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                className={`skill-tab ${selectedCategory === index ? 'active' : ''}`}
                onClick={() => setSelectedCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ '--category-color': category.color }}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-title">{category.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="skills-grid"
            key={selectedCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {skillCategories[selectedCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="skill-header">
                  <span className="skill-icon">{skill.icon}</span>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>

                <div className="skill-progress-container">
                  <div className="skill-percentage">{skill.level}%</div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      style={{ backgroundColor: skillCategories[selectedCategory].color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;