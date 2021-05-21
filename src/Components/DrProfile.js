import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ChatIcon from '@material-ui/icons/Chat';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },

    padding: 100,
  },

  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },

  rootGrid: {
    flexGrow: 1,
    paddingTop:33,
   
  },


  rootPara: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },

  rootMe: {
    paddingTop:'20px',
    textAlign: 'center',
    color: '#71C61D', 
  },


  rootTimming: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },

  
}));

export default function DrProfile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(5);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
<CssBaseline />

<Container maxWidth="lg">
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="/Images/abbat-uzkNxbPrN9E-unsplash.jpg" className={classes.large} />
      

      <div className={classes.rootGrid}>
      <Grid container spacing={2}>
        <Grid item xs>
            <Typography > BDS, MDS - Oral & Maxillofacial Surger </Typography>
        <Divider/>
            <Typography > Speciality Dentist </Typography>
        <Divider/>
            <Rating name="read-only" value={value} readOnly /> (13)  
        <Divider/>
            <Typography > <h2> Dr.Eric Buckles </h2> </Typography> 
        </Grid>

        <Grid item xs>
              <Typography> $100  per-hour </Typography>
          <Divider/>  
              <Typography> <ChatIcon/>  <VideoCallIcon/>  <FavoriteIcon/> </Typography>
          <Divider/>  

          <Typography> 
<Button variant="contained" style={{color:'white' ,backgroundColor:'#71C61D'}}>
  FIX APPOINTMENT
</Button> </Typography>
          <Divider/> 
        
        </Grid>
        </Grid>
        </div>
  
    </div>
    </Container> 




    <div className={classes.rootMe}>
        
        <Typography variant="h3" gutterBottom style={{}}>
       ABOUT ME
              </Typography>
                
        </div>

<Grid container spacing={6} justify="center">
    <Grid item xs={12} md={8}>

    <Divider />
      <Typography variant="h6" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <Divider />
         
    </Grid>

    </Grid>












    <div className={classes.rootMe}>
        
        <Typography variant="h3" gutterBottom style={{}}>
        Timming
              </Typography>
                
        </div>
        
        <Grid container spacing={6} justify="left" 
        
        style={{
         
          paddingLeft:200,
        
        
        }}>
                        <Grid item>
        
            <div className={classes.rootTimming}>
             
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography className={classes.heading}>Monday</Typography>
                 </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  ​4:00 PM to 4:15 PM
                  </Typography>
                </AccordionDetails>
              </Accordion>
        
        
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>Tuesday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  ​4:00 PM to 4:15 PM
                  </Typography>
                </AccordionDetails>
              </Accordion>
        
        
        
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography className={classes.heading}>Wednesday</Typography>
        
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  ​4:00 PM to 4:15 PM
                  </Typography>
                </AccordionDetails>
              </Accordion>
        
        
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>Thursday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  ​6:00 PM to 6:15 PM
                  </Typography>
                </AccordionDetails>
              </Accordion>
        
        
        
        
              <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                >
                  <Typography className={classes.heading}>Friday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  ​6:00 PM to 6:15 PM
                  </Typography>
                </AccordionDetails>
              </Accordion>
        
        
        
              <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel6bh-content"
                  id="panel6bh-header"
                >
                  <Typography className={classes.heading}>Saturday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Not Available
                  </Typography>
                </AccordionDetails>
              </Accordion>
        
        
        
              <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel7bh-content"
                  id="panel7bh-header"
                >
                  <Typography className={classes.heading}>Sunday</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Not Available
                  </Typography>
                </AccordionDetails>
              </Accordion>
        
        
      </div>
        
            </Grid>
            </Grid>



            <div className={classes.rootMe}>
        
        <Typography variant="h3" gutterBottom style={{}}>
       Reviews
              </Typography>
                
        </div>

<Grid container spacing={6} justify="center">
    <Grid item xs={12} md={8}>

    <Divider />
      <Typography 
       style={{
        position:'absolute',
        paddingTop:12,

       }}
       
      >
          <Avatar alt="" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
         
      </Typography>
      
      <Typography 
      style={{
       paddingLeft:50,
       

       }}
      >
           <h3>Olivia  
             
           <Typography className={classes.secondaryHeading}>Reviewed 2 Days ago  
              </Typography>

              <Rating 
                      style={{
                        position:'absolute',
                        paddingLeft:600,  
                        }}
             
                    name="read-only" value={value} readOnly />
             </h3>  
            

             <Typography > <h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5> </Typography>
      
      </Typography>

      <Divider />
         
    </Grid>

    </Grid>




    
<Grid container spacing={6} justify="center">
    <Grid item xs={12} md={8}>

    <Divider />
      <Typography 
       style={{
        position:'absolute',
        paddingTop:12,}} 
      >
          <Avatar alt="" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
      </Typography>
      
      <Typography 
      style={{
       paddingLeft:50,}}
      >
           <h3>Olivia  
           <Typography className={classes.secondaryHeading}>Reviewed 2 Days ago  
              </Typography>

              <Rating 
                      style={{
                        position:'absolute',
                        paddingLeft:600,  
                        }}
             
                    name="read-only" value={value} readOnly />
             </h3>  
             <Typography > <h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5> </Typography>
      </Typography>

      <Divider />
         
    </Grid>

    </Grid>



    
<Grid container spacing={6} justify="center">
    <Grid item xs={12} md={8}>

    <Divider />
      <Typography 
       style={{
        position:'absolute',
        paddingTop:12,}} 
      >
          <Avatar alt="" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
      </Typography>
      
      <Typography 
      style={{
       paddingLeft:50,}}
      >
           <h3>Olivia  
           <Typography className={classes.secondaryHeading}>Reviewed 2 Days ago  
              </Typography>

              <Rating 
                      style={{
                        position:'absolute',
                        paddingLeft:600,  
                        }}
             
                    name="read-only" value={value} readOnly />
             </h3>  
             <Typography > <h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5> </Typography>
      </Typography>

      <Divider />
         
    </Grid>

    </Grid>






    
<Grid container spacing={6} justify="center">
    <Grid item xs={12} md={8}>

    <Divider />
      <Typography 
       style={{
        position:'absolute',
        paddingTop:12,}} 
      >
          <Avatar alt="" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
      </Typography>
      
      <Typography 
      style={{
       paddingLeft:50,}}
      >
           <h3>Olivia  
           <Typography className={classes.secondaryHeading}>Reviewed 2 Days ago  
              </Typography>

              <Rating 
                      style={{
                        position:'absolute',
                        paddingLeft:600,  
                        }}
             
                    name="read-only" value={value} readOnly />
             </h3>  
             <Typography > <h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5> </Typography>
      </Typography>

      <Divider />

      
    <Typography justify="center"> 
<Button variant="contained" style={{color:'white' ,backgroundColor:'#71C61D'}}>
  Load more
</Button> </Typography>
          <Divider/> 
         
    </Grid>

    </Grid>




   </> 
  );
}
