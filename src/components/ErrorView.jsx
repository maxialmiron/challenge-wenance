import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      "display": "flex",
      "flexDirection" : "column",
      "alignItems" : "center",
      "margin": "100px",
      "color" :"#FF0000"
    }
  }));
  
const ErrorView = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}> Ocurrio un error...</section>
      );};
 
export default ErrorView;