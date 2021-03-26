import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import "./description.css"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch'
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlgoDisplay(props) {
  const classes = useStyles();

  return (
    <span className="descriptionList">
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.image} />
        </ListItemAvatar>
        <ListItemText
          primary={<span style={{display:"flex",justifyContent:"space-between"}}>
            <b>{props.title}</b> 
            <span style={{fontSize: "0.7rem",color: "#a5a5a5"}}>
              {props.timecomplexity}
            </span>
            </span>}
          secondary={
            <React.Fragment>
              {/* <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              
              </Typography> */}
              {props.description}
              <br/>
              <span style={{cursor:"pointer",color:"bule"}} onClick={props.onAlgoClick}>import Code</span>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      
    </List>
    </span>
  );
}
