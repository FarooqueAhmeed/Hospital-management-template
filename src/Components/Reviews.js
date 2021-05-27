import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Rating from '@material-ui/lab/Rating';

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
    margin:40,
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

  rootRatting: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },

  
}));

export default function Reviews() {
  const classes = useStyles();
  const [value] = React.useState(5);

 




  return (
    <Grid>
<CssBaseline />


            <div className={classes.rootMe}>
        
        <Typography variant="h4" gutterBottom style={{}}>
       Reviews
              </Typography>
                
        </div>

<Grid container spacing={6} justify="center">
    <Grid item xs={12} md={8}>

    
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
           <h3>Olivia - to - Dr.name
             
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

         
    </Grid>

    </Grid>




    
<Grid container spacing={6} justify="center">
    <Grid item xs={12} md={8}>

   
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
           <h3>Olivia - to - Dr.name
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

         
    </Grid>

    </Grid>



    
<Grid container spacing={6} justify="center">
    <Grid item xs={12} md={8}>

  
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
           <h3>Olivia - to - Dr.name
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

   
         
    </Grid>

    </Grid>






    
<Grid container spacing={6} justify="center">
    <Grid item xs={12} md={8}>

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
           <h3>Olivia - to - Dr.name
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

      
    <Typography align='center' style={{paddingTop:22,}}> 
<Button variant="contained" style={{color:'white' ,backgroundColor:'#71C61D'}}>
  Load more reviews
</Button> </Typography>
          
         
    </Grid>

    </Grid>
  </Grid> 



);
}
