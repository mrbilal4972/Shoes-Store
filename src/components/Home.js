import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid
 } from '@material-ui/core';
import NewArrivalLink from './NewArrivalLink';
import  WomencollectionLink from './WomenCollectionLink';
import MenCollectionLink from './MenCollectionLink';
import HomeHeader from './HomeHeader';
import SaleAlert from './SaleAlert'
// import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

  root: {
    margin: 'auto',
    height: '100%',
    backgroundImage: `url(${"https://1.bp.blogspot.com/-ILvxv4bz3RA/VPFenZSsMdI/AAAAAAAADws/Zx9_DdDdnMk/s1600/11787%2BColorfull%2BShoes%2BHD%2BWallpaperz%2B190902.jpg"})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    paddingTop: '2rem'
  },
  cards: {
    margin: 'auto',
    height: '50vh',
  }
}));

function Home() {

  const classes = useStyles();

  return (
    <>
    <SaleAlert />
    <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  className={classes.root}
>
<HomeHeader />
  <Grid
  item
  container
  direction="row"
  justify="center"
  alignItems="center"
  className={classes.cards}
>

<NewArrivalLink />
<MenCollectionLink />
<WomencollectionLink />

</Grid>

</Grid>

    </>
  )
}

export default Home
