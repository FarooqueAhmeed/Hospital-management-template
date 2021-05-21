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



const useStyles = makeStyles ((theme) => ({
  
  media: {
    height: 200,
  },
  rootCard: {
    flexGrow: 1,
    padding: theme.spacing(2)
}


}));


function CardG() {
    const classes = useStyles();
    const [value, setValue] = React.useState(4);
    const [spacing, setSpacing] = React.useState(2);


  return (
<div>

  
 

 {doctors.map((doctors)=> {
   return (
       <div>

 
<Card  className={classes.rootCard}>
<CardActionArea>
  <CardMedia
    className={classes.media}
    image={doctors.image}
    title={doctors.name}
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
     Dr.{doctors.name}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      {doctors.des}
    </Typography>
  </CardContent>
</CardActionArea>

<Box component="fieldset" mb={3} borderColor="transparent">
  <Rating name="read-only" value={value} readOnly />
</Box>

<CardActions>

<Button size="small" color="primary">
    <FavoriteIcon/>
  </Button>
  <Button size="small" color="primary">
   View profile
  </Button>
  <Button size="small" color="primary">
   <ShareIcon/>
  </Button>
</CardActions>
</Card>
 

    </div>

)

})}



    </div>
 
 );
}

export default CardG;

