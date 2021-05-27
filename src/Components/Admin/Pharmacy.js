import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import PaginationNum from '../Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Pharmacy() {
  const classes = useStyles();

  return (
    <List className={classes.root}>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/austin-distel-7bMdiIqz_J4-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Michael"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              Section - 1
              </Typography> 
            
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/austin-distel-7bMdiIqz_J4-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="John"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              Section - 2
              </Typography> 
            
            </React.Fragment>
          }
        />
      </ListItem>



      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/abbat-uzkNxbPrN9E-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Grace"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              Section - 3
              </Typography> 
             
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />




<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="/images/austin-distel-7bMdiIqz_J4-unsplash.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="John"
    secondary={
      <React.Fragment>
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textPrimary"
        >
        Section - 2
        </Typography> 
       
      </React.Fragment>
    }
  />
</ListItem>



<Divider variant="inset" component="li" />

<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="/images/abbat-uzkNxbPrN9E-unsplash.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="Grace"
    secondary={
      <React.Fragment>
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textPrimary"
        >
        Section - 3
        </Typography> 
      
      </React.Fragment>
    }
  />
</ListItem>

<Divider variant="inset" component="li" />



<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="/images/austin-distel-7bMdiIqz_J4-unsplash.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="John"
    secondary={
      <React.Fragment>
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textPrimary"
        >
        Section - 2
        </Typography> 
       
      </React.Fragment>
    }
  />
</ListItem>



<Divider variant="inset" component="li" />

<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="/images/abbat-uzkNxbPrN9E-unsplash.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="Grace"
    secondary={
      <React.Fragment>
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textPrimary"
        >
        Section - 3
        </Typography> 
       
      </React.Fragment>
    }
  />
</ListItem>

<Divider variant="inset" component="li" />




<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="/images/austin-distel-7bMdiIqz_J4-unsplash.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="John"
    secondary={
      <React.Fragment>
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textPrimary"
        >
        Section - 2
        </Typography> 
      
      </React.Fragment>
    }
  />
</ListItem>



<Divider variant="inset" component="li" />

<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="/images/abbat-uzkNxbPrN9E-unsplash.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="Grace"
    secondary={
      <React.Fragment>
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textPrimary"
        >
        Section - 3
        </Typography> 
       
      </React.Fragment>
    }
  />
</ListItem>

<Divider variant="inset" component="li" />



<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="/images/austin-distel-7bMdiIqz_J4-unsplash.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="John"
    secondary={
      <React.Fragment>
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textPrimary"
        >
        Section - 2
        </Typography> 
       
      </React.Fragment>
    }
  />
</ListItem>



<Divider variant="inset" component="li" />

<ListItem alignItems="flex-start">
  <ListItemAvatar>
    <Avatar alt="Remy Sharp" src="/images/abbat-uzkNxbPrN9E-unsplash.jpg" />
  </ListItemAvatar>
  <ListItemText
    primary="Grace"
    secondary={
      <React.Fragment>
        <Typography
          component="span"
          variant="body2"
          className={classes.inline}
          color="textPrimary"
        >
        Section - 3
        </Typography> 
       
      </React.Fragment>
    }
  />
</ListItem>

<Divider variant="inset" component="li" />









      <Divider variant="inset" component="li" />

<PaginationNum/>


    </List>
  );
}
