import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import Grid from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar: {
      backgroundColor: 'black'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    links: {
      marginRight: '1rem',
      textDecoration: 'none',
      color: "white"
    },
  }));



function NavBar() {
    const classes = useStyles();
  return (
    <div>
        {/* <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link> */}
      <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense" >
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.links}>
          Shoes Store
          </Typography>
            <Link to='/' className={classes.links}>
            <Typography variant="subtitle2" color="inherit">
            Home
            </Typography>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
   </div>
  )
}

export default NavBar
