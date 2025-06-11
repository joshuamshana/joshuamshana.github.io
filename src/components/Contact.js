import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaWhatsapp, 
  FaPhone, 
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaTelegram
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi Joshua, I'm ${formData.name}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/255764943055?text=${encodedMessage}`, '_blank');
    setFormData({ name: '', message: '' });
  };

  const handleWhatsAppClick = () => {
    const message = "Hi Joshua, I'd like to get in touch with you.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/255764943055?text=${encodedMessage}`, '_blank');
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/joshuamshana',
      icon: <FaGithub className="text-2xl" />,
      color: 'hover:text-gray-300'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/joshua-mshana-3ba823334/',
      icon: <FaLinkedin className="text-2xl" />,
      color: 'hover:text-blue-500'
    },
    { 
      name: 'X (Twitter)', 
      url: 'https://x.com/joshuamshana',
      icon: <FaTwitter className="text-2xl" />,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/supamraba',
      icon: <FaInstagram className="text-2xl" />,
      color: 'hover:text-pink-500'
    },
    { 
      name: 'WhatsApp', 
      url: 'https://wa.me/255764943055',
      icon: <FaWhatsapp className="text-2xl" />,
      color: 'hover:text-green-500'
    },
    { 
      name: 'Telegram', 
      url: 'https://t.me/+255764943055',
      icon: <FaTelegram className="text-2xl" />,
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 h-48 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                  placeholder="Hi Joshua, I'd like to discuss..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="text-xl" />
                Send via WhatsApp
              </motion.button>
            </form>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact Me</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium mb-4">Direct Contact</h4>
                <div className="space-y-4">
                  <motion.a
                    href="https://wa.me/255764943055"
                    onClick={handleWhatsAppClick}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors"
                  >
                    <FaWhatsapp className="text-2xl text-green-500" />
                    <span>+255 764 943 055 (WhatsApp)</span>
                  </motion.a>
                  <motion.a
                    href="tel:+255764943055"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-lg hover:text-blue-400 transition-colors"
                  >
                    <FaPhone className="text-2xl text-blue-500" />
                    <span>+255 764 943 055 (Call)</span>
                  </motion.a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium mb-4">Social Media</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className={`flex items-center gap-2 p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all ${social.color}`}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
