import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="hero">
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p className="hero-greeting" variants={itemVariants}>
            <span className="greeting-wave">👋</span> Olá, eu sou
          </motion.p>

          {/* Name */}
          <motion.h1 className="hero-name" variants={itemVariants}>
            {personalInfo.name}
            <span className="name-dot">.</span>
          </motion.h1>

          {/* Role with typing effect style */}
          <motion.h2 className="hero-role" variants={itemVariants}>
            <span className="role-bracket">&lt;</span>
            <span className="role-text">{personalInfo.role}</span>
            <span className="role-bracket">/&gt;</span>
            <span className="cursor">|</span>
          </motion.h2>

          {/* Description */}
          <motion.p className="hero-description" variants={itemVariants}>
            {personalInfo.description}
          </motion.p>

          {/* CTA Button */}
          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#projects" className="btn-primary">
              Ver Projetos
              <FiArrowDown />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="visual-container">
            <div className="visual-glow"></div>
            <div className="visual-ring ring-1"></div>
            <div className="visual-ring ring-2"></div>
            <div className="visual-ring ring-3"></div>
            <div className="profile-image-container">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="profile-image"
              />
            </div>
            {/* Floating Tech Icons */}
            <div className="floating-icons">
              <span className="floating-icon icon-react">⚛️</span>
              <span className="floating-icon icon-js">🟨</span>
              <span className="floating-icon icon-node">💚</span>
              <span className="floating-icon icon-code">📱</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a href="#about">
          <span className="scroll-text">Scroll</span>
          <span className="scroll-line"></span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
