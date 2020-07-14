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
    padding: '1rem 0.5rem',
    minHeight: '100vh',
    // backgroundColor: 'yellow'
    },
    item: {
      backgroundColor: 'yellow',
    },
  marginGrid: {
      margin: '0.3rem',
    },
}));

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
      item
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
      item
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item lg= {8} className={classes.marginGrid}>
        <ProductImage type={productType}/>
      </Grid>
      <Grid item lg= {3} className={classes.marginGrid}>
        <ProductInfo type={productType}/>
      </Grid>


    </Grid>

    </Grid>
    </>
  )
}

export default ProductDetail
