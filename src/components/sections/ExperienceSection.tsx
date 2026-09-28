import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cloudUsage, experiences } from '../../data';
import { Briefcase, Cloud } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Professional <span className="text-primary-500">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Where I've worked and what I do day to day.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="sm:pl-16 relative"
              >
                <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 rounded-full bg-primary-500 text-white items-center justify-center z-10">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className={`card ${experience.current ? 'border-l-4 border-primary-500' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">{experience.title}</h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        {experience.company} • {experience.location}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 text-sm rounded-full whitespace-nowrap ${
                        experience.current
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {experience.period}
                    </span>
                  </div>
                  {experience.summary && (
                    <p className="text-gray-600 dark:text-gray-300 mt-3">{experience.summary}</p>
                  )}
                  <ul className="mt-4 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-primary-500">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AWS in practice */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="flex items-center gap-3 mb-2 justify-center">
            <Cloud className="h-6 w-6 text-primary-500" />
            <h3 className="text-2xl font-bold">AWS in Practice</h3>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            The data platform I work on runs as event-driven workflows on AWS. Here's what each
            service does in that workflow and how I work with it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cloudUsage.map((item) => (
              <div
                key={item.service}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5"
              >
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  {item.service}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
