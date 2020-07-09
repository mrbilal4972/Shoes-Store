import React, {useContext} from 'react';
import {useParams} from 'react-router';
import {productContext} from '../App';
import {
  Grid, Breadcrumbs,Typography
} from '@material-ui/core';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3rem'
    },
  marginGrid: {
      margin: '0.5rem',
    },
}));

// function handleClick(event) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

function ProductDetail() {

  const classes = useStyles();

    const shoes = useContext(productContext);
    const {productType} = useParams();
    console.log(shoes)
  return (
    <>
     <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}
    >

<Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
    <Grid item lg={10}>
      <Breadcrumbs aria-label="breadcrumb" >
        <Link color="inherit" to="/">
          Home
        </Link>
        <Link color="inherit" to="/products">
          Products
        </Link>
        <Typography color="textPrimary">
          {
          productType
          }
        </Typography>
      </Breadcrumbs>
    </Grid>
  </Grid>


  <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item lg= {7} className={classes.marginGrid}>
        <ProductImage type={productType}/>
      </Grid>
      <Grid item lg= {3} className={classes.marginGrid}>
        <ProductInfo type={productType}/>
      </Grid>
      <Grid item lg= {2}>
      </Grid>


    </Grid>

    </Grid>
    </>
  )
}

export default ProductDetail
