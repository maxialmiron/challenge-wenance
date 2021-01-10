import React from 'react';
import CardMUI from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Divider, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import { removePeople } from '../actions/peopleAction'
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
      borderRadius: 12,
      minWidth: 156,
      textAlign: 'center',
      margin: 12,
      backgroundColor: '#282c34',
      color: 'white',
      width: 430
    },
    header: {
      textAlign: 'center',
      spacing: 10,
    },
    list: {
      padding: '5px',
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
