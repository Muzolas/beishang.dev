export const profile = {
  name: "Muzaffer Beysan Kalem",
  alias: "beishang",
  title: "Software Engineer",
  role: "Backend & System Design Specialist",
  tagline:
    "Building reliable, scalable backend architectures with C# / .NET Core, PostgreSQL, and modern web tech. AI-assisted development workflow enthusiast.",
  location: "Osmaniye, Turkey",
  email: "mbk95mbk95@gmail.com",
  github: "https://github.com/Muzolas",
  githubHandle: "github.com/Muzolas",
  linkedin: "https://linkedin.com/in/muzafferbeysankalem",
  linkedinHandle: "linkedin.com/in/muzafferbeysankalem",
}

export const skillGroups = [
  {
    title: "Backend & API",
    accent: "emerald" as const,
    skills: ["C#", ".NET Core", "RESTful API", "RabbitMQ", "Go", "OOP", "Clean Code"],
  },
  {
    title: "Database",
    accent: "indigo" as const,
    skills: ["PostgreSQL", "SQLite", "Veritabanı Tasarımı", "Query Optimization"],
  },
  {
    title: "Frontend & Mobile",
    accent: "emerald" as const,
    skills: ["React.js", "Flutter", "Dart", "UI/UX"],
  },
  {
    title: "AI Dev",
    accent: "indigo" as const,
    skills: ["Cursor", "GitHub Copilot", "Claude", "Gemini"],
  },
  {
    title: "Architecture & DevOps",
    accent: "emerald" as const,
    skills: ["System Design", "OpenMP/MPI", "Docker", "Git", "Linux", "Coolify"],
  },
]

export const projects = [
  {
    name: "NexusApp — Indie Control Center (ICC)",
    status: "In Progress",
    description:
      "Desktop app for indie hackers managing revenue tracking, deployments (CI/CD), and user data in one dashboard. Local-first architecture (SQLite, Drift) synced with Supabase & PowerSync, Go BFF layer, Stripe webhooks.",
    tech: ["Flutter", "Dart", "Go", "SQLite", "Supabase", "PowerSync", "Stripe", "Coolify"],
    github: "https://github.com/Muzolas",
  },
  {
    name: "Kurumsal E-Dönüşüm & Muhasebe Platformu",
    status: null,
    description:
      "Enterprise e-transformation web & backend service architecture. Layered architecture (Controller → Service → Repository → DbContext), JWT security, RabbitMQ message queues.",
    tech: ["C#", ".NET Core", "PostgreSQL", "RabbitMQ", "React.js", "Swagger"],
    github: "https://github.com/Muzolas",
  },
  {
    name: "Paralel & Dağıtık Sistemler",
    status: "Academic",
    description:
      "High-performance parallel computing with C (OpenMP/MPI) and Java TCP sockets for distributed memory scenarios and network communication.",
    tech: ["C", "OpenMP", "MPI", "Java Sockets"],
    github: "https://github.com/Muzolas",
  },
]

export const experience = [
  {
    company: "RTC Teknoloji A.Ş.",
    role: "Junior Software Developer",
    period: "Sep 2024 – Jul 2025",
  },
  {
    company: "RTC Teknoloji A.Ş.",
    role: "Software Engineer Intern",
    period: "Jul 2024 – Oct 2024",
  },
  {
    company: "Freelance Software Developer",
    role: "Independent Projects",
    period: "Oct 2023 – Present",
  },
]

export const education = {
  school: "İnönü University",
  degree: "Software Engineering B.Sc.",
  detail: "GPA: 3.00 / 4.00",
  period: "2021 – 2026",
}

export const reference = {
  name: "Ferhat Tokmak",
  role: "General Manager",
  company: "RTC Teknoloji A.Ş.",
}

export const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]
