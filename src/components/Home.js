import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid
 } from '@material-ui/core';
import NewArrivalLink from './NewArrivalLink';
import  WomencollectionLink from './WomenCollectionLink';
import MenCollectionLink from './MenCollectionLink';
import SaleAlert from './SaleAlert';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    minHeight: '700px',
    maxHeight: '100%',
    backgroundImage: `url(${"https://1.bp.blogspot.com/-ILvxv4bz3RA/VPFenZSsMdI/AAAAAAAADws/Zx9_DdDdnMk/s1600/11787%2BColorfull%2BShoes%2BHD%2BWallpaperz%2B190902.jpg"})`,
    backgroundSize: '100% 100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '4rem 0.5rem 6rem 0.5rem',
  },
  cards: {
    marginTop: '3rem',
  }
}));

function Home() {

  const classes = useStyles();

  return (
    <>
    <ThemeProvider theme={theme}>
    <SaleAlert />
    <div className={classes.root}>
    <Grid
    container
    direction='row'
    justify='center'
    alignitem='center'
    spacing={1}
    className={classes.cards}
    >
      <NewArrivalLink />
      <MenCollectionLink />
      <WomencollectionLink />
    </Grid>
    </div>

    </ThemeProvider>

    </>
  )
}

export default Home
