export type Language = "tr" | "en"

export const siteData = {
  tr: {
    nav: [
      { label: "Hakkımda", href: "#about" },
      { label: "Yetenekler", href: "#skills" },
      { label: "Projeler", href: "#projects" },
      { label: "Deneyim", href: "#experience" },
      { label: "Eğitim & Referans", href: "#education" },
      { label: "İletişim", href: "#contact" },
    ],
    profile: {
      name: "Muzaffer Beysan Kalem",
      alias: "beishang",
      title: "Yazılım Mühendisi",
      subtitle: "Software Engineer • Backend & System Architect",
      status: "Yeni Fırsatlara Açık",
      location: "Osmaniye, Türkiye",
      email: "mbk95mbk95@gmail.com",
      phone: "+90 544 358 41 30",
      phoneRaw: "+905443584130",
      github: "https://github.com/Muzolas",
      githubHandle: "github.com/Muzolas",
      linkedin: "https://linkedin.com/in/muzafferbeysankalem",
      linkedinHandle: "linkedin.com/in/muzafferbeysankalem",
      avatar: "/avatar-real.jpg",
      cvPdf: "/CV - Software Engineer _ Muzaffer Beysan Kalem.pdf",
      summary:
        "Yazılım Mühendisi olarak kurumsal backend, API tasarımı ve veri modeli üzerine çalışıyorum. C# / .NET Core, PostgreSQL ve modern web teknolojileriyle güvenilir ve sürdürülebilir çözümler üretmeye odaklanıyorum. Özellikle kurumsal e-dönüşüm ve muhasebe alanındaki projelerde, frontend ve backend katmanlarını düzenli bir mimariyle birleştirme, veri güvenliği ve operasyonel süreklilik gibi konulara odaklandım. Öğrenim ve iş süreçlerimde nesne yönelimli programlama, temiz kod prensipleri ve sistem tasarımı alanlarında sağlam bir temel oluşturdum. Geliştirme sürecinde Cursor, GitHub Copilot, Claude ve Gemini gibi yapay zeka destekli araçları kullanarak kod üretimi, hata ayıklama ve araştırma süreçlerini daha verimli şekilde yönetiyorum.",
      tagline:
        "C# / .NET Core, PostgreSQL ve kurumsal backend mimarileriyle ölçeklenebilir, güvenilir ve sürdürülebilir sistemler geliştiriyorum.",
    },
    heroStats: [
      { label: "Yazılım Deneyimi", value: "2+ Yıl", hint: "Kurumsal & Freelance" },
      { label: "Üniversite GNO", value: "3.00 / 4.00", hint: "İnönü Üniv. Yazılım Müh." },
      { label: "Lise Mezuniyet", value: "93.26 / 100", hint: "Adnan Oğuz Anadolu Lisesi" },
      { label: "Mimari Odak", value: ".NET & HPC", hint: "C# • Postgres • RabbitMQ" },
    ],
    coreStrengths: [
      { name: "Backend", desc: "C# / .NET Core, Clean Architecture, REST API" },
      { name: "C# / .NET", desc: "Enterprise Servisler, Dependency Injection, JWT" },
      { name: "PostgreSQL", desc: "İlişkisel Modelleme, İndeksleme, EF Core" },
      { name: "Sistem Tasarımı", desc: "Controller → Service → Repository Katmanları" },
      { name: "AI Dev", desc: "Cursor, Claude, Copilot ile Hızlı & Kaliteli Üretim" },
      { name: "Dağıtık Sistemler", desc: "RabbitMQ Kuyrukları, OpenMP / MPI, TCP Sockets" },
    ],
    goalsAndApproach: {
      title: "Hedefler & Mühendislik Yaklaşımı",
      subtitle: "Mühendislik disiplini, sürekli öğrenme ve çevik takım kültürü.",
      items: [
        {
          title: "Sürekli Gelişim & Sistem Yetkinliği",
          text: "Deneyimli mühendislerden öğrenerek yazılım mühendisliği disiplinini, kurumsal kod standartlarını ve sistem mimarisi yetkinliğini derinleştirmek.",
        },
        {
          title: "Çevik (Agile) ve Güvenilir Katkı",
          text: "Çevik (Agile / Scrum) takımlarda proaktif sorumluluk alarak kurumsal sistemlere güvenilir, test edilebilir ve sürdürülebilir değer katmak.",
        },
        {
          title: "Yapay Zeka Destekli Yüksek Verimlilik",
          text: "Cursor, Claude ve Copilot gibi araçları geliştirme döngüsüne entegre ederek araştırma, refactoring ve kod kalitesini maksimum hızla sağlamak.",
        },
      ],
    },
    skills: [
      {
        title: "Backend & API",
        category: "Sunucu ve Servis Mimarisi",
        skills: ["C#", ".NET Core", "RESTful API", "RabbitMQ", "OOP", "Clean Code", "Go", "JWT"],
      },
      {
        title: "Veritabanı & Veri",
        category: "Veri Modelleme & Performans",
        skills: ["PostgreSQL", "SQLite", "SQL", "Veritabanı Tasarımı", "Sorgu Optimizasyonu", "Entity Framework Core", "Drift ORM"],
      },
      {
        title: "Frontend & Mobil",
        category: "Kullanıcı Arayüzü & İstemci",
        skills: ["React.js", "Flutter", "Dart", "JavaScript / TypeScript", "UI/UX Yaklaşımı", "Responsive Design"],
      },
      {
        title: "Yapay Zeka Destekli Geliştirme",
        category: "AI Dev & Üretkenlik",
        skills: ["Cursor", "GitHub Copilot", "Claude", "Gemini", "Kod Üretimi", "Hata Ayıklama", "AI Pair Programming"],
      },
      {
        title: "Mimari & Sistem",
        category: "Altyapı & Paralel İşleme",
        skills: ["Sistem Tasarımı", "Paralel Programlama", "OpenMP / MPI", "Soket & Ağ (TCP/IP)", "Linux Temelleri", "Dağıtık Bellek"],
      },
      {
        title: "Araçlar & DevOps",
        category: "Dağıtım & Süreç Yönetimi",
        skills: ["Git / GitHub Actions", "Docker", "Postman", "Swagger", "Coolify", "Python", "Java", "C"],
      },
    ],
    projects: [
      {
        id: "e-donusum",
        name: "Kurumsal E-Dönüşüm & Muhasebe Platformu",
        badge: "Kurumsal Platform",
        status: "Tamamlandı",
        statusVariant: "completed",
        period: "2024 – 2025",
        shortDesc:
          "Kurumsal muhasebe ve e-dönüşüm süreçlerinde, kullanıcı arayüzü, API katmanı ve veri yapısı arasında düzenli ve güvenli bir mimari sağlayan kurumsal platform.",
        architectureHighlight: "Hook → Controller → Service → Repository → DbContext",
        tech: ["C#", ".NET Core", "PostgreSQL", "RabbitMQ", "React.js", "JWT", "Swagger", "Postman"],
        bullets: [
          "React.js üzerinde sayfa bazlı yeniden kullanılabilir bileşen yapıları oluşturarak arayüz kod tekrarını azalttım.",
          "İstek akışını hook katmanından controller üzerinden servis ve repository yapısına yönlendiren bir düzen kurarak backend tarafında düzeni ve okunabilirliği artırdım.",
          "Backend tarafında .NET Core, PostgreSQL, JWT güvenliği, Swagger, RabbitMQ ve Postman ile test ortamı oluşturarak işlemlerin güvenli ve kontrollü şekilde çalışmasını sağladım.",
        ],
        github: "https://github.com/Muzolas",
      },
      {
        id: "nexusapp",
        name: "NexusApp — Indie Control Center (ICC)",
        badge: "Masaüstü & Indie Hacker Kontrol Paneli",
        status: "Devam Ediyor",
        statusVariant: "in-progress",
        period: "2024 – Günümüz",
        shortDesc:
          "Bağımsız geliştiricilerin gelir takibi, deployment süreçleri, CI/CD izleme ve kullanıcı verilerini tek bir kontrol merkezinden yönetmesini sağlayan masaüstü uygulaması.",
        architectureHighlight: "Local-First (SQLite + Drift) ↔ Supabase Sync + Go BFF",
        tech: ["Flutter", "Dart", "Go", "SQLite", "Supabase", "PowerSync", "Stripe", "Coolify", "GitHub Actions"],
        bullets: [
          "Flutter tabanlı masaüstü uygulamasıyla gelir, operasyonel veriler ve deployment süreçlerini tek arayüzde topladım.",
          "Local-first mimari yaklaşımıyla yerel SQLite ve Drift tabanlı veri yönetimi sağlarken, Supabase ve PowerSync ile senkronizasyon akışını destekledim.",
          "Go tabanlı BFF (Backend-For-Frontend) yapısı oluşturarak hassas API anahtarlarının ve kullanıcı verilerinin istemci tarafına açılmayacak şekilde yönettim. Stripe webhook entegrasyonu, GitHub Actions, Coolify deployment akışı ve güvenlik katmanlarıyla uygulamanın operasyonel güvenliğini artırdım.",
        ],
        github: "https://github.com/Muzolas",
      },
      {
        id: "paralel-dagitik",
        name: "Paralel & Dağıtık Sistem Temelleri",
        badge: "HPC & Sistem Mühendisliği",
        status: "Akademik Çalışma",
        statusVariant: "academic",
        period: "Akademik Proje",
        shortDesc:
          "Yüksek işlem gücü gerektiren senaryolarda performans ve ağ iletişimini yönetebilmek için paralel ve dağıtık sistem temelleri üzerine uygulamalı mühendislik çalışması.",
        architectureHighlight: "Shared Memory (OpenMP) & Distributed Memory (MPI) + TCP Sockets",
        tech: ["C Dili", "OpenMP", "MPI", "Java Sockets", "Linux", "Dağıtık Bellek"],
        bullets: [
          "C, OpenMP ve MPI kullanarak paralel iş akışları ve dağıtık bellek senaryolarını derinlemesine inceledim.",
          "Java TCP soketleri üzerinden istemci-sunucu iletişim ve hata yönetimi akışlarını uygulayarak ağ tabanlı haberleşme konusundaki temel bilgimi geliştirdim.",
        ],
        github: "https://github.com/Muzolas",
      },
    ],
    experience: [
      {
        role: "Junior Software Developer",
        company: "RTC Teknoloji A.Ş.",
        period: "Eyl 2024 – Tem 2025",
        type: "Tam Zamanlı / Kurumsal",
        location: "Türkiye",
        bullets: [
          "Türkiye genelindeki kurumsal kullanıcıları hedefleyen e-Dönüşüm web ve backend servis mimarisinde görev alarak iş akışlarını destekleyen çözümler geliştirdim.",
          "React.js tarafında custom reusable component yapıları kurup sayfa bazlı UI tekrarını azaltırken, backend katmanında controller → service → repository → DbContext akışıyla veri güvenliği ve modüler yapı hedeflerine katkı sağladım.",
          "C# / .NET Core, PostgreSQL, JWT güvenliği, Swagger ve RabbitMQ tabanlı kurumsal süreçlerde çalışma deneyimi kazandım; kod kalitesi ve sürdürülebilirlik için ekip içi kod inceleme (code review) süreçlerine aktif katkı sağladım.",
        ],
        tech: ["C#", ".NET Core", "PostgreSQL", "React.js", "RabbitMQ", "JWT", "Swagger", "Code Review"],
      },
      {
        role: "Stajyer Yazılım Mühendisi",
        company: "RTC Teknoloji A.Ş.",
        period: "Tem 2024 – Eki 2024",
        type: "Stajyer Mühendis",
        location: "Türkiye",
        bullets: [
          "C# tabanlı backend servislerinin test edilmesinde, hata çözümlerinde ve yeni API uç noktalarının entegrasyonunda yer aldım; veri güvenliği ve sistem güvenilirliğini artıran katkılar sundum.",
          "Kurumsal e-dönüşüm altyapısına ait servis ve veri katmanı işleyişini inceleyerek, endpoint davranışları, veri akışı ve bakım kolaylığı konularında pratik deneyim kazandım.",
        ],
        tech: ["C#", ".NET Core", "API Entegrasyonu", "Test & Debugging", "Veri Katmanı"],
      },
      {
        role: "Freelance & Sözleşmeli Yazılım Geliştirici",
        company: "Dış Kaynak & Bağımsız Projeler",
        period: "Eki 2023 – Günümüz",
        type: "Sözleşmeli / Freelance",
        location: "Uzaktan",
        bullets: [
          "Dış kaynak modeliyle kurumsal projelere uzaktan backend servis ve veritabanı entegrasyon desteği sağladım.",
          "Bireysel müşteriler için C, Java, Python ve C# ile veri yapıları, algoritmalar ve anahtar teslim güvenilir yazılımlar ürettim.",
        ],
        tech: ["C#", "Python", "Java", "C", "REST API", "SQL", "Veri Yapıları"],
      },
    ],
    education: {
      university: {
        school: "İnönü Üniversitesi",
        degree: "Yazılım Mühendisliği (Lisans)",
        location: "Malatya",
        gpa: "GNO: 3.00 / 4.00",
        period: "2021 – 2026 (Mezuniyet)",
        description:
          "Yazılım mühendisliği temelleri, nesne yönelimli programlama, algoritmalar ve veri yapıları, veritabanı yönetim sistemleri, paralel programlama ve dağıtık sistem mimarisi eğitimi.",
      },
      highSchool: {
        school: "Adnan Oğuz Anadolu Lisesi",
        degree: "Anadolu Lisesi",
        location: "Osmaniye",
        grade: "Diploma Notu: 93,26 / 100",
        period: "2017 – 2021",
      },
      language: {
        title: "Yabancı Dil",
        name: "İngilizce",
        level: "B1 Seviye",
        details: "Teknik dokümantasyon okuma, mimari araştırma ve yazılı teknik iletişim yetkinliği.",
      },
      additional: [
        {
          label: "Askerlik Durumu",
          value: "Tecilli — 21.07.2028 tarihine kadar",
        },
        {
          label: "Sürücü Belgesi",
          value: "B Sınıfı Ehliyet",
        },
      ],
    },
    reference: {
      name: "Ferhat Tokmak",
      role: "Genel Müdür",
      company: "RTC Teknoloji A.Ş.",
      email: "ferhat.tokmak@rtcsuite.com",
      phone: "+90 (542) 302 58 58",
      quote:
        "Disiplinli, sorumluluk sahibi ve kurumsal standartlara hızla adapte olan bir mühendis. Backend servis mimarisi, veri güvenliği ve ekip içi iletişimde güvenilirliğiyle öne çıkmıştır.",
    },
  },

  en: {
    nav: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Education & Ref", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    profile: {
      name: "Muzaffer Beysan Kalem",
      alias: "beishang",
      title: "Software Engineer",
      subtitle: "Software Engineer • Backend & System Architect",
      status: "Open to Opportunities",
      location: "Osmaniye, Turkey",
      email: "mbk95mbk95@gmail.com",
      phone: "+90 544 358 41 30",
      phoneRaw: "+905443584130",
      github: "https://github.com/Muzolas",
      githubHandle: "github.com/Muzolas",
      linkedin: "https://linkedin.com/in/muzafferbeysankalem",
      linkedinHandle: "linkedin.com/in/muzafferbeysankalem",
      avatar: "/avatar-real.jpg",
      cvPdf: "/CV - Software Engineer _ Muzaffer Beysan Kalem.pdf",
      summary:
        "As a Software Engineer, I focus on enterprise backend architectures, robust API design, and resilient data modeling. Specialized in C# / .NET Core, PostgreSQL, and modern web systems. In enterprise e-transformation and accounting platforms, I integrated frontend and backend layers with modular architectures, ensuring data security and operational continuity. Highly proficient in AI-assisted engineering with Cursor, GitHub Copilot, Claude, and Gemini to maximize velocity and code excellence.",
      tagline:
        "Building scalable, fault-tolerant backend architectures with C# / .NET Core, PostgreSQL, and modern distributed system principles.",
    },
    heroStats: [
      { label: "Software Experience", value: "2+ Years", hint: "Enterprise & Freelance" },
      { label: "B.Sc. GPA", value: "3.00 / 4.00", hint: "İnönü Univ. Software Eng." },
      { label: "High School Grade", value: "93.26 / 100", hint: "Adnan Oğuz Anatolian H.S." },
      { label: "Core Focus", value: ".NET & HPC", hint: "C# • Postgres • RabbitMQ" },
    ],
    coreStrengths: [
      { name: "Backend", desc: "C# / .NET Core, Clean Architecture, REST APIs" },
      { name: "C# / .NET", desc: "Enterprise Services, Dependency Injection, JWT" },
      { name: "PostgreSQL", desc: "Relational Modeling, Indexing, EF Core" },
      { name: "System Design", desc: "Controller → Service → Repository Layers" },
      { name: "AI Dev", desc: "Fast & High Quality via Cursor, Claude, Copilot" },
      { name: "Distributed Systems", desc: "RabbitMQ Message Queues, OpenMP/MPI, TCP" },
    ],
    goalsAndApproach: {
      title: "Goals & Engineering Mindset",
      subtitle: "Commitment to engineering rigor, continuous growth, and agile collaboration.",
      items: [
        {
          title: "Continuous Mastery & System Rigor",
          text: "Accelerating engineering depth through mentorship from experienced seniors, adhering to enterprise clean code patterns and scalable architectures.",
        },
        {
          title: "Agile & Reliable Value Delivery",
          text: "Assuming proactive ownership in agile (Scrum) teams to build dependable, testable, and maintainable enterprise software.",
        },
        {
          title: "AI-Augmented High Productivity",
          text: "Seamlessly infusing tools like Cursor, Claude, and Copilot into the workflow to elevate research, refactoring, and delivery speed.",
        },
      ],
    },
    skills: [
      {
        title: "Backend & API",
        category: "Server & Service Architecture",
        skills: ["C#", ".NET Core", "RESTful API", "RabbitMQ", "OOP", "Clean Code", "Go", "JWT"],
      },
      {
        title: "Database & Data",
        category: "Modeling & Query Optimization",
        skills: ["PostgreSQL", "SQLite", "SQL", "Database Design", "Query Optimization", "Entity Framework Core", "Drift ORM"],
      },
      {
        title: "Frontend & Mobile",
        category: "Client UI & Experience",
        skills: ["React.js", "Flutter", "Dart", "JavaScript / TypeScript", "UI/UX Approach", "Responsive Design"],
      },
      {
        title: "AI-Assisted Development",
        category: "AI Dev & Engineering Speed",
        skills: ["Cursor", "GitHub Copilot", "Claude", "Gemini", "Code Generation", "Debugging", "AI Pair Programming"],
      },
      {
        title: "Architecture & Systems",
        category: "HPC & Distributed Systems",
        skills: ["System Design", "Parallel Programming", "OpenMP / MPI", "Socket & Network (TCP)", "Linux Fundamentals", "Distributed Memory"],
      },
      {
        title: "Tools & DevOps",
        category: "Delivery & Infrastructure",
        skills: ["Git / GitHub Actions", "Docker", "Postman", "Swagger", "Coolify", "Python", "Java", "C"],
      },
    ],
    projects: [
      {
        id: "e-donusum",
        name: "Enterprise E-Transformation & Accounting Platform",
        badge: "Enterprise Platform",
        status: "Completed",
        statusVariant: "completed",
        period: "2024 – 2025",
        shortDesc:
          "Enterprise platform engineered to structure clean communication between frontend UI, API services, and relational databases for corporate accounting and tax transformation workflows.",
        architectureHighlight: "Hook → Controller → Service → Repository → DbContext",
        tech: ["C#", ".NET Core", "PostgreSQL", "RabbitMQ", "React.js", "JWT", "Swagger", "Postman"],
        bullets: [
          "Developed reusable, modular React.js component architectures, drastically eliminating UI code duplication.",
          "Engineered request flow routing from hook layers through controllers down to service and repository implementations, ensuring pristine backend readability and maintainability.",
          "Constructed a secure, resilient backend with .NET Core, PostgreSQL, JWT auth, Swagger docs, RabbitMQ message queues, and end-to-end Postman testing suites.",
        ],
        github: "https://github.com/Muzolas",
      },
      {
        id: "nexusapp",
        name: "NexusApp — Indie Control Center (ICC)",
        badge: "Desktop & Indie Hacker Control Dashboard",
        status: "In Progress",
        statusVariant: "in-progress",
        period: "2024 – Present",
        shortDesc:
          "Comprehensive desktop workstation empowering indie developers to monitor real-time revenue, deployment pipelines, CI/CD health, and customer metrics in one centralized view.",
        architectureHighlight: "Local-First (SQLite + Drift) ↔ Supabase Sync + Go BFF",
        tech: ["Flutter", "Dart", "Go", "SQLite", "Supabase", "PowerSync", "Stripe", "Coolify", "GitHub Actions"],
        bullets: [
          "Crafted a high-performance Flutter desktop interface consolidating live revenue, operational analytics, and continuous deployment streams.",
          "Implemented local-first architecture with SQLite & Drift ORM, synchronized seamlessly to Supabase cloud storage using PowerSync bi-directional pipelines.",
          "Architected a Go-powered BFF (Backend-For-Frontend) keeping sensitive API credentials and user data shielded from client exposure; integrated Stripe webhooks, GitHub Actions CI/CD, and Coolify deployments.",
        ],
        github: "https://github.com/Muzolas",
      },
      {
        id: "paralel-dagitik",
        name: "Parallel & Distributed Systems Foundations",
        badge: "HPC & Systems Engineering",
        status: "Academic Research",
        statusVariant: "academic",
        period: "Academic Project",
        shortDesc:
          "Applied engineering investigation into parallel computing paradigms and distributed networking to maximize throughput and fault tolerance under heavy computing workloads.",
        architectureHighlight: "Shared Memory (OpenMP) & Distributed Memory (MPI) + TCP Sockets",
        tech: ["C Language", "OpenMP", "MPI", "Java Sockets", "Linux", "Distributed Memory"],
        bullets: [
          "Analyzed parallel processing pipelines and distributed memory scenarios utilizing C, OpenMP multi-threading, and MPI message passing.",
          "Implemented client-server socket communication protocols and fault-tolerant network handlers using Java TCP sockets.",
        ],
        github: "https://github.com/Muzolas",
      },
    ],
    experience: [
      {
        role: "Junior Software Developer",
        company: "RTC Teknoloji A.Ş.",
        period: "Sep 2024 – Jul 2025",
        type: "Full-Time / Enterprise",
        location: "Turkey",
        bullets: [
          "Engineered enterprise e-Transformation web solutions and backend services catering to corporate enterprises across Turkey.",
          "Built modular, reusable component systems in React.js to eliminate UI redundancies, while enforcing Controller → Service → Repository → DbContext backend architecture.",
          "Spearheaded features using C# / .NET Core, PostgreSQL, JWT security, Swagger, and RabbitMQ; actively participated in internal code reviews to guarantee quality and maintainability.",
        ],
        tech: ["C#", ".NET Core", "PostgreSQL", "React.js", "RabbitMQ", "JWT", "Swagger", "Code Review"],
      },
      {
        role: "Software Engineer Intern",
        company: "RTC Teknoloji A.Ş.",
        period: "Jul 2024 – Oct 2024",
        type: "Engineering Intern",
        location: "Turkey",
        bullets: [
          "Collaborated on unit testing, bug resolution, and integration of new API endpoints across C# backend micro-services, reinforcing data integrity and system reliability.",
          "Investigated service layers and database schemas within enterprise e-transformation infrastructures, gaining deep insights into endpoint behaviors and code maintainability.",
        ],
        tech: ["C#", ".NET Core", "API Integration", "Testing & Debugging", "Data Layer"],
      },
      {
        role: "Freelance & Contract Software Developer",
        company: "Outsourced & Independent Projects",
        period: "Oct 2023 – Present",
        type: "Contract / Freelance",
        location: "Remote",
        bullets: [
          "Supplied external backend service engineering and database integration support for corporate projects under contract.",
          "Delivered turnkey algorithms, custom data structure pipelines, and tailored software solutions using C, Java, Python, and C# for private clients.",
        ],
        tech: ["C#", "Python", "Java", "C", "REST API", "SQL", "Data Structures"],
      },
    ],
    education: {
      university: {
        school: "İnönü University",
        degree: "Software Engineering (B.Sc.)",
        location: "Malatya, Turkey",
        gpa: "GPA: 3.00 / 4.00",
        period: "2021 – 2026 (Graduation)",
        description:
          "Comprehensive engineering curriculum covering object-oriented architecture, data structures, DBMS, parallel computing, and distributed software systems.",
      },
      highSchool: {
        school: "Adnan Oğuz Anatolian High School",
        degree: "Anatolian High School",
        location: "Osmaniye, Turkey",
        grade: "Graduation Grade: 93.26 / 100",
        period: "2017 – 2021",
      },
      language: {
        title: "Foreign Language",
        name: "English",
        level: "B1 Level",
        details: "Proficiency in technical documentation, architectural research, and professional written correspondence.",
      },
      additional: [
        {
          label: "Military Service",
          value: "Deferred until 21.07.2028",
        },
        {
          label: "Driving License",
          value: "Class B License",
        },
      ],
    },
    reference: {
      name: "Ferhat Tokmak",
      role: "General Manager",
      company: "RTC Teknoloji A.Ş.",
      email: "ferhat.tokmak@rtcsuite.com",
      phone: "+90 (542) 302 58 58",
      quote:
        "A disciplined, highly accountable software engineer who rapidly integrated into our enterprise workflows. He demonstrated exceptional diligence in backend service architecture and collaborative reliability.",
    },
  },
}

// Backward compatibility helper
export const profile = siteData.tr.profile
export const navLinks = siteData.tr.nav
export const projects = siteData.tr.projects
export const experience = siteData.tr.experience
export const skillGroups = siteData.tr.skills
export const education = siteData.tr.education.university
export const reference = siteData.tr.reference
