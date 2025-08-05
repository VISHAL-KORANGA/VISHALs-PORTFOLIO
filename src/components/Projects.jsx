import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiExternalLink, 
  FiGithub, 
  FiX, 
  FiCalendar,
  FiCode,
  FiTrendingUp,
  FiPlay,
  FiStar
} from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Job Role Prediction System',
      shortDescription: 'AI-powered resume classification using NLP and Machine Learning',
      fullDescription: 'Built a comprehensive resume classification system using Natural Language Processing and K-Nearest Neighbors (KNN) algorithm. The system extracts key textual features from resumes using advanced NLP techniques for effective job role mapping. Achieved an impressive accuracy of 98.44% on a dataset of over 1000 resumes.',
      technologies: ['Python', 'NLP', 'KNN', 'Flask', 'Streamlit', 'scikit-learn'],
      highlights: [
        '98.44% model accuracy',
        '1000+ resume dataset',
        'RESTful API integration',
        'Real-time prediction capability',
        'Streamlit web deployment'
      ],
      date: '2024',
      category: 'Machine Learning',
      status: 'Completed',
      github: 'https://github.com/vishalkoranga/job-role-prediction',
      live: 'https://job-role-predictor.streamlit.app',
      image: '/projects/job-prediction.jpg',
      featured: true,
      metrics: {
        accuracy: '98.44%',
        dataset: '1000+',
        users: '150+'
      }
    },
    {
      id: 2,
      title: 'CPU Scheduling Simulator',
      shortDescription: 'Interactive visualization of CPU scheduling algorithms',
      fullDescription: 'Developed an interactive web application that provides real-time representation of CPU scheduling algorithms in action. Users can input process details including arrival times and burst times to observe the impact on different scheduling algorithms. The system compares multiple algorithms and suggests the best one for given input.',
      technologies: ['React', 'JavaScript', 'Chart.js', 'CSS3', 'HTML5'],
      highlights: [
        'Real-time algorithm visualization',
        'Interactive user interface',
        'Multiple scheduling algorithms',
        'Performance comparison',
        'Educational tool for students'
      ],
      date: 'June 2025',
      category: 'Web Development',
      status: 'In Progress',
      github: 'https://github.com/vishalkoranga/cpu-scheduler',
      live: 'https://cpu-scheduler-demo.netlify.app',
      image: '/projects/cpu-scheduler.jpg',
      featured: true,
      metrics: {
        algorithms: '5',
        users: '200+',
        rating: '4.8/5'
      }
    },
    {
      id: 3,
      title: 'Stock Market Price Prediction',
      shortDescription: 'Deep learning dashboard for stock price forecasting',
      fullDescription: 'Created an interactive web dashboard using Streamlit to predict stock prices using deep learning techniques. Implemented a Keras-based LSTM model trained on historical stock data to forecast future trends. The system fetches real-time stock data and provides comprehensive analysis with dynamic visualizations.',
      technologies: ['Python', 'TensorFlow', 'LSTM', 'Streamlit', 'Plotly', 'yfinance'],
      highlights: [
        'LSTM deep learning model',
        'Real-time stock data integration',
        'Interactive Plotly visualizations',
        'Multiple stock support',
        'Moving averages analysis',
        'CSV data export functionality'
      ],
      date: 'May 2024',
      category: 'Data Science',
      status: 'Completed',
      github: 'https://github.com/vishalkoranga/stock-prediction',
      live: 'https://stock-predictor-ml.streamlit.app',
      image: '/projects/stock-prediction.jpg',
      featured: false,
      metrics: {
        accuracy: '87%',
        stocks: '50+',
        predictions: '1000+'
      }
    }
  ];

  const categories = ['all', 'Machine Learning', 'Web Development', 'Data Science'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <FiX />
        </button>

        <div className="modal-header">
          <h3>{project.title}</h3>
          <div className="project-meta">
            <span className={`project-status ${project.status.toLowerCase()}`}>
              {project.status}
            </span>
            <span className="project-date">
              <FiCalendar /> {project.date}
            </span>
          </div>
        </div>

        <div className="modal-body">
          <p className="project-full-description">{project.fullDescription}</p>

          <div className="project-metrics">
            <h4>Key Metrics</h4>
            <div className="metrics-grid">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="metric-item">
                  <span className="metric-value">{value}</span>
                  <span className="metric-label">{key}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="project-highlights">
            <h4>Key Highlights</h4>
            <ul>
              {project.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="project-technologies">
            <h4>Technologies Used</h4>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FiGithub /> View Code
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FiPlay /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  // JSX Return
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        {/* Filter Tabs */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </motion.div>

        <div ref={ref} className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <FiStar /> Featured
                  </div>
                )}

                <div className="project-image">
                  <div className="project-placeholder">
                    <FiCode size={48} />
                  </div>
                  <div className="project-overlay">
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className={`project-category ${project.category.toLowerCase().replace(' ', '-')}`}>
                      {project.category}
                    </span>
                  </div>

                  <p className="project-description">{project.shortDescription}</p>

                  <div className="project-tech">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-more">+{project.technologies.length - 4} more</span>
                    )}
                  </div>

                  <div className="project-footer">
                    <span className="project-date">
                      <FiCalendar /> {project.date}
                    </span>
                    <div className="project-actions">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()}
                        aria-label="View GitHub repository"
                      >
                        <FiGithub />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()}
                        aria-label="View live demo"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;