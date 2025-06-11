import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll when menu is open
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navItems = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/projects', text: 'Projects' },
    { path: '/contact', text: 'Contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg py-0' 
          : 'bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-lg py-2'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
              onClick={closeMenu}
            >
              JM
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="transition-colors"
              >
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={closeMenu}
                >
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-blue-400 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ type: 'spring', damping: 25 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-3 text-gray-300 hover:bg-gray-800 hover:text-blue-400 rounded-md transition-colors"
                  onClick={closeMenu}
                >
                  <motion.span
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.text}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
