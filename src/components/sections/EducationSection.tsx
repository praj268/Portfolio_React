import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../../data';
import { GraduationCap } from 'lucide-react';

const EducationSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            My <span className="text-primary-500">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and achievements that have shaped my technical foundation.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card mb-8"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {edu.institution} • {edu.location}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {edu.period}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-primary-500">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {edu.achievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-primary-500">Achievements</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-300">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;