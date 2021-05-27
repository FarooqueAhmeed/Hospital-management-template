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
import Paper from '@material-ui/core/Paper';
import AppButton from './Button'
import AppBar from '@material-ui/core/AppBar';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
      
    },
  },
  rootTab: {
    flexGrow: 1,
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
  indicator: {
    backgroundColor: '#71C61D',
    
  },

  
}));

export default function DrDashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Container>



<div style={{paddingTop:100,}}>  

<Paper> 

    <div className={classes.root}>

      <Avatar srcSet variant='rounded' alt="Remy Sharp" src="/Images/abbat-uzkNxbPrN9E-unsplash.jpg" className={classes.large} />
    

     
      <Grid container spacing={3}>
        <Grid item xs>
        
            <Typography > <h2> Welcome ! Dr.Eric Buckles </h2> </Typography> 
          
          <Typography style={{ color:'#71C61D'}}>Patients ( 13 ) </Typography>
          <Divider/>  
          <Typography style={{ color:'#71C61D'}}>Reviews( 13 ) </Typography>
          <Divider/>
            <Typography style={{ color:'#71C61D'}}>Upcomming ( 7 ) </Typography>
          <Divider/>

          <Typography style={{ color:'#71C61D'}}>Today ( 5 ) </Typography>
    
        </Grid>

     
        </Grid>
       
  
    </div>
  
    </Paper>

    </div>



<div className={classes.rootTab}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
          classes={{
            indicator: classes.indicator
          }}
        >

        <Tab style={{color: "#71C61D",}} label=" My Patients" {...a11yProps(0)} />
        <Tab style={{color: "#71C61D",}} label="Upcomming" {...a11yProps(1)} />
        <Tab style={{color: "#71C61D",}} label="Today" {...a11yProps(2)} />
        <Tab style={{color: "#71C61D",}} label=" Reviews" {...a11yProps(3)} />


        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
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
      
    </SwipeableViews>
    </div>





{/* 
<div className={classes.rootTab} xs>
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
      
      
    </div> */}




    <Footer/>   
  </Container> 



);
}
