import LogoIntelliDetect from "../assets/modele/images/bg_home.png";
import LogoMyAux from "../assets/modele/images/logo_.png";
import LogoJupiter from "../assets/modele/images/Jupiter-logo.jpeg";
import LogoFoodStack from "../assets/modele/images/food-track.png";
import LogoEvoyazy from "../assets/modele/images/e-voyazy.png";
import LogoRedPy from "../assets/modele/images/redpy.jpeg";
import Hologram from "../assets/modele/images/Hologramme1.png";
import FlowDepense from "../assets/modele/images/Flow-depense-portfo.png";

export interface Project {
	year: number;
	name: string;
	company: string;
	description?: string;
	technologies: string[];
	link: string[];
	img: string;
	post: string[];
	// category?: string; // Intentionnellement absent car non fourni dans les données initiales
}

export type ProjectReadonly = Readonly<Project>;

export const projects: ReadonlyArray<ProjectReadonly> = [
	{
		year: 2026,
		name: "Externam CRM",
		company: "Externam Studio",
		description: "Custom CRM & Project Management System for Video Editing/Coaching Agency. Designed to streamline the entire client lifecycle efficiently.",
		technologies: ["Nuxt 3", "TypeScript", "Tailwind CSS", "MongoDB", "Pinia", "Socket.io", "Meta Graph API", "Calendly", "Markups", "Fabric.js", "shadcn/ui", ""],
		link: ["crm.externam.com"],
		img: "",
		post: [
			"Fullstack Developer: Architected entire Nuxt 3 application with complex backend logic",
			"Implemented lead tracking via Meta Graph API and sales scheduling with Calendly",
			"Developed premium responsive UI using Shadcn/Tailwind",
			"Managed DevOps/Config (LWS/Vercel, S3 storage, Security)"
		],
	},
	{
		year: 2026,
		name: "CosyNight / RentFlow",
		company: "Client Project",
		description: "SaaS platform automating rent receipt generation, sending, and archiving to reduce administrative load and centralize accounting history.",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PDF Viewer", "Vercel", "SMTP Provider", "Postgres/MySQL"],
		link: ["rentflow-cosynight.vercel.app"],
		img: "",
		post: [
			"Lead Project Manager & Frontend/Backend Developer (End-to-End CRM)",
			"Designed functional specifications, software architecture, and data models",
			"Implemented complete platform (Front + Back) with business workflows for tenants/owners",
			"Automated compliant PDF generation via custom templates and email dispatch",
			"Optimized UX for accounting and administrative usage"
		],
	},
	{
		year: 2026,
		name: "Flow Dépenses",
		company: "Personal Project",
		description: "Mobile application for daily expense tracking, budget management, and geographical visualization of spending locations.",
		technologies: ["Flutter", "Dart", "SQLite", "Google Maps API", "Provider", "fl_chart"],
		link: ["github.com/FabriceRandrianaivo"],
		img: FlowDepense,
		post: [
			"Lead Developer: technical design and modular architecture",
			"Implemented local-first storage using SQLite with a repository pattern",
			"Integrated Google Maps for real-time expenditure geolocalization",
			"Built interactive statistics dashboards with fl_chart"
		],
	},
	{
		year: 2026,
		name: "LeChaSur",
		company: "LeChaSur (Professional)",
		description: "Contributing to premium web applications and CRM systems for specialized real estate management.",
		technologies: ["Prisma", "Next.js", "TypeScript", "Nuxt.js", "Node.js", "Tailwind CSS"],
		link: [],
		img: "",
		post: [
			"Full-Stack Developer: architecting and developing core features for client management",
			"Implementing complex state management and real-time features",
			"Optimizing web performance and SEO for enterprise portals"
		],
	},
	{
		year: 2025,
		name: "Hologram AI",
		company: "Personal Project",
		description: "An innovative AI-powered 3D hologram project with real-time vocal and visual interaction.",
		technologies: ["React", "TypeScript", "Three.js", "OpenAI API", "Vercel", "Motion"],
		link: ["hologramme3d.vercel.app"],
		img: Hologram,
		post: [
			"Lead Developer: built the 3D rendering engine and AI logic",
			"Integrated OpenAI API for intelligent conversation and animation control",
			"Optimized holographic projection displays for web browsers",
			"Deployed on Vercel for high-availability access"
		],
	},
	{
		year: 2025,
		name: "RedPy AI",
		company: "Personal Project",
		description: "AI-powered platform for interactive Python code execution, visualization, and learning.",
		technologies: ["React","TypeScript","Redux","Sass","Python","Docker","OpenAI API","Vercel","MUI","Material UI","Motion"],
		link: ["redpy-ai.vercel.app"],
		img: LogoRedPy,
		post: [
			"Project Lead & Developer: fullstack development from frontend to backend",
			"Implemented interactive Python execution environment and real-time visualization",
			"Integrated OpenAI API for AI-assisted coding suggestions",
			"Deployed the project on Vercel for production access",
			"Optimized performance and responsive design for both desktop and mobile"
		],
	},
	{
		year: 2025,
		name: "IntelliDetect",
		company: "Project of study",
		description: "Intelligent object detection in real-time video streaming using YOLO and FastAPI backend.",
		technologies: [
			"React", "TypeScript", "Redux", "Bootstrap", "Sass", "MUI",
			"PostgreSQL", "Python", "FastAPI", "Docker", "Yolo v8s",
			"IPWebCam", "Postman"
		],
		link: ["github.com/FabriceRandrianaivo"],
		img: LogoIntelliDetect,
		post: [
			"Project Lead: responsible for technical design and architecture",
			"Backend Developer: implemented APIs and optimized database queries",
			"AI Engineer / Data Scientist: trained and fine-tuned YOLO v8s for object detection",
			"Integrated real-time video streaming with AI inference pipeline",
			"Deployed and containerized the solution with Docker"
		],
	},
	{
		year: 2024,
		name: "Jupiter myAux",
		company: "Constellation Group",
		description: "A professional assistant app designed to centralize workflows and enhance productivity.",
		technologies: [
			"NextJS", "TypeScript", "Tailwind", "Redux", "Sass",
			"PostgreSQL", "Python", "FastAPI", "Docker"
		],
		link: ["JupiterMyAux.app"],
		img: LogoJupiter,
		post: [
			"Lead Frontend Developer (React/Next.js): designed reusable UI components and managed state with Redux",
			"Collaborated with backend team for API integration and data management",
			"Optimized performance and improved UI/UX with Tailwind and Sass",
			"Contributed to deployment and Docker-based CI/CD pipeline"
		],
	},
	{
		year: 2024,
		name: "myAuxilium",
		company: "Constellation Group",
		description: "AI-based collaborative platform: chat with documents, professors, and teams. Includes document collection and knowledge sessions.",
		technologies: [
			"React", "TypeScript", "Redux", "Bootstrap", "Sass", "MUI",
			"PostgreSQL", "Python", "FastAPI", "Docker", "OpenAI"
		],
		link: ["myAuxilium.ai", "app.myauxilium.ai"],
		img: LogoMyAux,
		post: [
			"Lead Frontend Developer: built and optimized the chat interface with React and Redux",
			"Designed responsive UI with MUI and Bootstrap",
			"Collaborated with AI engineers to integrate OpenAI-powered features",
			"Ensured scalability and smooth integration with backend APIs"
		],
	},
	{
		year: 2024,
		name: "NER and Topic Modeling",
		company: "Constellation Group",
		description: "Enhanced AI-powered chat with advanced NLP models for document understanding and semantic search.",
		technologies: [
			"NLP", "Named Entity Recognition", "Topic Modeling", "Python",
			"BERT Base Uncased", "LDA Model", "Jupyter Notebook",
			"PostgreSQL", "FastAPI", "Postman"
		],
		link: ["myAuxilium.ai", "app.myauxilium.ai"],
		img: LogoMyAux,
		post: [
			"Data Scientist: developed and fine-tuned NER models to extract entities",
			"Implemented topic modeling with LDA for text summarization",
			"Preprocessed datasets and optimized NLP pipelines",
			"Collaborated with backend developers to expose models via FastAPI"
		],
	},
	{
		year: 2023,
		name: "Food Track",
		company: "Project of study",
		description: "A food delivery and tracking application with real-time updates.",
		technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Vue", "Node.js", "MongoDB"],
		link: ["github.com/FabriceRandrianaivo"],
		img: LogoFoodStack,
		post: [
			"Project Lead: managed team tasks and project planning",
			"Fullstack Developer: developed frontend with Vue and backend with Node.js",
			"Integrated MongoDB for order and delivery management",
			"Designed responsive UI for mobile and desktop users"
		],
	},
	{
		year: 2022,
		name: "E-voyage",
		company: "Project of study",
		description: "Android application for booking and managing travel itineraries.",
		technologies: ["Java", "XML", "Android Studio", "SQLite"],
		link: ["github.com/FabriceRandrianaivo"],
		img: LogoEvoyazy,
		post: [
			"Frontend Developer: implemented UI with XML in Android Studio",
			"Integrated SQLite for offline data storage",
			"Contributed to the design of travel booking and itinerary features"
		],
	},
	{
		year: 2021,
		name: "Save Password",
		company: "Personal Project",
		description: "Secure web application for storing and managing user passwords.",
		technologies: ["HTML5", "CSS", "PHP", "MySQL", "Wamp Server"],
		link: ["github.com/FabriceRandrianaivo/SavePassword-1.0-2021"],
		img: "",
		post: [
			"Project Lead & Developer: designed and developed the complete application",
			"Created authentication system with PHP and MySQL",
			"Implemented password encryption and secure data storage"
		],
	},
];
