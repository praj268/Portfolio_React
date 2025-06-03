import { Education, Experience, NavItem, Project, Skill, SocialLink } from '../types';
import pro1Image1 from '../assets/pro1.png';  // Adjust path relative to your data file location
import pro1Image2 from '../assets/pro16.png';
import pro1Image3 from '../assets/pro3.png';
import pro1Image4 from '../assets/pro-4.png';
import pro1Image5 from '../assets/pro-5.png';
// import {
//   Github,
//   Linkedin,
//   Twitter,
//   Mail,
//   Terminal,
//   Zap,
//   // ... other icons
// } from 'lucide-react';


export const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Institute of Management and Research College',
    location: 'Jalgaon, Maharashtra',
    period: '2022 - 2025',
    coursework: [
      'Java Fullstack development',
      'Data Structures',
      'Algorithms',
      'Web Development',
      'Database Management Systems (DBMS)',
      'Object-Oriented Programming (OOP) in Java',
      'Software Engineering'
    ],
    achievements: [
      '1st Prize in C++ Competition at IIT Fest',
      'Built academic projects using HTML, CSS, JavaScript, and Bootstrap',
      'Actively participated in technical workshops and coding contests'
    ]
  },
  {
    id: 2,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Institute of Management and Research College',
    location: 'Jalgaon, Maharashtra',
    period: '2025 - 2027 (Pursuing)',
    coursework: [
      'Advanced Web Technologies',
      'System Design & Architecture',
      'Cloud Computing',
      'Artificial Intelligence',
      'Cyber Security',
      'Mobile Application Development'
    ],
    achievements: [
      'Developed a Virtual Closet Organizer as a semester project',
      'Currently interning as a front-end developer',
      'Focused on mastering React, Node.js, and full-stack development'
    ]
  }
];


export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Java Full Stack Developer Intern',
    company: 'DD Digital Solution',
    location: 'Remote',
    period: 'July 2024 - Present',
    description: [
      'Built responsive websites using HTML, CSS, and Bootstrap',
      'Created real-time login/signup/forgot password systems',
      'Collaborated with designers and developers to deliver client-ready UIs',
      'Implemented responsive design principles ensuring cross-browser compatibility'
    ],
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Java', 'Spring Boot'],
  },
  {
    id: 2,
    title: 'Freelance Developer',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'Jan 2024 - Present',
    description: [
      'Developed a Sustainable Fashion Marketplace using MERN Stack and Firebase',
      'Created a Personal Portfolio Website using React and Tailwind CSS',
      'Built a Java Desktop Chatbot application using Java Swing',
      'Managed client relationships and delivered projects on schedule'
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Java Swing', 'Tailwind CSS'],
  }
];

export const skills: Skill[] = [
  {
    id: 1,
    name: 'Java',
    icon: 'java',
    category: 'backend',
    proficiency: 5,
  },
  {
    id: 2,
    name: 'Spring Boot',
    icon: 'spring',
    category: 'backend',
    proficiency: 4,
  },
  {
    id: 3,
    name: 'React',
    icon: 'react',
    category: 'frontend',
    proficiency: 4,
  },
  {
    id: 4,
    name: 'Node.js',
    icon: 'node',
    category: 'backend',
    proficiency: 3,
  },
  {
    id: 5,
    name: 'MongoDB',
    icon: 'mongodb',
    category: 'backend',
    proficiency: 4,
  },
  {
    id: 6,
    name: 'HTML/CSS',
    icon: 'html',
    category: 'frontend',
    proficiency: 5,
  },
  {
    id: 7,
    name: 'JavaScript',
    icon: 'javascript',
    category: 'frontend',
    proficiency: 4,
  },
  {
    id: 8,
    name: 'Git',
    icon: 'git',
    category: 'other',
    proficiency: 4,
  },
];



export const projects: Project[] = [
  {
    id: 1,
    title: 'Sustainable Fashion Marketplace',
    description:
      'A full-stack e-commerce platform for sustainable fashion. Features include user authentication, product catalog, shopping cart, and secure payment processing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Express'],
    image: pro1Image1,
    github: 'https://github.com/praj268/Sustainable-Fashion-Marketplace/blob/main/README.md',
    link: 'https://github.com/praj268/Sustainable-Fashion-Marketplace/blob/main/README.md',
  }, {
    id: 6,
    title: 'React Portfolio',
    description:
      'A personal portfolio project built with React to showcase projects, skills, and contact information. Features interactive UI and clean design.',
    tags: ['React', 'CSS', 'JavaScript'],
    image: pro1Image5,
    github: 'https://github.com/praj268/Portfolio_Using_React',
    link: 'https://strong-blancmange-85f1eb.netlify.app/',
  },
  {
    id: 5,
    title: 'Lighten',
    description:
      'A lightning-fast task management app that helps users organize their daily to-dos with real-time syncing and smart notifications.',
    tags: ['React', 'Redux', 'Firebase', 'TypeScript'],
    image: pro1Image3,
    github: 'https://github.com/praj268',
    link: 'https://praj268.github.io/Latest-Product/',
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description:
      'A modern portfolio website built with React and Tailwind CSS, featuring dark mode, animations, and responsive design.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: pro1Image4,
    github: 'https://github.com/praj268/Portfolio_React',
    link: 'https://prajaktaportfolio2003.netlify.app/',
  },
  {
    id: 3,
    title: 'Java Desktop Chatbot',
    description:
      'An intelligent chatbot application built with Java Swing, featuring natural language processing and a user-friendly interface.',
    tags: ['Java', 'Swing', 'NLP', 'Desktop App'],
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
    github: 'https://github.com/praj268',
  },
  {
    id: 4,
    title: 'Virtual Closet Organizer',
    description:
      'A web app to organize and plan your wardrobe virtually. Helps users manage outfits, schedule clothing use, and get fashion suggestions.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg',
    github: 'https://github.com/praj268',
    link: 'https://github.com/praj268',
  },

];


export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com/praj268',
    icon: 'github',
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/prajakta-patil-b3638222a/',
    icon: 'linkedin',
  },
  {
    id: 3,
    name: 'LeetCode',
    url: 'https://leetcode.com/u/patil_prajakta2682003/',
    icon: 'code', // or a custom icon if your icon library supports LeetCode
  },
  {
    id: 4,
    name: 'Email',
    url: 'mailto:patilprajakta2682003@gmail.com',
    icon: 'mail',
  },
];
