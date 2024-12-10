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
  { name: "Project 1", details: "Details about Project 1" },
  { name: "Project 2", details: "Details about Project 2" },
  { name: "Project 3", details: "Details about Project 3" },
  { name: "Project 4", details: "Details about Project 4" },
  { name: "Project 5", details: "Details about Project 5" },
  { name: "Project 6", details: "Details about Project 6" },
  { name: "Project 6", details: "Details about Project 6" },
  { name: "Project 6", details: "Details about Project 6" },
  { name: "Project 6", details: "Details about Project 6" },
  { name: "Project 6", details: "Details about Project 6" },
  { name: "Project 6", details: "Details about Project 6" },
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
            flexDirection:"column",
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
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>{selectedProject}</h2>
            <p>
              {projects.find((project) => project.name === selectedProject)
                ?.details || "No details available"}
            </p>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Portfolio;
