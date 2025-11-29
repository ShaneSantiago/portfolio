import { motion } from 'framer-motion';
import { FiHeart, FiArrowUp } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">{personalInfo.name.split(' ')[0]}</span>
            <span className="logo-bracket">/&gt;</span>
          </div>

          <div className="footer-copyright">
            <p>
              © {currentYear} {personalInfo.name}. Feito com{' '}
              <FiHeart className="heart-icon" /> e muito café.
            </p>
          </div>
        </div>

        <motion.button
          className="scroll-top-btn"
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Voltar ao topo"
        >
          <FiArrowUp />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
