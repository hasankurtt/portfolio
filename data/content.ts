export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  mediumUrl?: string;
  featured: boolean;
}

export interface Organization {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  url?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Document Search",
    description:
      "End-to-end RAG platform for document Q&A. Fully Dockerized with FastAPI, PostgreSQL, and React — deployed on AWS EC2 with a GitHub Actions CI/CD pipeline and HTTPS via Let's Encrypt. Reduced infrastructure cost by 60% compared to v1.",
    techStack: [
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "AWS EC2",
      "OpenAI API",
      "LangChain",
      "Pinecone",
      "GitHub Actions",
    ],
    liveUrl: "https://aidocs.hasankurt.com",
    githubUrl: "https://github.com/hasankurtt/ai-document-search",
    featured: true,
  },
  {
    id: "2",
    title: "FriendZone — AI Social Matching Platform",
    description:
      "Graduation project. AI-powered platform that matches university students by personality and shared interests. Designed a hybrid ML pipeline combining K-Means, Cosine Similarity, and graph-based community detection (Leiden/Louvain) with GDPR/KVKK-compliant data handling.",
    techStack: [
      "Flask",
      "PostgreSQL",
      "Python",
      "K-Means",
      "Cosine Similarity",
      "Graph Community Detection",
      "React",
    ],
    githubUrl: "https://github.com/BEUN-Graduation-Projects/FriendZone",
    featured: true,
  },
  {
    id: "3",
    title: "Seymen Real Estate",
    description:
      "Client project. Full-stack real estate platform built for a live business. Implemented technical SEO from the ground up — meta tags, structured data, and performance optimizations. Currently managing Google Ads campaigns for the client.",
    techStack: ["React", "TypeScript", "PHP", "MySQL"],
    liveUrl: "https://seymenrealestate.com",
    featured: true,
  },
  {
    id: "4",
    title: "Metro Station Violation Detection",
    description:
      "Real-time computer vision system that detects and counts yellow line safety violations in metro stations. Trained a custom YOLO model on project-specific video data with a live monitoring and logging pipeline.",
    techStack: ["Python", "YOLO", "OpenCV", "NumPy", "Matplotlib"],
    featured: false,
  },
  {
    id: "5",
    title: "RAG Civil Law Assistant",
    description:
      "AI chat assistant for Civil Law built on a RAG pipeline. Retrieves relevant passages from pre-indexed legal documents and generates grounded, source-backed responses.",
    techStack: ["Python", "Flask", "MongoDB", "Pinecone", "OpenAI API"],
    githubUrl: "https://github.com/hasankurtt/medeni-hukuk-asistani",
    featured: false,
  },
  {
    id: "6",
    title: "VivaToUR — Cultural & Festival Tours",
    description:
      "Web platform for browsing and booking cultural and festival tours. Features dynamic AJAX-powered filtering and payment integration.",
    techStack: ["PHP", "PostgreSQL", "JavaScript", "AJAX"],
    githubUrl: "https://github.com/hasankurtt/VivaToUR",
    featured: false,
  },
  {
    id: "7",
    title: "Automated Excel Data Integration Platform",
    description:
      "Automation system that extracts and processes data from Excel files, stores results in PostgreSQL, and generates academic reporting pages. Built to support the university accreditation process.",
    techStack: ["Python", "Django", "Pandas", "OpenPyXL", "PostgreSQL"],
    featured: false,
  },
];

export const organizations: Organization[] = [
  {
    id: "1",
    name: "AWS Cloud Club — Bülent Ecevit University",
    role: "Events Coordinator",
    period: "Feb 2026 — Present",
    description:
      "Part of the founding core team establishing the first AWS Cloud Club at Bülent Ecevit University. Appointed as Events Coordinator, responsible for planning and leading the events committee.",
    tags: ["AWS", "Cloud", "Event Management", "Founding Team"],
  },
  {
    id: "2",
    name: "IEEE Student Branch — Bülent Ecevit University",
    role: "Founding Member",
    period: "Apr 2025 — Jan 2026",
    description:
      "Led the founding process of the IEEE Student Branch at Bülent Ecevit University. Introduced IEEE to campus, recruited members, and organized meetings with local industry professionals to bring real-world insight into the academic environment.",
    url: "https://ieee.org",
    tags: ["IEEE", "Leadership", "Founding Member", "Industry Relations"],
  },
  {
    id: "3",
    name: "Karaelmas Artificial Intelligence Community",
    role: "Board Member — Head of Education Committee",
    period: "Nov 2024 — Mar 2025",
    description:
      "Served as an instructor delivering beginner-level Python and NumPy training to students across multiple departments. Organized AI congresses, invited distinguished speakers, and coordinated all educational events within the community.",
    tags: ["AI", "Education", "Python", "Event Organization"],
  },
  {
    id: "4",
    name: "Huawei Student Developers Community",
    role: "Core Team Member",
    period: "Nov 2023 — Dec 2024",
    description:
      "Contributed to the organization of online and on-site technical workshops and events. Coordinated GitHub trainings, developer-focused conferences, and community meetups. Supported community growth through active technical engagement.",
    tags: ["Huawei", "Developer Community", "Event Coordination", "Workshops"],
  },
  {
    id: "5",
    name: "BEU CYBER",
    role: "Core Team Member",
    period: "Oct 2022 — Feb 2023",
    description:
      "Received structured training on Linux systems, networking fundamentals, and core cybersecurity concepts. Practiced basic malware analysis including static inspection and behavioral understanding.",
    tags: ["Cybersecurity", "Linux", "Networking", "Malware Analysis"],
  },
];