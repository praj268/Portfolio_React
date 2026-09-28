import {
  AIProject,
  CaseStudy,
  CloudUsage,
  Education,
  Experience,
  LearningItem,
  NavItem,
  Project,
  SkillGroup,
  SocialLink,
} from '../types';
import fashionImage from '../assets/pro1.png';
import lightenImage from '../assets/pro3.png';
import portfolioImage from '../assets/pro-4.png';

// Update this if you prefer not to name your employer publicly.
export const CURRENT_COMPANY = 'Arrk Group';

export const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI / LLM', href: '#ai' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

/* ------------------------------------------------------------------ */
/* Professional experience                                             */
/* ------------------------------------------------------------------ */

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Software Engineer',
    company: CURRENT_COMPANY,
    location: 'India',
    period: 'Oct 2025 – Present',
    current: true,
    summary:
      'Backend, data-processing, cloud and full-stack development on data-driven products and web applications.',
    description: [
      'Develop and maintain Python web crawlers and data-extraction workflows that turn website data into structured records.',
      'Debug multi-stage data-processing pipelines when source websites change or data arrives incomplete.',
      'Work with event-driven AWS workflows (Lambda, Step Functions, AWS Batch, ECS/Fargate, EventBridge, S3) and trace failures using CloudWatch logs and the AWS CLI.',
      'Investigate integration, UAT and production issues using logs, SQL on PostgreSQL and OpenSearch.',
      'Identify and fix data validation and data-quality issues.',
      'Work across a Django + React web application on authentication, session handling, SSO, search/filter features and API integration.',
      'Ship changes through a Git/GitLab-based workflow with Docker, promoted across integration, UAT and production environments.',
      'Use Claude Code and LLM-assisted development for debugging, code exploration and day-to-day engineering tasks.',
    ],
    tags: ['Python', 'PostgreSQL', 'OpenSearch', 'AWS', 'Docker', 'GitLab', 'Django', 'React'],
  },
  {
    id: 2,
    title: 'Java Full Stack Developer Intern',
    company: 'DD Digital Solution',
    location: 'Remote',
    period: 'Jul 2024 – 2025',
    description: [
      'Built responsive websites using HTML, CSS and Bootstrap.',
      'Implemented login, sign-up and forgot-password flows.',
      'Collaborated with designers and developers to deliver client-ready UIs with cross-browser support.',
    ],
    tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Java', 'Spring Boot'],
  },
];

/** How AWS services fit into the data-processing workflows I work on. */
export const cloudUsage: CloudUsage[] = [
  {
    service: 'Step Functions',
    usage: 'Orchestrates multi-step processing workflows; I follow executions step by step to find where and why a run failed.',
  },
  {
    service: 'Lambda',
    usage: 'Runs individual processing steps; I debug function behaviour and inputs/outputs from its logs.',
  },
  {
    service: 'AWS Batch & ECS/Fargate',
    usage: 'Run containerised, longer-running jobs such as crawling and extraction; I investigate job failures and container logs.',
  },
  {
    service: 'EventBridge',
    usage: 'Triggers and schedules workflows from events, which is what makes the pipeline event-driven.',
  },
  {
    service: 'S3',
    usage: 'Stores collected documents and data between processing stages; I inspect objects to confirm what each stage produced.',
  },
  {
    service: 'CloudWatch, IAM & AWS CLI',
    usage: 'CloudWatch for log analysis, IAM for service permissions, and the AWS CLI for inspecting resources while troubleshooting.',
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Harvest: Planning Data Collection Platform',
    context: 'Professional · Data processing',
    overview:
      'A data platform that collects planning application data from hundreds of council websites and processes it into structured, searchable records. Each council site behaves differently, so collection is driven by council-specific crawler configurations.',
    flow: ['Listing', 'Detail', 'Publication', 'Documents', 'Extraction'],
    contributions: [
      'Developed and updated council-specific crawlers and configurations in Python.',
      'Debugged each workflow stage (listing, detail, publication, documents, extraction) to find where records were lost or went wrong.',
      'Delivered crawler fixes and new integrations through integration → UAT → production.',
      'Traced failures through AWS workflows (Step Functions, Lambda, Batch, ECS/Fargate) using CloudWatch logs.',
      'Validated output data with SQL on PostgreSQL and checks in OpenSearch.',
    ],
    problems: [
      'Crawlers breaking when a council website changes structure or behaves differently from others.',
      'Records missing details or documents at a specific workflow stage.',
      'Incorrect or incomplete extracted fields (data-quality issues).',
      'Issues that appear only in UAT or production and need log-driven investigation.',
    ],
    concepts: [
      'Web crawling at scale',
      'Configuration-driven design',
      'Event-driven architecture',
      'Workflow orchestration',
      'Distributed-system debugging',
      'Data validation',
      'Multi-environment releases',
    ],
    tags: [
      'Python',
      'PostgreSQL',
      'SQL',
      'OpenSearch',
      'Lambda',
      'Step Functions',
      'S3',
      'AWS Batch',
      'ECS/Fargate',
      'EventBridge',
      'Docker',
      'GitLab',
    ],
  },
  {
    id: 2,
    title: 'Sustainable Fashion Marketplace',
    context: 'Personal · Full stack',
    overview:
      'A full-stack e-commerce platform for sustainable fashion, built with the MERN stack and Firebase. Users can sign up and log in, browse a product catalog and manage a shopping cart.',
    contributions: [
      'Built the React frontend: product catalog, product views and shopping cart.',
      'Developed the backend with Node.js and Express, storing data in MongoDB.',
      'Implemented user authentication, with Firebase as part of the stack.',
    ],
    problemsLabel: 'Challenges',
    problems: [
      'Designing the data model for users, products and carts.',
      'Connecting the React frontend to the backend APIs.',
      'Handling authenticated vs. guest user flows.',
    ],
    concepts: [
      'Full-stack architecture',
      'REST API design',
      'Authentication',
      'NoSQL data modelling',
      'Component-based UI',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'JavaScript'],
    github: 'https://github.com/praj268/Sustainable-Fashion-Marketplace',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sustainable Fashion Marketplace',
    description:
      'A full-stack e-commerce platform for sustainable fashion with user authentication, a product catalog and a shopping cart.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    image: fashionImage,
    github: 'https://github.com/praj268/Sustainable-Fashion-Marketplace',
  },
  {
    id: 2,
    title: 'Developer Portfolio',
    description:
      'This site: a responsive, typed React portfolio with dark mode, animations and an EmailJS-powered contact form, deployed on Netlify.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Netlify'],
    image: portfolioImage,
    github: 'https://github.com/praj268/Portfolio_React',
    link: 'https://prajaktaportfolio2003.netlify.app/',
  },
  {
    id: 3,
    title: 'Lighten',
    description: 'A React front-end project published on GitHub Pages.',
    tags: ['React', 'JavaScript'],
    image: lightenImage,
    github: 'https://github.com/praj268',
    link: 'https://praj268.github.io/Latest-Product/',
  },
];

/* ------------------------------------------------------------------ */
/* AI / LLM                                                            */
/* ------------------------------------------------------------------ */

export const aiProjects: AIProject[] = [
  {
    id: 1,
    title: 'Data Quality Agent',
    status: 'Experiment',
    description:
      'An experimental LLM agent for data-quality checks, motivated by the data-validation problems I see at work. Exploring how an agent can review records, flag likely issues and hand uncertain cases to a human.',
    focus: [
      'Agent workflows with LangChain / LangGraph',
      'Human-in-the-loop review steps',
      'Comparing hosted (OpenRouter) and local (Ollama) models',
    ],
    tags: ['Python', 'LangChain', 'LangGraph', 'OpenRouter', 'Ollama', 'GPT-OSS'],
  },
  {
    id: 2,
    title: 'Text-to-SQL',
    status: 'Experiment',
    description:
      'Experimenting with turning natural-language questions into SQL queries, building on my day-to-day SQL work.',
    focus: [
      'Prompt engineering with database schema context',
      'Reviewing generated SQL for correctness before running it',
      'LLM workflow design with LangChain',
    ],
    tags: ['Python', 'SQL', 'LangChain', 'Prompt Engineering'],
  },
  {
    id: 3,
    title: 'AI-Assisted Development',
    status: 'Daily practice',
    description:
      'Using Claude Code and LLM-assisted workflows in real engineering work: exploring unfamiliar code, debugging and automating repetitive development tasks.',
    focus: [
      'AI-assisted debugging and code exploration',
      'Prompt engineering for development tasks',
      'AI workflow automation',
    ],
    tags: ['Claude Code', 'Prompt Engineering', 'LLM-assisted Development'],
  },
];

/* ------------------------------------------------------------------ */
/* Skills & learning                                                   */
/* ------------------------------------------------------------------ */

export const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: 'Languages',
    icon: 'code',
    items: [
      { name: 'Python', professional: true },
      { name: 'SQL', professional: true },
      { name: 'JavaScript', professional: true },
      { name: 'TypeScript' },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'HTML / CSS' },
    ],
  },
  {
    id: 2,
    title: 'Backend & Data',
    icon: 'database',
    items: [
      { name: 'Web crawling / scraping', professional: true },
      { name: 'Data extraction', professional: true },
      { name: 'PostgreSQL', professional: true },
      { name: 'OpenSearch', professional: true },
      { name: 'Django', professional: true },
      { name: 'REST APIs', professional: true },
      { name: 'Node.js / Express' },
      { name: 'MongoDB' },
      { name: 'Spring Boot' },
    ],
  },
  {
    id: 3,
    title: 'Cloud & DevOps',
    icon: 'cloud',
    items: [
      { name: 'AWS Lambda', professional: true },
      { name: 'Step Functions', professional: true },
      { name: 'S3', professional: true },
      { name: 'AWS Batch', professional: true },
      { name: 'ECS / Fargate', professional: true },
      { name: 'EventBridge', professional: true },
      { name: 'IAM', professional: true },
      { name: 'CloudWatch', professional: true },
      { name: 'AWS CLI', professional: true },
      { name: 'Docker', professional: true },
      { name: 'Git / GitLab', professional: true },
    ],
  },
  {
    id: 4,
    title: 'Frontend',
    icon: 'layout',
    items: [
      { name: 'React', professional: true },
      { name: 'Context API', professional: true },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
    ],
  },
  {
    id: 5,
    title: 'AI & LLM',
    icon: 'sparkles',
    items: [
      { name: 'Claude Code', professional: true },
      { name: 'LLM-assisted development', professional: true },
      { name: 'Prompt engineering' },
      { name: 'LangChain' },
      { name: 'LangGraph' },
      { name: 'OpenRouter' },
      { name: 'Ollama' },
    ],
  },
  {
    id: 6,
    title: 'Engineering Practice',
    icon: 'wrench',
    items: [
      { name: 'Debugging distributed workflows', professional: true },
      { name: 'Log analysis & troubleshooting', professional: true },
      { name: 'Production / UAT issue investigation', professional: true },
      { name: 'Data validation & data quality', professional: true },
      { name: 'Authentication & SSO', professional: true },
      { name: 'Multi-environment releases', professional: true },
    ],
  },
];

export const currentlyLearning: LearningItem[] = [
  { topic: 'Advanced Python', detail: 'Deeper language features and writing cleaner, more maintainable code.' },
  { topic: 'Python design patterns', detail: 'Applying common patterns to structure real backend code.' },
  { topic: 'PostgreSQL', detail: 'Going beyond everyday queries: query design and performance.' },
  { topic: 'AWS Developer Associate topics', detail: 'Studying the exam topics to strengthen my AWS fundamentals.' },
  { topic: 'AI / LLM engineering', detail: 'Agents, LangChain / LangGraph and human-in-the-loop design.' },
  { topic: 'Cloud & distributed data systems', detail: 'How large data-processing pipelines are designed and operated.' },
  { topic: 'System design fundamentals', detail: 'Scalability, reliability and trade-offs in system architecture.' },
];

/* ------------------------------------------------------------------ */
/* Education & contact                                                 */
/* ------------------------------------------------------------------ */

export const education: Education[] = [
  {
    id: 2,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Institute of Management and Research College',
    location: 'Jalgaon, Maharashtra',
    period: '2025 – 2027 (Pursuing)',
    coursework: [
      'Advanced Web Technologies',
      'System Design & Architecture',
      'Cloud Computing',
      'Artificial Intelligence',
      'Cyber Security',
      'Mobile Application Development',
    ],
    achievements: ['Developed a Virtual Closet Organizer web app as a semester project'],
  },
  {
    id: 1,
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Institute of Management and Research College',
    location: 'Jalgaon, Maharashtra',
    period: '2022 – 2025',
    coursework: [
      'Data Structures',
      'Algorithms',
      'Database Management Systems (DBMS)',
      'Object-Oriented Programming in Java',
      'Web Development',
      'Software Engineering',
    ],
    achievements: ['1st Prize in C++ Competition at IIT Fest'],
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
    icon: 'code',
  },
  {
    id: 4,
    name: 'Email',
    url: 'mailto:patilprajakta2682003@gmail.com',
    icon: 'mail',
  },
];
