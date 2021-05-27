import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },

  root2: {
    paddingTop:'20px',
    textAlign: 'center',
    color: '#71C61D',
    margin:40,
    
  },

}));

export default function About() {
  const classes = useStyles();
  

  return (
      <>
<Container>  
<div className={classes.root2}>
        
        <Typography variant="h4" gutterBottom style={{}}>
       ABOUT US
              </Typography>
                
        </div>

<Grid container spacing={6} justify="center" >
    <Grid item xs={12} md={8}>

      <Typography variant="h6" gutterBottom>
      - We will provide the highest quality of care with strict infection
      control practices consistent with our international gold standard
      accreditations from the Joint Commission International and the College 
      of American Pathologists
      </Typography>

      <Divider />

      <Typography variant="h6" gutterBottom>
      - We will ensure expertise in safely treating all patients with all illnesses, 
      including those with COVID-19 and those with non-COVID-19 diseases.
      </Typography>


      <Typography variant="h6" gutterBottom>
      - We will use evidenced based medical technology, protocols and innovations
      to care for our patients.
      </Typography>

      <Typography variant="h6" gutterBottom>
     - Keeping all our patients, attendants and staff safe is our priority
      </Typography>
         
    </Grid>

    </Grid>
    </Container>
    </>
  );
}

