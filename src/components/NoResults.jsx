import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        color:"white"
    }
  }));
const NoResults = ({ data }) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>No se encontraron resultados</div>
        </>
      );};
 
export default NoResults;