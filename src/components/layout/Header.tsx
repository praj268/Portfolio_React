import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { navItems } from '../../data';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const observeSections = () => {
      const sections = document.querySelectorAll('section[id]');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: '-50% 0px -50% 0px' }
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    };

    window.addEventListener('scroll', handleScroll);
    const cleanup = observeSections();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (cleanup) cleanup();
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <a 
          href="#home" 
          className="text-2xl font-bold text-primary-500 flex items-center gap-2"
        >
          <span>PRP</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`relative py-2 font-medium transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-primary-500'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                  }`}
                >
                  {activeSection === item.href.substring(1) && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-primary-500" />
            )}
          </button>

          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-white dark:bg-gray-900 md:hidden"
        >
          <div className="container-custom py-4 flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-primary-500">
              JD
            </a>
            <button
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>

          <nav className="container-custom mt-8">
            <ul className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className={`text-2xl font-medium ${
                      activeSection === item.href.substring(1)
                        ? 'text-primary-500'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;