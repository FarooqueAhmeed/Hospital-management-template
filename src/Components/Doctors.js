import React from 'react';
import doctors from "../ClinicData"
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';


import Container from '@material-ui/core/Container';
import CardG from './CardExample'
import Cards from './Card'

const useStyles = makeStyles ((theme) => ({


  root: {
    paddingTop:'20px',
    textAlign: 'center',
    color: '#71C61D', 
  },
  
 

}));


function Doctors() {
    const classes = useStyles();
 

  return (
<div>

  <Container> 
<div className={classes.root}>
        
<Typography variant="h3" gutterBottom style={{}}>
      CHOOSE YOUR SPECIALIST
      </Typography>
        
</div>





<Cards/>



</Container>


    </div>


 
 );
}

export default Doctors;
