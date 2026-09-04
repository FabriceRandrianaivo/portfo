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

export type Localized = { fr: string; en: string };
export type LocalizedList = { fr: string[]; en: string[] };

export interface ExperienceItem {
	period: string;
	role: Localized;
	company: string;
	location?: string;
	type: "work" | "education" | "freelance";
	highlights: LocalizedList;
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
		"Développeur Fullstack",
		"Data Scientist",
		"Ingénieur IA",
		"UI/UX Designer",
		"Lead Tech",
		"Problem Solver",
	],
	bio: "Lead Tech & Chef de projet at Externam, fullstack developer and data scientist passionate about building products that ship — from real-time AI systems to industrial-grade kiosks. I love turning fuzzy business problems into clean architectures and shipping polished UIs.",
	longBio: [
		"I'm Fabrice, Lead Tech & Chef de projet. I lead complex web, mobile and embedded products from architecture to production — including a next-gen industrial kiosk built on a Java 21 / JavaFX stack with embedded AI (OCR).",
		"My background bridges fullstack web engineering (Next.js, Nuxt, React, Node.js, FastAPI) and applied AI (NLP, computer vision with YOLO, OpenAI/Anthropic integrations). I've shipped CRMs, SaaS platforms, mobile apps and ML pipelines — both in client engagements and as a freelancer.",
		"What drives me: clean architecture, pragmatic delivery, and shipping things people actually use. I'm currently completing my M2 at ISPM Madagascar while leading a development team.",
	],
	location: "Antananarivo, Madagascar",
	email: "fabricerandrianaivo8@gmail.com",
	emailPro: "informaticienexternam@gmail.com",
	phone: "+261 34 78 65 670",
	available: true,
	availabilityText: "Available for freelance & full-time opportunities",
	resumeUrl: "/FabriceRandrianaivo_JS_2025_CV.pdf",
} as const;

export const socials: SocialLink[] = [
	{ name: "GitHub", url: "https://github.com/FabriceRandrianaivo", handle: "@FabriceRandrianaivo" },
	{ name: "LinkedIn", url: "https://www.linkedin.com/in/fabrice-randrianaivo", handle: "fabrice-randrianaivo" },
	{ name: "Email", url: "mailto:fabricerandrianaivo8@gmail.com", handle: "fabricerandrianaivo8@gmail.com" },
	{ name: "WhatsApp", url: "https://wa.me/261347865670", handle: "+261 34 78 65 670" },
];

export const achievements: AchievementItem[] = [
	{ value: "30+", label: "Projects shipped" },
	{ value: "5+", label: "Years of code" },
	{ value: "5", label: "Devs led" },
	{ value: "5/5", label: "Client rating" },
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
		skills: ["React", "Next.js", "Nuxt 3", "Vue 3", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "MUI", "Bootstrap", "Framer Motion", "Redux Toolkit", "Zustand", "Pinia", "TanStack Query", "React Hook Form", "Zod", "Sass", "Vite"],
	},
	{
		title: "Backend",
		icon: "server",
		skills: ["Node.js", "Express", "NestJS", "FastAPI", "Python", "Java 21", "JavaFX", "Maven", "Guice", "PHP", "Laravel", "Flask", "REST", "WebSockets", "JWT", "OAuth"],
	},
	{
		title: "AI / Data Science",
		icon: "brain",
		skills: ["OpenAI", "Google Gemini", "Anthropic (Claude)", "OpenRouter", "Hermes", "RAG", "LLM", "NLP", "BERT", "LDA", "NER", "YOLO v8", "OCR", "MediaPipe", "scikit-learn", "pandas", "numpy", "Jupyter"],
	},
	{
		title: "Mobile",
		icon: "smartphone",
		skills: ["Flutter", "Dart", "Riverpod", "Provider", "go_router", "Dio", "Retrofit", "Freezed", "Hive", "SQLite", "fl_chart", "React Native", "Expo", "EAS"],
	},
	{
		title: "Databases & Infra",
		icon: "database",
		skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Prisma", "Supabase", "Neon", "Firebase / Firestore", "Redis", "Docker", "Nginx", "Caddy", "Terraform", "Prometheus", "Loki", "GitHub Actions", "GitLab CI"],
	},
	{
		title: "CMS & E-commerce",
		icon: "cart",
		skills: ["WordPress", "Elementor", "Shopify", "WooCommerce", "Stripe"],
	},
	{
		title: "Hosting & Cloud",
		icon: "cloud",
		skills: ["Google Cloud", "Hetzner", "OVHcloud", "LWS", "Vercel", "Render", "Cloudflare R2", "AWS / S3", "MinIO"],
	},
	{
		title: "Tools & Integrations",
		icon: "wrench",
		skills: ["Git", "Git Flow", "n8n", "Telegram API", "WhatsApp API", "Meta Graph API", "Trello API", "Calendly", "Resend", "Nodemailer", "Pusher", "Cloudinary", "Postman", "Figma", "Agile / Scrum", "ArchUnit", "Resilience4j", "OpenTelemetry"],
	},
];

export const experiences: ExperienceItem[] = [
	{
		period: "2024",
		role: {
			fr: "Développeur Full-Stack (poste) & Data Scientist (stage)",
			en: "Full-Stack Developer (role) & Data Scientist (intern)",
		},
		company: "Constellation Group",
		location: "Remote",
		type: "work",
		highlights: {
			fr: [
				"Développeur Full-Stack sur les plateformes myAuxilium et Jupiter myAux (React / Next.js)",
				"Data Scientist (stage) : pipeline NER & Topic Modeling (BERT, LDA) exposé via FastAPI",
				"Mise en production de modèles NLP",
			],
			en: [
				"Full-Stack Developer on the myAuxilium and Jupiter myAux platforms (React / Next.js)",
				"Data Scientist (intern): NER & Topic Modeling pipeline (BERT, LDA) served via FastAPI",
				"Productionized NLP models",
			],
		},
		stack: ["React", "Next.js", "Python", "BERT", "LDA", "FastAPI"],
	},
	{
		period: "2024 — 2025",
		role: {
			fr: "Master 1 — Informatique de Gestion, Génie Logiciel & IA (IGGLIA)",
			en: "Master 1 — Information Systems, Software Engineering & AI (IGGLIA)",
		},
		company: "Institut Supérieur Polytechnique de Madagascar (ISPM)",
		type: "education",
		highlights: {
			fr: ["Spécialisation en génie logiciel, data science et intelligence artificielle"],
			en: ["Specialization in software engineering, data science and artificial intelligence"],
		},
	},
	{
		period: "2023 — 2024",
		role: {
			fr: "Licence — Informatique de Gestion, Génie Logiciel & IA",
			en: "Bachelor's — Information Systems, Software Engineering & AI",
		},
		company: "Institut Supérieur Polytechnique de Madagascar (ISPM)",
		type: "education",
		highlights: {
			fr: ["Fondamentaux du développement web, mobile et des bases de données"],
			en: ["Web, mobile and database development fundamentals"],
		},
	},
	{
		period: "2019",
		role: {
			fr: "Baccalauréat série C (scientifique)",
			en: "Baccalauréat — Science stream (série C)",
		},
		company: "Lycée Jacques Rabemananjara, Tamatave",
		type: "education",
		highlights: {
			fr: ["Diplôme d'excellence — classe de première scientifique"],
			en: ["Distinction — top of the science class"],
		},
	},
	{
		period: "2011",
		role: { fr: "DELF A1, A2 — Français", en: "DELF A1, A2 — French" },
		company: "Alliance Française, Tamatave",
		type: "education",
		highlights: { fr: [], en: [] },
	},
];

export const values = [
	{ title: "Ship things", description: "Working software over perfect plans." },
	{ title: "Architecture matters", description: "Clean boundaries pay off compound interest." },
	{ title: "Own outcomes", description: "Buck-stops-here mindset on the modules I lead." },
	{ title: "Stay curious", description: "AI, embedded, web — I learn across stacks on purpose." },
];
