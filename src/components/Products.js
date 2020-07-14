import React from 'react';
import {Outlet} from 'react-router';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'linear-gradient(to right, #e0e1e5 , #f7f6f4, 80%, #e0e1e5, #f7f6f4)',
    minHeight: '100vh',
    }
}));

function Products() {

  const classes = useStyles();

  return (
    <>
    
    <div className={classes.root}>
      <Outlet />
      </div>
    </>
  )
}

export default Products
