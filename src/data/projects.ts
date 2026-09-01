export type ProjectStatus = "completed" | "in-progress" | "future";

export type Project = {
  number: string;
  name: string;
  category: string;
  idea: string;
  description: string;
  technologies: string[];
  color: string;
  emoji: string;
  status: ProjectStatus;

  // Optional links
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  // =========================
  // COMPLETED PROJECTS
  // =========================

  {
    number: "01",
    name: "Civora",
    category: "Healthcare E-Commerce",
    idea: "A healthcare e-commerce platform designed to make essential care products easier to discover and purchase, with a simple and accessible experience for seniors and their families.",
    description:
      "A modern healthcare e-commerce platform with product categories, shopping interactions and a user-friendly interface.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "Zustand",
      "Strapi",
      "Node.js",
      "React Router DOM",
      "React Icons",
      "Formik",
      "Yup",
      "Axios",
      "SweetAlert2",
      "React Hot Toast",
      "React Slick",
    ],
    color: "#AAF35E",
    emoji: "💙",
    status: "completed",
  },

  {
    number: "02",
    name: "Koda",
    category: "Online Code Playground",
    idea: "An online coding playground that gives developers a simple space to create files, organize projects and experiment with code in one place.",
    description:
      "An interactive coding environment built around a browser-based code editor and project file management experience.",
    technologies: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Monaco Editor",
      "Framer Motion",
      "Lucide React",
      "React Hot Toast",
      "React Router DOM",
    ],
    color: "#12D8FA",
    emoji: "💻",
    status: "completed",
  },

  {
    number: "03",
    name: "Bombon",
    category: "Food E-Commerce",
    idea: "A colorful food e-commerce experience designed to make discovering products and navigating an online food store more enjoyable and interactive.",
    description:
      "A food shopping experience with smooth navigation, product discovery and engaging animations.",
    technologies: [
      "React.js",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "React Router DOM",
      "GSAP",
      "@gsap/react",
      "Animate.css",
      "Font Awesome",
    ],
    color: "#FF845F",
    emoji: "🍔",
    status: "completed",
  },

  {
    number: "04",
    name: "Dad Sneakers",
    category: "Sneaker Store",
    idea: "A dedicated sneaker shopping experience focused on presenting products in a bold, modern way while keeping browsing and shopping simple.",
    description:
      "A responsive sneaker store with product browsing, shopping interactions and a modern visual experience.",
    technologies: [
      "React.js",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Axios",
      "React Router DOM",
      "React Icons",
      "React Toastify",
    ],
    color: "#7C5CFF",
    emoji: "👟",
    status: "completed",
  },

  // =========================
  // IN PROGRESS
  // =========================

  {
    number: "05",
    name: "Orbit CRM",
    category: "SaaS CRM Platform",
    idea: "A CRM platform designed to bring customer and business management into one organized workspace, helping teams manage companies, users, leads, deals, tasks and business activities.",
    description:
      "A CRM SaaS platform currently in development with dashboards, business management features and an organized workflow for teams.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    color: "#FF4FD8",
    emoji: "🪐",
    status: "in-progress",
  },

  // =========================
  // FUTURE PROJECTS
  // =========================

  {
    number: "06",
    name: "TaskFlow",
    category: "Task Management",
    idea: "A playful task management concept designed to help users organize their daily work, track tasks and keep their workflow simple.",
    description:
      "A planned productivity interface focused on task organization and an enjoyable user experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Zustand"],
    color: "#FFD44D",
    emoji: "✅",
    status: "future",
  },

  {
    number: "07",
    name: "Threadly",
    category: "Fashion E-Commerce",
    idea: "A fashion shopping concept focused on making clothing discovery easier through collections, categories and smart product browsing.",
    description:
      "A planned fashion e-commerce experience with a strong focus on product discovery and visual presentation.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    color: "#FF4FD8",
    emoji: "👗",
    status: "future",
  },

  {
    number: "08",
    name: "SoundLab",
    category: "Audio & Earbuds E-Commerce",
    idea: "An audio shopping concept focused on headphones, earbuds and premium audio products, with an immersive product-focused shopping experience.",
    description:
      "A planned e-commerce experience for discovering and exploring modern audio products.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    color: "#12D8FA",
    emoji: "🎧",
    status: "future",
  },

  {
    number: "09",
    name: "Forma",
    category: "Furniture E-Commerce",
    idea: "A premium furniture shopping concept designed around visual storytelling, elegant product presentation and an editorial shopping experience.",
    description:
      "A planned furniture e-commerce experience combining product storytelling with a refined visual system.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Framer Motion",
    ],
    color: "#FFD44D",
    emoji: "🛋️",
    status: "future",
  },

  {
    number: "10",
    name: "Crave",
    category: "Food Delivery",
    idea: "A food delivery concept designed to make discovering restaurants, exploring meals and ordering food fast and enjoyable.",
    description:
      "A planned food delivery experience focused on restaurant discovery and a smooth ordering journey.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Zustand",
      "REST API",
    ],
    color: "#FF845F",
    emoji: "🍕",
    status: "future",
  },
];
