import React from 'react';
import { socialLinks } from '../../data';
import SocialIcon from '../ui/SocialIcon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-primary-500 mb-2">
              Prajakta Rajendra Patil
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-xs">
              Java Full-Stack Developer with a passion for creating clean, scalable web apps using modern technologies.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors shadow-sm hover:shadow-md"
                  aria-label={link.name}
                >
                  <SocialIcon iconName={link.icon} />
                </a>
              ))}
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {currentYear} Prajakta Rajendra Patil. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
