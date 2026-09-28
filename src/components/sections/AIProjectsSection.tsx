import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { aiProjects } from '../../data';
import { Github, Sparkles } from 'lucide-react';

const AIProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="ai" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            AI / LLM <span className="text-primary-500">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm actively developing my AI engineering skills. These are hands-on experiments and
            practices, not production systems.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="card flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                  <Sparkles className="h-5 w-5 text-primary-500" />
                </div>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <h4 className="text-sm font-semibold mb-2">What I'm exploring</h4>
              <ul className="space-y-1 mb-4 flex-grow">
                {project.focus.map((item) => (
                  <li key={item} className="flex items-start text-sm">
                    <span className="mr-2 text-primary-500">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors flex items-center gap-1 text-sm"
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjectsSection;
