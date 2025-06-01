import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data';
// import { FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';
// import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFigma, SiGraphql } from 'react-icons/si';

const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredSkills = activeFilter === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeFilter);

  const categoryTypes = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            My <span className="text-primary-500">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These are the technologies and tools I've worked with throughout my career.
            I'm constantly learning and expanding my skillset.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categoryTypes.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all ${activeFilter === category.id
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
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
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              className="card hover:border-primary-300 dark:hover:border-primary-700 flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                <span className="text-2xl">{getSkillEmoji(skill.name)}</span>
              </div>
              <h3 className="text-lg font-medium mb-2">{skill.name}</h3>
              <div className="flex space-x-1 mt-auto">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`block w-2 h-2 rounded-full ${i < skill.proficiency
                      ? 'bg-primary-500'
                      : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                  ></span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
function getSkillEmoji(skillName: string): string {
  const normalized = skillName.trim().toLowerCase();

  if (normalized.includes('react')) return '⚛️';
  if (normalized.includes('typescript')) return '📝';
  if (normalized.includes('node')) return '🟢';
  if (normalized.includes('tailwind')) return '🌊';
  if (normalized.includes('next')) return '🚀';
  if (normalized.includes('graphql')) return '🕸️';
  if (normalized.includes('figma')) return '🎨';
  if (normalized.includes('git')) return '🔄';

  return '🔧';
}


export default SkillsSection;