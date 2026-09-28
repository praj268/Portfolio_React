import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { caseStudies, projects } from '../../data';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
    {label}
  </span>
);

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="text-primary-500">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Selected projects from my professional work and personal development.
          </p>
        </motion.div>

        <div ref={ref}>
          <h3 className="text-xl font-bold mb-6">Featured Projects</h3>
          <div className="space-y-8 mb-16">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="card bg-gray-50 dark:bg-gray-900"
              >
                <span className="text-sm font-semibold uppercase tracking-wide text-primary-500">
                  {study.context}
                </span>
                <h4 className="text-2xl font-bold mt-1 mb-3">{study.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-5">{study.overview}</p>

                {study.flow && (
                  <div className="flex flex-wrap items-center gap-1 mb-6">
                    <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">Workflow stages:</span>
                    {study.flow.map((stage, i) => (
                      <React.Fragment key={stage}>
                        <span className="px-3 py-1 text-sm rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                          {stage}
                        </span>
                        {i < study.flow!.length - 1 && (
                          <ChevronRight className="h-4 w-4 text-gray-400" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-5">
                  <div>
                    <h5 className="font-semibold mb-2">My contribution</h5>
                    <ul className="space-y-2">
                      {study.contributions.map((item) => (
                        <li key={item} className="flex items-start text-sm">
                          <span className="mr-2 text-primary-500">â€¢</span>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">{study.problemsLabel ?? 'Problems I work on'}</h5>
                    <ul className="space-y-2">
                      {study.problems.map((item) => (
                        <li key={item} className="flex items-start text-sm">
                          <span className="mr-2 text-secondary-500">â€¢</span>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold mb-2">Engineering concepts</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {study.concepts.join(' Â· ')}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {study.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
                {study.github && (
                  <a
                    href={study.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-primary-500 transition-colors"
                    aria-label={`${study.title} source code`}
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                )}
              </motion.article>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-6">More Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="card h-full flex flex-col overflow-hidden">
                  <div className="relative h-40 w-full mb-4 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
                        aria-label={`${project.title} source code`}
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
