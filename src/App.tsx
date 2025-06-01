import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </ThemeProvider>
  );
}

export default App;