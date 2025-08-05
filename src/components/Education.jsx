import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiAward, FiTrendingUp, FiBook } from 'react-icons/fi';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      id: 1,
      institution: 'Graphic Era Hill University',
      location: 'Dehradun, Uttarakhand',
      degree: 'B.Tech - Computer Science and Engineering',
      duration: '2022 - 2026',
      grade: 'CGPA: 8.75',
      description: 'Pursuing Bachelor of Technology in Computer Science and Engineering with specialization in Machine Learning and Data Science. Maintaining excellent academic performance while actively participating in coding competitions and technical projects.',
      highlights: [
        'Specialized in Machine Learning and AI',
        'Active member of Coding Club',
        'Participated in multiple hackathons',
        'Dean List for academic excellence'
      ],
      coursework: [
        'Data Structures and Algorithms',
        'Machine Learning',
        'Database Management Systems',
        'Computer Networks',
        'Operating Systems',
        'Software Engineering'
      ],
      status: 'current',
      achievements: [
        'Top 10% of the class',
        'Best Project Award 2023',
        'Technical Lead - Coding Club'
      ]
    },
    {
      id: 2,
      institution: 'D.A.V Public School',
      location: 'Bazpur, Uttarakhand',
      degree: 'Intermediate (Class XII)',
      duration: '2020 - 2021',
      grade: 'Percentage: 94%',
      description: 'Completed higher secondary education with Science stream (Physics, Chemistry, Mathematics). Achieved outstanding academic performance and demonstrated leadership qualities.',
      highlights: [
        'School Topper with 94%',
        'Head Boy (2019-20)',
        'Science stream with PCM',
        'Active in extracurricular activities'
      ],
      coursework: [
        'Physics',
        'Chemistry', 
        'Mathematics',
        'Computer Science',
        'English'
      ],
      status: 'completed',
      achievements: [
        'School Topper',
        'Head Boy Leadership Award',
        'Inter-school Science Quiz Winner'
      ]
    },
    {
      id: 3,
      institution: 'D.A.V Public School',
      location: 'Bazpur, Uttarakhand',
      degree: 'High School (Class X)',
      duration: '2018 - 2019',
      grade: 'Percentage: 91.6%',
      description: 'Completed secondary education with exceptional academic performance. Demonstrated consistent excellence in all subjects and active participation in school activities.',
      highlights: [
        'School Topper with 91.6%',
        'Excellence in Mathematics and Science',
        'Participated in various competitions',
        'Leadership roles in school activities'
      ],
      coursework: [
        'Mathematics',
        'Science',
        'Social Science',
        'English',
        'Hindi'
      ],
      status: 'completed',
      achievements: [
        'School Topper',
        'Mathematics Olympiad - District Level',
        'Student Council Member'
      ]
    }
  ];

  // JSX Return
  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education Journey
        </motion.h2>

        <div ref={ref} className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`timeline-item ${edu.status} ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">
                  {edu.status === 'current' ? <FiTrendingUp /> : <FiAward />}
                </div>
              </div>

              <div className="timeline-content">
                <motion.div 
                  className="education-card"
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                >
                  <div className="education-header">
                    <h3 className="institution-name">{edu.institution}</h3>
                    <div className="education-meta">
                      <span className="location">
                        <FiMapPin /> {edu.location}
                      </span>
                      <span className="duration">
                        <FiCalendar /> {edu.duration}
                      </span>
                    </div>
                  </div>

                  <div className="education-details">
                    <h4 className="degree">{edu.degree}</h4>
                    <div className="grade">{edu.grade}</div>
                    <p className="description">{edu.description}</p>

                    <div className="education-tabs">
                      <div className="tab-content">
                        <div className="highlights">
                          <h5><FiAward /> Key Highlights</h5>
                          <ul>
                            {edu.highlights.map((highlight, idx) => (
                              <li key={idx}>{highlight}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="coursework">
                          <h5><FiBook /> Coursework</h5>
                          <div className="course-tags">
                            {edu.coursework.map((course, idx) => (
                              <span key={idx} className="course-tag">{course}</span>
                            ))}
                          </div>
                        </div>

                        <div className="achievements">
                          <h5><FiTrendingUp /> Achievements</h5>
                          <ul>
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {edu.status === 'current' && (
                    <div className="current-badge">
                      <motion.span
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Currently Pursuing
                      </motion.span>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;