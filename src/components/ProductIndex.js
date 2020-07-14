import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {productContext} from '../App';
import ItemCard from './ItemCard';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    padding: '1rem',
    },
  link: {
    textDecoration: 'none'
  }
}));


function ProductIndex() {
  
  const shoes = useContext(productContext);
  const classes = useStyles();

  return (
    <>
    <Grid container direction='row' className={classes.root}>
    {
      shoes.map((item) => (
        <Grid key={item.type} item lg={4} xs={10}>
          <Link to={item.type} className={classes.link}>
            <ItemCard item = {item}/>
          </Link>
          </Grid>
      ))
    }
      </Grid>
    </>
  )
}

export default ProductIndex
