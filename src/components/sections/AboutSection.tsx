import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import myimg from '../../assets/my-img-1.jpeg';

const highlights = [
  { value: '1+ yr', label: 'Professional experience' },
  { value: '3', label: 'Environments I ship through: Integration, UAT, Prod' },
  { value: 'AI', label: 'Current focus: agentic AI & LLM engineering' },
];

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
          <motion.div variants={fadeIn} className="md:w-2/5">
            <img
              src={myimg}
              alt="Prajakta Patil"
              className="rounded-lg shadow-xl w-full h-auto max-h-[480px] object-cover"
            />
          </motion.div>

          <div className="md:w-3/5">
            <motion.h2 variants={fadeIn} className="section-title text-left mb-6">
              About <span className="text-primary-500">Me</span>
            </motion.h2>

            <motion.p variants={fadeIn} className="mb-4 text-gray-600 dark:text-gray-300">
              I'm a <strong>Software Engineer</strong> based in India with 1+ year of
              professional experience. I work mainly in <strong>Python</strong> on backend
              development, web crawling and data processing, with event-driven workflows on{' '}
              <strong>AWS</strong> and data in <strong>PostgreSQL</strong> and{' '}
              <strong>OpenSearch</strong>.
            </motion.p>

            <motion.p variants={fadeIn} className="mb-4 text-gray-600 dark:text-gray-300">
              I also work on full-stack web applications with <strong>Django</strong> and{' '}
              <strong>React</strong>. A lot of my work is problem solving: following an issue through
              logs, data and code across environments until I find its cause and ship a fix.
            </motion.p>

            <motion.p variants={fadeIn} className="mb-6 text-gray-600 dark:text-gray-300">
              I'm focused on growing as an <strong>AI engineer</strong>. I use Claude Code in daily
              development and build agentic AI experiments with LangChain and LangGraph, including
              data-quality agents and Text-to-SQL.
            </motion.p>

            <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                >
                  <span className="block text-3xl font-bold text-primary-500 mb-2">{item.value}</span>
                  <span className="block text-sm text-gray-500 dark:text-gray-400">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
