import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper, Typography
} from '@material-ui/core';
import {productContext} from '../App';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
      padding: '2rem',
      backgroundColor: 'white',
      height: 490,
      // width: theme.spacing(400),
      // height: 500,
  },
  color: {
      marginTop: '2.5rem'
  },
  colorBox: {
    width: 20,
    height: 20,
    display: 'inline-block',
    marginRight: '0.5rem'
  },
  size: {
    marginTop: '2.5rem'
},
sizeBox: {
    width: 55,
    height: 50,
    display: 'inline-block',
    margin: '0.2rem',
    textAlign: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
},
typeInfo: {
  textAlign: 'center',
  // backgroundColor: 'red'
}
}));

export default function ProductInfo({type}) {

    const shoes = useContext(productContext);
  let selectedShoe;
  shoes.forEach((i) => {
      if(type === i.type){
        selectedShoe =  i;
        }
  });

  const classes = useStyles();

  return (
    <Box
    boxShadow={3} 
    className={classes.root}
    >
      <Typography className={classes.typeInfo} variant="h4" gutterBottom>
            {selectedShoe.type}
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
            Prize
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            Rs: {selectedShoe.prize}
        </Typography>

        <Typography className={classes.color} variant="h6" gutterBottom>
            Color
        </Typography>
        {
            selectedShoe.color.map((color, index) => 
                <Paper key={index} className={classes.colorBox} variant="outlined" square style={{backgroundColor: color}}/>
            )
        }
        <Typography className={classes.size} variant="h6" gutterBottom>
            Size
        </Typography>
        {
            selectedShoe.size.map((size, index) => 
                <Paper key={index} className={classes.sizeBox} variant="elevation" square>
                    {size}"
                </Paper>
            )
        }

     </Box>
  );
}
