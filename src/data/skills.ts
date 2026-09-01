export type Skill = {
  name: string;
  category: string;
  description: string;
  emoji: string;
  color: string;
  projects: string[];
};

export const skills: Skill[] = [
  {
    name: "HTML",
    category: "Frontend",
    description: "Semantic and accessible structures built with clean HTML.",
    emoji: "🌐",
    color: "#FF845F",
    projects: ["Civora", "Koda", "Bombon"],
  },

  {
    name: "CSS",
    category: "Frontend",
    description:
      "Responsive layouts, animations and polished visual interfaces.",
    emoji: "🎨",
    color: "#12D8FA",
    projects: ["TaskFlow", "Dad Sneakers", "Bombon"],
  },

  {
    name: "JavaScript",
    category: "Frontend",
    description: "Interactive web experiences powered by modern JavaScript.",
    emoji: "⚡",
    color: "#FFD44D",
    projects: ["Koda", "Bombon", "TaskFlow"],
  },

  {
    name: "TypeScript",
    category: "Frontend",
    description: "Type-safe frontend applications with maintainable code.",
    emoji: "💙",
    color: "#7C5CFF",
    projects: ["Orbit CRM", "Civora", "Koda"],
  },

  {
    name: "React",
    category: "Frontend",
    description:
      "Reusable component-based interfaces and modern React applications.",
    emoji: "⚛️",
    color: "#12D8FA",
    projects: ["Civora", "Orbit CRM", "Koda", "TaskFlow"],
  },

  {
    name: "Tailwind CSS",
    category: "Frontend",
    description:
      "Fast, responsive and custom UI styling using utility-first CSS.",
    emoji: "🌊",
    color: "#AAF35E",
    projects: ["Civora", "Orbit CRM", "Koda", "Bombon"],
  },

  {
    name: "Responsive Design",
    category: "Frontend",
    description:
      "Interfaces designed to feel great across desktop, tablet and mobile.",
    emoji: "📱",
    color: "#FF4FD8",
    projects: ["Civora", "TaskFlow", "Dad Sneakers"],
  },

  {
    name: "Figma",
    category: "Design Tool",
    description:
      "A design tool I use to work with interface designs and turn visual ideas into frontend experiences.",
    emoji: "🎨",
    color: "#FF4FD8",
    projects: ["Civora", "Koda", "Orbit CRM"],
  },

  {
    name: "Zustand",
    category: "State Management",
    description: "Simple and scalable client-side state management.",
    emoji: "🐻",
    color: "#AAF35E",
    projects: ["Civora", "Bombon", "Dad Sneakers"],
  },

  {
    name: "REST API",
    category: "Data",
    description: "Connecting frontend applications with real backend services.",
    emoji: "🔌",
    color: "#12D8FA",
    projects: ["Civora", "Bombon", "Orbit CRM"],
  },

  {
    name: "Axios",
    category: "Data",
    description: "Handling HTTP requests and communicating with APIs.",
    emoji: "📡",
    color: "#7C5CFF",
    projects: ["Civora", "Orbit CRM", "Bombon"],
  },

  {
    name: "React Router DOM",
    category: "React Ecosystem",
    description:
      "Building client-side navigation and managing routes across React applications.",
    emoji: "🧭",
    color: "#12D8FA",
    projects: ["Civora", "Koda", "Bombon", "Dad Sneakers"],
  },

  {
    name: "Formik",
    category: "Forms",
    description:
      "Managing form state, submission and user input in React applications.",
    emoji: "📝",
    color: "#FF4FD8",
    projects: ["Civora"],
  },

  {
    name: "Yup",
    category: "Form Validation",
    description:
      "Creating validation schemas and handling form validation with clear rules.",
    emoji: "✅",
    color: "#AAF35E",
    projects: ["Civora"],
  },

  {
    name: "React Hot Toast",
    category: "UI Feedback",
    description:
      "Adding clear success, error and action notifications to frontend interfaces.",
    emoji: "🍞",
    color: "#FFD44D",
    projects: ["Civora", "Koda"],
  },

  {
    name: "React Icons",
    category: "UI Tools",
    description:
      "Adding customizable icons to React interfaces using a wide collection of icon libraries.",
    emoji: "⚡",
    color: "#7C5CFF",
    projects: ["Civora", "Dad Sneakers"],
  },

  {
    name: "SweetAlert2",
    category: "UI Feedback",
    description:
      "Creating interactive alerts, confirmations and user feedback dialogs in frontend applications.",
    emoji: "🍬",
    color: "#FF845F",
    projects: ["Civora"],
  },

  {
    name: "Strapi",
    category: "CMS",
    description: "Building content-driven applications with a headless CMS.",
    emoji: "🧩",
    color: "#FF4FD8",
    projects: ["Bombon", "Civora"],
  },

  {
    name: "WordPress",
    category: "CMS",
    description:
      "Creating and customizing content-driven websites with WordPress.",
    emoji: "📝",
    color: "#12D8FA",
    projects: [],
  },

  {
    name: "Git",
    category: "Tools",
    description: "Version control and organized development workflows.",
    emoji: "🌿",
    color: "#FF845F",
    projects: ["Orbit CRM", "Koda", "Civora"],
  },

  {
    name: "GitHub",
    category: "Tools",
    description: "Code hosting, collaboration, branches and project workflow.",
    emoji: "🐙",
    color: "#AAF35E",
    projects: ["Orbit CRM", "Koda", "Civora"],
  },

  {
    name: "Vite",
    category: "Tools",
    description: "Fast modern development tooling for frontend applications.",
    emoji: "⚡",
    color: "#FFD44D",
    projects: ["Koda", "TaskFlow", "Civora"],
  },

  {
    name: "Animate.css",
    category: "Animation",
    description:
      "Comfortable using Animate.css to add smooth entrance, exit and interactive animations to frontend interfaces.",
    emoji: "💫",
    color: "#FF845F",
    projects: ["Bombon"],
  },

  {
    name: "WOW.js",
    category: "Animation",
    description:
      "Basic experience with WOW.js for triggering scroll-based animations and simple reveal effects.",
    emoji: "✨",
    color: "#FF4FD8",
    projects: ["Bombon"],
  },

  {
    name: "GSAP",
    category: "Animation",
    description:
      "Basic experience with GSAP for adding smooth animations and interactive motion to frontend interfaces.",
    emoji: "✨",
    color: "#FF845F",
    projects: ["Bombon"],
  },

  {
    name: "Three.js",
    category: "3D & Animation",
    description:
      "Basic familiarity with Three.js for experimenting with 3D visuals and interactive web experiences.",
    emoji: "🧊",
    color: "#12D8FA",
    projects: [],
  },

  {
    name: "React Three Fiber",
    category: "3D & Animation",
    description:
      "Basic familiarity with React Three Fiber for experimenting with 3D elements inside React applications.",
    emoji: "🌐",
    color: "#AAF35E",
    projects: [],
  },

  {
    name: "Lenis",
    category: "Smooth Scrolling",
    description:
      "Basic experience with Lenis for adding smooth scrolling and improving the feel of web interactions.",
    emoji: "🌀",
    color: "#FFD44D",
    projects: [],
  },

  {
    name: "Framer Motion",
    category: "Animation",
    description:
      "Basic experience with Framer Motion for creating simple UI animations and transitions in React.",
    emoji: "🎬",
    color: "#FF4FD8",
    projects: ["Koda"],
  },
];
