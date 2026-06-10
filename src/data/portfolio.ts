export const siteConfig = {
  name: "Stephen Seng",
  title: "Senior Frontend Developer",
  location: "Malaysia",
  email: "stephenseng@outlook.com",
  linkedin: "https://www.linkedin.com/in/stephen-seng/",
  cvUrl: "/Stephen-Seng-CV.pdf",
  portraitSrc: "/images/stephen-seng.jpg",
  logoSrc: "/images/ss-logo.png",
  eyebrow: "Stephen Seng · Senior Frontend Developer · Malaysia",
  headline:
    "Senior Frontend Developer building responsive, production-ready web interfaces.",
  subheadline:
    "I have 15+ years of frontend experience delivering corporate websites, eCommerce interfaces, annual report websites, and responsive public-facing web experiences using Vue, Nuxt, HTML, SCSS, Bootstrap, JavaScript, and modern frontend practices.",
  trustLine:
    "Open to frontend developer roles focused on Vue / Nuxt, React / Next.js, responsive UI, and production frontend delivery.",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export const aboutQuickFacts = [
  "15+ years frontend experience",
  "Vue / Nuxt / Responsive UI",
  "Corporate & public-facing websites",
];

export type SkillGroup = {
  title: string;
  skills: string[];
  featured?: string[];
  muted?: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    skills: ["HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript"],
    featured: [],
    muted: [],
  },
  {
    title: "Frameworks",
    skills: ["Vue 3", "Nuxt", "React", "Next.js"],
    featured: ["Vue 3", "Nuxt"],
    muted: [],
  },
  {
    title: "UI & Responsive",
    skills: [
      "Tailwind CSS",
      "Bootstrap 5.3",
      "Responsive Web Design",
      "Figma-to-code",
    ],
    featured: [],
    muted: [],
  },
  {
    title: "CMS & Ecommerce",
    skills: ["WordPress", "CMS websites", "Adobe Commerce / Magento"],
    featured: [],
    muted: [],
  },
  {
    title: "Workflow",
    skills: ["Git", "Cross-browser testing", "Component-based UI"],
    featured: [],
    muted: [],
  },
  {
    title: "AI-Assisted Workflow",
    skills: [
      "Cursor",
      "ChatGPT",
      "Codex",
      "Claude Code",
      "Agentic Coding",
      "AI-Assisted Architecture",
    ],
    featured: ["Agentic Coding", "AI-Assisted Architecture"],
    muted: [],
  },
];

export type AgenticWorkflowStep = {
  title: string;
  description: string;
};

export const agenticWorkflowIntro = {
  eyebrow: "MODERN FRONTEND PRACTICE",
  heading: "Agentic Frontend Workflow",
  intro:
    "I use structured AI-assisted workflows to turn complex requirements into focused frontend tasks, accelerate implementation, and strengthen code review, testing, and delivery.",
};

export const agenticWorkflowSupportingLine =
  "AI accelerates execution. I remain responsible for architecture, code quality, testing, and final delivery.";

export type AgenticCaseStudy = {
  eyebrow: string;
  title: string;
  status: string;
  description: string;
  bullets: string[];
  tags: string[];
  image: string;
};

export const foliaCaseStudy: AgenticCaseStudy = {
  eyebrow: "APPLIED IN PRACTICE",
  title: "Folia AI",
  status: "In Development",
  description:
    "A trust-first document intelligence platform where I apply structured AI-assisted engineering across frontend architecture, implementation, review, and runtime validation.",
  bullets: [
    "Built a responsive Smart Inbox for reviewing AI-drafted document information before confirmation.",
    "Used Vue, Nuxt, TypeScript, and Zod to maintain clear contracts across frontend and application boundaries.",
    "Applied source-backed review, human confirmation, and evidence-based QA to prevent uncertain information from becoming trusted facts.",
  ],
  tags: [
    "Vue 3",
    "Nuxt",
    "TypeScript",
    "Zod",
    "Supabase",
    "AI-Assisted Engineering",
  ],
  image: "/projects/folia-ai-img.png",
};

export const agenticWorkflowSteps: AgenticWorkflowStep[] = [
  {
    title: "Understand",
    description:
      "Clarify the user need, design intent, scope, and delivery constraints.",
  },
  {
    title: "Structure",
    description:
      "Define components, states, interfaces, and acceptance criteria.",
  },
  {
    title: "Build",
    description:
      "Use focused AI-assisted coding for bounded implementation tasks.",
  },
  {
    title: "Verify",
    description:
      "Review the code and test responsiveness, types, builds, and browser behaviour.",
  },
  {
    title: "Deliver",
    description:
      "Ship maintainable frontend work that is ready for real users.",
  },
];

export type AgenticPrinciple = {
  title: string;
  description: string;
};

export const agenticPrinciples: AgenticPrinciple[] = [
  {
    title: "Frontend Judgment",
    description:
      "Production experience guides what to reuse, simplify, refactor, or reject.",
  },
  {
    title: "Human Review",
    description:
      "Generated code is inspected for correctness, accessibility, maintainability, and fit.",
  },
  {
    title: "Runtime Evidence",
    description:
      "The browser, build, type checks, and user flow decide whether the work is complete.",
  },
];

export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  skills: string[];
  image?: string;
  url?: string;
  featured?: boolean;
  status?: string;
  bullets?: string[];
};

export const recentProjects: PortfolioProject[] = [
  {
    title: "THP Foundation",
    url: "https://thpfoundation.com",
    category: "Vue 3 / Nuxt Frontend · Figma to Code",
    description:
      "Converted the THP Foundation website from Figma design into a responsive Vue 3 / Nuxt frontend. Implemented clean page sections, reusable UI components, responsive desktop and mobile layouts, and consistent styling based on the provided design. The project focused on accurate Figma-to-code implementation, smooth user experience, and a polished professional website that is easy to maintain and extend.",
    skills: ["Vue.js", "Nuxt.js", "Tailwind CSS", "JSON"],
    image: "/projects/thp-foundation.png",
    featured: true,
  },
  {
    title: "Education Malaysia Global Services — Study in Malaysia",
    category: "Public-Facing Education Website",
    description:
      "Built the frontend for the Education Malaysia Global Services “Study in Malaysia” website using HTML, CSS, Bootstrap 5.3, and JavaScript. The work focused on responsive page layouts, navigation sections, hero banners, content blocks, and interactive UI elements. The website required clear information structure, mobile responsiveness, browser compatibility, and consistent styling across pages.",
    skills: ["HTML5", "SCSS", "Bootstrap 5.3", "JavaScript"],
    image: "/projects/emgs-study-in-malaysia.png",
    featured: false,
  },
  {
    title: "Fraser & Neave Holdings Bhd Annual Report 2025",
    category: "Corporate Annual Report Website",
    description:
      "Developed the frontend for the Fraser & Neave Holdings Bhd Annual Report 2025 website using HTML, CSS, Bootstrap 5.3, and JavaScript. The work focused on responsive page layouts, structured content sections, interactive UI elements, and consistent styling across the site. The project required visual accuracy, mobile responsiveness, browser compatibility, and a polished user experience for a public-facing corporate annual report.",
    skills: ["HTML5", "SCSS", "Bootstrap 5.3", "JavaScript"],
    image: "/projects/fn-annual-report-2025.png",
    featured: false,
  },
  {
    title: "PIDM",
    category: "Corporate / Public-Facing Website",
    description:
      "Developed the PIDM website frontend using HTML, CSS, Bootstrap 5.3, and JavaScript. The work focused on responsive page layouts, clean UI sections, styling components, and ensuring the website worked well across desktop and mobile devices. The project required visual consistency, accessibility awareness, browser compatibility, and maintainable frontend structure for a professional public-facing website.",
    skills: ["HTML5", "SCSS", "Bootstrap 5.3", "JavaScript"],
    image: "/projects/pidm.png",
    featured: false,
  },
];

export const earlierProjects: PortfolioProject[] = [
  {
    title: "ASEAN GEMS",
    category: "Frontend Project",
    description:
      "Responsive ASEAN scholarship platform frontend built with Bootstrap and JavaScript.",
    skills: ["Bootstrap 5.3", "Responsive UI", "JavaScript"],
    image: "/projects/asean-gems.png",
  },
  {
    title: "Plaza Premium",
    category: "Hospitality / Travel Website",
    description:
      "Frontend implementation for a hospitality and travel-related digital experience.",
    skills: ["Hospitality", "UI Implementation"],
    image: "/projects/plaza-premium.png",
  },
];

export const experienceSection = {
  title: "15+ years of frontend delivery experience",
  description:
    "Production frontend experience across enterprise eCommerce, corporate websites, CMS platforms, and public-facing digital projects.",
};

export const experience = [
  {
    company: "Maxis eCommerce",
    role: "Senior Frontend Developer",
    period: "May 2018 – Nov 2025",
    description:
      "Delivered frontend experiences for large-scale eCommerce, campaign pages, responsive UI, platform enhancements, and cross-device interface quality.",
    highlights: [
      "eCommerce UI",
      "Responsive UI",
      "Campaign Pages",
      "Frontend Delivery",
    ],
  },
  {
    company: "Optima Innovations Sdn Bhd",
    role: "Head Web Front End Coder",
    period: "Jul 2013 – Apr 2018",
    description:
      "Built responsive websites, mentored junior frontend developers, introduced reusable frontend patterns, and contributed to award-winning Malaysian websites.",
    highlights: [
      "Corporate Websites",
      "CMS Websites",
      "Team Mentoring",
      "Reusable UI",
    ],
  },
  {
    company: "Fireworks Solutions",
    role: "Web & Multimedia Designer",
    period: "Oct 2010 – Jun 2013",
    description:
      "Built early frontend and WordPress foundations, including HTML, CSS, UI implementation, and CMS customization.",
    highlights: [
      "HTML / CSS",
      "WordPress",
      "UI Layout",
      "CMS Customization",
    ],
  },
];

export const credentials = [
  {
    title: "Meta Front-End Developer",
    focus: "Modern frontend foundations · React · UI development",
    status: "Completed",
  },
  {
    title: "IBM Front-End Developer",
    focus: "Frontend engineering foundations · Web development",
    status: "Completed",
  },
  {
    title: "Adobe Certified Expert",
    focus:
      "Adobe Commerce Front End Developer · Enterprise eCommerce background",
    status: "Certified",
  },
];

export const aboutParagraphs = [
  "I'm Stephen Seng, a Malaysia-based senior frontend developer with 15+ years of experience building responsive websites, eCommerce interfaces, corporate websites, annual report websites, and CMS-driven frontend experiences.",
  "Today, I'm focused on modern frontend development with Vue 3, Nuxt, React, Next.js, TypeScript, Figma-to-code workflow, responsive UI, and maintainable frontend delivery.",
];

export const aboutHighlight =
  "Focused on responsive UI, production frontend delivery, and clean component-based implementation.";

export const contactInterests = [
  "Senior Frontend Developer",
  "Vue 3 / Nuxt frontend",
  "React / Next.js interfaces",
  "Responsive UI implementation",
  "Corporate / public-facing websites",
];
