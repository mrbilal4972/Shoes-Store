import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, Typography,Paper
 } from '@material-ui/core';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    paperItem: {
      width: theme.spacing(30),
      height: theme.spacing(20),
      margin: 'auto'
    }
    
  }));

function NewArrivalLink() {

    const classes = useStyles();

  return (
    <>
    <Grid item lg={4} className={classes.gridItems}>
        <Link to='/products'>
        <Paper elevation={3} className={classes.paperItem}>
        <Typography variant='h6'>
        New Arrival
        </Typography>
        </Paper>
        </Link>
    </Grid>
    </>
  )
}

export default NewArrivalLink
