import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, Typography,Paper
 } from '@material-ui/core';
import {Link} from 'react-router-dom';


 const useStyles = makeStyles((theme) => ({
    
    gridItems: {
      margin: '0.5rem',
      flexWrap: 'wrap',
      textAlign: 'center'
    },
    paperItem: {
      width: '100%',
      height: theme.spacing(20),
      margin: 'auto',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: 'gray',
      color: 'white'
    },
    internalGrid: {
      height: '100%',
    },
    img: {
      height: '100%',
      borderRadius: '50% 0 50% 0',
      backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsAIbIh6fR3DLRSdm4kuw2B6BkYV7SDMVkEg&usqp=CAU"})`,
      backgroundSize: 'contain',
    }
    
  }));

function WomencollectionLink() {

    const classes = useStyles();

  return (
    <>
    <Grid item md={3} xs={9} className={classes.gridItems}>
        <Link to='/products' style={{textDecoration: 'none'}}>
        <Paper elevation={3} className={classes.paperItem}>
        <Grid container direction='row' className={classes.internalGrid} justify='center' alignItems='center'>
        <Grid item xs={4} className={classes.img}>
        </Grid>
        <Grid item xs={8}>
        <Typography variant='h6' className={classes.typography}>
        Women Collection
        </Typography>
        </Grid>
        </Grid>
        </Paper>
        </Link>
    </Grid>
    </>
  )
}

export default WomencollectionLink
