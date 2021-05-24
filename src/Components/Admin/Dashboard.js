import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import DashboardIcon from '@material-ui/icons/Dashboard';
import Paper from '@material-ui/core/Paper';
import GroupIcon from '@material-ui/icons/Group';

import { Divider, Icon } from '@material-ui/core';
import EventNoteIcon from '@material-ui/icons/EventNote';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import RateReviewIcon from '@material-ui/icons/RateReview';

import PieChart from './PieChart'
import LineChart from './LineChart'
import BarChart from './BarChart'
import Footer from '../Footer'

import Staff from '../Admin/Staff'



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
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    paddingTop:80,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },

  paperroot: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing(3),
    textAlign: 'center',
    //position: 'absolute',
    color: theme.palette.text.secondary,
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(18),
    },
  },
  

}));

export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
<div> 




    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Dashboard" {...a11yProps(0)}  />
        <Tab label="Staffs" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <h3> Welcome Admin </h3> 

      <div className={classes.paperroot}>
     
     
      <Paper > 
      <GroupIcon    color='primary' 
      style={{
        fontSize:70,
        }}
      />
       <h3  style={{
        color:'#28a745',
        }}>Doctors 144 </h3> 
      </Paper>

      <Paper  > 
      <GroupIcon    color='primary' 
      style={{
        fontSize:70,
            }} />
       <h3  style={{
        color:'#28a745',
        }}>Total Patient  344 </h3> 
      </Paper>


      

      <Paper  > 
      <EventNoteIcon   color='primary' 
      style={{
        fontSize:70,
        }}
      />
       <h3  style={{
        color:'#28a745',
        }}>Today App 55 </h3> 
      </Paper>


      <Paper  > 
      <MonetizationOnIcon  color='primary' 
      style={{
        fontSize:70,
        }}
      />
       <h3  style={{
        color:'#28a745',
        }}>Last month $5K </h3> 
      </Paper>

      <Paper > 
      <RateReviewIcon  color='primary' 
      style={{
        fontSize:70,
        }}
      />
       <h3  style={{
        color:'#28a745',
        }}>Reviews 190 </h3>

      </Paper>
    </div>


    <h3> Last month revenue by all departments - Pie Chart </h3> 

    <PieChart/>
    <Divider/>
    <h3> This Year Apointments by all doctors - Line chart </h3> 

    <LineChart/>
    <Divider/>

    <h3> Top rated doctors - Bar chart </h3> 
<Divider/>
     <BarChart/>
      </TabPanel>



      <TabPanel value={value} index={1}>
      
    <h3> Staff </h3> 
   
    <Staff/>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>






    <Footer/>

    </div>



  );
}
