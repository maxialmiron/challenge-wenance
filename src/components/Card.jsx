import React from 'react';
import  {CardActions, Typography, CardContent, Divider, makeStyles, Button } from '@material-ui/core';
import { removePeople } from '../actions/peopleAction'
import { useDispatch } from "react-redux";
import CardMUI from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
    root: {
      borderRadius: 12,
      minWidth: 146,
      textAlign: 'center',
      margin: 12,
      width: 450
    },
    header: {
      textAlign: 'center',
      spacing: 8,
    },
    list: {
      padding: '4px',
    },
    button: {
      margin: theme.spacing(1),
    },
    action: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  }));

  const Card = ({ data }) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const remove = (e) => {
      dispatch(removePeople(e))
    };

    return (
      <CardMUI className={classes.root}>
        <CardContent>
          <Typography variant="h4" align="center">
          {data.name}
          </Typography>
          <div className={classes.list}>
            <Typography align="center">Height: {data.height}</Typography>
            <Typography align="center">Gender: {data.gender}</Typography>
          </div>
        </CardContent>
        <Divider variant="middle" />
        <CardActions className={classes.action}>
          <Button variant="contained" color="primary" className={classes.button} onClick={() => remove(data)} >
            Eliminar
          </Button>
        </CardActions>
      </CardMUI>
    );
}

export default Card;