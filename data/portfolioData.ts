export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  status?: string; // e.g. "In Progress"
  websiteUrl: string;
  githubUrl?: string;
  description: string;
  businessProblem: string;
  solution: string;
  myRole: string[];
  technicalAreas: {
    title: string;
    items: string[];
  }[];
  techStack: string[];
  challenges: string[];
  outcomes: string[];
  highlightMetrics?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
  }[];
}

export interface CapabilityItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  detailedPoints: string[];
}

export interface PhilosophyItem {
  id: string;
  title: string;
  statement: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  focus: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const PERSONAL_INFO = {
  name: "Krishna Dobariya",
  role: "Senior MERN Stack Developer | Full-Stack Engineer",
  experienceYears: "5+",
  tagline: "I build production-ready applications that solve real business problems.",
  subTagline: "5+ years of experience building scalable web applications across fintech, SaaS, e-commerce, AI, and real-time systems.",
  primaryBio: "From database architecture and backend systems to cloud deployment and third-party integrations, I build applications designed for real-world production environments.",
  secondaryBio: "I am Krishna Dobariya, a full-stack developer with 5+ years of experience building production-level web applications. My primary expertise lies in the MERN ecosystem, especially Node.js, React.js, MongoDB, MySQL, and Next.js. Throughout my career, I have worked across multiple domains including fintech, SaaS, e-commerce, AI-powered applications, and real-time systems.",
  thirdBio: "My responsibilities go far beyond writing frontend and backend code. I architect scalable databases, secure authentication and authorization systems, integrate multi-provider payment gateways, build third-party API integrations, configure cloud infrastructure, and manage CI/CD pipelines. The goal is always the same: build reliable software that solves the actual problem.",
  linkedInUrl: "https://www.linkedin.com/in/krishna-d-485593212/",
  primarySkills: ["Node.js", "React.js", "MongoDB", "MySQL", "Next.js", "AWS", "DigitalOcean"],
  additionalSkills: [
    "React Native",
    "Express.js",
    "Git",
    "CI/CD",
    "REST APIs",
    "Authentication & Authorization",
    "Payment Gateway Integration",
    "Third-Party API Integration",
    "Cloud Deployment & Infrastructure",
    "Database Architecture",
    "Production Application Development",
    "Monnify",
    "Monnova",
    "Veriff",
    "Fireblocks",
    "KVB",
    "Kora"
  ],
  thirdPartyApis: [
    "Monnify",
    "Monnova",
    "Veriff (KYC)",
    "Fireblocks (Crypto Custody)",
    "KVB (FX Rails)",
    "Kora (Payouts)",
    "PayID",
    "Stripe"
  ]
};

export const QUICK_STATS = [
  { value: "5+", label: "Years Experience", description: "Production Web & Backend Engineering" },
  { value: "Multiple", label: "Production Applications", description: "Fintech, Wealthtech, SaaS & AI Systems" },
  { value: "5+", label: "Core Technologies", description: "Node.js, React, Next.js, MongoDB, MySQL" },
  { value: "Multiple", label: "Business Domains", description: "Cross-Border Fintech, Wealthtech, NDIS SaaS, AI" }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "cashremit",
    name: "CashRemit",
    category: "Fintech / Currency Transfer",
    tagline: "International money transfer and currency remittance platform",
    websiteUrl: "https://www.cashremit.com.au/",
    description: "An Australian cross-border currency transfer and remittance platform designed for managing and creating international money transfers across multiple corridors (including Australia, Canada, and New Zealand) with instant deposit options such as PayID.",
    businessProblem: "Cross-border financial transactions require strict compliance, multi-currency rate transparency, zero-downtime transfer processing, and instant payment validation across diverse banking networks.",
    solution: "Developed robust backend transfer management workflows, integrated secure payment and PayID rails, structured relational/document data models for transactions, and implemented comprehensive recipient and KYC verification flows.",
    myRole: [
      "Engineered backend architecture and RESTful API endpoints for currency remittance workflows",
      "Designed database schemas for transaction states, exchange rates, and user recipient books",
      "Implemented secure authentication, authorization, and KYC verification pipelines (Veriff)",
      "Integrated payment rails (PayID, banking webhooks, KVB foreign exchange liquidity) for real-time transfer tracking",
      "Ensured production application stability, validation handling, and error telemetry"
    ],
    technicalAreas: [
      {
        title: "Backend & APIs",
        items: ["Node.js", "Express.js", "RESTful API Architecture", "Webhook Handlers", "Rate Calculation Engine"]
      },
      {
        title: "Database Architecture",
        items: ["Relational & Document DB Schema Design", "Transaction Consistency", "Audit Logging", "Ledger Data Models"]
      },
      {
        title: "Security & Payments",
        items: ["Role-Based Access Control", "Token-based Auth", "PayID", "KVB FX Rails", "Veriff KYC Integration"]
      },
      {
        title: "Deployment & Quality",
        items: ["Production Cloud Environment", "CI/CD Pipeline", "Error Tracking & Health Monitoring"]
      }
    ],
    techStack: ["Node.js", "Express.js", "React.js", "MongoDB", "MySQL", "PayID", "KVB Rails", "Veriff KYC", "REST APIs"],
    challenges: [
      "Maintaining state synchronization between asynchronous banking payment webhooks and user-facing transaction states",
      "Structuring resilient database models capable of tracking cross-currency ledger movements without discrepancy",
      "Enforcing strict input validation and security checks for sensitive financial and recipient data"
    ],
    outcomes: [
      "Production-grade currency transfer application powering cross-border transactions across multiple international corridors",
      "Seamless instant deposit integration supporting PayID and banking rails",
      "Scalable API and database foundation built for continuous transfer growth and compliance"
    ]
  },
  {
    id: "stazhin",
    name: "Stazhin",
    category: "Fintech / Banking / Digital Wallet",
    status: "Currently in Progress",
    tagline: "Multi-currency digital wallet, business verification, and card platform",
    websiteUrl: "https://stazhin-frontend.vercel.app/",
    description: "A financial platform supporting both personal and multi-user business accounts with multi-currency accounts (120+ countries, fiat and crypto), corporate/virtual/physical debit cards, P2P settlements, director document verification, and business onboarding workflows.",
    businessProblem: "Modern global businesses and individuals face high FX markups, fragmented crypto/fiat systems, and cumbersome business onboarding that delays international operations.",
    solution: "Building an end-to-end multi-currency financial platform featuring fast onboarding with director proof verification, instant virtual and physical card management, live FX conversion engines, and multi-tier role permissions.",
    myRole: [
      "Architected backend services and data structures for personal and corporate multi-currency wallets",
      "Developed business onboarding flows including director document and proof of business verification (Veriff)",
      "Integrated global payment and payout rails (Monnify, Monnova, Kora, KVB) and digital asset security (Fireblocks)",
      "Implemented authentication, passcode verification, token management, and multi-tenant security",
      "Engineered card provisioning, spending controls, and real-time status management features"
    ],
    technicalAreas: [
      {
        title: "Backend & Systems",
        items: ["Node.js", "Express.js", "Multi-Currency Wallet Architecture", "Card Management Services", "Verification Pipelines"]
      },
      {
        title: "Third-Party Integrations",
        items: ["Monnify", "Monnova", "Veriff", "Fireblocks", "KVB", "Kora Pay"]
      },
      {
        title: "Frontend & Full-Stack",
        items: ["Next.js", "React.js", "Responsive Dashboard", "Passcode & OTP Security UI", "Multi-theme Support"]
      },
      {
        title: "Database & Cloud",
        items: ["MongoDB", "MySQL", "Scalable Cloud Hosting", "Automated Deployment Workflows"]
      }
    ],
    techStack: ["Next.js", "React.js", "Node.js", "MongoDB", "MySQL", "Monnify", "Monnova", "Veriff", "Fireblocks", "Kora", "KVB"],
    challenges: [
      "Designing complex onboarding state machines handling multi-stage business verification and director documents",
      "Managing dual-rail architectures supporting both traditional fiat currencies and crypto ledger operations with Fireblocks",
      "Integrating heterogeneous global payout gateways (Monnify, Kora, Monnova) with unified webhook settlement"
    ],
    outcomes: [
      "Comprehensive multi-currency dashboard with instant virtual card ordering and spending controls",
      "Automated business and director onboarding verification pipeline",
      "High-performance full-stack codebase currently progressing toward production readiness"
    ]
  },
  {
    id: "fundswala",
    name: "Fundswala",
    category: "Fintech / Wealthtech & Mutual Funds",
    tagline: "Online mutual funds investment, SIP automation, and portfolio management platform",
    websiteUrl: "https://fundswala.com/",
    description: "An online mutual funds investment and wealth management platform offering Systematic Investment Plans (SIPs), lumpsum investments, goal-based planning (retirement, education, home purchase), and live portfolio NAV tracking across Indian Asset Management Companies (AMCs).",
    businessProblem: "Retail investors face significant friction navigating disparate AMC mutual fund catalogs, understanding risk profiles, executing recurring SIP bank mandates, and tracking consolidated portfolio performance in real time.",
    solution: "Engineered a comprehensive wealth management web platform enabling automated SIP workflows, lumpsum order processing, interactive financial goal calculators, live NAV data synchronization, and bank mandate payment integrations.",
    myRole: [
      "Architected full-stack web application modules and backend order routing for mutual fund transactions",
      "Designed relational and document database schemas to track user portfolios, asset allocations, and historical NAV records",
      "Implemented financial calculator algorithms for SIP compound growth, goal forecasting, and tax-saving estimations",
      "Integrated secure payment gateways and banking mandate verification workflows for recurring investments",
      "Built responsive investor dashboard with live fund performance metrics and portfolio rebalancing views"
    ],
    technicalAreas: [
      {
        title: "Backend & Calculation Engine",
        items: ["Node.js", "Express.js", "SIP Compound Calculators", "Order Routing APIs", "NAV Sync Cron Services"]
      },
      {
        title: "Database & Portfolio Tracking",
        items: ["MongoDB", "MySQL", "Portfolio Asset Ledgers", "Historical Fund Price Schemas"]
      },
      {
        title: "Security & Payments",
        items: ["Secure User Authentication", "Banking Mandates", "Payment Gateway Integration", "Data Encryption"]
      },
      {
        title: "Frontend & Full-Stack",
        items: ["React.js", "Interactive Goal Visualizers", "Responsive Investor Dashboard", "Fund Screener"]
      }
    ],
    techStack: ["Node.js", "Express.js", "React.js", "MongoDB", "MySQL", "REST APIs", "Payment Gateways", "Cloud Deployment"],
    challenges: [
      "Synchronizing live Net Asset Values (NAV) across hundreds of funds and updating consolidated investor balances",
      "Designing resilient financial calculation engines for compounding projections across custom time horizons",
      "Ensuring transactional consistency for mutual fund purchase orders and payment reconciliation"
    ],
    outcomes: [
      "Intuitive investment platform enabling seamless online mutual fund discovery, lumpsum orders, and SIP automation",
      "Goal-based planning tools helping users plan for retirement, education, and wealth creation",
      "Reliable backend architecture handling portfolio tracking and transactional data integrity"
    ]
  },
  {
    id: "ausmit",
    name: "Ausmit",
    category: "AI / Jewellery / E-commerce",
    tagline: "AI-powered jewellery ecosystem and multi-vendor platform",
    websiteUrl: "https://ausmit.in/",
    description: "An AI-powered jewellery ecosystem connecting retailers, manufacturers, and designers across India. The platform allows vendors to showcase digital storefronts and leverage an AI design workflow to generate jewellery concepts via style selections and prompts without needing traditional designers for early ideation.",
    businessProblem: "Traditional jewellery concept design is slow, expensive, and inaccessible for many small-to-medium retail vendors seeking to rapidly prototype custom designs for customers.",
    solution: "Created an AI-integrated multi-vendor platform where vendors can manage digital catalogs, securely process transactions, and generate AI-driven jewellery design variations on-demand based on custom design prompts.",
    myRole: [
      "Integrated AI generation workflows and prompt processing endpoints into the core application backend",
      "Architected multi-vendor product management catalog and digital storefront schemas",
      "Engineered secure REST APIs for vendor authentication, design requests, and asset delivery",
      "Designed high-performance database models for managing vendor catalogs and AI generation histories",
      "Optimized API response pipelines and image asset handling for high-resolution jewellery renders"
    ],
    technicalAreas: [
      {
        title: "AI Integration & APIs",
        items: ["AI Workflow Integration", "Prompt Processing Pipeline", "Generation Job Queues", "Design Asset Delivery"]
      },
      {
        title: "Backend & Multi-Vendor",
        items: ["Node.js Backend", "Vendor Storefront Architecture", "Catalog Management", "Order & Design Workflows"]
      },
      {
        title: "Database Architecture",
        items: ["MongoDB / MySQL Data Schemas", "Design Prompt Logs", "Vendor Access Models"]
      },
      {
        title: "Performance & Cloud",
        items: ["Cloud Asset Optimization", "Responsive Web Experience", "CI/CD Deployment"]
      }
    ],
    techStack: ["Node.js", "React.js", "MongoDB", "MySQL", "AI Integrations", "REST APIs", "Cloud Infrastructure"],
    challenges: [
      "Handling asynchronous AI generation pipelines while providing responsive real-time feedback to vendors",
      "Structuring multi-vendor data segregation to keep product lines and proprietary AI prompts isolated",
      "Delivering high-resolution visual assets efficiently across varied network conditions"
    ],
    outcomes: [
      "Operational AI-driven jewellery concept generation workflow reducing initial ideation turnaround",
      "Scalable multi-vendor digital platform connecting manufacturers, retailers, and design requests",
      "Reliable backend architecture supporting vendor catalog management and prompt generation jobs"
    ]
  },
  {
    id: "hubshift",
    name: "HubShift",
    category: "Business / SaaS Platform",
    tagline: "All-in-one NDIS CRM, scheduling, and rostering SaaS platform",
    websiteUrl: "https://hubshift.com.au/",
    description: "A purpose-built NDIS CRM, rostering, and compliance management platform for Australian disability service providers. Consolidates SIL house management, SCHADS-compliant rostering, mobile support worker shift notes/clock-off, participant budget tracking, and NDIS-ready claiming into one unified SaaS system.",
    businessProblem: "Disability service providers historically struggle with disconnected spreadsheets, rostering errors, SCHADS compliance risks, delayed shift notes, and tedious manual NDIS claims reconciliation.",
    solution: "Engineered a unified, multi-role SaaS platform with real-time rostering validation, mobile support worker logging, participant budget visibility, and automated NDIS claim file generation.",
    myRole: [
      "Developed core full-stack features across the web application and scheduling systems",
      "Architected complex database models for participants, rosters, compliance certificates, and billing records",
      "Implemented strict Role-Based Access Control (RBAC) across providers, coordinators, and support staff",
      "Built REST API endpoints for shift management, progress note submissions, and mobile clock-off",
      "Ensured cloud deployment reliability, audit trails, and data security standards for sensitive health records"
    ],
    technicalAreas: [
      {
        title: "Full-Stack SaaS",
        items: ["Next.js / React.js", "Node.js Backend", "Complex Shift Scheduling Logic", "Real-Time Roster Grid"]
      },
      {
        title: "Compliance & RBAC",
        items: ["Role-Based Access Control", "Audit Trails & Evidence Logging", "Document Expiry Triggers"]
      },
      {
        title: "Database & Claims",
        items: ["Structured Relational & Document Models", "NDIS Claim Data Formatting", "Budget Ledger Tracking"]
      },
      {
        title: "Cloud Infrastructure",
        items: ["Scalable Production Hosting", "CI/CD Pipeline", "Encrypted Data at Rest & in Transit"]
      }
    ],
    techStack: ["Next.js", "React.js", "Node.js", "MongoDB", "MySQL", "REST APIs", "Cloud Infrastructure", "CI/CD"],
    challenges: [
      "Modeling intricate rostering conflict validation and qualification checks before allowing shift publication",
      "Designing responsive, low-latency mobile interfaces for support workers submitting field progress notes",
      "Handling complex participant budget allocations across multiple core and community support categories"
    ],
    outcomes: [
      "Comprehensive multi-tenant SaaS CRM used by Australian NDIS providers to streamline daily operations",
      "Centralized single source of truth eliminating fragmented spreadsheets and manual audit panic",
      "High-uptime production application built with clean, maintainable TypeScript and Node.js architecture"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Engineering",
    description: "Architecting reliable, high-throughput backend services and secure APIs.",
    skills: [
      { name: "Node.js", featured: true },
      { name: "Express.js", featured: true },
      { name: "RESTful APIs", featured: true },
      { name: "Authentication (JWT / Session)", featured: true },
      { name: "Role-Based Access Control (RBAC)", featured: true },
      { name: "Microservice Workflows", featured: false },
      { name: "Error Handling & Logging", featured: false }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, modern, and performant web interfaces with clean architecture.",
    skills: [
      { name: "React.js", featured: true },
      { name: "Next.js (App / Pages)", featured: true },
      { name: "TypeScript / JavaScript", featured: true },
      { name: "React Native", featured: true },
      { name: "Responsive UI/UX", featured: false },
      { name: "Modern CSS", featured: false }
    ]
  },
  {
    id: "databases",
    title: "Databases & Data Modeling",
    description: "Designing structured schemas, indexing strategies, and reliable transactional data models.",
    skills: [
      { name: "MongoDB", featured: true },
      { name: "MySQL", featured: true },
      { name: "Schema & Document Modeling", featured: true },
      { name: "Indexing & Query Optimization", featured: false },
      { name: "Transactions & Data Consistency", featured: false }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Provisioning cloud environments, automated deployment pipelines, and server health.",
    skills: [
      { name: "AWS (EC2, S3, IAM)", featured: true },
      { name: "DigitalOcean", featured: true },
      { name: "CI/CD Pipelines", featured: true },
      { name: "Git", featured: true },
      { name: "Server Deployment", featured: false }
    ]
  },
  {
    id: "integrations",
    title: "Third-Party APIs & Financial Rails",
    description: "Connecting payment gateways, KYC engines, liquidity providers, and crypto custody.",
    skills: [
      { name: "Monnify", featured: true },
      { name: "Monnova", featured: true },
      { name: "Veriff (KYC)", featured: true },
      { name: "Fireblocks (Custody)", featured: true },
      { name: "KVB (FX Rails)", featured: true },
      { name: "Kora Pay", featured: true },
      { name: "PayID", featured: true },
      { name: "Stripe", featured: true }
    ]
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "backend-engineering",
    title: "Backend Engineering",
    shortDesc: "Building structured, scalable Node.js backends and APIs.",
    iconName: "Server",
    detailedPoints: [
      "Architecting clean, modular REST API services with consistent error handling and schema validation",
      "Designing asynchronous background task execution, job processing, and rate-limiting defenses",
      "Enforcing strict API versioning, automated payload validation, and defensive programming standards"
    ]
  },
  {
    id: "database-architecture",
    title: "Database Architecture",
    shortDesc: "Designing database structures for real-world applications using MongoDB and MySQL.",
    iconName: "Database",
    detailedPoints: [
      "Creating optimized document models in MongoDB and normalized relational schemas in MySQL",
      "Implementing efficient indexing strategies to maintain low-latency query performance at volume",
      "Managing database transactions, audit histories, and referential integrity across interconnected domains"
    ]
  },
  {
    id: "auth-rbac",
    title: "Authentication & Authorization",
    shortDesc: "Building secure user access, role-based permissions and onboarding workflows.",
    iconName: "ShieldCheck",
    detailedPoints: [
      "Engineering robust JWT, session, and passcode-based authentication pipelines",
      "Implementing multi-tenant Role-Based Access Control (RBAC) protecting endpoints and database records",
      "Building seamless KYC verification flows integrating Veriff and document validation"
    ]
  },
  {
    id: "payment-integrations",
    title: "Payment & Financial Rails",
    shortDesc: "Integrating payment gateways, FX liquidity, and global payout infrastructure.",
    iconName: "CreditCard",
    detailedPoints: [
      "Integrating payment processors: Monnify, Monnova, Kora, PayID, and Stripe",
      "Connecting foreign exchange liquidity rails (KVB) and crypto security custody (Fireblocks)",
      "Building idempotent webhook processing systems to guarantee zero double-charging or dropped events"
    ]
  },
  {
    id: "cloud-deployment",
    title: "Cloud & Deployment",
    shortDesc: "Deploying and managing applications using AWS, DigitalOcean and CI/CD workflows.",
    iconName: "Cloud",
    detailedPoints: [
      "Configuring automated CI/CD pipelines for zero-downtime rolling deployments",
      "Managing cloud server instances on AWS and DigitalOcean",
      "Monitoring system vitals and error telemetry in live production environments"
    ]
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    shortDesc: "Translating complex business requirements into practical software solutions.",
    iconName: "Cpu",
    detailedPoints: [
      "Evaluating technical trade-offs objectively to prioritize maintainability, security, and delivery speed",
      "Resolving complex production edge cases across fintech, SaaS, and AI domains"
    ]
  }
];

export const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    id: "architecture-first",
    title: "Architecture first",
    statement: "System foundations dictate product longevity.",
    description: "Before writing feature code, I structure clear data boundaries, modular layers, and predictable API contracts."
  },
  {
    id: "build-for-production",
    title: "Build for production",
    statement: "Code is only as good as its reliability in the wild.",
    description: "Every endpoint is built with defensive error handling, input sanitization, performance considerations, and telemetry."
  },
  {
    id: "keep-maintainable",
    title: "Keep systems maintainable",
    statement: "Simplicity beats unnecessary cleverness.",
    description: "I write clean, typed, and well-structured code that can be reasoned about and safely extended."
  },
  {
    id: "solve-real-problem",
    title: "Solve the real problem",
    statement: "Software exists to deliver business outcomes.",
    description: "I focus on understanding the core business workflows and user bottlenecks first."
  },
  {
    id: "think-beyond-ui",
    title: "Think beyond the UI",
    statement: "A great interface requires a bulletproof backend.",
    description: "User interfaces only shine when backed by resilient schemas, fast API response times, and data integrity."
  },
  {
    id: "design-for-scale",
    title: "Design for scale",
    statement: "Build for today's needs with tomorrow's growth in mind.",
    description: "Queries are indexed and services are decoupled so that scaling traffic does not require architectural rewrites."
  }
];

export const TECH_ECOSYSTEM_NODES = [
  { id: "react", label: "React.js", category: "Frontend", level: 95, icon: "Code2" },
  { id: "next", label: "Next.js", category: "Frontend", level: 92, icon: "Globe" },
  { id: "node", label: "Node.js", category: "Backend", level: 96, icon: "Server" },
  { id: "express", label: "Express.js", category: "Backend", level: 95, icon: "Layers" },
  { id: "mongo", label: "MongoDB", category: "Database", level: 94, icon: "Database" },
  { id: "mysql", label: "MySQL", category: "Database", level: 90, icon: "Table2" },
  { id: "aws", label: "AWS", category: "Cloud", level: 88, icon: "Cloud" },
  { id: "do", label: "DigitalOcean", category: "Cloud", level: 90, icon: "HardDrive" },
  { id: "git", label: "Git / CI/CD", category: "DevOps", level: 92, icon: "GitBranch" },
  { id: "reactnative", label: "React Native", category: "Mobile", level: 85, icon: "Smartphone" }
];

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "exp-senior",
    period: "5+ Years of Building Production Software",
    role: "Senior Full-Stack / MERN Engineer",
    focus: "Production Web Applications, Backend Architecture & Cloud Infrastructure",
    description: "Over 5+ years of hands-on professional engineering experience architecting, developing, deploying, and maintaining production-grade web applications across fintech, wealthtech, SaaS, e-commerce, AI, and real-time operational domains.",
    responsibilities: [
      "Architecting scalable backend architectures, RESTful API microservices, and database schemas with Node.js, Express, MongoDB, and MySQL",
      "Building rich, performant web applications and interactive dashboards using React.js, Next.js, and TypeScript",
      "Developing and securing authentication and authorization systems including multi-tenant RBAC, JWT, OTP, and director verification flows (Veriff)",
      "Integrating mission-critical financial workflows, payment gateways, and banking rails (PayID, Monnify, Monnova, Kora, KVB, Fireblocks, Stripe)",
      "Connecting third-party AI APIs, vendor ecosystems, and asynchronous task processing pipelines",
      "Managing cloud server infrastructure and automated CI/CD deployment pipelines on AWS and DigitalOcean",
      "Troubleshooting production edge cases, conducting performance optimizations, and providing ongoing production support"
    ],
    technologies: [
      "Node.js",
      "React.js",
      "MongoDB",
      "MySQL",
      "Next.js",
      "AWS",
      "DigitalOcean",
      "TypeScript",
      "Express.js",
      "Monnify",
      "Veriff",
      "Fireblocks",
      "Kora",
      "KVB",
      "PayID",
      "CI/CD"
    ]
  }
];


