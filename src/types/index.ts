export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  context: string;
  overview: string;
  flow?: string[];
  contributions: string[];
  problemsLabel?: string;
  problems: string[];
  concepts: string[];
  tags: string[];
  github?: string;
}

export interface AIProject {
  id: number;
  title: string;
  status: string;
  description: string;
  focus: string[];
  tags: string[];
  github?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  summary?: string;
  description: string[];
  tags: string[];
  current?: boolean;
}

export interface CloudUsage {
  service: string;
  usage: string;
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

export interface SkillItem {
  name: string;
  professional?: boolean; // used in day-to-day professional work
}

export interface SkillGroup {
  id: number;
  title: string;
  icon: string;
  items: SkillItem[];
}

export interface LearningItem {
  topic: string;
  detail: string;
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
