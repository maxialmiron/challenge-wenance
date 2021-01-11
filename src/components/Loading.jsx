import React from 'react';
import loadingImg from '../images/loading.gif' 
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    "display": "flex",
    "flexDirection" : "column",
    "alignItems" : "center",
    "margin": "100px"
  }
}));

const Loading = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
          <img src={loadingImg}  alt="loading" />
        </section>
      );};
 
export default Loading;