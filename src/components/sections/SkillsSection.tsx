import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { currentlyLearning, skillGroups } from '../../data';
import { BookOpen, Cloud, Code, Database, Layout, LucideIcon, Sparkles, Wrench } from 'lucide-react';

const groupIcons: Record<string, LucideIcon> = {
  code: Code,
  database: Database,
  cloud: Cloud,
  layout: Layout,
  sparkles: Sparkles,
  wrench: Wrench,
};

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title">
            Technical <span className="text-primary-500">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I've used, grouped by area. Highlighted skills are ones I use in my
            professional work; the rest come from personal, academic or internship projects.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary-500"></span> Professional use
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border border-gray-400"></span> Personal / academic
            </span>
          </div>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[group.icon] ?? Code;
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card bg-gray-50 dark:bg-gray-900"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-lg">
                    <Icon className="h-5 w-5 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-bold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className={`px-3 py-1 text-sm rounded-full ${
                        item.professional
                          ? 'bg-primary-500 text-white'
                          : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently learning */}
        <div id="learning" className="mt-16 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2 justify-center">
            <BookOpen className="h-6 w-6 text-primary-500" />
            <h3 className="text-2xl font-bold">Currently Learning</h3>
          </div>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Areas I'm working on now. I'm still building depth in these, not claiming expertise.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentlyLearning.map((item) => (
              <div
                key={item.topic}
                className="rounded-xl border border-dashed border-primary-300 dark:border-primary-700 p-4"
              >
                <h4 className="font-semibold mb-1">{item.topic}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
