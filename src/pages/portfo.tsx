import React, { useState } from 'react';
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

const project = ["project1", "project2", "project3", "project4", "project5", "project6"];

const Portfolio: React.FC = () => {
  const [isItemClicked, setIsItemClicked] = useState(true);

  const handleClick = () => {
    setIsItemClicked(!isItemClicked);
  };

  return (
    <div className={`contenair-project`}>
      <div className='title'>Project</div>
      <div className={`container-all ${isItemClicked ? 'reduced' : ''}`}> 
        <Box sx={{ flexGrow: 1 }}>
          <Grid 
            container 
            spacing={{ xs: 2, md: 3 }} 
            columns={{ xs: 4, sm: 8, md: 12 }}
            direction={isItemClicked ? 'column' : 'row'}
            justifyContent={isItemClicked ? 'flex-start' : 'center'}
          >
            {project.map((item, index) => (
              <Grid 
                item 
                xs={2} 
                sm={4} 
                md={4} 
                key={index} 
                onClick={handleClick}
              >
                <Item>{item}</Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Portfolio;
