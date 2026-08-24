export const profile = {
  name: "Nikhill Vasudeva Rao P",
  title: "AI Full Stack Developer",
  headline: "AI Full Stack Developer",
  roles: [
    "AI Full Stack Developer",
    "Computer Vision Developer",
    "Agentic AI Developer",
    "Full Stack Engineer",
  ],
  tagline: "Building Intelligent AI Systems for Real-World Impact.",
  location: "Tiruchirappalli, Tamil Nadu, India",
  phone: "+91 8344222998",
  phoneFormatted: "+91 83442 22998",
  email: "nvraops@gmail.com",
  secondaryEmail: "nvraopawar@gmail.com",
  github: "https://github.com/nvraops",
  githubLabel: "github.com/nvraops",
  linkedin: "https://www.linkedin.com/in/nvraops",
  linkedinLabel: "linkedin.com/in/nvraops",
  instagram: "https://instagram.com/nvraops",
  instagramLabel: "instagram.com/nvraops",
  summary:
    "Aspiring AI Full Stack Developer with hands-on experience in Artificial Intelligence, Computer Vision, Agentic AI, Full Stack Development, and Cloud Technologies. Passionate about building intelligent, scalable, and production-ready AI applications that solve real-world challenges.",
  summary2:
    "Experienced in developing AI-powered web applications, integrating modern machine learning models, designing RESTful APIs, and deploying full-stack solutions using contemporary software engineering practices.",
  summary3:
    "Continuously expanding expertise in Machine Learning, Deep Learning, Large Language Models (LLMs), Computer Vision, AI Agents, Prompt Engineering, and Cloud-Native Development through internships, certifications, hackathons, and real-world projects.",
  objective:
    "To build intelligent, scalable, and production-ready AI applications that solve real-world challenges by combining Artificial Intelligence, Computer Vision, Agentic AI, and Full Stack Development while continuously learning and innovating.",
  philosophy:
    "Building Intelligent AI Systems for Real-World Impact.",
  motto: "Learn. Build. Innovate. Inspire.",
  languages: ["English", "Tamil", "Hindi", "Marathi"],
};

export const stats = [
  { value: "2028", label: "Expected Graduation" },
  { value: "2", label: "Internships" },
  { value: "10+", label: "Certifications & Programs" },
  { value: "4", label: "Languages" },
];

export const experience = [
  {
    role: "AI Full Stack Developer Intern",
    company: "VDart Academy",
    period: "June 2025 – July 2025",
    points: [
      "Built responsive full-stack web applications.",
      "Developed frontend interfaces using React and modern web technologies.",
      "Implemented backend APIs using Python frameworks.",
      "Collaborated using Git and GitHub workflows.",
      "Applied software engineering best practices and agile development methodologies.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Peppy Gold Technologies Private Limited",
    period: "December 2025 – January 2026",
    points: [
      "Collaborated with development teams on software projects.",
      "Improved problem-solving and analytical skills.",
      "Learned professional software development workflows.",
      "Strengthened communication, teamwork, and project management skills.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering (B.E.)",
  field: "Computer Science and Engineering",
  school: "CARE College of Engineering, Tiruchirappalli",
  graduation: "Expected Graduation: 2028",
};

export const featuredProjects = [
  {
    id: "vision-assist",
    name: "VisionAssist AI",
    tagline: "AI-Powered Visual Assistance System",
    status: "Ongoing Development",
    description:
      "AI-powered assistive application designed to improve accessibility for visually impaired individuals by providing intelligent real-time environmental awareness using Artificial Intelligence.",
    features: [
      "Real-time object detection",
      "Obstacle detection",
      "OCR-based text recognition",
      "Voice guidance",
      "Gesture recognition",
      "Depth estimation",
      "Live camera processing",
      "Image analysis",
      "Video analysis",
    ],
    technologies: ["React", "TypeScript", "FastAPI", "YOLO", "MediaPipe", "EasyOCR", "SQLite"],
  },
  {
    id: "ai-chatbot",
    name: "AI Chatbot",
    tagline: "Enterprise-Grade Intelligent Support & Knowledge System",
    status: "Completed",
    description:
      "Enterprise-grade AI chatbot designed for intelligent customer support and knowledge retrieval featuring dynamic context-aware handling and a repository-based architecture.",
    features: [
      "Dynamic knowledge retrieval",
      "Context-aware conversations",
      "MongoDB integration",
      "Session management",
      "Hybrid AI response engine",
      "Intelligent response generation",
      "Repository-based architecture",
    ],
    technologies: ["React", "FastAPI", "MongoDB", "Python", "REST APIs"],
  },
];

export const featuredProject = featuredProjects[0];

export const skillGroups = [
  {
    title: "Artificial Intelligence",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Generative AI",
      "Agentic AI",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
      "Model Context Protocol (MCP)",
      "AI Agents",
      "Natural Language Processing",
    ],
  },
  {
    title: "Programming Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "Responsive Web Design",
    ],
  },
  {
    title: "Backend Development",
    items: ["FastAPI", "Django", "REST APIs", "WebSockets", "Authentication", "API Development"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "SQLite", "Supabase"],
  },
  {
    title: "AI & ML Technologies",
    items: [
      "YOLO",
      "OpenCV",
      "MediaPipe",
      "EasyOCR",
      "Whisper",
      "LangChain",
      "Hugging Face",
      "Google AI Studio",
      "Claude",
      "Gemini",
      "OpenAI APIs",
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "Docker",
      "Kubernetes",
      "Cloud Run",
      "GitHub Actions",
      "Render",
      "Railway",
      "Netlify",
      "Vercel",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Developer Tools",
    items: ["Visual Studio Code", "Postman", "Figma", "Linux", "Windows"],
  },
];

export interface LearningCredential {
  id: string;
  title: string;
  issuer: string;
  type: string;
  category: "AI / ML" | "AGENTIC AI" | "MICROSOFT" | "CLOUD / DEVOPS" | "FULL STACK" | "WORKSHOPS" | "LEADERSHIP";
  tier: "primary" | "secondary" | "activity";
  date?: string;
  completedDate: string; // ISO date string (YYYY-MM-DD) for strict chronological sorting by date done
  description: string;
  skills: string[];
  credentialUrl?: string;
  verified: boolean;
}

export const learningCredentials: LearningCredential[] = [
  // 1. Fundamentals of Docker & Kubernetes - Scaler Masterclass (12 May 2026)
  {
    id: "docker-kubernetes",
    title: "Fundamentals of Docker & Kubernetes",
    issuer: "Scaler Masterclass",
    type: "Certificate of Participation",
    category: "CLOUD / DEVOPS",
    tier: "secondary",
    date: "12 May 2026",
    completedDate: "2026-05-12",
    description: "Docker, containers, Kubernetes, container orchestration, deployment, and cloud-native development.",
    skills: ["Docker", "Kubernetes", "Containers", "Orchestration", "Cloud-Native Dev"],
    verified: true,
  },

  // 2. 5-Day AI Agents: Intensive Vibe Coding Course With Google (May 2026)
  {
    id: "google-ai-agents",
    title: "5-Day AI Agents: Intensive Vibe Coding Course With Google",
    issuer: "Kaggle / Google Developer Program",
    type: "Intensive Program",
    category: "AI / ML",
    tier: "primary",
    completedDate: "2026-05-05",
    description: "Google AI Studio, Cloud Run, Model Context Protocol (MCP), AI agents, memory/context, and production-oriented AI development.",
    skills: ["Google AI Studio", "Cloud Run", "Model Context Protocol (MCP)", "AI Agents", "Memory & Context", "Production AI"],
    verified: true,
  },

  // 3. AWS Academy Graduate – Machine Learning Foundations (April 2026)
  {
    id: "aws-ml-foundations",
    title: "AWS Academy Graduate – Machine Learning Foundations",
    issuer: "AWS Academy",
    type: "Training Badge",
    category: "AI / ML",
    tier: "primary",
    completedDate: "2026-04-28",
    description: "Machine Learning fundamentals, data preparation, model building, AI concepts, and AWS-based ML workflows.",
    skills: ["Machine Learning", "Data Preparation", "Model Building", "AI Concepts", "AWS ML Workflows"],
    verified: true,
  },

  // 4. Claude Code 101 - Anthropic (April 2026)
  {
    id: "claude-code-101",
    title: "Claude Code 101",
    issuer: "Anthropic",
    type: "Credential Course",
    category: "AGENTIC AI",
    tier: "primary",
    completedDate: "2026-04-20",
    description: "AI-assisted software development, agent workflows, context management, and developer tooling.",
    skills: ["Claude Code", "AI-Assisted Dev", "Agent Workflows", "Context Management", "Developer Tooling"],
    verified: true,
  },

  // 5. Claude Platform 101 - Anthropic (April 2026)
  {
    id: "claude-platform-101",
    title: "Claude Platform 101",
    issuer: "Anthropic",
    type: "Credential Course",
    category: "AGENTIC AI",
    tier: "primary",
    completedDate: "2026-04-15",
    description: "Claude platform architecture, API fundamentals, context management, tool usage, and AI application development.",
    skills: ["Claude Platform", "Anthropic API", "Context Management", "Tool Usage", "AI Application Dev"],
    verified: true,
  },

  // 6. Claude 101 - Anthropic (April 2026)
  {
    id: "claude-101",
    title: "Claude 101",
    issuer: "Anthropic",
    type: "Credential Course",
    category: "AGENTIC AI",
    tier: "primary",
    completedDate: "2026-04-10",
    description: "Claude fundamentals, AI assistants, prompt engineering techniques, and developer productivity workflows.",
    skills: ["Claude", "AI Assistants", "Prompt Engineering", "Developer Productivity", "Anthropic"],
    verified: true,
  },

  // 7. Enhance Security Operations by using Microsoft Security Copilot (March 2026)
  {
    id: "ms-security-copilot",
    title: "Enhance Security Operations by using Microsoft Security Copilot",
    issuer: "Microsoft",
    type: "Technical Module",
    category: "MICROSOFT",
    tier: "primary",
    completedDate: "2026-03-25",
    description: "AI-assisted security operations, threat analysis, investigation workflows, and incident response.",
    skills: ["Security Copilot", "Threat Analysis", "Incident Response", "AI Security Ops", "Cybersecurity"],
    verified: true,
  },

  // 8. Optimize Business Processes with Microsoft 365 Copilot (March 2026)
  {
    id: "ms-365-copilot",
    title: "Optimize Business Processes with Microsoft 365 Copilot",
    issuer: "Microsoft Learn",
    type: "Learning Module",
    category: "MICROSOFT",
    tier: "primary",
    completedDate: "2026-03-18",
    description: "AI-powered productivity, workflow automation, collaboration, and business-process optimization.",
    skills: ["Microsoft 365 Copilot", "Workflow Automation", "Productivity", "Business Process Optimization"],
    verified: true,
  },

  // 9. Introduction to Security, Compliance, and Identity Concepts (March 2026)
  {
    id: "ms-security-compliance-identity",
    title: "Introduction to Security, Compliance, and Identity Concepts",
    issuer: "Microsoft Learn",
    type: "Learning Pathway",
    category: "MICROSOFT",
    tier: "primary",
    completedDate: "2026-03-10",
    description: "Cybersecurity fundamentals, identity management, compliance, data protection, and cloud security.",
    skills: ["Cybersecurity", "Identity Management", "Compliance", "Data Protection", "Cloud Security"],
    verified: true,
  },

  // 10. Introduction to AI Concepts (March 2026)
  {
    id: "ms-ai-concepts",
    title: "Introduction to AI Concepts",
    issuer: "Microsoft Learn",
    type: "Learning Pathway",
    category: "MICROSOFT",
    tier: "primary",
    completedDate: "2026-03-02",
    description: "Artificial Intelligence, Machine Learning, Generative AI, and Responsible AI fundamentals.",
    skills: ["Artificial Intelligence", "Machine Learning", "Generative AI", "Responsible AI"],
    verified: true,
  },

  // 11. IIC Team Member — CARE HACK '26 (February 2026)
  {
    id: "iic-care-hack",
    title: "IIC Team Member — CARE HACK '26",
    issuer: "CARE Institution's Innovation Council",
    type: "Organizing Team",
    category: "LEADERSHIP",
    tier: "activity",
    completedDate: "2026-02-20",
    description: "Institution's Innovation Council team member contributing to the organization and execution of CARE HACK '26.",
    skills: ["Event Coordination", "Hackathon Organization", "Team Collaboration", "Innovation Activities"],
    verified: true,
  },

  // 12. Internshala Student Partner (ISP) (January 2026)
  {
    id: "isp-internshala",
    title: "Internshala Student Partner (ISP)",
    issuer: "Internshala",
    type: "Student Leadership",
    category: "LEADERSHIP",
    tier: "activity",
    completedDate: "2026-01-15",
    description: "Selected as an Internshala Student Partner, contributing to student outreach, internship awareness, and professional networking.",
    skills: ["Student Outreach", "Internship Awareness", "Professional Networking", "Campus Leadership"],
    verified: true,
  },

  // 13. Complete Absolute Python Course - Udemy (January 2026)
  {
    id: "udemy-python",
    title: "Complete Absolute Python Course",
    issuer: "Udemy",
    type: "Online Course",
    category: "FULL STACK",
    tier: "primary",
    completedDate: "2026-01-05",
    description: "Python programming fundamentals, problem solving, control structures, functions, and software development.",
    skills: ["Python", "Problem Solving", "Control Structures", "Functions", "Software Development"],
    verified: true,
  },

  // 14. Free Full Stack Developer Course - Simplilearn SkillUp (December 2025)
  {
    id: "simplilearn-fullstack",
    title: "Free Full Stack Developer Course",
    issuer: "Simplilearn SkillUp",
    type: "Online Course",
    category: "FULL STACK",
    tier: "primary",
    completedDate: "2025-12-20",
    description: "Frontend development, backend development, REST APIs, database integration, and deployment.",
    skills: ["Frontend Dev", "Backend Dev", "APIs", "Databases", "Full Stack Deployment"],
    verified: true,
  },

  // 15. Innovation Ambassador Training – Foundation Level (November 2025)
  {
    id: "training-moe-aicte",
    title: "Innovation Ambassador Training – Foundation Level",
    issuer: "MoE's Innovation Cell & AICTE",
    type: "Foundation Training",
    category: "WORKSHOPS",
    tier: "secondary",
    completedDate: "2025-11-25",
    description: "16 sessions / 30 contact hours focused on innovation frameworks, entrepreneurship, and campus innovation.",
    skills: ["Innovation", "Entrepreneurship", "MoE Innovation Cell", "AICTE"],
    verified: true,
  },

  // 16. Intellectual Property Rights (IPR) Event - Government of India (October 2025)
  {
    id: "event-ipr-india",
    title: "Intellectual Property Rights (IPR) Event",
    issuer: "Government of India",
    type: "National Event",
    category: "WORKSHOPS",
    tier: "secondary",
    completedDate: "2025-10-15",
    description: "Exposure to patents, copyrights, trademarks, industrial design protection, and trade secrets.",
    skills: ["IPR", "Patents", "Copyrights", "Trademarks", "Trade Secrets"],
    verified: true,
  },

  // 17. Data Science, AI & Machine Learning Roadmap Webinar - GUVI × HCL (September 2025)
  {
    id: "webinar-guvi-hcl",
    title: "Data Science, AI & Machine Learning Roadmap Webinar",
    issuer: "GUVI × HCL",
    type: "Technical Webinar",
    category: "WORKSHOPS",
    tier: "secondary",
    completedDate: "2025-09-20",
    description: "Industry-oriented exposure to Data Science, Artificial Intelligence, and Machine Learning engineering roadmaps.",
    skills: ["Data Science", "Machine Learning Roadmap", "AI Career Pathways"],
    verified: true,
  },

  // 18. Full Stack Development Workshop - Pantech eLearning (August 2025)
  {
    id: "workshop-pantech",
    title: "Full Stack Development Workshop",
    issuer: "Pantech eLearning",
    type: "Hands-on Workshop",
    category: "WORKSHOPS",
    tier: "secondary",
    completedDate: "2025-08-15",
    description: "Frontend and backend development concepts and practical full-stack software development workflows.",
    skills: ["Full Stack", "Web Development", "Practical Engineering"],
    verified: true,
  },

  // 19. Career Guidance Webinar - Skill Dunia Edutech (July 2025)
  {
    id: "webinar-skill-dunia",
    title: "Career Guidance Webinar",
    issuer: "Skill Dunia Edutech",
    type: "Webinar",
    category: "WORKSHOPS",
    tier: "secondary",
    completedDate: "2025-07-10",
    description: "Career planning, professional development, industry awareness, and technical skill development.",
    skills: ["Career Planning", "Professional Development", "Industry Awareness"],
    verified: true,
  },
];

export const certifications = [
  {
    org: "AWS Academy",
    items: ["Machine Learning Foundations Training Badge"],
  },
  {
    org: "Google / Kaggle",
    items: ["5-Day AI Agents: Intensive Vibe Coding Course With Google"],
  },
  {
    org: "Anthropic",
    items: ["Claude 101", "Claude Platform 101", "Claude Code 101"],
  },
  {
    org: "Microsoft Learn",
    items: [
      "Introduction to AI Concepts",
      "Enhance Security Operations by using Microsoft Security Copilot",
      "Introduction to Security, Compliance, and Identity Concepts",
      "Optimize Business Processes with Microsoft 365 Copilot",
    ],
  },
  {
    org: "Scaler Masterclass",
    items: ["Fundamentals of Docker & Kubernetes (12 May 2026)"],
  },
  {
    org: "Udemy",
    items: ["Complete Absolute Python Course"],
  },
  {
    org: "Simplilearn SkillUp",
    items: ["Free Full Stack Developer Course"],
  },
];

export const hackathons = [
  {
    name: "Google AI Agents Intensive Program",
    role: "Completed",
    description:
      "Intensive hands-on program focusing on building autonomous agentic AI systems, prompt engineering, and multi-agent workflows.",
  },
];

export const hackathon = hackathons[0];

export const workshops = [
  {
    org: "Skill Dunia Edutech",
    name: "Career Guidance Webinar",
  },
  {
    org: "GUVI × HCL",
    name: "Data Science, AI & Machine Learning Roadmap Webinar",
  },
  {
    org: "Pantech eLearning",
    name: "Full Stack Development Workshop",
  },
  {
    org: "MoE's Innovation Cell & AICTE",
    name: "Innovation Ambassador Training – Foundation Level",
  },
  {
    org: "Government of India",
    name: "Intellectual Property Rights (IPR) Event",
  },
];

export const achievements = [
  "Successfully completed multiple Microsoft AI learning pathways.",
  "Completed Anthropic AI Developer learning programs.",
  "Completed Google's AI Agents Intensive Program.",
  "Built AI-powered full-stack applications.",
  "Completed industry-focused software development internships.",
  "Participated in Skill Dunia Edutech Career Guidance Webinar on technical career planning.",
  "Actively participate in AI learning initiatives, hackathons, and developer communities.",
];

export const visionGoals = [
  {
    horizon: "Short-Term",
    goals: [
      "Build production-ready AI applications",
      "Master Computer Vision & Agentic AI",
      "Gain hands-on AI Engineering experience",
      "Contribute to open-source AI projects",
      "Build scalable full-stack software solutions",
    ],
  },
  {
    horizon: "Mid-Term",
    goals: [
      "Lead AI Engineering initiatives",
      "Work on enterprise-grade AI products",
      "Publish impactful AI & software projects",
      "Gain deep expertise in MLOps & Cloud AI",
    ],
  },
  {
    horizon: "Long-Term",
    goals: [
      "Build globally impactful AI systems for real-world problems",
      "Pioneer advancements in Agentic AI and Human-Centered AI",
      "Lead groundbreaking engineering teams in Artificial Intelligence",
    ],
  },
];

export const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Agentic AI",
  "Cloud Computing",
  "Cybersecurity",
  "Open Source",
  "Software Engineering",
  "Research",
  "Human-Centered AI",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#project" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export const contactInfo = {
  tagline: "Let's Build the Future with AI.",
  body: "I'm always interested in AI Engineering opportunities, internships, research collaborations, open-source projects, and innovative software development. Feel free to connect if you're looking to collaborate or discuss emerging AI technologies.",
};

export const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
  "Inquiry & Collaboration — AI Engineer"
)}&body=${encodeURIComponent(
  "Hi Nikhill Vasudeva Rao,\n\nI was looking at your AI Engineer portfolio and would like to get in touch to ask for details regarding your work and availability.\n\nHere are some details I'd like to ask about:\n-\n\nLooking forward to hearing from you!\n\nBest regards."
)}`;

