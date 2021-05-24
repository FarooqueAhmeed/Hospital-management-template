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
    ///width: '100%',
    //maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Nurses() {
  const classes = useStyles();

  return (
    <List className={classes.root}>

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Sofia"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               Section - 7
              </Typography>
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />

      
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Lily"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               Section - 5
              </Typography>
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />

     
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse lessa"
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
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />


      
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Sofia"
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
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />

     
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Emma"
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
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

     

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Emma"
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
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Emma"
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
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Emma"
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
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      
     
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Emma"
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
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Emma"
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
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>
     
      <Divider variant="inset" component="li" />

      
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Emma"
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
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />

      

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Emma"
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
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

    
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Emma"
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
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />

      
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nurse Emma"
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
              {" — Diploma in Practical Nursing."}
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />

<PaginationNum/>


    </List>
  );
}
