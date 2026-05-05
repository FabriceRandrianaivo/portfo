import LogoIntelliDetect from "../assets/modele/images/bg_home.png";
import LogoMyAux from "../assets/modele/images/logo_.png";
import LogoJupiter from "../assets/modele/images/Jupiter-logo.jpeg";
import LogoFoodStack from "../assets/modele/images/food-track.png";
import LogoEvoyazy from "../assets/modele/images/e-voyazy.png";
import LogoRedPy from "../assets/modele/images/redpy.jpeg";
import Hologram from "../assets/modele/images/Hologramme1.png";
import FlowDepense from "../assets/modele/images/Flow-depense-portfo.png";
import Cosynight from "../assets/modele/images/Cosynight-portfo.png";
import Externam from "../assets/modele/images/crm-externam.png";
// import EVanille from "../assets/modele/images/e-vanille.png"

export interface Project {
	year: number;
	name: string;
	company: string;
	description?: string;
	technologies: string[];
	link: string[];
	img: string;
	post: string[];
	category?: string;
	featured?: boolean;
}

export type ProjectReadonly = Readonly<Project>;

export const projects: ReadonlyArray<ProjectReadonly> = [
	{
		year: 2026,
		name: "e-vanille",
		company: "Projet Client Freelance",
		category: "E-commerce",
		featured: true,
		description:
			"Plateforme e-commerce haut de gamme spécialisée dans la vente de vanille. Gestion complète du catalogue, du panier et du processus de paiement sécurisé.",
		technologies: [
			"Next.js 14",
			"TypeScript",
			"Tailwind CSS",
			"Prisma",
			"PostgreSQL",
			"Stripe",
			"NextAuth.js",
			"Cloudinary",
			"Zustand",
		],
		link: ["e-vanille.vercel.app"],
		img: "EVanille",
		post: [
			"Développeur Freelance : Conception de l'architecture Fullstack avec Next.js (App Router)",
			"Intégration d'un système de paiement sécurisé avec Stripe API",
			"Modélisation de la base de données relationnelle avec Prisma et PostgreSQL",
			"Optimisation du SEO et de la performance (Core Web Vitals) pour le commerce en ligne",
		],
	},
	{
		year: 2026,
		name: "Externam CRM",
		company: "LeChaSur (Externam Studio)",
		category: "SaaS / CRM",
		featured: true,
		description:
			"Custom CRM & Project Management System for Video Editing/Coaching Agency. Designed to streamline the entire client lifecycle efficiently.",
		technologies: [
			"Nuxt 3",
			"TypeScript",
			"Tailwind CSS",
			"MongoDB",
			"Pinia",
			"Socket.io",
			"Meta Graph API",
			"Calendly",
			"Markups",
			"Fabric.js",
			"shadcn/ui",
		],
		link: ["crm.externam.com"],
		img: Externam,
		post: [
			"Fullstack Developer: Architected entire Nuxt 3 application with complex backend logic",
			"Implemented lead tracking via Meta Graph API and sales scheduling with Calendly",
			"Developed premium responsive UI using Shadcn/Tailwind",
			"Managed DevOps/Config (LWS/Vercel, S3 storage, Security)",
		],
	},
	{
		year: 2026,
		name: "CosyNight / RentFlow",
		company: "Client Project (Cosynight.fr)",
		category: "SaaS / PropTech",
		featured: true,
		description:
			"SaaS platform automating rent receipt generation, sending, and archiving to reduce administrative load and centralize accounting history.",
		technologies: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Node.js",
			"PDF Viewer",
			"Vercel",
			"SMTP Provider",
			"Postgres/MySQL",
		],
		link: ["rentflow-cosynight.vercel.app"],
		img: Cosynight,
		post: [
			"Lead Project Manager & Frontend/Backend Developer (End-to-End CRM)",
			"Designed functional specifications, software architecture, and data models",
			"Implemented complete platform (Front + Back) with business workflows for tenants/owners",
			"Automated compliant PDF generation via custom templates and email dispatch",
			"Optimized UX for accounting and administrative usage",
		],
	},
	{
		year: 2026,
		name: "Flow Dépenses",
		company: "Personal Project",
		category: "Mobile",
		description:
			"Mobile application for daily expense tracking, budget management, and geographical visualization of spending locations.",
		technologies: ["Flutter", "Dart", "SQLite", "Google Maps API", "Provider", "fl_chart"],
		link: ["github.com/FabriceRandrianaivo"],
		img: FlowDepense,
		post: [
			"Lead Developer: technical design and modular architecture",
			"Implemented local-first storage using SQLite with a repository pattern",
			"Integrated Google Maps for real-time expenditure geolocalization",
			"Built interactive statistics dashboards with fl_chart",
		],
	},
	{
		year: 2025,
		name: "Hologram AI",
		company: "Personal Project",
		category: "AI / 3D",
		featured: true,
		description:
			"An innovative AI-powered 3D hologram project with real-time vocal and visual interaction.",
		technologies: ["React", "TypeScript", "Three.js", "OpenAI API", "Vercel", "Motion"],
		link: ["hologramme3d.vercel.app"],
		img: Hologram,
		post: [
			"Lead Developer: built the 3D rendering engine and AI logic",
			"Integrated OpenAI API for intelligent conversation and animation control",
			"Optimized holographic projection displays for web browsers",
			"Deployed on Vercel for high-availability access",
		],
	},
	{
		year: 2025,
		name: "RedPy AI",
		company: "Personal Project",
		category: "AI / Web App",
		featured: true,
		description:
			"AI-powered platform for interactive Python code execution, visualization, and learning.",
		technologies: [
			"React",
			"TypeScript",
			"Redux",
			"Sass",
			"Python",
			"Docker",
			"OpenAI API",
			"Vercel",
			"MUI",
			"Material UI",
			"Motion",
		],
		link: ["redpy-ai.vercel.app"],
		img: LogoRedPy,
		post: [
			"Project Lead & Developer: fullstack development from frontend to backend",
			"Implemented interactive Python execution environment and real-time visualization",
			"Integrated OpenAI API for AI-assisted coding suggestions",
			"Deployed the project on Vercel for production access",
			"Optimized performance and responsive design for both desktop and mobile",
		],
	},
	{
		year: 2025,
		name: "IntelliDetect",
		company: "Project of study",
		category: "AI / Computer Vision",
		featured: true,
		description:
			"Intelligent object detection in real-time video streaming using YOLO and FastAPI backend.",
		technologies: [
			"React",
			"TypeScript",
			"Redux",
			"Bootstrap",
			"Sass",
			"MUI",
			"PostgreSQL",
			"Python",
			"FastAPI",
			"Docker",
			"Yolo v8s",
			"IPWebCam",
			"Postman",
		],
		link: ["github.com/FabriceRandrianaivo"],
		img: LogoIntelliDetect,
		post: [
			"Project Lead: responsible for technical design and architecture",
			"Backend Developer: implemented APIs and optimized database queries",
			"AI Engineer / Data Scientist: trained and fine-tuned YOLO v8s for object detection",
			"Integrated real-time video streaming with AI inference pipeline",
			"Deployed and containerized the solution with Docker",
		],
	},
	{
		year: 2024,
		name: "Jupiter myAux",
		company: "Constellation Group",
		category: "SaaS / Productivity",
		description:
			"A professional assistant app designed to centralize workflows and enhance productivity.",
		technologies: [
			"NextJS",
			"TypeScript",
			"Tailwind",
			"Redux",
			"Sass",
			"PostgreSQL",
			"Python",
			"FastAPI",
			"Docker",
		],
		link: ["JupiterMyAux.app"],
		img: LogoJupiter,
		post: [
			"Lead Frontend Developer (React/Next.js): designed reusable UI components and managed state with Redux",
			"Collaborated with backend team for API integration and data management",
			"Optimized performance and improved UI/UX with Tailwind and Sass",
			"Contributed to deployment and Docker-based CI/CD pipeline",
		],
	},
	{
		year: 2024,
		name: "myAuxilium",
		company: "Constellation Group",
		category: "AI / EdTech",
		featured: true,
		description:
			"AI-based collaborative platform: chat with documents, professors, and teams. Includes document collection and knowledge sessions.",
		technologies: [
			"React",
			"TypeScript",
			"Redux",
			"Bootstrap",
			"Sass",
			"MUI",
			"PostgreSQL",
			"Python",
			"FastAPI",
			"Docker",
			"OpenAI",
		],
		link: ["myAuxilium.ai", "app.myauxilium.ai"],
		img: LogoMyAux,
		post: [
			"Lead Frontend Developer: built and optimized the chat interface with React and Redux",
			"Designed responsive UI with MUI and Bootstrap",
			"Collaborated with AI engineers to integrate OpenAI-powered features",
			"Ensured scalability and smooth integration with backend APIs",
		],
	},
	{
		year: 2024,
		name: "NER and Topic Modeling",
		company: "Constellation Group",
		category: "AI / NLP",
		description:
			"Enhanced AI-powered chat with advanced NLP models for document understanding and semantic search.",
		technologies: [
			"NLP",
			"Named Entity Recognition",
			"Topic Modeling",
			"Python",
			"BERT Base Uncased",
			"LDA Model",
			"Jupyter Notebook",
			"PostgreSQL",
			"FastAPI",
			"Postman",
		],
		link: ["myAuxilium.ai", "app.myauxilium.ai"],
		img: LogoMyAux,
		post: [
			"Data Scientist: developed and fine-tuned NER models to extract entities",
			"Implemented topic modeling with LDA for text summarization",
			"Preprocessed datasets and optimized NLP pipelines",
			"Collaborated with backend developers to expose models via FastAPI",
		],
	},
	{
		year: 2023,
		name: "Food Track",
		company: "Project of study",
		category: "Web App",
		description: "A food delivery and tracking application with real-time updates.",
		technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Vue", "Node.js", "MongoDB"],
		link: ["github.com/FabriceRandrianaivo"],
		img: LogoFoodStack,
		post: [
			"Project Lead: managed team tasks and project planning",
			"Fullstack Developer: developed frontend with Vue and backend with Node.js",
			"Integrated MongoDB for order and delivery management",
			"Designed responsive UI for mobile and desktop users",
		],
	},
	{
		year: 2022,
		name: "E-voyage",
		company: "Project of study",
		category: "Mobile",
		description: "Android application for booking and managing travel itineraries.",
		technologies: ["Java", "XML", "Android Studio", "SQLite"],
		link: ["github.com/FabriceRandrianaivo"],
		img: LogoEvoyazy,
		post: [
			"Frontend Developer: implemented UI with XML in Android Studio",
			"Integrated SQLite for offline data storage",
			"Contributed to the design of travel booking and itinerary features",
		],
	},
	{
		year: 2021,
		name: "Save Password",
		company: "Personal Project",
		category: "Web App",
		description: "Secure web application for storing and managing user passwords.",
		technologies: ["HTML5", "CSS", "PHP", "MySQL", "Wamp Server"],
		link: ["github.com/FabriceRandrianaivo/SavePassword-1.0-2021"],
		img: "",
		post: [
			"Project Lead & Developer: designed and developed the complete application",
			"Created authentication system with PHP and MySQL",
			"Implemented password encryption and secure data storage",
		],
	},
];
