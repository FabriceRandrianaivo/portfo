import LogoIntelliDetect from "../assets/modele/images/bg_home.png";
import LogoMyAux from "../assets/modele/images/logo_.png";
import LogoJupiter from "../assets/modele/images/Jupiter-logo.jpeg";
import LogoFoodStack from "../assets/modele/images/food-track.png";
import LogoEvoyazy from "../assets/modele/images/e-voyazy.png";

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
		year: 2025,
		name: "IntelliDetect",
		company: "Project of study",
		description:"Detection object IA in video streaming,",
		// progress: "In Progress",
		technologies: ["React", "TypeScript", "Redux", "Bootstrap", "Sass", "MUI", "PostgreSQL", "Python", "FastAPI", "Docker", "Yolo v8s","IPWebCam","Postman"],
		link: ["github.com/FabriceRandrianaivo"],
		img: LogoIntelliDetect,
		post: ["Lead project, Backend Developer and Developer IA (Data Scientist)"],
	},
	{
		year: 2024,
		name: "Jupiter myAux",
		company: "Constellation Group",
		// progress: "In Progress",
		technologies: ["NextJS", "TypeScript", "Tailwind", "Redux", "Sass", "PostgreSQL", "Python", "FastAPI", "Docker",],
		link: ["JupiterMyAux.app"],
		img: LogoJupiter,
		post: ["Lead Tech Developer Frontend (React) of project"],
	},
	{
		year: 2024,
		name: "NER and Topic Modeling ",
		company: "Constellation Group",
		description:"Boost performance of chat with docs",
		// progress: "In Progress",
		technologies: ["NLP","Name Entity Recognitive","Topics Modeling","Python","Bert Model Base uncased ","LDA Model","JupiterNoteBook","PostgreSQL", "FastAPI", "Postman"],
		link: ["myAuxilium.ai", "app.myauxilium.ai"],
		img: LogoMyAux,
		post: ["Data Scientist"],
	},
	{
		year: 2024,
		name: "myAuxilium",
		company: "Constellation Group",
		description:"App chat with doc, chat with professor IA, chat with Team in Society ,collection doc and session chat",
		// progress: "In Progress",
		technologies: ["React", "TypeScript", "Redux", "Bootstrap", "Sass", "MUI", "PostgreSQL", "Python", "FastAPI", "Docker", "Open IA"],
		link: ["myAuxilium.ai", "app.myauxilium.ai"],
		img: LogoMyAux,
		post: ["Lead Tech Developer Frontend (React) of project"],
	},
	{
		year: 2023,
		name: "Food Track",
		company: "Project of study",
		// progress: "Completed",
		technologies: ["Html5", "Css3", "Bootstrap", "JavaScript", "Vue", "NodeJs", "MongoDB"],
		link: ["github.com/FabriceRandrianaivo"],
		img: LogoFoodStack,
		post: ["Lead of project"],
	},
	{
		year: 2022,
		name: "E-voyage",
		company: "Project of study",
		// progress: "In Progress",
		technologies: ["Java", "XML", "Android Studio", "SQLite"],
		link: ["github.com/FabriceRandrianaivo"],
		img: LogoEvoyazy,
		post: ["Frontend Developer"]
	},
	{
		year: 2021,
		name: "Save Password",
		company: "Project personnel",
		// progress: "Completed",
		technologies: ["HTML5", "CSS", "PHP", "MySql", "Wamp Server",],
		link: ["github.com/FabriceRandrianaivo/SavePassword-1.0-2021"],
		img: "",
		post: ["Lead of project"],
	},
];
