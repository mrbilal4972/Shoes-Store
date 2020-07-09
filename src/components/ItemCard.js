import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // border: '1px solid black'
    },
    paper: {
      padding: theme.spacing(2),
      margin: '1rem auto',
      maxWidth: 500,
      backgroundImage: 'linear-gradient(to right, #cfd8dc, #eceff1)'
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      border: '1px solid black'
    
    },
  }));

function ItemCard({item}) {

    const classes = useStyles();

  return (
    <>
      <div key={item.id} className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={item.image[0]} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {item.Brand}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {item.type}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {item.id}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Rs {item.prize}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    </>
  )
}

export default ItemCard
