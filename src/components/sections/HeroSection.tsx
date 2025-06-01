import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import resumeFile from '../../assets/resume.pdf'; // Adjust path based on location
import myimg from '../../assets/my-img-2.jpeg';


const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block mb-4 text-primary-500 font-semibold">Hello, I'm</span>
            <h1 className="mb-6">
              <span className="gradient-text">Prajakta</span>
              <span className="block mt-2 gradient-text">Java Full Stack Developer</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              I create exceptional digital experiences with clean code and user-centered design.
              Specializing in Java, Spring Boot, and full-stack web development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn btn-primary flex items-center gap-2"
              >
                Contact Me
              </a>
              <a
                href={resumeFile}
                className="btn btn-outline flex items-center gap-2"
                download
              >
                Download CV
                <Download className="h-4 w-4" />
              </a>

            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 flex items-center justify-center overflow-hidden">
                <img
                  src={myimg}
                  alt="Prajakta Patil"
                  className="w-60 h-60 md:w-76 md:h-76 rounded-full object-cover"
                />

              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-primary-500 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;