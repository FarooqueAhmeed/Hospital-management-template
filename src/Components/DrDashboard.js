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
import Button from '@material-ui/core/Button';
import Footer from '../Components/Footer'

import PropTypes from 'prop-types';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import AllAppointments from './AllAppointments'
import UpcommingApp from './UpcommingApp'
import TodayApp from './TodayApp'
import Reviews from './Reviews'






function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  





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

  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  rootGrid: {
    flexGrow: 1,
    paddingTop:33,
   
  },

  rootTab: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    //height: 224,
    margin:70,
    
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
 

  
}));

export default function DrDashboard() {
  const classes = useStyles();


 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 


 
  return (
    <Grid>
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
       
            <Typography > <h2> Welcome ! Dr.Eric Buckles </h2> </Typography> 
        </Grid>

        <Grid item xs>
              <Typography style={{ color:'#71C61D'}}> Over All Patients ( 13 ) </Typography>
          <Divider/>  
          <Typography style={{ color:'#71C61D'}}> Total Reviews( 13 ) </Typography>
          <Divider/>
            <Typography style={{ color:'#71C61D'}}> Upcomming Patients ( 7 ) </Typography>
          <Divider/>

          <Typography style={{ color:'#71C61D'}}> Today's Patients ( 5 ) </Typography>
          <Divider/>
             

        
        </Grid>
        </Grid>
        </div>
  
    </div>
    </Container> 


<div className={classes.rootTab}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label=" My Patients" {...a11yProps(0)} />
        <Tab label="Upcomming" {...a11yProps(1)} />
        <Tab label="Today's" {...a11yProps(2)} />
       
        <Tab label=" Reviews" {...a11yProps(3)} />
      
        
      </Tabs>
      <TabPanel value={value} index={0}>
      <AllAppointments/>
      </TabPanel>



      <TabPanel value={value} index={1}>

      <UpcommingApp/>

     
      </TabPanel>
      <TabPanel value={value} index={2}>
     <TodayApp/>
      </TabPanel>
      
      <TabPanel value={value} index={3}>
      <Reviews/>
    
      
      </TabPanel>
      
      
    </div>




    <Footer/>   
  </Grid> 



);
}
