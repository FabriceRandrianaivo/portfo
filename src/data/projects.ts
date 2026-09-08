import LogoIntelliDetect from "../assets/modele/images/bg_home.png";
import LogoMyAux from "../assets/modele/images/logo_.png";
import LogoJupiter from "../assets/modele/images/Jupiter-logo.jpeg";
import LogoFoodStack from "../assets/modele/images/food-track.png";
import LogoEvoyazy from "../assets/modele/images/e-voyazy.png";
import LogoRedPy from "../assets/modele/images/redpy.jpeg";
import FlowDepense from "../assets/modele/images/Flow-depense-portfo.png";
import IaReactNlp from "../assets/modele/images/ia-react-nlp.jpg";
import ShotPilatProD from "../assets/modele/images/pilatpro-d.png";
import ShotPilatProM from "../assets/modele/images/pilatpro-m.png";
import ShotRentcosyD from "../assets/modele/images/rentcosy-d.png";
import ShotRentcosyM from "../assets/modele/images/rentcosy-m.png";
import ShotVanillaD from "../assets/modele/images/vanilla-d.png";
import ShotVanillaM from "../assets/modele/images/vanilla-m.png";
import ShotMyAuxD from "../assets/modele/images/myaux-d.png";
import ShotMyAuxM from "../assets/modele/images/myaux-m.png";
import ShotCrmD from "../assets/modele/images/crm-d.png";
import ShotHologramD from "../assets/modele/images/hologram-d.png";
import type { Localized, LocalizedList } from "./profile";
// import EVanille from "../assets/modele/images/my-vanilla-store-ma.png"

export interface Project {
	year: number;
	name: string;
	company: string;
	description?: Localized;
	technologies: string[];
	link: string[];
	img: string;
	/** Galerie de captures (style Play Store) — pour tous les projets (web comme mobile) */
	screenshots?: string[];
	post: LocalizedList;
	category?: string;
	featured?: boolean;
}

export type ProjectReadonly = Readonly<Project>;

export const projects: ReadonlyArray<ProjectReadonly> = [
	{
		year: 2026,
		name: "ORIENT'IA",
		company: "ISPM — Examen de fin d'études M2",
		category: "IA / RAG",
		featured: true,
		description: {
			fr: "Assistant intelligent d'orientation pédagogique : à partir du profil de l'utilisateur, il recommande une filière parmi les 16 de l'ISPM via un modèle de Machine Learning, une recherche documentaire hybride (RAG) et un graphe de connaissances. Chaque recommandation cite ses sources et déclare son incertitude.",
			en: "Intelligent academic guidance assistant: from the user's profile, it recommends one of ISPM's 16 programs using a Machine Learning model, hybrid document retrieval (RAG) and a knowledge graph. Every recommendation cites its sources and states its uncertainty.",
		},
		technologies: ["Python", "Machine Learning", "RAG", "Knowledge Graph", "NLP", "Jupyter Notebook"],
		link: ["orient-ia-igglia5.onrender.com", "github.com/FabriceRandrianaivo/ORIENT-IA-IGGLIA5"],
		img: "",
		post: {
			fr: [
				"Conception et entraînement du modèle de Machine Learning d'orientation",
				"Recherche documentaire hybride (RAG) sur les sources officielles de l'ISPM",
				"Construction d'un graphe de connaissances avec traçabilité des sources et de l'incertitude",
				"Interface de recommandation argumentée (distingue modèle, documents et règles)",
			],
			en: [
				"Designed and trained the guidance Machine Learning model",
				"Hybrid document retrieval (RAG) over ISPM's official sources",
				"Built a knowledge graph with source and uncertainty traceability",
				"Reasoned recommendation UI (separates model, documents and rules)",
			],
		},
	},
	{
		year: 2026,
		name: "mAIntenance & Assistance",
		company: "ISPM — Hackathon AI Engineering & ML",
		category: "IA / LLM",
		description: {
			fr: "Assistant intelligent de support informatique : un ticket décrit en langage naturel entre, une décision structurée, justifiée et contrôlable en sort. Réalisé lors d'un hackathon AI Engineering & Machine Learning.",
			en: "Intelligent IT support assistant: a ticket described in natural language comes in, a structured, justified and controllable decision comes out. Built during an AI Engineering & Machine Learning hackathon.",
		},
		technologies: ["Python", "LLM", "NLP", "Streamlit", "PowerShell"],
		link: [
			"maintenance-assistance-informatique-intelligent.streamlit.app",
			"github.com/FabriceRandrianaivo/Maintenance-Assistance-Informatique-Intelligent",
		],
		img: "",
		post: {
			fr: [
				"Traitement en langage naturel des tickets de support entrants",
				"Génération d'une décision structurée, justifiée et contrôlable",
				"Déploiement d'une démo en ligne (Streamlit) avec scénarios pré-remplis",
			],
			en: [
				"Natural-language processing of incoming support tickets",
				"Generation of a structured, justified and controllable decision",
				"Deployed an online demo (Streamlit) with pre-filled scenarios",
			],
		},
	},
	{
		year: 2026,
		name: "DAL Conseil Ethik",
		company: "Projet client — Site vitrine",
		category: "Web / Site vitrine",
		description: {
			fr: "Site vitrine professionnel reconstruit en Next.js 14 (App Router) + Tailwind CSS, migré depuis un constructeur Hostinger vers un déploiement Vercel gratuit et performant.",
			en: "Professional showcase website rebuilt in Next.js 14 (App Router) + Tailwind CSS, migrated from a Hostinger website builder to a fast, free Vercel deployment.",
		},
		technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
		link: [],
		img: "",
		post: {
			fr: [
				"Reconstruction complète du site en Next.js 14 + TypeScript + Tailwind",
				"Migration depuis Hostinger Website Builder vers Vercel",
				"Optimisation des performances et du responsive",
			],
			en: [
				"Full rebuild of the site in Next.js 14 + TypeScript + Tailwind",
				"Migration from Hostinger Website Builder to Vercel",
				"Performance and responsive optimization",
			],
		},
	},
	{
		year: 2026,
		name: "Melodex",
		company: "Projet personnel",
		category: "Mobile / IA",
		description: {
			fr: "Application Flutter de numérisation de partitions manuscrites en notation Tonic Sol-fa, destinée aux chœurs malgaches : photographier une partition, corriger la lecture automatique, puis disposer d'une bibliothèque transposable et jouable — entièrement hors connexion.",
			en: "Flutter app that digitizes handwritten Tonic Sol-fa scores for Malagasy choirs: photograph a score, fix the automatic reading, then browse a transposable, playable library — fully offline.",
		},
		technologies: ["Flutter", "Dart", "OCR", "Offline-first"],
		link: ["melodex-mg.web.app"],
		img: "",
		post: {
			fr: [
				"Développement de l'app Flutter (scan et lecture automatique de partitions)",
				"Bibliothèque locale hors-ligne, transposition et lecture audio",
				"Optimisation pour un usage en répétition / église sans réseau",
			],
			en: [
				"Built the Flutter app (score scanning and automatic reading)",
				"Offline local library, transposition and audio playback",
				"Optimized for rehearsal / church use without network",
			],
		},
	},
	{
		year: 2026,
		name: "V-SAM",
		company: "Projet personnel",
		category: "Mobile / AR",
		description: {
			fr: "Application mobile de maintenance industrielle augmentée : le smartphone scanne l'environnement (SLAM via ARCore/ARKit), reconnaît les machines par IA embarquée, puis superpose en réalité augmentée des données IoT temps réel, des manuels 3D et des instructions de réparation guidées.",
			en: "Augmented industrial maintenance mobile app: the phone scans the environment (SLAM via ARCore/ARKit), recognizes machines with on-device AI, then overlays real-time IoT data, 3D manuals and guided repair instructions in augmented reality.",
		},
		technologies: ["Flutter", "Dart", "ARCore", "ARKit", "SLAM", "IoT", "3D"],
		link: [],
		img: "",
		post: {
			fr: [
				"Conception de l'architecture AR (SLAM ARCore/ARKit) et de la reconnaissance IA embarquée",
				"Superposition de données IoT temps réel et de manuels 3D",
				"Parcours d'instructions de réparation guidées pour techniciens industriels",
			],
			en: [
				"Designed the AR architecture (SLAM ARCore/ARKit) and on-device AI recognition",
				"Overlay of real-time IoT data and 3D manuals",
				"Guided repair instruction flow for industrial technicians",
			],
		},
	},
	{
		year: 2026,
		name: "My Vanilla Store Mada",
		company: "Projet Client Freelance",
		category: "E-commerce",
		description: {
			fr: "Plateforme e-commerce haut de gamme spécialisée dans la vente de vanille. Gestion complète du catalogue, du panier et du processus de paiement sécurisé.",
			en: "High-end e-commerce platform specialized in vanilla sales. Complete management of the catalog, cart and secure payment process.",
		},
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
		link: ["my-vanilla-store-mada.vercel.app", "github.com/FabriceRandrianaivo/My-Vanilla-Store-Mada"],
		img: ShotVanillaD,
		screenshots: [ShotVanillaD, ShotVanillaM],
		post: {
			fr: [
				"Développeur Freelance : conception de l'architecture Fullstack avec Next.js (App Router)",
				"Intégration d'un système de paiement sécurisé avec Stripe API",
				"Modélisation de la base de données relationnelle avec Prisma et PostgreSQL",
				"Optimisation du SEO et de la performance (Core Web Vitals) pour le commerce en ligne",
			],
			en: [
				"Freelance Developer: designed the fullstack architecture with Next.js (App Router)",
				"Integrated a secure payment system with Stripe API",
				"Modeled the relational database with Prisma and PostgreSQL",
				"Optimized SEO and performance (Core Web Vitals) for online commerce",
			],
		},
	},
	{
		year: 2026,
		name: "PilatPro",
		company: "Projet client — E-commerce",
		category: "E-commerce / Shopify",
		featured: true,
		description: {
			fr: "Boutique Shopify de matériel Pilates professionnel (reformers, tables trapèze, chaises, barrels…) livré dans toute l'Europe — avec un thème Shopify entièrement personnalisé, développé de A à Z.",
			en: "Shopify store for professional Pilates equipment (reformers, trapeze tables, chairs, barrels…) shipped across Europe — with a fully custom Shopify theme, developed from scratch.",
		},
		technologies: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS", "Shopify CLI", "SEO"],
		link: ["pilatpro.com"],
		img: ShotPilatProD,
		screenshots: [ShotPilatProD, ShotPilatProM],
		post: {
			fr: [
				"Développement d'un thème Shopify sur-mesure de A à Z (Liquid, sections & blocs dynamiques)",
				"Catalogue complet : reformers, tables trapèze, chaises, barrels, accessoires",
				"Tunnel d'achat et livraison multi-pays Europe (10 pays)",
				"Identité premium, performance et optimisation SEO e-commerce",
			],
			en: [
				"Developed a fully custom Shopify theme from scratch (Liquid, dynamic sections & blocks)",
				"Complete catalog: reformers, trapeze tables, chairs, barrels, accessories",
				"Checkout funnel and multi-country shipping across Europe (10 countries)",
				"Premium identity, performance and e-commerce SEO optimization",
			],
		},
	},
	{
		year: 2026,
		name: "Externam CRM",
		company: "LeChaSur (Externam Studio)",
		category: "SaaS / CRM",
		featured: true,
		description: {
			fr: "CRM et système de gestion de projet sur-mesure pour une agence de montage vidéo et de coaching. Conçu pour fluidifier efficacement tout le cycle de vie client.",
			en: "Custom CRM & Project Management System for Video Editing/Coaching Agency. Designed to streamline the entire client lifecycle efficiently.",
		},
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
		link: ["crm.externam.com", "github.com/TokyPNL/externam-crm"],
		img: ShotCrmD,
		post: {
			fr: [
				"Développeur Fullstack : architecture complète de l'application Nuxt 3 avec une logique backend complexe",
				"Mise en place du suivi des leads via Meta Graph API et de la prise de rendez-vous commerciaux avec Calendly",
				"Développement d'une interface premium responsive avec Shadcn/Tailwind",
				"Gestion du DevOps/Config (LWS/Vercel, stockage S3, sécurité)",
			],
			en: [
				"Fullstack Developer: Architected entire Nuxt 3 application with complex backend logic",
				"Implemented lead tracking via Meta Graph API and sales scheduling with Calendly",
				"Developed premium responsive UI using Shadcn/Tailwind",
				"Managed DevOps/Config (LWS/Vercel, S3 storage, Security)",
			],
		},
	},
	{
		year: 2026,
		name: "CosyNight / RentFlow",
		company: "Client Project (Cosynight.fr)",
		category: "SaaS / PropTech",
		featured: true,
		description: {
			fr: "Plateforme SaaS automatisant la génération, l'envoi et l'archivage des quittances de loyer afin de réduire la charge administrative et centraliser l'historique comptable.",
			en: "SaaS platform automating rent receipt generation, sending, and archiving to reduce administrative load and centralize accounting history.",
		},
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
		link: ["rentcosy.vercel.app", "github.com/FabriceRandrianaivo/RentFlow"],
		img: ShotRentcosyD,
		screenshots: [ShotRentcosyD, ShotRentcosyM],
		post: {
			fr: [
				"Chef de projet & développeur Frontend/Backend (CRM de bout en bout)",
				"Conception des spécifications fonctionnelles, de l'architecture logicielle et des modèles de données",
				"Développement de la plateforme complète (Front + Back) avec les workflows métier pour locataires/propriétaires",
				"Automatisation de la génération de PDF conformes via des templates personnalisés et envoi par email",
				"Optimisation de l'UX pour un usage comptable et administratif",
			],
			en: [
				"Lead Project Manager & Frontend/Backend Developer (End-to-End CRM)",
				"Designed functional specifications, software architecture, and data models",
				"Implemented complete platform (Front + Back) with business workflows for tenants/owners",
				"Automated compliant PDF generation via custom templates and email dispatch",
				"Optimized UX for accounting and administrative usage",
			],
		},
	},
	{
		year: 2026,
		name: "Flow Dépenses",
		company: "Personal Project",
		category: "Mobile",
		description: {
			fr: "Application mobile de suivi des dépenses quotidiennes, de gestion de budget et de visualisation géographique des lieux de dépense.",
			en: "Mobile application for daily expense tracking, budget management, and geographical visualization of spending locations.",
		},
		technologies: ["Flutter", "Dart", "SQLite", "Google Maps API", "Provider", "fl_chart"],
		link: ["github.com/FabriceRandrianaivo/flow_depense"],
		img: FlowDepense,
		post: {
			fr: [
				"Développeur principal : conception technique et architecture modulaire",
				"Mise en place d'un stockage local-first avec SQLite et un pattern repository",
				"Intégration de Google Maps pour la géolocalisation des dépenses en temps réel",
				"Création de tableaux de bord statistiques interactifs avec fl_chart",
			],
			en: [
				"Lead Developer: technical design and modular architecture",
				"Implemented local-first storage using SQLite with a repository pattern",
				"Integrated Google Maps for real-time expenditure geolocalization",
				"Built interactive statistics dashboards with fl_chart",
			],
		},
	},
	{
		year: 2026,
		name: "Borne Stad V2",
		company: "Projet industriel — Chef de projet & Lead Tech",
		category: "Enterprise / Embedded",
		featured: true,
		description: {
			fr: "Nouvelle génération de cabines photo d'identité (France) : application kiosk temps réel sur architecture Java 21 / JavaFX multi-module, avec IA embarquée (OCR). Rôle de Chef de projet & Lead Tech.",
			en: "New generation of ID photo booths (France): real-time kiosk application on a Java 21 / JavaFX multi-module architecture, with embedded AI (OCR). Role of Project Manager & Lead Tech.",
		},
		technologies: [
			"Java 21",
			"JavaFX",
			"Maven",
			"Guice",
			"Resilience4j",
			"ArchUnit",
			"Prometheus",
			"Loki",
			"OpenTelemetry",
			"Docker",
			"OCR",
			"IA",
		],
		link: [],
		img: "",
		post: {
			fr: [
				"Chef de projet & Lead Tech : architecture, planning, coordination technique",
				"Pilotage du module IA : pipeline OCR temps réel",
				"Architecture Java 21 / JavaFX multi-module avec injection de dépendances (Guice)",
				"Mise en place de la stack d'observabilité (Prometheus + Loki + OpenTelemetry)",
			],
			en: [
				"Project Manager & Lead Tech: architecture, planning, technical coordination",
				"Led the AI module: real-time OCR pipeline",
				"Java 21 / JavaFX multi-module architecture with dependency injection (Guice)",
				"Set up the observability stack (Prometheus + Loki + OpenTelemetry)",
			],
		},
	},
	{
		year: 2026,
		name: "AISPAM — App médicale",
		company: "ISPM M2 — Projet de fin d'année",
		category: "Santé / Mobile",
		featured: true,
		description: {
			fr: "Application mobile de gestion médicale pour praticiens : suivi des patients, consultations, rendez-vous et prescriptions PDF, avec conformité RGPD et module d'assistance IA. Frontend Flutter, backend FastAPI production-ready.",
			en: "Mobile medical management application for practitioners: patient tracking, consultations, appointments and PDF prescriptions, with GDPR compliance and an AI assistance module. Flutter frontend, production-ready FastAPI backend.",
		},
		technologies: [
			"Flutter",
			"Dart",
			"Riverpod",
			"FastAPI",
			"PostgreSQL",
			"SQLAlchemy",
			"Alembic",
			"JWT",
			"MinIO / S3",
			"reportlab",
			"Docker",
		],
		link: [
			"github.com/FabriceRandrianaivo/AISPAM-Frontend-mobile",
			"github.com/FabriceRandrianaivo/AISPAM-Backend-mobile",
		],
		img: IaReactNlp,
		post: {
			fr: [
				"Project Lead : conception end-to-end de l'app médicale (frontend + backend)",
				"Frontend : app Flutter en Clean Architecture (patients, consultations, RDV, prescriptions)",
				"Backend : API FastAPI async (SQLAlchemy 2, migrations Alembic, auth JWT), pensée RGPD",
				"Génération de prescriptions PDF (reportlab), stockage S3/MinIO, dockerisé et déployé",
			],
			en: [
				"Project Lead: end-to-end design of the medical app (frontend + backend)",
				"Frontend: Flutter app in Clean Architecture (patients, consultations, appointments, prescriptions)",
				"Backend: async FastAPI API (SQLAlchemy 2, Alembic migrations, JWT auth), GDPR-oriented",
				"PDF prescription generation (reportlab), S3/MinIO storage, dockerized and deployed",
			],
		},
	},
	{
		year: 2026,
		name: "LootLynx",
		company: "Projet personnel",
		category: "Mobile",
		description: {
			fr: "Hub mobile multi-jeux qui agrège et valide des codes promo, Creator Codes et offres de stores — pipeline collecte → normalisation → validation côté cloud.",
			en: "Multi-game mobile hub that aggregates and validates promo codes, Creator Codes and store offers — a collection → normalization → cloud-side validation pipeline.",
		},
		technologies: ["Flutter", "Dart", "Firebase", "Cloud Functions", "Firestore", "FCM"],
		link: [],
		img: "",
		post: {
			fr: [
				"Développeur : architecture complète (core / features / models / providers / services)",
				"Backend serverless Firebase (Auth, Firestore, Cloud Functions TypeScript, FCM)",
				"Pipeline de collecte, normalisation et validation des offres",
				"Internationalisation et CI GitHub Actions",
			],
			en: [
				"Developer: complete architecture (core / features / models / providers / services)",
				"Serverless Firebase backend (Auth, Firestore, TypeScript Cloud Functions, FCM)",
				"Collection, normalization and validation pipeline for offers",
				"Internationalization and CI with GitHub Actions",
			],
		},
	},
	{
		year: 2026,
		name: "Kolo Budget AI",
		company: "Projet personnel",
		category: "AI / Mobile",
		description: {
			fr: "App mobile de budget personnel offline-first ciblant l'Afrique francophone, avec analyses et coach financier IA (Claude), et modèle Free / Pro.",
			en: "Offline-first personal budget mobile app targeting French-speaking Africa, with analytics and an AI financial coach (Claude), and a Free / Pro model.",
		},
		technologies: ["Flutter", "Dart", "Riverpod", "Hive", "Supabase", "Anthropic (Claude)", "RevenueCat", "fl_chart"],
		link: [],
		img: "",
		post: {
			fr: [
				"Développeur : app offline-first (Hive) avec synchronisation cloud Supabase",
				"Coach financier IA via l'API Anthropic (Claude Haiku)",
				"Monétisation Free / Pro avec RevenueCat",
				"Analyses et graphiques (fl_chart), architecture modulaire",
			],
			en: [
				"Developer: offline-first app (Hive) with Supabase cloud synchronization",
				"AI financial coach via the Anthropic API (Claude Haiku)",
				"Free / Pro monetization with RevenueCat",
				"Analytics and charts (fl_chart), modular architecture",
			],
		},
	},
	{
		year: 2026,
		name: "AI Context Memory",
		company: "Projet personnel",
		category: "Dev Tools / IA",
		description: {
			fr: "Extension Chrome (Manifest V3) qui accumule du contexte technique (tickets, PR, code, docs) et génère un prompt Markdown prêt à coller pour un LLM.",
			en: "Chrome extension (Manifest V3) that accumulates technical context (tickets, PRs, code, docs) and generates a ready-to-paste Markdown prompt for an LLM.",
		},
		technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Chrome MV3", "CRXJS"],
		link: [],
		img: "",
		post: {
			fr: [
				"Concepteur & développeur d'une extension Chrome MV3",
				"Side-panel d'accumulation de contexte technique",
				"Génération de prompts Markdown optimisés pour LLM",
				"Stockage local (chrome.storage) et UI moderne Tailwind",
			],
			en: [
				"Designer & developer of a Chrome MV3 extension",
				"Side-panel for accumulating technical context",
				"Generation of Markdown prompts optimized for LLM",
				"Local storage (chrome.storage) and modern Tailwind UI",
			],
		},
	},
	{
		year: 2026,
		name: "Servitus",
		company: "Projet personnel",
		category: "SaaS / IA",
		description: {
			fr: "Plateforme SaaS multi-tenant d'assistants IA — agents isolés par client, pilotés via Telegram, sur un modèle control-plane / runtimes.",
			en: "Multi-tenant SaaS platform of AI assistants — agents isolated per client, controlled via Telegram, on a control-plane / runtimes model.",
		},
		technologies: ["Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "OpenRouter", "Stripe", "Docker"],
		link: [],
		img: "",
		post: {
			fr: [
				"Architecture SaaS multi-tenant (control-plane / runtimes d'agents)",
				"Assistant exécutif IA piloté via Telegram (OpenRouter)",
				"Facturation Stripe et orchestration des connecteurs",
				"Backend FastAPI + PostgreSQL, déploiement Docker",
			],
			en: [
				"Multi-tenant SaaS architecture (control-plane / agent runtimes)",
				"AI executive assistant controlled via Telegram (OpenRouter)",
				"Stripe billing and connector orchestration",
				"FastAPI + PostgreSQL backend, Docker deployment",
			],
		},
	},
	{
		year: 2026,
		name: "FFA Budget",
		company: "Projet client",
		category: "Mobile",
		description: {
			fr: "Application mobile de gestion financière et de comptabilité pour une association, avec exports PDF, graphiques et gestion des rôles.",
			en: "Mobile financial management and accounting application for a nonprofit, with PDF exports, charts and role management.",
		},
		technologies: ["Flutter", "Dart", "Riverpod", "Firebase", "Cloud Functions", "fl_chart", "pdf"],
		link: [],
		img: "",
		post: {
			fr: [
				"Développeur : app Flutter de comptabilité associative",
				"Backend Firebase (Auth, Firestore, Storage, Cloud Functions callable)",
				"Exports PDF et graphiques (fl_chart)",
				"Gestion des rôles et règles de sécurité Firestore",
			],
			en: [
				"Developer: Flutter app for nonprofit accounting",
				"Firebase backend (Auth, Firestore, Storage, callable Cloud Functions)",
				"PDF exports and charts (fl_chart)",
				"Role management and Firestore security rules",
			],
		},
	},
	{
		year: 2026,
		name: "n8n Infra Prod",
		company: "Projet personnel",
		category: "DevOps / Infra",
		description: {
			fr: "Déploiement d'un n8n distribué en mode queue (automatisation de workflows), prêt pour la production derrière un reverse proxy.",
			en: "Deployment of a distributed n8n in queue mode (workflow automation), production-ready behind a reverse proxy.",
		},
		technologies: ["Docker", "Docker Compose", "PostgreSQL", "Redis", "Caddy", "n8n", "Bash"],
		link: [],
		img: "",
		post: {
			fr: [
				"Infrastructure Docker Compose (n8n main + workers, PostgreSQL, Redis/Bull queue)",
				"Reverse proxy et TLS avec Caddy",
				"Scripts de sauvegarde et durcissement (encryption key, prune)",
				"Mode queue scalable avec healthchecks et limites de ressources",
			],
			en: [
				"Docker Compose infrastructure (n8n main + workers, PostgreSQL, Redis/Bull queue)",
				"Reverse proxy and TLS with Caddy",
				"Backup and hardening scripts (encryption key, prune)",
				"Scalable queue mode with healthchecks and resource limits",
			],
		},
	},
	{
		year: 2026,
		name: "Prime Editeur Malagasy",
		company: "ISPM M2 — Project of study",
		category: "AI / NLP",
		description: {
			fr: "Éditeur de texte augmenté par l'IA pour le malgache, une langue peu dotée. Correcteur orthographique, validation phonotactique, lemmatiseur, NER et chatbot propulsé par Anthropic.",
			en: "AI-augmented text editor for Malagasy, a low-resource language. Spell checker, phonotactic validation, lemmatizer, NER and Anthropic-powered chatbot.",
		},
		technologies: [
			"Python",
			"FastAPI",
			"React",
			"Vite",
			"rapidfuzz",
			"Anthropic API",
			"NLP",
			"Vercel",
		],
		link: [
			"prime-editeur-malagasy-igglia5.vercel.app",
			"github.com/FabriceRandrianaivo/Prime-editeur-malagasy-igglia5",
		],
		img: IaReactNlp,
		post: {
			fr: [
				"Backend Lead : architecture FastAPI et modules NLP (correcteur orthographique, lemmatiseur)",
				"Mise en place d'un moteur de suggestions basé sur Levenshtein avec rapidfuzz",
				"Intégration de l'API Anthropic pour un assistant IA adapté au malgache",
				"Coordination d'une équipe de 3 (corpus, frontend, backend)",
			],
			en: [
				"Backend Lead: FastAPI architecture and NLP modules (spell checker, lemmatizer)",
				"Implemented Levenshtein-based suggestion engine with rapidfuzz",
				"Integrated Anthropic API for an AI assistant tailored to Malagasy",
				"Coordinated team of 3 (corpus, frontend, backend)",
			],
		},
	},
	{
		year: 2026,
		name: "SPAM/HAM Detect",
		company: "ISPM — Project of study",
		category: "AI / NLP",
		description: {
			fr: "Application web classifiant les messages courts (SMS/texte) en SPAM ou HAM en temps réel, retournant une prédiction et un score de confiance.",
			en: "Web application classifying short messages (SMS/text) as SPAM or HAM in real time, returning a prediction and confidence score.",
		},
		technologies: [
			"Python",
			"Flask",
			"scikit-learn",
			"pandas",
			"numpy",
			"NLP",
			"HTML5",
			"CSS3",
			"JavaScript",
		],
		link: ["github.com/FabriceRandrianaivo/SPAM-HAM-Detect"],
		img: IaReactNlp,
		post: {
			fr: [
				"ML Engineer : conception du pipeline de préprocessing et entraînement du classifieur",
				"Conception d'une API REST avec Flask pour servir le modèle et les scores de confiance",
				"Co-conception d'un frontend au style Glassmorphism",
				"Prise en charge des tâches DevOps : packaging et documentation",
			],
			en: [
				"ML Engineer: built preprocessing pipeline and trained the classifier",
				"Designed REST API with Flask to serve the model and confidence scores",
				"Co-built a Glassmorphism-style frontend",
				"Handled DevOps tasks: packaging and documentation",
			],
		},
	},
	{
		year: 2026,
		name: "Externam Studio Site",
		company: "Externam Studio",
		category: "Web / WordPress",
		description: {
			fr: "Site WordPress d'Externam Studio avec un thème entièrement personnalisé, développé de A à Z (aucun template) — nouvelle identité visuelle et refonte V1 → V2.",
			en: "WordPress site for Externam Studio with a fully custom theme, developed from scratch (no template) — new visual identity and V1 → V2 redesign.",
		},
		technologies: ["WordPress", "PHP", "Thème sur-mesure", "HTML", "CSS", "JavaScript"],
		link: ["github.com/FabriceRandrianaivo/Externam-studio-site"],
		img: "",
		post: {
			fr: [
				"Développement d'un thème WordPress sur-mesure de A à Z (pas de template)",
				"Refonte de l'identité visuelle et de la structure (V1 → V2)",
				"Templates, sections dynamiques et personnalisation avancée",
				"Intégration, optimisation et mise en production",
			],
			en: [
				"Developed a fully custom WordPress theme from scratch (no template)",
				"Redesigned the visual identity and structure (V1 → V2)",
				"Templates, dynamic sections and advanced customization",
				"Integration, optimization and production deployment",
			],
		},
	},
	{
		year: 2026,
		name: "NexLink Landing",
		company: "Client / Internal Project",
		category: "Web / Marketing",
		description: {
			fr: "Landing page marketing pour NexLink, livrée en deux itérations (v1 et v2) pour affiner le message, la mise en page et les parcours de conversion.",
			en: "Marketing landing page for NexLink, shipped in two iterations (v1 and v2) to refine messaging, layout and conversion paths.",
		},
		technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
		link: [
			"github.com/FabriceRandrianaivo/NexLink-landing",
			"github.com/FabriceRandrianaivo/NexLink-landing-v2",
		],
		img: "",
		post: {
			fr: [
				"Développeur Frontend : création de la landing page et itération sur une v2",
				"Optimisation des sections hero / CTA et de la mise en page responsive",
				"Amélioration du contenu et de la structure pour augmenter la conversion",
			],
			en: [
				"Frontend Developer: built the landing page and iterated on a v2",
				"Optimized hero / CTA sections and responsive layout",
				"Refined copy and structure to improve conversion",
			],
		},
	},
	{
		year: 2026,
		name: "PaletteKit",
		company: "Personal Project",
		category: "SaaS / IA",
		description: {
			fr: "Micro-SaaS de génération et de gestion de palettes de couleurs assisté par IA, avec extraction de couleurs depuis n'importe quel site web, authentification et paiement.",
			en: "AI-assisted micro-SaaS for generating and managing color palettes, with color extraction from any website, authentication and payment.",
		},
		technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "Supabase", "Stripe", "Anthropic API", "chroma-js"],
		link: ["palette-kit-rho.vercel.app", "github.com/FabriceRandrianaivo/PaletteKit"],
		img: "",
		post: {
			fr: [
				"Concepteur & développeur : micro-SaaS complet (auth, paiement, IA)",
				"Génération de palettes assistée par l'API Anthropic (Claude)",
				"Extraction de couleurs depuis n'importe quel site (scraping via cheerio)",
				"Monétisation via Stripe, backend et auth sur Supabase",
			],
			en: [
				"Designer & developer: complete micro-SaaS (auth, payment, AI)",
				"Palette generation assisted by the Anthropic API (Claude)",
				"Color extraction from any website (scraping via cheerio)",
				"Monetization via Stripe, backend and auth on Supabase",
			],
		},
	},
	{
		year: 2026,
		name: "Demo IaC FullNext",
		company: "Personal Project",
		category: "DevOps / IaC",
		description: {
			fr: "Démonstration Infrastructure-as-Code provisionnant un environnement cloud complet pour une application Next.js avec Terraform.",
			en: "Infrastructure-as-Code demo provisioning a complete cloud environment for a Next.js app using Terraform.",
		},
		technologies: ["Terraform", "HCL", "IaC", "Next.js", "Cloud"],
		link: ["github.com/FabriceRandrianaivo/Demo-Iac-fullnext"],
		img: "",
		post: {
			fr: [
				"DevOps Engineer : modules Terraform pour provisionner une stack Next.js",
				"Mise en pratique du déploiement d'infrastructure reproductible et de l'isolation",
			],
			en: [
				"DevOps Engineer: Terraform modules to provision a Next.js stack",
				"Practiced reproducible infrastructure deployment and isolation",
			],
		},
	},
	{
		year: 2025,
		name: "Hologram AI",
		company: "Personal Project",
		category: "AI / 3D",
		description: {
			fr: "Un projet innovant d'hologramme 3D propulsé par l'IA avec interaction vocale et visuelle en temps réel — un avatar 3D parlant avec suivi facial.",
			en: "An innovative AI-powered 3D hologram project with real-time vocal and visual interaction — a talking 3D avatar with facial tracking.",
		},
		technologies: ["React", "TypeScript", "Three.js", "React Three Fiber", "OpenAI API", "Google Gemini API", "MediaPipe", "Motion", "Vercel"],
		link: ["hologramme3d.vercel.app", "github.com/FabriceRandrianaivo/Hologramme-3D"],
		img: ShotHologramD,
		post: {
			fr: [
				"Développeur principal : conception du moteur de rendu 3D temps réel (Three.js / R3F)",
				"Intégration d'API IA (OpenAI + Google Gemini) pour une conversation intelligente et le contrôle des animations",
				"Ajout du suivi facial MediaPipe et de la synthèse/reconnaissance vocale pour l'interaction vocale",
				"Déploiement sur Vercel pour un accès haute disponibilité",
			],
			en: [
				"Lead Developer: built the real-time 3D rendering engine (Three.js / R3F)",
				"Integrated AI APIs (OpenAI + Google Gemini) for intelligent conversation and animation control",
				"Added MediaPipe facial tracking and speech synthesis/recognition for voice interaction",
				"Deployed on Vercel for high-availability access",
			],
		},
	},
	{
		year: 2025,
		name: "RedPy AI",
		company: "Site d'entreprise",
		category: "Web / Site vitrine IA",
		description: {
			fr: "Site vitrine multi-pages de RedPy AI (société de services IA) : présentation de l'offre — dont une plateforme d'exécution et d'apprentissage de code Python assistée par IA —, portfolio, blog, thème clair/sombre, widget de chat IA et calculateur de devis en ligne.",
			en: "Multi-page showcase website for RedPy AI (an AI services company): offer presentation — including an AI-assisted interactive Python code execution & learning platform —, portfolio, blog, light/dark theme, AI chat widget and online quote calculator.",
		},
		technologies: [
			"React 19",
			"TypeScript",
			"Vite",
			"MUI",
			"Emotion",
			"React Router",
			"SCSS",
			"OpenAI API",
			"Vercel",
		],
		link: ["redpy-ai.vercel.app", "github.com/FabriceRandrianaivo/RedPy-ai"],
		img: LogoRedPy,
		post: {
			fr: [
				"Développeur : conception et intégration du site vitrine multi-pages de l'entreprise",
				"Mise en avant de la plateforme d'exécution de code Python assistée par IA (OpenAI)",
				"Thème clair/sombre, widget de chat IA et calculateur de devis en ligne",
				"SEO (meta tags dynamiques par page) et design responsive, déployé sur Vercel",
			],
			en: [
				"Developer: designed and integrated the company's multi-page showcase website",
				"Highlighted the AI-assisted Python code execution platform (OpenAI)",
				"Light/dark theme, AI chat widget and online quote calculator",
				"SEO (dynamic per-page meta tags) and responsive design, deployed on Vercel",
			],
		},
	},
	{
		year: 2025,
		name: "IntelliDetect",
		company: "Project of study",
		category: "AI / Computer Vision",
		description: {
			fr: "Détection intelligente d'objets dans un flux vidéo en temps réel avec YOLO et un backend FastAPI.",
			en: "Intelligent object detection in real-time video streaming using YOLO and FastAPI backend.",
		},
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
		link: [
			"github.com/FabriceRandrianaivo/IntelliDetectFront",
			"github.com/FabriceRandrianaivo/IntelliDetectBack",
		],
		img: LogoIntelliDetect,
		post: {
			fr: [
				"Chef de projet : responsable de la conception technique et de l'architecture",
				"Développeur Backend : implémentation des API et optimisation des requêtes base de données",
				"AI Engineer / Data Scientist : entraînement et fine-tuning de YOLO v8s pour la détection d'objets",
				"Intégration du streaming vidéo temps réel avec un pipeline d'inférence IA",
				"Déploiement et conteneurisation de la solution avec Docker",
			],
			en: [
				"Project Lead: responsible for technical design and architecture",
				"Backend Developer: implemented APIs and optimized database queries",
				"AI Engineer / Data Scientist: trained and fine-tuned YOLO v8s for object detection",
				"Integrated real-time video streaming with AI inference pipeline",
				"Deployed and containerized the solution with Docker",
			],
		},
	},
	{
		year: 2024,
		name: "Jupiter myAux",
		company: "Constellation Group",
		category: "SaaS / Productivity",
		description: {
			fr: "Une application d'assistant professionnel conçue pour centraliser les workflows et améliorer la productivité.",
			en: "A professional assistant app designed to centralize workflows and enhance productivity.",
		},
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
		post: {
			fr: [
				"Lead Frontend Developer (React/Next.js) : conception de composants UI réutilisables et gestion de l'état avec Redux",
				"Collaboration avec l'équipe backend pour l'intégration des API et la gestion des données",
				"Optimisation des performances et amélioration de l'UI/UX avec Tailwind et Sass",
				"Contribution au déploiement et au pipeline CI/CD basé sur Docker",
			],
			en: [
				"Lead Frontend Developer (React/Next.js): designed reusable UI components and managed state with Redux",
				"Collaborated with backend team for API integration and data management",
				"Optimized performance and improved UI/UX with Tailwind and Sass",
				"Contributed to deployment and Docker-based CI/CD pipeline",
			],
		},
	},
	{
		year: 2024,
		name: "myAuxilium",
		company: "Constellation Group",
		category: "AI / EdTech",
		featured: true,
		description: {
			fr: "Plateforme collaborative basée sur l'IA : discussion avec des documents, des professeurs et des équipes. Inclut la collecte de documents et des sessions de connaissance.",
			en: "AI-based collaborative platform: chat with documents, professors, and teams. Includes document collection and knowledge sessions.",
		},
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
		img: ShotMyAuxD,
		screenshots: [ShotMyAuxD, ShotMyAuxM],
		post: {
			fr: [
				"Lead Frontend Developer : conception et optimisation de l'interface de chat avec React et Redux",
				"Conception d'une UI responsive avec MUI et Bootstrap",
				"Collaboration avec les ingénieurs IA pour intégrer des fonctionnalités propulsées par OpenAI",
				"Garantie de la scalabilité et d'une intégration fluide avec les API backend",
			],
			en: [
				"Lead Frontend Developer: built and optimized the chat interface with React and Redux",
				"Designed responsive UI with MUI and Bootstrap",
				"Collaborated with AI engineers to integrate OpenAI-powered features",
				"Ensured scalability and smooth integration with backend APIs",
			],
		},
	},
	{
		year: 2024,
		name: "NER and Topic Modeling",
		company: "Constellation Group",
		category: "AI / NLP",
		description: {
			fr: "Chat amélioré par l'IA avec des modèles NLP avancés pour la compréhension de documents et la recherche sémantique.",
			en: "Enhanced AI-powered chat with advanced NLP models for document understanding and semantic search.",
		},
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
		link: [
			"myAuxilium.ai",
			"app.myauxilium.ai",
			"github.com/FabriceRandrianaivo/TopicModeling-NER",
		],
		img: LogoMyAux,
		post: {
			fr: [
				"Data Scientist : développement et fine-tuning de modèles NER pour extraire des entités",
				"Mise en place du topic modeling avec LDA pour le résumé de texte",
				"Préprocessing des jeux de données et optimisation des pipelines NLP",
				"Collaboration avec les développeurs backend pour exposer les modèles via FastAPI",
			],
			en: [
				"Data Scientist: developed and fine-tuned NER models to extract entities",
				"Implemented topic modeling with LDA for text summarization",
				"Preprocessed datasets and optimized NLP pipelines",
				"Collaborated with backend developers to expose models via FastAPI",
			],
		},
	},
	{
		year: 2024,
		name: "Stage Training",
		company: "Constellation Group — Internship",
		category: "AI / Research",
		description: {
			fr: "Recherche et expérimentations d'entraînement sur Jupyter Notebook durant le stage chez Constellation Group : exploration de données, prototypage de modèles, pipelines NLP.",
			en: "Jupyter Notebook research and training experiments during the Constellation Group internship: data exploration, model prototyping, NLP pipelines.",
		},
		technologies: ["Python", "Jupyter Notebook", "NLP", "pandas", "scikit-learn"],
		link: ["github.com/FabriceRandrianaivo/stageTraining"],
		img: IaReactNlp,
		post: {
			fr: [
				"Data Scientist Stagiaire : prototypage d'expériences NLP et ML dans des notebooks",
				"Itération sur les stratégies de préprocessing et l'évaluation des modèles",
				"Documentation des résultats pour alimenter le pipeline NER / Topic Modeling en production",
			],
			en: [
				"Data Scientist Intern: prototyped NLP and ML experiments in notebooks",
				"Iterated on preprocessing strategies and model evaluation",
				"Documented findings to feed the production NER / Topic Modeling pipeline",
			],
		},
	},
	{
		year: 2024,
		name: "Fb Email Service",
		company: "Personal Project",
		category: "Backend",
		description: {
			fr: "Service d'authentification Node.js combinant Express, Passport et Facebook Strategy avec liaison de comptes basée sur l'email.",
			en: "Node.js authentication service combining Express, Passport and Facebook Strategy with email-based account linking.",
		},
		technologies: ["Node.js", "Express", "Passport", "Facebook Strategy", "OAuth"],
		link: ["github.com/FabriceRandrianaivo/Fb-Email-ServiceApp"],
		img: "",
		post: {
			fr: [
				"Développeur : implémentation du flux de connexion OAuth avec Passport + Facebook Strategy",
				"Liaison des comptes sociaux à des identités basées sur l'email",
				"Mise en pratique de la gestion de session et des patterns d'authentification sécurisée",
			],
			en: [
				"Developer: implemented OAuth login flow with Passport + Facebook Strategy",
				"Linked social accounts to email-based identities",
				"Practiced session management and secure auth patterns",
			],
		},
	},
	{
		year: 2023,
		name: "Food Track",
		company: "Project of study",
		category: "Web App",
		description: {
			fr: "Une application de livraison et de suivi de repas avec mises à jour en temps réel.",
			en: "A food delivery and tracking application with real-time updates.",
		},
		technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Vue", "Node.js", "MongoDB"],
		link: ["github.com/FabriceRandrianaivo"],
		img: LogoFoodStack,
		post: {
			fr: [
				"Chef de projet : gestion des tâches de l'équipe et de la planification du projet",
				"Développeur Fullstack : développement du frontend avec Vue et du backend avec Node.js",
				"Intégration de MongoDB pour la gestion des commandes et des livraisons",
				"Conception d'une UI responsive pour les utilisateurs mobiles et desktop",
			],
			en: [
				"Project Lead: managed team tasks and project planning",
				"Fullstack Developer: developed frontend with Vue and backend with Node.js",
				"Integrated MongoDB for order and delivery management",
				"Designed responsive UI for mobile and desktop users",
			],
		},
	},
	{
		year: 2022,
		name: "E-voyage",
		company: "Project of study",
		category: "Mobile",
		description: {
			fr: "Application Android pour réserver et gérer des itinéraires de voyage.",
			en: "Android application for booking and managing travel itineraries.",
		},
		technologies: ["Java", "XML", "Android Studio", "SQLite"],
		link: ["github.com/FabriceRandrianaivo"],
		img: LogoEvoyazy,
		post: {
			fr: [
				"Développeur Frontend : implémentation de l'UI avec XML dans Android Studio",
				"Intégration de SQLite pour le stockage de données hors ligne",
				"Contribution à la conception des fonctionnalités de réservation et d'itinéraire de voyage",
			],
			en: [
				"Frontend Developer: implemented UI with XML in Android Studio",
				"Integrated SQLite for offline data storage",
				"Contributed to the design of travel booking and itinerary features",
			],
		},
	},
	{
		year: 2021,
		name: "Save Password",
		company: "Personal Project",
		category: "Web App",
		description: {
			fr: "Application web sécurisée pour stocker et gérer les mots de passe des utilisateurs.",
			en: "Secure web application for storing and managing user passwords.",
		},
		technologies: ["HTML5", "CSS", "PHP", "MySQL", "Wamp Server"],
		link: ["github.com/FabriceRandrianaivo/SavePassword-1.0-2021"],
		img: "",
		post: {
			fr: [
				"Chef de projet & développeur : conception et développement de l'application complète",
				"Création d'un système d'authentification avec PHP et MySQL",
				"Implémentation du chiffrement des mots de passe et du stockage sécurisé des données",
			],
			en: [
				"Project Lead & Developer: designed and developed the complete application",
				"Created authentication system with PHP and MySQL",
				"Implemented password encryption and secure data storage",
			],
		},
	},
];
