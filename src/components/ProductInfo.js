import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Paper, Typography, Grid
} from '@material-ui/core';
import {productContext} from '../App';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
      padding: '2rem',
      backgroundColor: 'white',
      minHeight: 400
  },
  color: {
      marginTop: '1rem'
  },
  colorBox: {
    width: 20,
    height: 20,
    display: 'inline-block',
    marginRight: '0.5rem'
  },
  size: {
    marginTop: '1rem'
},
sizeBox: {
    width: 55,
    height: 30,
    display: 'inline-block',
    margin: '0.2rem',
    textAlign: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
},
typeInfo: {
  textAlign: 'center',
},
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
    <Grid container wrap='wrap'>
        <Grid item xs={10}>
        <Typography className={classes.typeInfo} variant="h4" gutterBottom>
                {selectedShoe.type}
            </Typography>
        </Grid>
        <Grid item xs={10}>
            <Typography variant="subtitle2" gutterBottom>
                Prize
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Rs: {selectedShoe.prize}
            </Typography>
        </Grid>
        <Grid item xs={10}>
            <Typography className={classes.color} variant="h6" gutterBottom>
                Color
            </Typography>
            {
                selectedShoe.color.map((color, index) => 
                    <Paper key={index} className={classes.colorBox} variant="outlined" square style={{backgroundColor: color}}/>
                )
            }
        </Grid>
        <Grid item xs={12} className={classes.sizeGrid}>
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
        </Grid>
</Grid>
     </Box>
  );
}
