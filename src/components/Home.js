import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const Home = () => {
  const navigate = useNavigate();

  const scrollToContact = useCallback((e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
      // Update URL without causing a page reload
      window.history.pushState(null, '', '#contact');
    } else {
      // Fallback to navigation if contact section not found
      navigate('/contact');
    }
  }, [navigate]);
  
  
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Joshua Mshana
          </span>
        </h1>
        <h2 className="text-2xl text-gray-300 mb-8">
          Software Engineer & Developer
        </h2>
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          <motion.a
            href="https://github.com/joshuamshana"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            className="text-2xl hover:text-blue-400 transition-all"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/joshua-mshana-3ba823334/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            className="text-2xl hover:text-blue-400 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://x.com/joshuamshana"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            className="text-2xl hover:text-blue-400 transition-all"
            aria-label="X (Twitter)"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://instagram.com/supamraba"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            className="text-2xl hover:text-pink-500 transition-all"
            aria-label="Instagram"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://wa.me/255764943055"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            className="text-2xl hover:text-green-500 transition-all"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            href="https://t.me/+255764943055"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -3 }}
            className="text-2xl hover:text-blue-400 transition-all"
            aria-label="Telegram"
          >
            <FaTelegram />
          </motion.a>
        </div>
        <motion.button
          onClick={scrollToContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all cursor-pointer"
          aria-label="Scroll to contact section"
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
