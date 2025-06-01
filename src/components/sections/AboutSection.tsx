import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
          className="flex flex-col md:flex-row md:items-center gap-12"
        >
          <motion.div variants={fadeIn} className="md:w-1/2">
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
              alt="Prajakta Patil"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />

          </motion.div>

          <div className="md:w-1/2">
            <motion.h2 variants={fadeIn} className="section-title text-left mb-6">
              About <span className="text-primary-500">Me</span>
            </motion.h2>

            <motion.p variants={fadeIn} className="mb-4 text-gray-600 dark:text-gray-300">
              I’m a dedicated <strong>Java Full Stack Developer</strong> with a Bachelor’s degree in Computer Applications (BCA) and a strong interest in building end-to-end web applications. I enjoy working on both frontend and backend technologies to deliver complete, efficient solutions.
            </motion.p>

            <motion.p variants={fadeIn} className="mb-4 text-gray-600 dark:text-gray-300">
              My tech stack includes <strong>Java, Spring Boot, React, SQL, HTML, CSS, JavaScript, and C++</strong>. I have developed responsive websites, RESTful APIs, and dynamic interfaces that deliver real business value. I also have hands-on experience with tools like Bootstrap, GSAP, and modern libraries to create interactive user experiences.
            </motion.p>

            <motion.p variants={fadeIn} className="mb-6 text-gray-600 dark:text-gray-300">
              I thrive on solving problems, continuously learning, and working on real-time projects. I’m currently focused on refining my backend skills and React projects while also preparing for industry-level placements.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex-1 min-w-[150px]">
                <span className="block text-4xl font-bold text-primary-500 mb-2">10+</span>
                <span className="block text-gray-500 dark:text-gray-400">Projects Completed</span>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex-1 min-w-[150px]">
                <span className="block text-4xl font-bold text-primary-500 mb-2">1st</span>
                <span className="block text-gray-500 dark:text-gray-400">IIT C++ Competition</span>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex-1 min-w-[150px]">
                <span className="block text-xl font-bold text-primary-500 mb-2">Spring Boot + React</span>
                <span className="block text-gray-500 dark:text-gray-400">Full Stack Focus</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
