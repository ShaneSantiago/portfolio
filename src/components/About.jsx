import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiCoffee, FiHeart, FiZap } from 'react-icons/fi';
import { aboutMe, personalInfo, services } from '../data/portfolioData';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const serviceIcons = {
    code: <FiCode />,
    mobile: <FiZap />,
    design: <FiHeart />,
    server: <FiCoffee />,
  };

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Conheça-me</span>
          <h2 className="section-title">{aboutMe.title}</h2>
        </motion.div>

        <div className="about-content">
          {/* About Text */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-container">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="about-image"
                />
              </div>
              <div className="about-image-decoration"></div>
              <div className="about-experience-badge">
                <span className="badge-number">3+</span>
                <span className="badge-text">Anos de<br/>Experiência</span>
              </div>
            </div>
          </motion.div>

          {/* About Info */}
          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="about-paragraphs">
              {aboutMe.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="about-stats">
              {aboutMe.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div
          className="services-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card glass"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <div className="service-icon">
                {serviceIcons[service.icon]}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

