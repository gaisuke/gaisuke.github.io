export const profile = {
  name: "Akhmad Dani Munif",
  title: "Software Engineer",
  summary:
    "Software Engineer with 5 years of professional experience building scalable backend systems and full-stack applications, primarily with Go, PostgreSQL, MySQL, Redis, Kafka, RabbitMQ, and React/Next.js. Experienced in fintech, aquaculture technology, and enterprise software environments. AI-native engineer who actively incorporates AI into day-to-day software engineering workflows, including implementation, debugging, code review, documentation, technical exploration, and development productivity. Familiar with AI application engineering concepts including LLM routing, guardrails, circuit breakers, model selection, and balancing model capability, latency, reliability, and cost.",
  location: "Jakarta, ID",
  phone: "+62 85172220597",
  email: "danimu.inbox@gmail.com",
  github: "github.com/gaisuke",
  wakatime: "wakatime.com/@gaisuke",
  medium: "medium.com/@danimunf",
};

export const experiences = [
  {
    company: "Bank Rakyat Indonesia",
    industry: "State-Owned Bank",
    location: "Jakarta, ID",
    title: "Software Engineer",
    type: "Contract",
    period: "Jun 2025 – Present",
    summary:
      "Contribute to the backend development of Qita by BRI, BRI's flagship mobile banking application, within the Investment Squad. Design and maintain scalable microservices supporting investment products while contributing to engineering coordination and development quality.",
    bullets: [
      "Design, develop, and maintain Go-based microservices supporting investment features and transaction flows in a high-scale banking environment.",
      "Build and enhance backend services with a focus on reliability, performance, maintainability, and secure transaction processing.",
      "Incorporate AI extensively into day-to-day engineering workflows for code exploration, implementation, debugging, refactoring, documentation, and technical problem solving.",
      "Use AI-assisted development as an engineering productivity layer while validating generated solutions against existing architecture, business rules, coding standards, and production constraints.",
      "Apply AI-assisted code review and analysis to identify potential issues, improve implementation quality, and accelerate investigation across unfamiliar codebases.",
      "Develop an understanding of AI application patterns including guardrails, circuit breakers, model routing, and selecting higher-capability versus lower-cost models based on task requirements.",
      "Collaborate with product managers, QA engineers, designers, and other engineers to translate business requirements into reliable technical implementations.",
      "Participate in planning, implementation reviews, and technical discussions to maintain delivery consistency and engineering quality.",
    ],
    stack: ["Go", "MySQL", "Redis", "Kafka", "RabbitMQ", "REST", "OpenShift"],
  },
  {
    company: "Moonlay Technologies",
    industry: "Information Technology",
    location: "Jakarta, ID",
    title: "Software Engineer",
    type: "Contract",
    period: "Dec 2024 – Mar 2025",
    summary:
      "Developed and maintained scalable microservices in Go for an integrated trading platform, while contributing to responsive and type-safe frontend features using React and TypeScript.",
    bullets: [
      "Developed backend services in Go for trading and securities-related workflows.",
      "Built responsive frontend features using React and TypeScript with Shadcn/UI.",
      "Collaborated with cross-functional teams to translate business requirements into reliable software implementations.",
      "Contributed to maintaining code quality and consistency across backend and frontend components.",
    ],
    stack: ["Go", "PostgreSQL", "React", "TypeScript", "Shadcn/UI", "Keycloak", "OKD"],
  },
  {
    company: "eFishery",
    industry: "Aquaculture Tech",
    location: "Bandung, ID (Remote)",
    title: "Software Engineer",
    type: "Full Time",
    period: "Jun 2022 – Oct 2024",
    summary:
      "Worked across backend and frontend development to build internal applications and scalable services supporting marketing, promotion, and referral initiatives.",
    bullets: [
      "Led development of an internal promotion dashboard supporting bulk creation and management of nationwide promotions.",
      "Built backend services for CSV-based bulk processing, including concurrent/chunked processing and fail-over reporting to improve operational efficiency.",
      "Developed referral tracking and user onboarding workflows across backend services and frontend applications.",
      "Implemented backend integration between referral activities and promotion issuance using Go and RabbitMQ.",
      "Built responsive internal applications using React, Next.js, TypeScript, and Refine.",
      "Collaborated with product and engineering teams to translate operational requirements into maintainable software solutions.",
    ],
    stack: [
      "Go", "PostgreSQL", "Redis", "RabbitMQ", "React", "Next.js", "TypeScript", "Refine", "Vite", "TailwindCSS", "Docker", "AWS/GCP",
    ],
  },
  {
    company: "Sunartha Putra Mandiri",
    industry: "IT Consultant",
    location: "Jakarta, ID (Remote)",
    title: "Frontend Web Developer",
    type: "Freelance",
    period: "Oct 2021 – Jun 2022",
    summary: "Developed and maintained frontend features for a custom enterprise ERP application.",
    bullets: [
      "Developed and maintained frontend features for a custom enterprise ERP application.",
      "Translated system analyst requirements into reusable and responsive React components.",
      "Integrated backend APIs and data sources into enterprise application workflows.",
      "Optimized interfaces for responsive behavior across desktop and mobile devices.",
    ],
    stack: ["ReactJS", "TypeScript", "Material UI", "Webpack", "TailwindCSS", "Swagger"],
  },
  {
    company: "MatchKerja",
    industry: "All-in-One Career Services",
    location: "Jakarta, ID (Remote)",
    title: "Frontend Web Developer",
    type: "Freelance",
    period: "Feb 2021 – Aug 2021",
    summary: "Re-engineered a legacy template-based interface into a customized React application.",
    bullets: [
      "Re-engineered a legacy template-based interface into a customized React application.",
      "Developed reusable React components based on evolving business requirements.",
      "Integrated backend APIs and data streams with frontend workflows.",
      "Collaborated with cross-functional teams to transform operational requirements into functional software.",
    ],
    stack: ["ReactJS", "Material UI", "Laravel", "Blade", "Alpine.js", "TailwindCSS", "Livewire", "MySQL"],
  },
];

export const aiNative = [
  {
    title: "AI-Assisted Development",
    description:
      "Daily use of AI throughout software implementation, debugging, refactoring, code review, documentation, and technical research.",
  },
  {
    title: "Context Engineering",
    description:
      "Structuring relevant codebase, requirements, architecture, and technical context to improve AI-assisted engineering output.",
  },
  {
    title: "LLM Routing",
    description:
      "Understanding task-based routing between higher-capability and lower-cost models based on complexity, latency, and cost considerations.",
  },
  {
    title: "Guardrails",
    description:
      "Understanding mechanisms for constraining and validating AI behavior and outputs within application workflows.",
  },
  {
    title: "Circuit Breakers & Reliability",
    description:
      "Understanding failure-handling patterns for AI/LLM dependencies, including fallback and circuit-breaker approaches.",
  },
  {
    title: "AI Engineering Trade-offs",
    description:
      "Familiar with balancing model capability, cost, latency, reliability, and output quality when incorporating AI into application systems.",
  },
  {
    title: "AI-Augmented Code Review",
    description:
      "Using AI to analyze unfamiliar codebases, identify potential issues, validate implementation approaches, and accelerate engineering feedback loops.",
  },
];

export const education = {
  school: "Jember University",
  degree: "Bachelor of Computer Science — Major in Information System",
  location: "Jember, ID",
  period: "2016 – Jan 2022",
  details: [
    "Cumulative GPA: 3.58/4.0 · Bidikmisi Scholarship (2016–2020)",
    "Programming mentor for junior-year students (2017, 2018, 2019)",
    "Coursework: Algorithms and Data Structures; Object-Oriented Programming; Web Programming",
  ],
};

export const credentials = {
  certifications: [
    { name: "eFishery Academy — Software Engineer Golang", issuer: "eFishery", date: "Jun 2022" },
    { name: "Problem Solving Basic", issuer: "HackerRank", date: "Mar 2022" },
    { name: "Online Front-End Coding Training", issuer: "Progate Indonesia", date: "Nov 2020" },
  ],
  languages: ["Bahasa Indonesia (native)", "English (fluent)"],
  aiEngineering: [
    "LLM Applications",
    "AI-Assisted Software Development",
    "Context Engineering",
    "LLM Routing",
    "Guardrails",
    "Circuit Breakers",
    "AI-Augmented Code Review",
  ],
};

export const projects = [
  {
    name: "ProfX",
    subtitle: "AI-Powered Job Screening Evaluator",
    description:
      "An open-source backend service that automates candidate evaluation by analyzing uploaded CVs and project reports to determine job-fit criteria.",
    url: "https://github.com/gaisuke/profx",
    stack: ["Go", "REST API", "RAG", "AI Integration", "OCR", "Vector DB"],
  },
];

export const reflections = [
  {
    title: "Saya Baru Sadar: Ini Bukan Capek Biasa",
    description: "Beberapa sprint terakhir, pace development di tim saya lagi kencang-kencangnya.",
    date: "Apr 1, 2026",
    url: "https://medium.com/@danimunf/saya-baru-sadar-ini-bukan-capek-biasa-ccb069f32659",
  },
  {
    title: "Mendelegasikan Pekerjaan Bukanlah Tanda Kelemahan",
    description: "Tulisan kali ini mungkin tidak terlalu eksplisit tentang engineering atau software development.",
    date: "Mar 28, 2026",
    url: "https://medium.com/@danimunf/mendelegasikan-pekerjaan-bukanlah-tanda-kelemahan-54a6cafe18c4",
  },
  {
    title: "Best Practices Itu Panduan, Bukan Kitab Suci",
    description: "Ada satu fase dalam hidup saya sebagai software engineer di mana saya mulai sangat peduli dengan sesuatu yang disebut best practices.",
    date: "Mar 24, 2026",
    url: "https://medium.com/@danimunf/best-practices-itu-panduan-bukan-kitab-suci-73fde82236dd",
  },
  {
    title: "Nulis yang Penting? Yang Penting Nulis",
    description: "Sebuah refleksi tentang kenapa menulis itu tetap penting, meski terasa sulit untuk memulai.",
    date: "Mar 18, 2024",
    url: "https://medium.com/@danimunf/nulis-yang-penting-yang-penting-nulis-e2c1f734aad4",
  },
  {
    title: "What I Know About Him from Injury Time",
    description: "A reflection written in the nick of time — on people, moments, and what lingers after.",
    date: "Apr 13, 2023",
    url: "https://medium.com/@danimunf/what-i-know-about-him-from-injury-time-90b4589be1df",
  },
  {
    title: "Lessons from Moments of Uncertainty",
    description: "I thought I lost them, for a second…",
    date: "Apr 12, 2023",
    url: "https://medium.com/@danimunf/lessons-from-moments-of-uncertainty-f15f8ef41629",
  },
  {
    title: "Belum Cukup Sempurna, Masih Banyak Salah",
    description: "Entah darimana saya harus memulai tulisan ini.",
    date: "Apr 10, 2023",
    url: "https://medium.com/@danimunf/belum-cukup-sempurna-masih-banyak-salah-f97deb305e02",
  },
  {
    title: "The Struggle of Self-Doubt and Perfectionism in Writing",
    description: "On the invisible barriers that keep writers from hitting publish.",
    date: "Apr 9, 2023",
    url: "https://medium.com/@danimunf/the-struggle-of-self-doubt-and-perfectionism-in-writing-f81a613545a8",
  },
  {
    title: "Tak Kenal, Maka Kenalan",
    description: "Sebuah refleksi 6 bulan merantau (pertama kali) ke Bandung.",
    date: "Apr 8, 2023",
    url: "https://medium.com/@danimunf/tak-kenal-maka-kenalan-a457d458172a",
  },
  {
    title: "Asynchronous Communication in a Nutshell",
    description: "As a new eFisherian, I'm grateful for the privilege of async communication and remote work.",
    date: "Apr 5, 2023",
    url: "https://medium.com/@danimunf/asynchronous-communication-in-a-nutshell-7971546e511",
  },
];
