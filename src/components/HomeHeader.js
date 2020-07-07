import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, Typography,Paper
 } from '@material-ui/core';

 const useStyles = makeStyles((theme) => ({

    paperItem: {
      width: theme.spacing(100),
      height: theme.spacing(20),
      margin: 'auto'
    }
    
  }));

function HomeHeader() {

    const classes = useStyles();

  return (
    <>
    <Grid item lg={10} className={classes.gridItems}>
        <Paper elevation={3} className={classes.paperItem}>
        <Typography variant='h6'>
        Header
        </Typography>
        </Paper>
    </Grid>
    </>
  )
}

export default HomeHeader
