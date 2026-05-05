export interface SocialLink {
	name: string;
	url: string;
	handle: string;
}

export interface SkillCategory {
	title: string;
	icon: string;
	skills: string[];
}

export interface ExperienceItem {
	period: string;
	role: string;
	company: string;
	location?: string;
	type: "work" | "education" | "freelance";
	highlights: string[];
	stack?: string[];
}

export interface ServiceItem {
	title: string;
	description: string;
	icon: string;
}

export interface AchievementItem {
	value: string;
	label: string;
}

export const profile = {
	name: "Fabrice Randrianaivo",
	fullName: "RANDRIANAIVO Tolotra Lalaina Fabrice",
	tagline: "Lead Tech · Fullstack Developer · Data Scientist",
	roles: [
		"Fullstack Developer",
		"Lead Tech & Project Manager",
		"Data Scientist",
		"AI Engineer",
		"UI/UX Enthusiast",
	],
	bio: "Lead Tech & Chef de projet at Externam, fullstack developer and data scientist passionate about building products that ship — from real-time AI systems to industrial-grade kiosks. I love turning fuzzy business problems into clean architectures and shipping polished UIs.",
	longBio: [
		"I'm Fabrice, a Lead Technique & Chef de Projet currently driving the STAD v2 migration at Externam — a 6-month, 45k€ project bringing a Windows/C++ kiosk product to a modern Java 21 + JavaFX architecture on Linux, with embedded AI (OCR, constructive AI, token-based billing).",
		"My background bridges fullstack web engineering (Next.js, Nuxt, React, Node.js, FastAPI) and applied AI (NLP, computer vision with YOLO, OpenAI/Anthropic integrations). I've shipped CRMs, SaaS platforms, mobile apps and ML pipelines — both in client engagements and as a freelancer.",
		"What drives me: clean architecture, pragmatic delivery, and shipping things people actually use. I'm currently completing my M2 at ISPM Madagascar while leading a team of 5 developers.",
	],
	location: "Antananarivo, Madagascar",
	email: "fabricerandrianaivo8@gmail.com",
	emailPro: "informaticienexternam@gmail.com",
	phone: "+261 32 84 543 55",
	available: true,
	availabilityText: "Available for freelance & full-time opportunities",
	resumeUrl: "/FabriceRandrianaivo_JS_2025_CV.pdf",
} as const;

export const socials: SocialLink[] = [
	{ name: "GitHub", url: "https://github.com/FabriceRandrianaivo", handle: "@FabriceRandrianaivo" },
	{ name: "LinkedIn", url: "https://www.linkedin.com/in/fabrice-randrianaivo", handle: "fabrice-randrianaivo" },
	{ name: "Email", url: "mailto:fabricerandrianaivo8@gmail.com", handle: "fabricerandrianaivo8@gmail.com" },
	{ name: "WhatsApp", url: "https://wa.me/261328454355", handle: "+261 32 84 543 55" },
];

export const achievements: AchievementItem[] = [
	{ value: "30+", label: "Projects shipped" },
	{ value: "5+", label: "Years of code" },
	{ value: "5", label: "Devs led" },
	{ value: "45k€", label: "Project ownership" },
];

export const services: ServiceItem[] = [
	{
		title: "Fullstack Web Development",
		description: "Modern apps with Next.js, Nuxt, React, TypeScript and battle-tested backends.",
		icon: "code",
	},
	{
		title: "AI & Data Science",
		description: "From NLP and computer vision to LLM integrations (OpenAI, Anthropic) and ML pipelines.",
		icon: "brain",
	},
	{
		title: "Lead Tech / CTO advisory",
		description: "Architecture, hiring, observability, Git Flow, ADRs — I run the technical kitchen.",
		icon: "compass",
	},
	{
		title: "SaaS & CRM Engineering",
		description: "End-to-end SaaS — from data model to billing, auth and UI polish.",
		icon: "rocket",
	},
];

export const skillCategories: SkillCategory[] = [
	{
		title: "Frontend",
		icon: "monitor",
		skills: ["React", "Next.js 14", "Nuxt 3", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Redux", "Pinia", "Sass", "MUI", "Bootstrap"],
	},
	{
		title: "Backend",
		icon: "server",
		skills: ["Node.js", "Express", "FastAPI", "Python", "Java 21", "JavaFX", "Maven", "PHP", "Laravel", "Symfony", "REST", "WebSockets", "OAuth"],
	},
	{
		title: "AI / Data Science",
		icon: "brain",
		skills: ["NLP", "BERT", "LDA", "NER", "YOLO v8", "OpenAI API", "Anthropic API", "scikit-learn", "pandas", "numpy", "Jupyter", "OCR"],
	},
	{
		title: "Mobile",
		icon: "smartphone",
		skills: ["Flutter", "Dart", "React Native", "Expo", "Android (Java)"],
	},
	{
		title: "Database & Infra",
		icon: "database",
		skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Prisma", "Neon", "Cloudflare R2", "Vercel", "Docker", "Terraform", "Linux"],
	},
	{
		title: "Tooling & Practices",
		icon: "wrench",
		skills: ["Git Flow", "ArchUnit", "Resilience4j", "Prometheus", "Loki", "OpenTelemetry", "Postman", "Figma", "Agile / Scrum"],
	},
];

export const experiences: ExperienceItem[] = [
	{
		period: "2025 — present",
		role: "Lead Tech & Chef de projet (LCP)",
		company: "Externam",
		location: "Antananarivo, MG",
		type: "work",
		highlights: [
			"Driving STAD v2 migration: Windows/C++ → Ubuntu + Java 21/JavaFX (14 Maven modules)",
			"Owner of the AI module (OCR, constructive AI) and the ANTS regulatory compliance",
			"Leading a team of 5 developers across UI, devices, services and infrastructure",
			"Defined architecture decision records, observability stack and Git Flow process",
		],
		stack: ["Java 21", "JavaFX", "Maven", "Guice", "Prometheus", "Loki", "Symfony"],
	},
	{
		period: "2024 — 2025",
		role: "Freelance Fullstack Developer",
		company: "Cosynight, e-Vanille, Externam Studio",
		type: "freelance",
		highlights: [
			"Shipped CRMs and SaaS products (RentFlow, Externam CRM)",
			"Built premium e-commerce stores with Stripe and Next.js",
			"Refonte WordPress / Elementor for marketing sites",
		],
		stack: ["Next.js", "Nuxt 3", "TypeScript", "Stripe", "MongoDB", "PostgreSQL"],
	},
	{
		period: "2024",
		role: "Frontend & Data Scientist Intern",
		company: "Constellation Group",
		type: "work",
		highlights: [
			"Lead Frontend on myAuxilium and Jupiter myAux (React/Next.js)",
			"Data Scientist on the NER & Topic Modeling pipeline (BERT, LDA)",
			"Productionized NLP models behind FastAPI endpoints",
		],
		stack: ["React", "Next.js", "Python", "BERT", "LDA", "FastAPI"],
	},
	{
		period: "2024 — 2026",
		role: "Master 2 — Software Engineering & AI",
		company: "ISPM Madagascar",
		type: "education",
		highlights: [
			"Final year project: AISPAM Mobile (Flutter + Python ML)",
			"Research on low-resource NLP — Prime Editeur Malagasy",
			"Coursework in machine learning, distributed systems and architecture",
		],
	},
	{
		period: "2021 — 2024",
		role: "Bachelor's degree in Computer Science",
		company: "ISPM Madagascar",
		type: "education",
		highlights: [
			"Fullstack and mobile development fundamentals",
			"First personal projects: ReadIt, Save Password, E-voyage",
			"Object detection final project — IntelliDetect (YOLO v8 + FastAPI)",
		],
	},
];

export const values = [
	{ title: "Ship things", description: "Working software over perfect plans." },
	{ title: "Architecture matters", description: "Clean boundaries pay off compound interest." },
	{ title: "Own outcomes", description: "Buck-stops-here mindset on the modules I lead." },
	{ title: "Stay curious", description: "AI, embedded, web — I learn across stacks on purpose." },
];
