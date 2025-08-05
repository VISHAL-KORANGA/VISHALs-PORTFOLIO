import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiExternalLink, FiCalendar, FiCheck, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import './Certifications.css';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
    {
      id: 1,
      title: 'Python for Data Science, AI and Development',
      issuer: 'Coursera',
      category: 'Data Science',
      date: '2024',
      credentialId: 'COURSERA-PY-DS-2024',
      skills: ['Python Programming', 'Data Science', 'Machine Learning', 'AI Development'],
      description: 'Comprehensive course covering Python fundamentals, data analysis, machine learning algorithms, and AI application development with hands-on projects.',
      verificationLink: 'https://coursera.org/verify/python-ds-cert',
      color: '#0056D3',
      level: 'Intermediate',
      duration: '6 weeks',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Introduction to Google Cloud Computing',
      issuer: 'NPTEL SWAYAM',
      category: 'Cloud Computing',
      date: '2024',
      credentialId: 'NPTEL-GCC-2024',
      skills: ['Cloud Computing', 'Google Cloud Platform', 'Infrastructure', 'DevOps'],
      description: 'Foundational course on cloud computing concepts, Google Cloud services, and best practices for cloud deployment and management.',
      verificationLink: 'https://nptel.ac.in/verify/gcc-cert',
      color: '#4285F4',
      level: 'Beginner',
      duration: '8 weeks',
      rating: 4.6
    },
    {
      id: 3,
      title: 'Enhancing Soft Skills and Personality',
      issuer: 'NPTEL SWAYAM',
      category: 'Soft Skills',
      date: '2023',
      credentialId: 'NPTEL-SSP-2023',
      skills: ['Communication', 'Leadership', 'Team Work', 'Professional Development'],
      description: 'Professional development course focusing on communication skills, leadership qualities, and personality enhancement for career growth.',
      verificationLink: 'https://nptel.ac.in/verify/ssp-cert',
      color: '#FF6B35',
      level: 'All Levels',
      duration: '12 weeks',
      rating: 4.5
    },
    {
      id: 4,
      title: 'Mastering Data Structure and Algorithms using C/C++',
      issuer: 'UDEMY',
      category: 'Programming',
      date: '2023',
      credentialId: 'UDEMY-DSA-2023',
      skills: ['Data Structures', 'Algorithms', 'C++', 'Problem Solving'],
      description: 'Advanced course covering complex data structures, algorithm design, and implementation using C and C++ programming languages.',
      verificationLink: 'https://udemy.com/verify/dsa-cert',
      color: '#EC5252',
      level: 'Advanced',
      duration: '20 hours',
      rating: 4.9
    }
  ];

  const categories = ['all', 'Data Science', 'Cloud Computing', 'Programming', 'Soft Skills'];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const stats = [
    { value: '4+', label: 'Certifications', icon: <FiAward /> },
    { value: '3', label: 'Platforms', icon: <FiBookOpen /> },
    { value: '15+', label: 'Skills Validated', icon: <FiTrendingUp /> }
  ];

  // JSX Return
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications & Achievements
        </motion.h2>

        {/* Stats Section */}
        <motion.div
          className="cert-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="cert-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Certifications' : category}
            </button>
          ))}
        </motion.div>

        <div ref={ref} className="certifications-grid">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certification-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              layout
            >
              <div className="cert-header">
                <div className="cert-badge" style={{ backgroundColor: cert.color }}>
                  <FiAward />
                </div>
                <div className="cert-meta">
                  <span className="cert-level" style={{ color: cert.color }}>
                    {cert.level}
                  </span>
                  <span className="cert-duration">
                    {cert.duration}
                  </span>
                </div>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">
                  <span className="issuer-name">{cert.issuer}</span>
                  <div className="cert-rating">
                    {'★'.repeat(Math.floor(cert.rating))} {cert.rating}
                  </div>
                </div>

                <p className="cert-description">{cert.description}</p>

                <div className="cert-details">
                  <div className="cert-info">
                    <span className="cert-date">
                      <FiCalendar /> {cert.date}
                    </span>
                    <span className="cert-verified">
                      <FiCheck /> Verified
                    </span>
                  </div>

                  <div className="credential-id">
                    ID: {cert.credentialId}
                  </div>
                </div>

                <div className="cert-skills">
                  <h4>Skills Gained</h4>
                  <div className="skills-tags">
                    {cert.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="skill-tag" 
                        style={{ borderColor: cert.color, color: cert.color }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="cert-footer">
                <a 
                  href={cert.verificationLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="verify-btn"
                  style={{ backgroundColor: cert.color }}
                >
                  <FiExternalLink /> Verify Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;