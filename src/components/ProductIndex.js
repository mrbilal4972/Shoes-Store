import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {productContext} from '../App';
// import {shoes} from './dummyData'
import ItemCard from './ItemCard';
// import classes from '*.module.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundImage: 'linear-gradient(to right, #e0e1e5 , #f7f6f4, #e0e1e5, #f7f6f4)',
    padding: '1rem'
    
    }
}));


function ProductIndex() {
  
  const shoes = useContext(productContext);
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
    {
      shoes.map((item) => (
          <Link key={item.type} to={item.type}>
            <ItemCard item = {item}/>
          </Link>
      ))
    }
      </div>
    </>
  )
}

export default ProductIndex
