import React from 'react';
import {
    Typography, Grid
}from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    root: {
      flexGrow: 1,
      minHeight: '100vh',
      maxHeight: '100%',
      backgroundImage: 'linear-gradient(to right, #e0e1e5 , #f7f6f4, 80%, #e0e1e5, #f7f6f4)',

    //   padding: '4rem 0.5rem 6rem 0.5rem',
    },
  }));

function NotFound() {

    const classes = useStyles();

  return (
    <Grid container justify='center' alignItems='center' className={classes.root}>
        <Grid item>
            <Typography variant= 'h3'>
                404 Page Not Found
            </Typography>
        </Grid>
    </Grid>
  )
}

export default NotFound;
