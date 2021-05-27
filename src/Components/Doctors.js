import React from 'react';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import PaginationNum from './Pagination'



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  root2: {
    paddingTop:'20px',
    textAlign: 'center',
    color: '#71C61D', 
    margin:40,
  },
}));



export default function Doctors() {
  const classes = useStyles();
  const [value, setValue] = React.useState(4);

  return (
    <React.Fragment>
      <CssBaseline />


    
      <main>
     
        <Container className={classes.cardGrid} maxWidth="md">
        <div className={classes.root2}>     
<Typography variant="h4" gutterBottom style={{}}>
CHOOSE YOUR DOCTOR
      </Typography></div>
         
          <Grid container spacing={4}>
            
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/abbat-uzkNxbPrN9E-unsplash.jpg"
                   
                    title='name'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Dr.lessa
                    </Typography>
                    <Typography>
                    BDS, MDS - Oral & Maxillofacial Surger
                    </Typography>
                  </CardContent>

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
              </Grid>



              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/austin-distel-7bMdiIqz_J4-unsplash.jpg"
                   
                    title='name'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Dr.John
                    </Typography>
                    <Typography>
                    BDS, MDS - Oral & Maxillofacial Surger
                    </Typography>
                  </CardContent>

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
              </Grid>



              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg"
                   
                    title='name'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Dr.Sophia
                    </Typography>
                    <Typography>
                    BDS, MDS - Oral & Maxillofacial Surger
                    </Typography>
                  </CardContent>

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
              </Grid>









              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/abbat-uzkNxbPrN9E-unsplash.jpg"
                   
                    title='name'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Dr.lessa
                    </Typography>
                    <Typography>
                    BDS, MDS - Oral & Maxillofacial Surger
                    </Typography>
                  </CardContent>

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
              </Grid>



              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/austin-distel-7bMdiIqz_J4-unsplash.jpg"
                   
                    title='name'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Dr.John
                    </Typography>
                    <Typography>
                    BDS, MDS - Oral & Maxillofacial Surger
                    </Typography>
                  </CardContent>

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
              </Grid>



              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg"
                   
                    title='name'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     Dr.Sophia
                    </Typography>
                    <Typography>
                    BDS, MDS - Oral & Maxillofacial Surger
                    </Typography>
                  </CardContent>

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
              </Grid>
              
      <PaginationNum/>
          </Grid>
          
        </Container>

        
      </main>
    
    
    </React.Fragment>
  );
}