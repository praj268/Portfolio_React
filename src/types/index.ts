export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  coursework: string[];
  achievements: string[];
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'other' | 'design';
  proficiency: number; // 1-5
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}