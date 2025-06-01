import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../../data';
import { Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Work <span className="text-primary-500">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey, showcasing roles and responsibilities that have shaped my career.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0
                    ? 'md:flex-row'
                    : 'md:flex-row-reverse'
                } items-center`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0 md:px-12">
                  <div className="card h-full">
                    <div className="flex items-start md:items-center flex-col md:flex-row md:gap-4">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mb-4 md:mb-0">
                        <Briefcase className="h-6 w-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                          {experience.company} • {experience.location}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                          {experience.period}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-primary-500">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative md:w-0 flex items-center justify-center">
                  <div
                    className={`timeline-circle w-8 h-8 rounded-full bg-primary-500 z-10 flex items-center justify-center text-white font-bold ${
                      index % 2 === 0
                        ? 'md:-translate-x-1/2'
                        : 'md:translate-x-1/2'
                    }`}
                  >
                    {experiences.length - index}
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;