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
import IaReactNlp from "../assets/modele/images/ia-react-nlp.jpg";
import Vanille from "../assets/modele/images/myvanilla.png";
import Prime from "../assets/modele/images/primeEditor.png";
import PaletteKit from "../assets/modele/images/palettekit.png";
import ExternamStudio from "../assets/modele/images/externamStudio.png";

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
		name: "STAD v2 (Borne-stad)",
		company: "Externam - Lead Tech & Project Manager",
		description: "Full migration of the 'My Station' kiosk from Windows/C++/Qt to Ubuntu/Java 21 + JavaFX. 14 Maven modules, ANTS regulatory compliance, AI-driven OCR and constructive AI features. 6-month project, 45k€ budget, team of 5 developers.",
		technologies: ["Java 21", "JavaFX", "Maven", "Guice 7", "Guava EventBus", "Togglz", "Resilience4j", "ArchUnit", "Micrometer", "Prometheus", "Loki", "OpenTelemetry", "Docker", "Symfony 7.4", "PHP", "Ubuntu 22.04", "OCR", "AI"],
		link: ["github.com/FabriceRandrianaivo/Borne-stad-v2"],
		img: "",
		post: [
			"Lead Technique & Chef de Projet (LCP): architecture, planning and team coordination (5 devs)",
			"Owner of the AI module: built OCR pipeline, constructive AI and token-based billing model",
			"Owner of the ANTS regulatory module — buck-stops-here on compliance",
			"Defined Java 21 / JavaFX / Maven multi-module architecture with Guice DI and EventBus",
			"Set up observability stack (Micrometer + Prometheus + Loki + OpenTelemetry — ADR-012)",
			"Drove Git Flow process and ArchUnit guardrails to keep architecture clean"
		],
	},
	{
		year: 2026,
		name: "AISPAM Mobile",
		company: "ISPM M2 - Final Year Project",
		description: "Mobile SPAM detection application combining a Flutter frontend with a Python ML backend. Real-time classification with cloud-hosted model and storage.",
		technologies: ["Flutter", "Dart", "Python", "FastAPI", "PostgreSQL (Neon)", "Cloudflare R2", "Docker", "ML", "NLP"],
		link: ["github.com/FabriceRandrianaivo/AISPAM-Frontend-mobile", "github.com/FabriceRandrianaivo/AISPAM-Backend-mobile"],
		img: IaReactNlp,
		post: [
			"Project Lead: end-to-end design of the mobile SPAM detection system",
			"Frontend: built the Flutter app with offline-friendly UX and live prediction screens",
			"Backend: implemented Python API serving the trained ML model",
			"Infra: provisioned Neon PostgreSQL and Cloudflare R2 storage, containerized with Docker"
		],
	},
	{
		year: 2026,
		name: "PaletteKit",
		company: "Personal Project",
		description: "TypeScript toolkit for building and exporting color palettes — useful for design system bootstrapping and quick brand exploration.",
		technologies: ["TypeScript", "React", "Vite"],
		link: ["palette-kit-rho.vercel.app", "github.com/FabriceRandrianaivo/PaletteKit"],
		img: PaletteKit,
		post: [
			"Designer/Developer: shipped a focused tool to streamline palette creation and export",
			"Explored design-token export formats (CSS vars, JSON, Tailwind config)"
		],
	},
	{
		year: 2026,
		name: "Prime Editeur Malagasy",
		company: "ISPM M2 - Project of study",
		description: "AI-augmented text editor for Malagasy, a low-resource language. Includes spell checker, phonotactic validation, lemmatizer, sentiment analysis, NER and a chatbot powered by Anthropic API.",
		technologies: ["Python", "FastAPI", "React", "Vite", "rapidfuzz", "Anthropic API", "NLP", "Vercel"],
		link: ["prime-editeur-malagasy-igglia5.vercel.app", "github.com/FabriceRandrianaivo/Prime-editeur-malagasy-igglia5"],
		img: Prime,
		post: [
			"Backend Lead: designed FastAPI architecture and NLP modules (spell checker, lemmatizer)",
			"Implemented Levenshtein-based suggestion engine with rapidfuzz over a custom Malagasy dictionary",
			"Integrated Anthropic API for an AI conversational assistant tailored to Malagasy",
			"Coordinated team of 3 (corpus, frontend, backend) for an academic ML project at ISPM"
		],
	},
	{
		year: 2026,
		name: "SPAM/HAM Detect",
		company: "ISPM - Project of study",
		description: "Web application that classifies short messages (SMS/text) as SPAM or HAM in real time, returning a prediction and confidence score from a trained NLP model.",
		technologies: ["Python", "Flask", "scikit-learn", "pandas", "numpy", "NLP", "HTML5", "CSS3", "JavaScript"],
		link: ["github.com/FabriceRandrianaivo/SPAM-HAM-Detect"],
		img: IaReactNlp,
		post: [
			"ML Engineer / Data Scientist: built the preprocessing pipeline and trained the classifier",
			"Designed the REST API with Flask to serve the model and confidence scores",
			"Co-built a Glassmorphism-style frontend (vanilla HTML/CSS/JS) for live predictions",
			"Handled DevOps tasks: packaging, deployment and documentation"
		],
	},
	{
		year: 2026,
		name: "Demo IaC FullNext",
		company: "Personal Project",
		description: "Infrastructure-as-Code demo provisioning a complete cloud environment for a Next.js application using Terraform.",
		technologies: ["Terraform", "HCL", "IaC", "Next.js", "Cloud"],
		link: ["github.com/FabriceRandrianaivo/Demo-Iac-fullnext"],
		img: "",
		post: [
			"DevOps / Cloud Engineer: authored Terraform modules to provision a Next.js stack",
			"Practiced reproducible infrastructure deployment and environment isolation",
			"Documented IaC workflow for future reuse on client projects"
		],
	},

	{
		year: 2026,
		name: "Externam Studio France Site",
		company: "Externam Studio",
		description: "Website redesign V1 → V2 for Externam Studio: new visual identity, Elementor-based templates and color variations rolled out across the marketing pages.",
		technologies: ["HTML", "CSS", "WordPress", "Elementor", "PHP"],
		link: ["externam-studio.fr", "github.com/FabriceRandrianaivo/Externam-studio-site"],
		img: ExternamStudio,
		post: [
			"Frontend Lead: drove the V1→V2 visual refresh and templating",
			"Built color-variation HTML previews and Elementor template kits",
			"Delivered PHP utility scripts to recolor Elementor pages and bootstrap the WordPress setup"
		],
	},
	{
		year: 2026,
		name: "My Vanilla Store Mada",
		company: "Projet Client Freelance",
		description: "Plateforme e-commerce haut de gamme spécialisée dans la vente de vanille. Gestion complète du catalogue, du panier et du processus de paiement sécurisé.",
		technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe", "NextAuth.js", "Cloudinary", "Zustand"],
		link: ["hmy-vanilla-store-mada.vercel.app", "github.com/FabriceRandrianaivo/My-Vanilla-Store-Mada"],
		img: Vanille,
		post: [
			"Développeur Freelance : Conception de l'architecture Fullstack avec Next.js (App Router)",
			"Intégration d'un système de paiement sécurisé avec Stripe API",
			"Modélisation de la base de données relationnelle avec Prisma et PostgreSQL",
			"Optimisation du SEO et de la performance (Core Web Vitals) pour le commerce en ligne"
		],
	},
	{
		year: 2026,
		name: "Externam CRM",
		company: "LeChaSur (Externam Studio)",
		description: "Custom CRM & Project Management System for Video Editing/Coaching Agency. Designed to streamline the entire client lifecycle efficiently.",
		technologies: ["Nuxt 3", "TypeScript", "Tailwind CSS", "MongoDB", "Pinia", "Socket.io", "Meta Graph API", "Calendly", "Markups", "Fabric.js", "shadcn/ui"],
		link: ["crm.externam.com", "github.com/TokyPNL/externam-crm"],
		img: Externam,
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
		company: "Client Project (Cosynight.fr)",
		description: "SaaS platform automating rent receipt generation, sending, and archiving to reduce administrative load and centralize accounting history.",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PDF Viewer", "Vercel", "SMTP Provider", "Postgres/MySQL"],
		link: ["rentflow-cosynight.vercel.app", "github.com/FabriceRandrianaivo/RentFlow"],
		img: Cosynight,
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
		link: ["github.com/FabriceRandrianaivo/flow_depense"],
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
		name: "NexLink Landing",
		company: "Client / Internal Project",
		description: "Marketing landing page for NexLink, shipped in two iterations (v1 and v2) to refine messaging, layout and conversion paths.",
		technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
		link: ["github.com/FabriceRandrianaivo/NexLink-landing", "github.com/FabriceRandrianaivo/NexLink-landing-v2"],
		img: "",
		post: [
			"Frontend Developer: built the landing page and iterated on a v2",
			"Optimized hero / CTA sections and responsive layout",
			"Refined copy and structure between v1 and v2 to improve conversion"
		],
	},
	// {
	// 	year: 2026,
	// 	name: "LeChaSur",
	// 	company: "LeChaSur (Professional)",
	// 	description: "Contributing to premium web applications and CRM systems for specialized real estate management.",
	// 	technologies: ["Prisma", "Next.js", "TypeScript", "Nuxt.js", "Node.js", "Tailwind CSS"],
	// 	link: [],
	// 	img: "",
	// 	post: [
	// 		"Full-Stack Developer: architecting and developing core features for client management",
	// 		"Implementing complex state management and real-time features",
	// 		"Optimizing web performance and SEO for enterprise portals"
	// 	],
	// },
	{
		year: 2025,
		name: "Hologram AI",
		company: "Personal Project",
		description: "An innovative AI-powered 3D hologram project with real-time vocal and visual interaction.",
		technologies: ["React", "TypeScript", "Three.js", "OpenAI API", "Vercel", "Motion"],
		link: ["hologramme3d.vercel.app", "github.com/FabriceRandrianaivo/Hologramme-3D"],
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
		technologies: ["React", "TypeScript", "Redux", "Sass", "Python", "Docker", "OpenAI API", "Vercel", "MUI", "Material UI", "Motion"],
		link: ["redpy-ai.vercel.app", "github.com/FabriceRandrianaivo/RedPy-ai"],
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
		link: ["github.com/FabriceRandrianaivo/IntelliDetectFront", "github.com/FabriceRandrianaivo/IntelliDetectBack"],
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
		year: 2024,
		name: "Stage Training",
		company: "Constellation Group - Internship",
		description: "Jupyter Notebook research and training experiments conducted during the Constellation Group internship: data exploration, model prototyping and NLP pipeline iterations.",
		technologies: ["Python", "Jupyter Notebook", "NLP", "pandas", "scikit-learn"],
		link: ["github.com/FabriceRandrianaivo/stageTraining"],
		img: IaReactNlp,
		post: [
			"Data Scientist Intern: prototyped NLP and ML experiments in notebooks",
			"Iterated on preprocessing strategies and model evaluation",
			"Documented findings to feed the production NER / Topic Modeling pipeline"
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
		year: 2022,
		name: "Fb Email Service",
		company: "Personal Project",
		description: "Node.js authentication service combining Express, Passport and Facebook Strategy with email-based account linking.",
		technologies: ["Node.js", "Express", "Passport", "Facebook Strategy", "OAuth"],
		link: ["github.com/FabriceRandrianaivo/Fb-Email-ServiceApp"],
		img: "",
		post: [
			"Developer: implemented OAuth login flow with Passport and Facebook Strategy",
			"Linked social accounts to email-based identities",
			"Practiced session management and secure auth patterns"
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
