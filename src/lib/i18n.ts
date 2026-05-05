export type Lang = "fr" | "en";

export const dictionaries = {
	en: {
		"nav.home": "Home",
		"nav.about": "About",
		"nav.skills": "Skills",
		"nav.experience": "Experience",
		"nav.projects": "Projects",
		"nav.contact": "Contact",
		"nav.menu": "Menu",
		"nav.theme.dark": "Switch to dark theme",
		"nav.theme.light": "Switch to light theme",
		"nav.lang": "Language",

		"common.viewProjects": "View Projects",
		"common.aboutMe": "About me",
		"common.downloadCV": "Download CV",
		"common.getInTouch": "Get in touch",
		"common.hireMe": "Hire me",
		"common.seeMyWork": "See my work",
		"common.viewDetails": "View Details",
		"common.viewCode": "View Code",
		"common.liveDemo": "Live Demo",
		"common.scroll": "Scroll to explore",
		"common.available": "Currently available",
		"common.featured": "Featured",
		"common.year": "Year",
		"common.role": "My Role",
		"common.context": "Company / Context",
		"common.tech": "Technologies",
		"common.results": "results",
		"common.result": "result",
		"common.featuredOnly": "Featured only",
		"common.noMatch": "No project matches your filters. Try removing them.",

		"hero.greeting": "👋 Hello, I'm",
		"hero.iam": "I'm a ",
		"hero.bio":
			"Lead Tech & Project Manager at Externam, fullstack developer and data scientist passionate about shipping products — from real-time AI systems to industrial-grade kiosks. I love turning fuzzy business problems into clean architectures and polished UIs.",
		"hero.availability": "Available for freelance & full-time opportunities",
		"hero.card.lead": "Lead Tech",
		"hero.card.leadAt": "@ Externam",
		"hero.card.building": "Building with",
		"hero.card.tech": "AI · Web · Cloud",
		"hero.card.based": "Based in",
		"hero.card.location": "Madagascar",

		"home.featured.eyebrow": "Selected work",
		"home.featured.title": "Featured projects",
		"home.featured.subtitle":
			"A curated cut — the products and systems I'm most proud of shipping.",
		"home.featured.cta": "Explore all projects",
		"home.tech.eyebrow": "My toolbox",
		"home.tech.title": "Working with modern tech, every day",
		"home.services.eyebrow": "What I do",
		"home.services.title": "Services & expertise",
		"home.cta.title": "Let's build something great",
		"home.cta.subtitle":
			"Open for freelance, full-time and lead-tech engagements. If you're shipping AI, SaaS or industrial products — let's talk.",
		"home.stats.label.projects": "Projects shipped",
		"home.stats.label.years": "Years of code",
		"home.stats.label.devs": "Devs led",
		"home.stats.label.budget": "Project ownership",

		"about.eyebrow": "About me",
		"about.title.before": "The story behind the",
		"about.title.gradient": "code & decisions",
		"about.tagline": "Lead Tech · Fullstack Developer · Data Scientist",
		"about.bio.p1":
			"I'm Fabrice, Lead Tech & Project Manager currently driving the STAD v2 migration at Externam — a 6-month, 45k€ project bringing a Windows/C++ kiosk product to a modern Java 21 + JavaFX architecture on Linux, with embedded AI (OCR, constructive AI, token-based billing).",
		"about.bio.p2":
			"My background bridges fullstack web engineering (Next.js, Nuxt, React, Node.js, FastAPI) and applied AI (NLP, computer vision with YOLO, OpenAI/Anthropic integrations). I've shipped CRMs, SaaS platforms, mobile apps and ML pipelines — both in client engagements and as a freelancer.",
		"about.bio.p3":
			"What drives me: clean architecture, pragmatic delivery, and shipping things people actually use. Currently completing my M2 at ISPM Madagascar while leading a team of 5 developers.",
		"about.services.eyebrow": "What I do",
		"about.services.title": "Services",
		"about.values.eyebrow": "How I work",
		"about.values.title": "My values",
		"about.cta.title": "Let's build something together",
		"about.cta.subtitle":
			"Open to freelance engagements, full-time roles and lead-tech opportunities. If you're shipping AI, SaaS or industrial-grade products — let's talk.",

		"services.fullstack.title": "Fullstack Web Development",
		"services.fullstack.desc":
			"Modern apps with Next.js, Nuxt, React, TypeScript and battle-tested backends.",
		"services.ai.title": "AI & Data Science",
		"services.ai.desc":
			"From NLP and computer vision to LLM integrations (OpenAI, Anthropic) and ML pipelines.",
		"services.lead.title": "Lead Tech / CTO advisory",
		"services.lead.desc":
			"Architecture, hiring, observability, Git Flow, ADRs — I run the technical kitchen.",
		"services.saas.title": "SaaS & CRM Engineering",
		"services.saas.desc":
			"End-to-end SaaS — from data model to billing, auth and UI polish.",

		"values.ship.title": "Ship things",
		"values.ship.desc": "Working software over perfect plans.",
		"values.arch.title": "Architecture matters",
		"values.arch.desc": "Clean boundaries pay off compound interest.",
		"values.own.title": "Own outcomes",
		"values.own.desc": "Buck-stops-here mindset on the modules I lead.",
		"values.curious.title": "Stay curious",
		"values.curious.desc": "AI, embedded, web — I learn across stacks on purpose.",

		"skills.eyebrow": "Tech stack",
		"skills.title.before": "Skills &",
		"skills.title.gradient": "tools",
		"skills.subtitle":
			"A pragmatic toolbox built across web, mobile, AI and infra — the gear I reach for when shipping.",
		"skills.cat.frontend": "Frontend",
		"skills.cat.backend": "Backend",
		"skills.cat.ai": "AI / Data Science",
		"skills.cat.mobile": "Mobile",
		"skills.cat.db": "Database & Infra",
		"skills.cat.tooling": "Tooling & Practices",
		"skills.bottom.languages": "Programming languages",
		"skills.bottom.languagesValue": "Java · TypeScript · Python · Dart · PHP · C",
		"skills.bottom.learning": "Currently learning",
		"skills.bottom.learningValue": "Embedded systems · Advanced LLM ops",
		"skills.bottom.spoken": "Spoken languages",
		"skills.bottom.spokenValue": "French · English · Malagasy",

		"experience.eyebrow": "Career",
		"experience.title.gradient": "Experience",
		"experience.title.after": " & journey",
		"experience.subtitle":
			"From first lines of PHP to leading a 5-person team on industrial-grade products.",
		"experience.type.work": "Work",
		"experience.type.freelance": "Freelance",
		"experience.type.education": "Education",

		"contact.eyebrow": "Get in touch",
		"contact.title.before": "Let's build",
		"contact.title.gradient": "something great",
		"contact.subtitle":
			"Have a project, an idea, or just want to say hi? Drop me a message — I usually reply within 24 hours.",
		"contact.talk.title": "Talk to me",
		"contact.talk.subtitle":
			"I'm available for freelance, full-time and lead-tech engagements.",
		"contact.channel.email": "Email",
		"contact.channel.phone": "Phone / WhatsApp",
		"contact.channel.location": "Location",
		"contact.form.name": "Your name",
		"contact.form.namePlaceholder": "Jane Doe",
		"contact.form.email": "Email",
		"contact.form.emailPlaceholder": "jane@company.com",
		"contact.form.subject": "Subject",
		"contact.form.subjectPlaceholder": "Project, role, idea, anything…",
		"contact.form.message": "Message",
		"contact.form.messagePlaceholder":
			"Tell me about what you're building or what you need help with.",
		"contact.form.send": "Send message",
		"contact.form.sending": "Sending…",
		"contact.form.success": "Message sent. I'll get back to you shortly.",
		"contact.form.error.required": "Please fill in your name, email and message.",
		"contact.form.error.generic":
			"Something went wrong. Please try again or use one of the channels on the left.",
		"contact.availability": "Available for freelance & full-time opportunities",

		"projects.eyebrow": "Featured Work",
		"projects.title.before": "Projects pushing the",
		"projects.title.gradient": "boundaries",
		"projects.subtitle":
			"A curated selection across Web, AI, Mobile, SaaS and Embedded — both client engagements and personal builds.",
		"projects.search": "Search by name, company, tech…",
		"projects.cta.title": "Ready to create something amazing?",
		"projects.cta.subtitle":
			"I'm currently available for freelance projects and full-time opportunities.",
		"projects.cta.button": "Hire Me Now",

		"footer.nav": "Navigation",
		"footer.contact": "Contact",
		"footer.copyright": "Crafted with care in Antananarivo.",
		"footer.builtWith": "Built with React, TypeScript, Tailwind & shadcn/ui.",

		"notFound.title": "Page not found",
		"notFound.subtitle":
			"The page you're looking for doesn't exist or has been moved. Let's get you back on track.",
		"notFound.home": "Back to home",
		"notFound.back": "Go back",
	},

	fr: {
		"nav.home": "Accueil",
		"nav.about": "À propos",
		"nav.skills": "Compétences",
		"nav.experience": "Expérience",
		"nav.projects": "Projets",
		"nav.contact": "Contact",
		"nav.menu": "Menu",
		"nav.theme.dark": "Passer en thème sombre",
		"nav.theme.light": "Passer en thème clair",
		"nav.lang": "Langue",

		"common.viewProjects": "Voir les projets",
		"common.aboutMe": "À mon sujet",
		"common.downloadCV": "Télécharger le CV",
		"common.getInTouch": "Me contacter",
		"common.hireMe": "Me recruter",
		"common.seeMyWork": "Voir mon travail",
		"common.viewDetails": "Voir les détails",
		"common.viewCode": "Voir le code",
		"common.liveDemo": "Démo en ligne",
		"common.scroll": "Scrollez pour explorer",
		"common.available": "Disponible actuellement",
		"common.featured": "Mis en avant",
		"common.year": "Année",
		"common.role": "Mon rôle",
		"common.context": "Entreprise / Contexte",
		"common.tech": "Technologies",
		"common.results": "résultats",
		"common.result": "résultat",
		"common.featuredOnly": "À la une seulement",
		"common.noMatch":
			"Aucun projet ne correspond à vos filtres. Essayez d'en retirer.",

		"hero.greeting": "👋 Bonjour, je suis",
		"hero.iam": "Je suis ",
		"hero.bio":
			"Lead Tech & Chef de projet chez Externam, développeur fullstack et data scientist passionné par les produits qui partent en prod — des systèmes d'IA temps réel aux bornes industrielles. J'aime transformer des problèmes flous en architectures propres et interfaces soignées.",
		"hero.availability": "Disponible pour missions freelance & opportunités CDI",
		"hero.card.lead": "Lead Tech",
		"hero.card.leadAt": "@ Externam",
		"hero.card.building": "Je construis avec",
		"hero.card.tech": "IA · Web · Cloud",
		"hero.card.based": "Basé à",
		"hero.card.location": "Madagascar",

		"home.featured.eyebrow": "Sélection",
		"home.featured.title": "Projets phares",
		"home.featured.subtitle":
			"Une sélection des produits et systèmes dont je suis le plus fier d'avoir livré.",
		"home.featured.cta": "Voir tous les projets",
		"home.tech.eyebrow": "Ma boîte à outils",
		"home.tech.title": "Avec des technos modernes, au quotidien",
		"home.services.eyebrow": "Ce que je fais",
		"home.services.title": "Services & expertise",
		"home.cta.title": "Construisons quelque chose ensemble",
		"home.cta.subtitle":
			"Ouvert au freelance, au CDI et aux missions de Lead Tech. Si vous livrez de l'IA, du SaaS ou des produits industriels — parlons-en.",
		"home.stats.label.projects": "Projets livrés",
		"home.stats.label.years": "Années de code",
		"home.stats.label.devs": "Devs encadrés",
		"home.stats.label.budget": "Budget piloté",

		"about.eyebrow": "À propos",
		"about.title.before": "L'histoire derrière le",
		"about.title.gradient": "code & les décisions",
		"about.tagline": "Lead Tech · Développeur Fullstack · Data Scientist",
		"about.bio.p1":
			"Je suis Fabrice, Lead Technique & Chef de projet, actuellement à la tête de la migration STAD v2 chez Externam — un projet de 6 mois et 45k€ qui amène une borne Windows/C++ vers une architecture moderne Java 21 + JavaFX sur Linux, avec de l'IA embarquée (OCR, IA constructive, modèle de facturation par tokens).",
		"about.bio.p2":
			"Mon parcours mêle ingénierie fullstack web (Next.js, Nuxt, React, Node.js, FastAPI) et IA appliquée (NLP, vision par ordinateur avec YOLO, intégrations OpenAI/Anthropic). J'ai livré des CRM, des plateformes SaaS, des apps mobiles et des pipelines ML — en mission client comme en freelance.",
		"about.bio.p3":
			"Ce qui me motive : architecture propre, livraison pragmatique, et faire tourner des choses que les gens utilisent vraiment. Je termine actuellement mon M2 à l'ISPM Madagascar tout en pilotant une équipe de 5 développeurs.",
		"about.services.eyebrow": "Ce que je fais",
		"about.services.title": "Services",
		"about.values.eyebrow": "Comment je travaille",
		"about.values.title": "Mes valeurs",
		"about.cta.title": "Construisons quelque chose ensemble",
		"about.cta.subtitle":
			"Disponible pour missions freelance, CDI et opportunités de Lead Tech. Si vous livrez de l'IA, du SaaS ou de l'industriel — parlons-en.",

		"services.fullstack.title": "Développement Web Fullstack",
		"services.fullstack.desc":
			"Apps modernes avec Next.js, Nuxt, React, TypeScript et des backends éprouvés.",
		"services.ai.title": "IA & Data Science",
		"services.ai.desc":
			"Du NLP et de la vision par ordinateur aux intégrations LLM (OpenAI, Anthropic) et pipelines ML.",
		"services.lead.title": "Lead Tech / Conseil CTO",
		"services.lead.desc":
			"Architecture, recrutement, observabilité, Git Flow, ADRs — je tiens la cuisine technique.",
		"services.saas.title": "Ingénierie SaaS & CRM",
		"services.saas.desc":
			"SaaS de bout en bout — du modèle de données à la facturation, l'auth et le polish UI.",

		"values.ship.title": "Livrer",
		"values.ship.desc": "Du logiciel qui marche plutôt que des plans parfaits.",
		"values.arch.title": "L'architecture compte",
		"values.arch.desc": "Des frontières propres rapportent gros à long terme.",
		"values.own.title": "Assumer le résultat",
		"values.own.desc":
			"Buck-stops-here sur les modules dont j'ai la charge.",
		"values.curious.title": "Rester curieux",
		"values.curious.desc": "IA, embarqué, web — j'apprends transversalement, exprès.",

		"skills.eyebrow": "Stack technique",
		"skills.title.before": "Compétences &",
		"skills.title.gradient": "outils",
		"skills.subtitle":
			"Une boîte à outils pragmatique entre web, mobile, IA et infra — ce que je sors quand il faut livrer.",
		"skills.cat.frontend": "Frontend",
		"skills.cat.backend": "Backend",
		"skills.cat.ai": "IA / Data Science",
		"skills.cat.mobile": "Mobile",
		"skills.cat.db": "Base de données & Infra",
		"skills.cat.tooling": "Outils & Pratiques",
		"skills.bottom.languages": "Langages de programmation",
		"skills.bottom.languagesValue": "Java · TypeScript · Python · Dart · PHP · C",
		"skills.bottom.learning": "En cours d'apprentissage",
		"skills.bottom.learningValue": "Systèmes embarqués · LLM ops avancés",
		"skills.bottom.spoken": "Langues parlées",
		"skills.bottom.spokenValue": "Français · Anglais · Malgache",

		"experience.eyebrow": "Carrière",
		"experience.title.gradient": "Expérience",
		"experience.title.after": " & parcours",
		"experience.subtitle":
			"Des premières lignes de PHP au pilotage d'une équipe de 5 sur des produits industriels.",
		"experience.type.work": "Salarié",
		"experience.type.freelance": "Freelance",
		"experience.type.education": "Études",

		"contact.eyebrow": "Me contacter",
		"contact.title.before": "Construisons",
		"contact.title.gradient": "quelque chose de grand",
		"contact.subtitle":
			"Un projet, une idée, ou juste envie de dire bonjour ? Écrivez-moi — je réponds généralement sous 24h.",
		"contact.talk.title": "Parlez-moi",
		"contact.talk.subtitle":
			"Disponible pour missions freelance, CDI et Lead Tech.",
		"contact.channel.email": "Email",
		"contact.channel.phone": "Téléphone / WhatsApp",
		"contact.channel.location": "Localisation",
		"contact.form.name": "Votre nom",
		"contact.form.namePlaceholder": "Jeanne Dupont",
		"contact.form.email": "Email",
		"contact.form.emailPlaceholder": "jeanne@entreprise.com",
		"contact.form.subject": "Sujet",
		"contact.form.subjectPlaceholder": "Projet, poste, idée, n'importe quoi…",
		"contact.form.message": "Message",
		"contact.form.messagePlaceholder":
			"Parlez-moi de ce que vous construisez ou de ce sur quoi vous avez besoin d'aide.",
		"contact.form.send": "Envoyer le message",
		"contact.form.sending": "Envoi…",
		"contact.form.success": "Message envoyé. Je reviens vers vous très vite.",
		"contact.form.error.required":
			"Merci de renseigner votre nom, votre email et votre message.",
		"contact.form.error.generic":
			"Quelque chose a mal tourné. Réessayez ou utilisez un des canaux à gauche.",
		"contact.availability":
			"Disponible pour missions freelance & opportunités CDI",

		"projects.eyebrow": "Travaux mis en avant",
		"projects.title.before": "Des projets qui repoussent les",
		"projects.title.gradient": "limites",
		"projects.subtitle":
			"Une sélection à travers Web, IA, Mobile, SaaS et Embarqué — missions client et projets perso.",
		"projects.search": "Rechercher par nom, entreprise, techno…",
		"projects.cta.title": "Prêt à créer quelque chose de génial ?",
		"projects.cta.subtitle":
			"Je suis actuellement disponible pour des missions freelance et des opportunités à temps plein.",
		"projects.cta.button": "Me recruter",

		"footer.nav": "Navigation",
		"footer.contact": "Contact",
		"footer.copyright": "Conçu avec soin à Antananarivo.",
		"footer.builtWith": "Construit avec React, TypeScript, Tailwind & shadcn/ui.",

		"notFound.title": "Page introuvable",
		"notFound.subtitle":
			"La page que vous cherchez n'existe pas ou a été déplacée. Remettons-vous sur les rails.",
		"notFound.home": "Retour à l'accueil",
		"notFound.back": "Revenir en arrière",
	},
} as const;

export type TranslationKey = keyof typeof dictionaries.en;
