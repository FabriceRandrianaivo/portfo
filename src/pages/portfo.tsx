import { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LogoIntelliDetect from "../assets/modele/images/bg_home.png"
import LogoMyAux from "../assets/modele/images/logo_.png";
import LogoJupiter from "../assets/modele/images/Jupiter-logo.jpeg";
import LogoFoodStack from "../assets/modele/images/food-track.png"
import LogoEvoyazy from "../assets/modele/images/e-voyazy.png"
import { Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark"
    ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  // width:"60%",
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const projects = [
  {
    year: 2025,
    name: "IntelliDetect",
    company: "Project of study",
    description: "Object detection with Yolo streaming, Intruder monitoring, Object classification .",
    // progress: "In Progress",
    technologies: ["React", "TypeScript", "Redux", "Bootstrap", "Sass", "MUI", "PostgreSQL", "Python", "FastAPI", "Docker", "Yolo v8s", "IPWebCam", "Postman"],
    link: ["github.com/FabriceRandrianaivo/IntelliDetectFront", "https://github.com/FabriceRandrianaivo/IntelliDetectBack"],
    img: LogoIntelliDetect,
    post: [
      {
        title_post: "Lead project, Backend Developer and Developer IA (Data Scientist)",
        desc_post: "",
      }
    ],
  },
  {
    year: 2024,
    name: "Jupiter myAux",
    company: "Constellation Group",
    description: "Billing management for all company projects, MyAuxilium SuperAdmin back office management. ",
    // progress: "In Progress",
    technologies: ["NextJS", "TypeScript", "Tailwind", "Redux", "Sass", "PostgreSQL", "Python", "FastAPI", "Docker", "Notion"],
    link: ["JupiterMyAux.app"],
    img: LogoJupiter,
    post: [
      {
        "title_post": "Lead Tech Developer Frontend (Next) of project",
        "desc_post": ["Architecture and Development: Design and optimize responsive interfaces while ensuring the scalability, performance, and maintainability of the front-end code.", "Management and Collaboration: Supervise the front-end team, ensure code quality, and collaborate with the back-end, design, and product teams.", "Quality and Innovation: Ensure code quality through testing, monitor technology, and propose continuous improvements."],
      }
    ],
    // post: [
    //   {
    //     title_post: "Lead Tech Developer Frontend (React) of project",
    //     desc_post: ["Architecture et développement : Concevoir et optimiser des interfaces réactives en assurant la scalabilité, la performance et la maintenabilité du code frontend. ", "Encadrement et collaboration : Encadrer l’équipe frontend, assurer la qualité du code et collaborer avec les équipes backend, design et produit.", "Qualité et innovation : Garantir la qualité du code avec des tests, assurer une veille technologique et proposer des améliorations continues."],
    //   }
    // ],
  },
  {
    year: 2024,
    name: "NER and Topic Modeling ",
    company: "Constellation Group",
    description: "Boost performance of chat with docs",
    // progress: "In Progress",
    technologies: ["NLP", "Name Entity Recognitive", "Topics Modeling", "Python", "Bert Model Base uncased ", "LDA Model", "JupiterNoteBook", "PostgreSQL", "FastAPI", "Postman", "Mission X", "Notion"],
    link: ["myAuxilium.ai", "app.myauxilium.ai"],
    img: LogoMyAux,
    post: [
      {
        title_post: "Data Scientist",
        desc_post: "",
      }
    ],
  },
  {
    year: 2024,
    name: "myAuxilium",
    company: "Constellation Group",
    description: "App chat with doc, chat with professor IA, chat with Team in Society ,collection doc and session chat",
    // progress: "In Progress",
    technologies: ["React", "TypeScript", "Redux", "Bootstrap", "Sass", "MUI", "PostgreSQL", "Python", "FastAPI", "Docker", "Open IA", "Mission X"],
    link: ["myAuxilium.ai", "app.myauxilium.ai"],
    img: LogoMyAux,
    post: [
      {
        "title_post": "Lead Tech Developer Frontend (React) of project",
        "desc_post": ["Architecture and Development: Design and optimize responsive interfaces while ensuring the scalability, performance, and maintainability of the front-end code.", "Management and Collaboration: Supervise the front-end team, ensure code quality, and collaborate with the back-end, design, and product teams.", "Quality and Innovation: Ensure code quality through testing, monitor technology, and propose continuous improvements."],
      }
    ],
    // post: [
    //   {
    //     title_post: "Lead Tech Developer Frontend (React) of project",
    //     desc_post: "",
    //   }
    // ],
  },
  {
    year: 2023,
    name: "Food Track",
    company: "Project of study",
    description: "Online delivery system with real-time order rental. Collaboration with the best restaurants in Madagascar.",
    // progress: "Completed",
    technologies: ["Html5", "Css3", "Bootstrap", "JavaScript", "Vue", "NodeJs", "MongoDB"],
    link: ["github.com/FabriceRandrianaivo"],
    img: LogoFoodStack,
    post: [
      {
        title_post: "Lead of project",
        desc_post: "",
      }
    ],
  },
  {
    year: 2022,
    name: "E-voyage",
    company: "Project of study",
    // progress: "In Progress",
    description: "Tour Operator, Touristic place, archipelago and hotel in Madagascar.",
    technologies: ["Java", "XML", "Android Studio", "SQLite"],
    link: ["github.com/FabriceRandrianaivo"],
    img: LogoEvoyazy,
    post: [
      {
        title_post: "Frontend Developer",
        desc_post: "",
      }
    ],
  },
  {
    year: 2021,
    name: "Save Password",
    company: "Project personnel",
    description: "",
    // progress: "Completed",
    technologies: ["HTML5", "CSS", "PHP", "MySql", "Wamp Server",],
    link: ["github.com/FabriceRandrianaivo/SavePassword-1.0-2021"],
    img: "",
    post: [
      {
        title_post: "Lead of project",
        desc_post: "",
      }
    ],
  },
];

interface headerType {
  theme: boolean;
  // setTheme: (theme: boolean) => void;
}
const Portfolio = (props: headerType) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleClick = (projectName: string) => {
    setSelectedProject(projectName);
  };
  return (
    <div className={`contenair-project`}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
        }}
      >
        {/* Liste des projets */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 4,
            width: selectedProject ? "20%" : "100%",
            transition: "width 0.5s ease",
            m: 3,
          }}
        >
          <h1 className='title'>Projects</h1>
          <Grid
            container
            spacing={2}
            sx={{
              pl: 3,
              overflow: "auto", // Active le défilement
              "&::-webkit-scrollbar": { display: "none" }, // Cache la barre de défilement sur Webkit (Chrome, Safari, etc.)
              scrollbarWidth: "none", // Cache la barre de défilement sur Firefox
            }}
          // direction={selectedProject ? "column" : "row"}
          >
            {projects.map((project, index) => (
              <Grid
                item
                xs={selectedProject ? 12 : 4}
                key={index}
                onClick={() => handleClick(project.name)}
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(0.9)" },
                }}
              >
                {!selectedProject ? (
                  <Card sx={{ mt: 1, maxWidth: 300, backgroundColor: "#333  " }}>
                    <CardMedia component="img" height="100" image={project.img} alt={project.name} />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">{project.name + " : " + project.description}</Typography>
                    </CardContent>
                  </Card>
                ) : (<Item>{project.name}</Item>)
                }
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Détails du projet */}
        {selectedProject && (
          <Box
            sx={{
              width: "80%",
              transition: "width 0.5s ease",
              backgroundColor: "#1a202c",
              padding: "2rem 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>{selectedProject}</h2>
            <div className="overflow-x-auto">
              {/* <table className="min-w-full border-collapse bg-dark text-white text-left"> */}
              <table className="w-auto ">
                <thead>
                  <tr className="border-b border-gray-700 text-teal-400">
                    {/* <th className="p-2">Year</th> */}
                    {/* <th className="p-2">Project</th> */}
                    <th className="p-2 w-30">Made at</th>
                    {/* <th className="p-2">Progress</th>  */}
                    <th className="p-2 w-auto">Built with</th>
                    <th className="p-2 w-10">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {projects
                    .filter((project) => project.name === selectedProject)
                    .map((project, index) => (
                      <>
                        <tr key={index} className="border-b border-gray-700">
                          {/* <td className="p-2">{project.year}</td> */}
                          <td className="p-5">{project.company}</td>
                          <td className="p-2 flex flex-wrap gap-3">
                            <span className='gap-2'>
                              {project.technologies.map((tech, i) => (
                                <>
                                  <Chip label={tech} sx={{ backgroundColor: "#333", color: "white" }} />
                                  {i == 3 || i == 7 ? <><br /><br /></> : ""}
                                </>
                              ))}
                            </span>
                          </td>
                          <td className="p-2 max-length-200">
                            {project.link.map((lien, i) => (
                              <>
                                <a key={i} href={`https://${lien}`} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline text-decoration-none">
                                  {lien}
                                </a><br />
                              </>
                            ))}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            {project.img && (
                              <Card sx={{ mt: 2, maxWidth: 300, backgroundColor: "#333" }}>
                                <CardMedia component="img" height="100" image={project.img} alt={project.name} />
                                <CardContent>
                                  <Typography variant="body2" color="text.secondary">{project.name}</Typography>
                                </CardContent>
                              </Card>
                            )}
                          </td>
                          <td colSpan={2}>
                            {/* <div className='text-teal-400'>{project.post[0].title_post}</div> */}
                            <div className='text-teal-400'>
                              <ul className='text-bold-500'>{project.post[0].title_post}
                                {Array.isArray(project.post[0].desc_post) &&
                                  project.post[0].desc_post.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                  ))}
                              </ul>
                            </div>
                          </td>

                        </tr>
                      </>
                    ))}
                </tbody>
              </table>

            </div>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Portfolio;
