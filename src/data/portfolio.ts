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
    "I have 12+ years of frontend experience delivering corporate websites, eCommerce interfaces, annual report websites, and responsive public-facing web experiences using Vue, Nuxt, HTML, SCSS, Bootstrap, JavaScript, and modern frontend practices.",
  trustLine:
    "Open to frontend developer roles focused on Vue / Nuxt, React / Next.js, responsive UI, and production frontend delivery.",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export const deliveryPanel = {
  title: "Frontend Delivery Stack",
  subtitle: "Vue 3 · Nuxt · Responsive UI · Figma to Code",
  capabilities: [
    "Vue 3 / Nuxt frontend",
    "Responsive UI implementation",
    "Figma-to-code workflow",
    "Corporate website delivery",
    "Annual report frontend",
    "HTML / SCSS / Bootstrap / JavaScript",
    "Cross-browser compatibility",
    "Maintainable UI components",
  ],
  stats: [
    { value: "12+", label: "Frontend experience" },
    { value: "Vue / Nuxt", label: "Current focus" },
    { value: "Public-facing", label: "Corporate websites" },
  ],
};

export const aboutQuickFacts = [
  "12+ years frontend experience",
  "Vue / Nuxt / Responsive UI",
  "Corporate & public-facing websites",
];

export const techStackCards = [
  {
    title: "Frameworks",
    skills: ["Vue 3", "Nuxt", "React", "Next.js"],
    featured: ["Vue 3", "Nuxt"],
    muted: [] as string[],
  },
  {
    title: "Core Frontend",
    skills: ["HTML5", "CSS3", "SCSS", "JavaScript", "TypeScript"],
    featured: [],
    muted: [],
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "Bootstrap 5.3", "Responsive Web Design"],
    featured: [],
    muted: [],
  },
  {
    title: "Workflow",
    skills: ["Git", "Figma-to-code", "Cross-browser testing", "Component-based UI"],
    featured: [],
    muted: [],
  },
  {
    title: "Platforms",
    skills: ["WordPress", "CMS websites", "Adobe Commerce / Magento"],
    featured: [],
    muted: ["Adobe Commerce / Magento"],
  },
];

export const deliveryStatement =
  "I focus on frontend work that survives real production use: responsive layouts, clean implementation, reusable structure, and UI details that stay consistent across pages and devices.";

export const capabilities = [
  {
    title: "Vue / Nuxt Frontend",
    description:
      "Responsive Vue 3 and Nuxt interfaces with clean page structure and reusable UI patterns.",
    status: "production-ready",
  },
  {
    title: "Figma-to-Code Execution",
    description:
      "Accurate translation of design into frontend with attention to spacing, typography, and alignment.",
    status: "reviewed",
  },
  {
    title: "Responsive UI Implementation",
    description:
      "Layouts built for desktop, tablet, and mobile behavior instead of only static screenshots.",
    status: "responsive",
  },
  {
    title: "Corporate & Public-Facing Websites",
    description:
      "Experience delivering polished websites for corporate, education, foundation, financial, and public-facing brands.",
    status: "reviewed",
  },
  {
    title: "HTML / SCSS / Bootstrap / JavaScript",
    description:
      "Strong production experience with practical frontend technologies used in real client projects.",
    status: "maintainable",
  },
  {
    title: "Frontend Quality & Maintenance",
    description:
      "Clean structure, consistent styling, reusable components, and frontend work teams can maintain.",
    status: "production-ready",
  },
] as const;

export const frontendApproachItems = [
  {
    title: "Responsive by default",
    description:
      "I plan layouts for real device behavior, not only desktop screenshots.",
  },
  {
    title: "Component consistency",
    description:
      "I keep UI patterns, spacing, states, and interactions consistent across pages.",
  },
  {
    title: "Maintainable structure",
    description:
      "I prefer reusable UI patterns and page structures that are easier for teams to extend.",
  },
  {
    title: "Production mindset",
    description:
      "I consider browser compatibility, content structure, performance, and real delivery needs.",
  },
  {
    title: "Cross-browser reliability",
    description:
      "I check real browser behavior, responsive states, and content edge cases before delivery.",
  },
  {
    title: "User experience polish",
    description:
      "I care about readable content, clear hierarchy, smooth navigation, and interaction details.",
  },
];

export const recentProjects = [
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

export const earlierProjects = [
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
  {
    title: "Folia AI",
    category: "Personal SaaS Product UI",
    description:
      "Product UI exploration for Smart Inbox and AI document review workflow.",
    skills: ["SaaS UI", "Product UX"],
    image: "/projects/folia-ai.png",
  },
];

export const experienceSection = {
  title: "12+ years of frontend delivery experience",
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
  "I'm Stephen Seng, a Malaysia-based senior frontend developer with 12+ years of experience building responsive websites, eCommerce interfaces, corporate websites, annual report websites, and CMS-driven frontend experiences.",
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
