import { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const projects = [
  {
    // year: 2023,
    name: "myAuxilium",
    company: "Constellation Group",
    // progress: "In Progress",
    technologies: ["React", "TypeScript","Redux", "Bootstrap", "Sass", "MUI", "PostgreSQL", "Python", "FastAPI", "Docker","Open IA"],
    link: "myAuxilium.ai",
  },
  {
    // year: 2023,
    name: "Jupiter muAux",
    company: "Constellation Group",
    // progress: "In Progress",
    technologies: ["NextJS","TypeScript" ,"Tailwind", "Rdeux", "Sass",  "PostgreSQL", "Python", "FastAPI", "Docker",],
    link: "twisales.com",
  },
  {
    // year: 2023,
    name: "Adherent",
    company: "Constellation Group",
    // progress: "Completed",
    technologies: ["Vue", "Nuxt", "Sass", "TypeScript", "Vuetify", "Strapi", "Nest", "MongoDB"],
    link: "adherent.ostie.mg",
  },
  {
    // year: 2023,
    name: "Central Care",
    company: "Constellation Group",
    // progress: "In Progress",
    technologies: ["Vue", "Nuxt", "TypeScript", "Nubra UI", "Sass", "Nest", "MongoDB"],
    link: "centralcare.ostie.mg",
  },
  {
    // year: 2023,
    name: "Affilie",
    company: "Constellation Group",
    // progress: "Completed",
    technologies: ["Vue", "Nuxt", "TypeScript", "Sass", "Vuetify", "Strapi", "Nest", "MongoDB"],
    link: "affilie.ostie.mg",
  },
];
// const projects = [
//   { name: "myAuxilium", details: "Details about Project 1" },
//   { name: "Project 2", details: "Details about Project 2" },
//   { name: "Project 3", details: "Details about Project 3" },
//   { name: "Project 4", details: "Details about Project 4" },
//   { name: "Project 5", details: "Details about Project 5" },
//   { name: "Project 6", details: "Details about Project 6" },
//   { name: "Project 6", details: "Details about Project 6" },
//   { name: "Project 6", details: "Details about Project 6" },
//   { name: "Project 6", details: "Details about Project 6" },
//   { name: "Project 6", details: "Details about Project 6" },
//   { name: "Project 6", details: "Details about Project 6" },
// ];
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
            flexGrow: 1,
            width: selectedProject ? "30%" : "100%",
            transition: "width 0.5s ease",
            p: 5,
          }}
        >
          <div className='title'>Project</div>
          <Grid
            container
            spacing={2}
            sx={{
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
                <Item>{project.name}</Item>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Détails du projet */}
        {selectedProject && (
          <Box
            sx={{
              width: "70%",
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
                    <th className="p-2">Made at</th>
                    {/* <th className="p-2">Progress</th>  */}
                    <th className="p-2">Built with</th>
                    <th className="p-2">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {projects
                  .filter((project) => project.name === selectedProject)
                  .map((project, index) => (
                    <>
                    <tr key={index} className="border-b border-gray-700">
                      {/* <td className="p-2">{project.year}</td> */}
                      {/* <td className="p-2 text-teal-400">{project.name}</td>  */}
                      <td className="p-2">{project.company}</td>
                      {/* <td className="p-2">
                        <span className={`px-2 py-1 rounded ${project.progress === "Completed" ? "bg-green-600" : "bg-blue-600"}`}>
                          {project.progress}
                        </span>
                      </td> */}
                      <td className="p-2 flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span className="bg-black rounded mx-1 my-0 p-2">
                            <span key={i} className="bg-black bg-teal-700 px-2 py-3 rounded text-white text-sm">
                              {tech}
                            </span>
                            {i==3 || i==7? <><br/><br/></>: ""}
                          </span>
                        ))}
                      </td>
                      <td className="p-2">
                        <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">
                          {project.link}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="" alt="" srcset="" /></td>
                      <td>description</td>
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
