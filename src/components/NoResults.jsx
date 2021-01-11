import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        color:"#FFFFFF"
    }
  }));
const NoResults = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>No se encontraron resultados</section>
      );};
 
export default NoResults;