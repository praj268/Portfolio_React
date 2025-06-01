import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../data';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const uniqueTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).slice(0, 5); // Limit to 5 most common tags

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            My <span className="text-primary-500">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, projects, and applications I've built.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${activeFilter === 'all'
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            All Projects
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${activeFilter === tag
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              className="group"
            >
              <div className="card h-full flex flex-col overflow-hidden">
                <div className="relative h-48 md:h-60 w-full mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
                      aria-label="GitHub Repository"
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
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;