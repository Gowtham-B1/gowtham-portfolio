export const personalInfo = {
  name: "Gowtham B",
  title: "Computer Science Engineering Student / Full-Stack & AI Developer",
  shortRole: "Full-Stack Developer • AI Enthusiast • Problem Solver",
  tagline: "I build practical web, mobile, and AI-powered applications that solve real-world problems.",
  email: "balakrishnanvijayarani07@gmail.com",
  phone: "+91 6382528485",
  location: "Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/gowtham-b-4172382a2",
  github: "https://github.com/gowtham-b", // Clean placeholder
  resumePdf: "/Gowtham_Resume_Current.pdf",
  summary:
    "Pursuing a Computer Science degree from K.L.N. College of Engineering, passionate about creating dynamic websites and mobile apps. Interested in building scalable applications and continuously improving technical knowledge in modern technologies, and actively working to improve technical abilities through hands-on projects.",
  cgpa: "8.79 / 10 (up to 6th semester)",
  college: "K.L.N. College of Engineering",
  degree: "Bachelor of Engineering in Computer Science",
  gradYear: "2023–2027",
  school: "Oxford Matriculation Higher Secondary School",
  schoolScore: "82.5%",
  availability: "Available for Internships & Engineering Roles"
};

export const softSkills = [
  "Leadership",
  "Teamwork",
  "Problem-Solving",
  "Logical Thinking"
];

export const techStackCategories = [
  {
    category: "PROGRAMMING LANGUAGES",
    key: "languages",
    skills: [
      { name: "Python", context: "Applied for AI models, Gemini API pipelines, Gradio interfaces, and data scripts" },
      { name: "C", context: "Foundational systems programming, memory management, and algorithm implementation" },
      { name: "Java", context: "Object-oriented software design, robust backend concepts, and core engineering" },
      { name: "JavaScript", context: "Core language for full-stack web platforms, async APIs, and dynamic clients" }
    ]
  },
  {
    category: "FRONTEND ENGINEERING",
    key: "frontend",
    skills: [
      { name: "React.js", context: "Component architecture, hooks, state management, and modern responsive SPAs" },
      { name: "React Native CLI", context: "Native mobile development for HSDE, mobile workflows, camera & media handling" },
      { name: "JavaScript (ES6+)", context: "Modern async/await paradigms, DOM APIs, modular frontend architecture" },
      { name: "HTML5", context: "Semantic web standards, accessibility hierarchy, structured content" },
      { name: "CSS3", context: "Responsive layouts, Flexbox, Grid, custom styling systems, and design tokens" }
    ]
  },
  {
    category: "BACKEND & APIS",
    key: "backend",
    skills: [
      { name: "Node.js", context: "Event-driven runtime for scalable micro-services and server applications" },
      { name: "Express.js", context: "RESTful API design, middleware pipelines, and role-based route guards" },
      { name: "FastAPI", context: "High-performance Python backend for AI inference, typing, and async endpoints" }
    ]
  },
  {
    category: "DATABASES & CLOUD STORAGE",
    key: "database",
    skills: [
      { name: "MongoDB", context: "Document data modeling, aggregations, indexing, and scalable schema design" },
      { name: "MongoDB Atlas", context: "Cloud database clusters, remote lifecycle tracking, and replica synchronization" },
      { name: "MySQL", context: "Relational database schema design, ACID transactions, and structured querying" },
      { name: "Firebase", context: "Firebase Auth, Google Sign-In integration, and real-time app services" }
    ]
  },
  {
    category: "AI & COMPUTER VISION",
    key: "ai",
    skills: [
      { name: "YOLOv11n", context: "Real-time object detection and item verification for donation evidence analysis" },
      { name: "EasyOCR", context: "Optical character recognition for packaging text, labels, and quantity evidence" },
      { name: "Gemini AI", context: "Multimodal image understanding, historical artifact reasoning, and prompt engineering" },
      { name: "gTTS", context: "Google Text-to-Speech synthesis for automated audio tour narration in Museart" }
    ]
  },
  {
    category: "TOOLS & COLLABORATION",
    key: "tools",
    skills: [
      { name: "Git & Version Control", context: "Branch workflows, code reviews, collaboration, and repository management" },
      { name: "Microsoft Office Tools", context: "Technical reporting, documentation, presentations, and data organization" },
      { name: "Gradio", context: "Interactive UI prototyping for machine learning models and computer vision pipelines" }
    ]
  }
];

export const projects = [
  {
    id: "hospireo",
    number: "01",
    name: "Hospireo",
    tagline: "Healthcare Appointment Platform",
    badge: "Team-Led Major Project",
    category: "Full-Stack Web",
    type: "Healthcare Platform",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    shortDescription:
      "A comprehensive healthcare web platform developed to help users effortlessly locate nearby hospitals and doctors, explore medical departments, and book digital appointments to simplify patient scheduling.",
    problem:
      "Patients frequently face friction discovering verified local medical specialists, navigating departmental hierarchies, and scheduling appointments without long clinic waiting queues.",
    solution:
      "Engineered an intuitive end-to-end healthcare booking portal featuring real-time hospital geolocation, doctor specialty directories, structured department listings, and digital appointment slots.",
    features: [
      "Hospital & Doctor Discovery: Geolocation-assisted listing of verified clinics, hospitals, and medical practitioners.",
      "Departmental Organization: Structured navigation across Cardiology, Orthopedics, Pediatrics, General Medicine, and more.",
      "Digital Appointment Scheduling: Direct patient-to-doctor booking flow with date, time, and patient record collection.",
      "Administrative Panel: Interface for clinics to update availability, doctor schedules, and manage active patient queues."
    ],
    role: "Team Lead & Full-Stack Developer",
    contribution:
      "Spearheaded the technical roadmap, coordinated sprint tasks across team members, architected the Express.js REST API layer, designed MongoDB schemas for users, doctors, and bookings, and built responsive patient interfaces.",
    architecture: [
      "Client Layer: Responsive frontend built with semantic HTML5, modern CSS3 layouts, and vanilla JS state management.",
      "Application Server: Node.js & Express.js REST API handling authentication, appointment validation, and routing.",
      "Data Layer: MongoDB database structured for flexible doctor profiles, availability intervals, and patient records."
    ],
    challenges: [
      "Handling real-time scheduling slot conflicts and preventing double bookings across overlapping patient requests.",
      "Designing an accessible, clean UI suitable for diverse demographics including non-tech-savvy patients."
    ],
    accentColor: "#D65A31",
    visualType: "healthcare"
  },
  {
    id: "embook",
    number: "02",
    name: "e-MBook",
    tagline: "Digital Measurement Book System for Rural Development & Panchayat Raj",
    badge: "Government / Enterprise Workflow",
    category: "Enterprise System",
    type: "GovTech & Civic Infrastructure",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    shortDescription:
      "A secure, full-stack enterprise web application engineered to digitize the traditional government Measurement Book (M.Book) process for the Rural Development & Panchayat Raj Department with strict hierarchical approval workflows.",
    problem:
      "Government public works measurement books historically relied on physical paper ledgers, causing verification delays, loss of audit trails, manual calculation discrepancies, and prolonged tender clearance cycles across administrative tiers.",
    solution:
      "Developed a robust digital workflow platform mapping the official hierarchy (JE → AE → AEE → EE → SE → CE) with role-based cryptographic-style access control, automated rate analysis, measurement entry verification, and instantaneous PDF audit reports.",
    features: [
      "Strict Multi-Tier RBAC: Engineered tailored dashboards and permission tiers for 6 levels of engineering officials (CE, SE, EE, AEE, AE, JE).",
      "Measurement Entry & Verification: Digital entry of site dimensions, works completed, quantity surveying, and material metrics.",
      "Tender Management & Material Rates: Real-time tracking of public works contracts, sanctioned budgets, and dynamic schedule of rates (SoR).",
      "Automated Audit Reports: Real-time progress monitoring dashboards with automated generation of official inspection and measurement summaries."
    ],
    role: "Full-Stack System Architect & Developer",
    contribution:
      "Designed the complete hierarchical approval engine in Express.js, structured the role-based middleware guards, modeled MongoDB collections for tender lifecycles and inspection trails, and created the responsive departmental dashboards.",
    architecture: [
      "Access Guard: Middleware-level role verification ensuring lower-tier entries (JE) pass sequentially up the chain to the Chief Engineer (CE).",
      "Core Ledger API: Express endpoints managing immutable measurement revisions, status flags (Submitted, Inspected, Approved, Rejected), and tender budgets.",
      "Persistence: MongoDB replica store preserving strict historical timestamps and audit trails for civic transparency."
    ],
    challenges: [
      "Implementing non-repudiation and strict sequential authorization rules where an entry cannot bypass intermediate engineering ranks.",
      "Creating tabular measurement input forms capable of complex calculations while remaining performant on low-bandwidth field devices."
    ],
    accentColor: "#8A9A5B",
    visualType: "enterprise"
  },
  {
    id: "hsde",
    number: "03",
    name: "HSDE",
    tagline: "Hyperlocal Smart Donation Engine",
    badge: "Full-Stack + Mobile + AI + Computer Vision",
    category: "Mobile & Applied AI",
    type: "Hyperlocal Civic & AI Platform",
    technologies: [
      "React Native CLI",
      "TypeScript",
      "FastAPI",
      "MongoDB Atlas",
      "Firebase",
      "YOLOv11n",
      "EasyOCR"
    ],
    shortDescription:
      "A next-generation mobile and AI-powered platform connecting donors, NGOs, and volunteers with end-to-end donation lifecycles, backed by computer vision (YOLOv11n + EasyOCR) for automated item validation, quantity estimation, and explainable scoring.",
    problem:
      "Grassroots charitable donations suffer from supply-demand mismatches, unverified or damaged goods, lack of transparent logistics, and high manual triage overhead for volunteer coordinators.",
    solution:
      "Built a unified cross-platform mobile system (React Native CLI) powered by an asynchronous FastAPI backend that validates donated items via deep learning (YOLOv11n) and OCR text extraction, calculates an explainable item quality score, and coordinates donor-NGO fulfillment.",
    features: [
      "AI Verification Pipeline: Integrated YOLOv11n for instant item category detection paired with EasyOCR for label, expiry, and quantity analysis.",
      "Explainable AI Quality Scoring: Generates rule-based transparent score breakdowns for donation suitability before dispatch.",
      "End-to-End Fulfillment Lifecycle: Request creation, volunteer route assignment, secure pickup/delivery verification, and status tracking.",
      "Direct Donor-NGO Communications: Real-time messaging, media exchange, and coordinated logistics via Firebase and FastAPI.",
      "Enterprise Identity: Firebase Authentication with Google Sign-In and Role-Based Access Control for Donors, NGOs, and Field Volunteers."
    ],
    role: "Lead Full-Stack Mobile & AI Engineer",
    contribution:
      "Developed the React Native mobile application using TypeScript, built the high-throughput FastAPI inference server, integrated the YOLOv11n object detector and EasyOCR pipelines, designed MongoDB Atlas schemas, and implemented Firebase RBAC.",
    architecture: [
      "Mobile Client: React Native CLI + TypeScript with native camera integration, offline cache, and real-time state listeners.",
      "AI Gateway: FastAPI microservice orchestrating YOLOv11n tensor inference and EasyOCR text extraction on uploaded media.",
      "Data Core: MongoDB Atlas cloud cluster storing donation lifecycles, volunteer logs, and audit trails."
    ],
    challenges: [
      "Optimizing computer vision latency on asynchronous mobile image uploads without blocking user interaction.",
      "Harmonizing disparate evidence (bounding boxes, OCR text fragments, user inputs) into an explainable heuristic score."
    ],
    accentColor: "#D65A31",
    visualType: "mobile_ai"
  },
  {
    id: "museart",
    number: "04",
    name: "Museart",
    tagline: "AI-Powered Artifact Description System",
    badge: "Computer Vision & Multimodal Speech",
    category: "Applied AI",
    type: "Heritage & Multimodal AI",
    technologies: ["Python", "Gemini AI", "Gradio", "gTTS"],
    shortDescription:
      "An intelligent multimodal cultural heritage system that analyzes museum artifact imagery with Gemini AI to generate rich historical context, artistic breakdowns, and synchronous audio narration.",
    problem:
      "Museum visitors often lack accessible, multilingual, and engaging interpretive context for historical relics, while museums face high costs deploying dedicated audio-guide hardware.",
    solution:
      "Created an interactive vision-to-speech platform where users upload artifact photos, Gemini AI interprets visual motifs and historical origins, and Google TTS converts the contextual narrative into immersive spoken audio.",
    features: [
      "Multimodal Visual Analysis: Leverages Gemini AI to interpret intricate artifact features, materials, historical eras, and cultural iconography.",
      "Automated Spoken Narration: Integrated gTTS (Google Text-to-Speech) to generate clear, pacing-controlled voiceover audio for hands-free listening.",
      "Interactive Gradio Web GUI: Clean, responsive user interface allowing instant image upload, live transcription rendering, and audio playback.",
      "Contextual Prompt Engineering: Custom system prompts tuned to deliver curated, historically accurate, and engaging museum-grade summaries."
    ],
    role: "AI Developer & System Architect",
    contribution:
      "Designed the end-to-end Python pipeline, formulated the Gemini AI prompt engineering schema for artifact classification, integrated gTTS audio rendering, and implemented the interactive Gradio interface.",
    architecture: [
      "Vision Pipeline: Python backend receives artifact image, validates dimensions, and passes encoded frames to Gemini AI.",
      "Synthesis Layer: Extracted textual historical narrative is synthesized into streaming audio via gTTS.",
      "Interface: Gradio interactive reactive blocks with instant visual feedback and audio waveform playback."
    ],
    challenges: [
      "Crafting system prompts that avoid AI hallucinations while maintaining engaging, museum-curator grade narrative prose.",
      "Minimizing audio generation latency to provide instantaneous playback on artifact upload."
    ],
    accentColor: "#8A9A5B",
    visualType: "multimodal"
  }
];

export const experienceTimeline = [
  {
    period: "Jan 2026 – Dec 2026",
    role: "IRP Aspirant",
    organization: "K.L.N. Innovation & Research Park (KLN.IRP)",
    institution: "K.L.N College of Engineering",
    description:
      "Selected as an Aspirant at KLN.IRP to engage in advanced technical research, prototype development, and hands-on engineering innovation. Working on sustainable smart systems, data-driven frameworks, and industry-oriented technology incubation.",
    tag: "Research & Incubation",
    highlights: [
      "Conducted exploratory research in sustainable smart systems and data-driven optimization",
      "Collaborated on multidisciplinary engineering prototypes within the institutional innovation ecosystem",
      "Contributed to conference research publications and technical whitepapers"
    ]
  },
  {
    period: "2026",
    role: "MERN Stack Development Intern",
    organization: "ELYSIUM",
    institution: "Industry Internship",
    description:
      "Engaged in hands-on MERN stack engineering, designing full-stack modular components, connecting RESTful Express.js backends to MongoDB instances, and implementing client-side state handling in React.",
    tag: "Full-Stack Development",
    highlights: [
      "Developed production-style full-stack features using React, Node.js, Express, and MongoDB",
      "Implemented secure API endpoints and optimized database query patterns",
      "Strengthened enterprise web development practices and clean code standards"
    ]
  },
  {
    period: "2025",
    role: "Full Stack Web Development Intern",
    organization: "VINSUP",
    institution: "Industry Internship",
    description:
      "Engineered responsive web applications, implemented dynamic frontend interfaces, and collaborated on server-side logic and database connectivity.",
    tag: "Web Engineering",
    highlights: [
      "Constructed modular UI components with responsive layouts across diverse screen sizes",
      "Assisted in backend service implementation and API endpoint validation",
      "Applied structured version control workflows in collaborative code repositories"
    ]
  },
  {
    period: "July 2025 – Aug 2025",
    role: "Front-End Development Intern",
    organization: "Cognifyz Technologies",
    institution: "Industry Internship",
    description:
      "Built and polished interactive front-end web interfaces with emphasis on modern design principles, responsiveness, and web accessibility standards.",
    tag: "Frontend & UI/UX",
    highlights: [
      "Authored semantic HTML5, modern CSS3 styling, and clean JavaScript modules",
      "Conducted cross-browser compatibility testing and responsive UI optimizations",
      "Enhanced user experience through accessible, intuitive interface designs"
    ]
  }
];

export const researchPapers = [
  {
    id: "digital-twin",
    title:
      "Digital Twin Technology for Sustainable Smart Systems: A Data-Driven Framework for Engineering Optimization",
    venue: "International Conference on Sustainable Development in Engineering and Technology (ICSDET'26)",
    institution: "K.L.N. College of Engineering",
    status: "Presented & Published in Conference Proceedings",
    type: "Refereed Conference Research Paper",
    abstract:
      "Investigates the intersection of cyber-physical systems, real-time sensor telemetry, and digital twin models to achieve predictive optimization in smart engineering infrastructure. Proposes a data-driven architecture to simulate operational dynamics, reduce energy consumption, and extend asset lifecycle sustainability.",
    topics: ["Digital Twins", "Smart Systems", "Data-Driven Optimization", "Cyber-Physical Systems", "Sustainability"]
  },
  {
    id: "quantum-computing",
    title: "Quantum Computing: The Future of Computational Technology",
    venue: "Technical Paper Presentation",
    institution: "Engineering Symposium",
    status: "Presented Technical Paper",
    type: "Technical Research Presentation",
    abstract:
      "Explores quantum mechanical phenomena—superposition, entanglement, and quantum interference—and their computational implementations. Analyzes quantum gate paradigms, potential breakthroughs in NP-hard optimization problems, cryptographic implications, and modern quantum algorithm frameworks.",
    topics: ["Quantum Computing", "Qubits & Superposition", "Quantum Cryptography", "Computational Complexity"]
  }
];

export const achievements = [
  {
    title: "Research Paper Presentation at ICSDET'26",
    category: "Academic Research",
    date: "2026",
    organization: "K.L.N. College of Engineering",
    description:
      "Authored and presented 'Digital Twin Technology for Sustainable Smart Systems: A Data-Driven Framework for Engineering Optimization' at the International Conference on Sustainable Development in Engineering and Technology.",
    badge: "International Conference"
  },
  {
    title: "Selected for Nimirndhu Nil Hackathon Ideation Camp (Level 2)",
    category: "Hackathon",
    date: "2025–2026",
    organization: "EDII Tamil Nadu (Entrepreneurship Development & Innovation Institute)",
    description:
      "Selected through rigorous technical evaluation to advance to Level 2 Ideation Camp organized by EDII Tamil Nadu, developing high-impact innovative solutions for regional challenges.",
    badge: "State Level Selection"
  },
  {
    title: "Consolation Prize – Scientific Model Contest (TECHNOZARE 2K24)",
    category: "Innovation & Hardware Contest",
    date: "2024",
    organization: "National Science Day 2024, K.L.N. College of Engineering",
    description:
      "Awarded prize for conceiving and engineering 'Anti-Sleep Alarm for Driver (Accident Prevention)'—an embedded sensor system detecting drowsiness to prevent road accidents.",
    badge: "Prize Winner"
  },
  {
    title: "Team Lead – Hospireo Healthcare Platform",
    category: "Leadership",
    date: "2025–2026",
    organization: "Project Engineering",
    description:
      "Spearheaded a dedicated engineering team in planning, architecting, and successfully delivering the Hospireo healthcare discovery and appointment platform.",
    badge: "Project Team Lead"
  },
  {
    title: "Smart India Hackathon (SIH) – College Level",
    category: "Hackathon",
    date: "2024–2025",
    organization: "Ministry of Education / K.L.N. College of Engineering",
    description:
      "Certified at the college level of Smart India Hackathon for developing problem-solving software architectures aimed at national challenges.",
    badge: "Certified"
  },
  {
    title: "Symposium Coordinator: Techgenio & Technozare",
    category: "Event Leadership",
    date: "2024–2025",
    organization: "K.L.N. College of Engineering",
    description:
      "Organized and coordinated collegiate symposiums, managing technical coding contests, paper presentation tracks, logistics, and student delegations.",
    badge: "Coordinator"
  },
  {
    title: "Technical Paper Presentation: Quantum Computing",
    category: "Technical Paper",
    date: "2024",
    organization: "Collegiate Technical Forum",
    description:
      "Delivered an in-depth presentation on 'Quantum Computing: The Future of Computational Technology', examining quantum algorithms and future computational horizons.",
    badge: "Paper Presenter"
  },
  {
    title: "Inter-College Symposium Participation",
    category: "Technical Competitions",
    date: "2025–2026",
    organization: "SIT-GEN ERA 2K26 & MEPCO 2K25",
    description:
      "Active participant representing the department across coding, technical challenges, and symposium events at SIT-GEN ERA 2K26 and MEPCO 2K25.",
    badge: "Delegation"
  }
];

export const certifications = [
  {
    title: "Full Stack Development",
    issuer: "NoviTech",
    period: "Jan–Feb 2026",
    type: "Professional Certification",
    skills: ["Full Stack Architecture", "REST APIs", "Modern Web Development"]
  },
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    period: "Jan–Apr 2025",
    type: "Academic Certification",
    skills: ["Cybersecurity", "Social Media Privacy", "Data Protection"]
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    period: "Jul–Oct 2025",
    type: "Academic Certification",
    skills: ["Cloud Architecture", "Distributed Systems", "Virtualization"]
  },
  {
    title: "Ethical Hacking",
    issuer: "NPTEL",
    period: "Jul–Oct 2025",
    type: "Academic Certification",
    skills: ["Network Security", "Vulnerability Assessment", "Penetration Testing"]
  },
  {
    title: "MERN Stack Development Internship",
    issuer: "ELYSIUM",
    period: "2026",
    type: "Internship Certificate",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"]
  },
  {
    title: "Full Stack Web Development Internship",
    issuer: "VINSUP",
    period: "2025",
    type: "Internship Certificate",
    skills: ["Full Stack Web", "Database Design", "Client-Server Logic"]
  },
  {
    title: "Front-End Development Internship Certificate",
    issuer: "Cognifyz Technologies",
    period: "July–Aug 2025",
    type: "Internship Certificate",
    skills: ["Responsive UI", "Semantic HTML5", "JavaScript"]
  },
  {
    title: "Generative AI Project Bootcamp",
    issuer: "Raam Techlink Private Limited",
    period: "9 Aug 2025",
    type: "Hands-on Bootcamp",
    skills: ["Generative AI", "LLM Integration", "Prompt Engineering"]
  },
  {
    title: "Front-End Development Course",
    issuer: "AWLRI, Red Rivers Labs",
    period: "2025",
    type: "Technical Course",
    skills: ["Frontend Frameworks", "CSS Architecture", "Modern Web"]
  }
];

export const educationHistory = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "K.L.N. College of Engineering",
    period: "2023–2027",
    score: "CGPA: 8.79 / 10 (up to 6th semester)",
    status: "Currently Pursuing (Final Year Aspirant)",
    details:
      "Core coursework in Data Structures, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Artificial Intelligence. Active participant in innovation labs and technical symposiums.",
    highlights: ["CGPA 8.79 / 10", "IRP Aspirant @ KLN.IRP", "Team Lead & Event Coordinator"]
  },
  {
    degree: "Higher Secondary Education (HSC)",
    institution: "Oxford Matriculation Higher Secondary School",
    period: "Completed 2023",
    score: "82.5%",
    status: "Graduated",
    details:
      "Comprehensive foundations in Mathematics, Physics, Chemistry, and Computer Science, fostering logical analysis and programming fundamentals.",
    highlights: ["82.5% Academic Score", "Science & Mathematics Stream"]
  }
];
