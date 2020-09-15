import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
      
    },
    menuButton: {
      marginRight: theme.spacing(4),
    },
    title: {
      flexGrow: 1,
      fontWeight: "bold"
    },
    navStyle: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border:1, 
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 80,
        padding: '0 50px',
    }, 
    buttonStyle: {
        padding: '30px',
        color: 'white',
    }
  }));

  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar className={classes.navStyle} position="static">
          <Toolbar>
              <Link to="/" style={{textDecorationLine: "none", color: 'white',}}>
              <Typography variant="h6" className={classes.title}>
              PET ADOPTION
            </Typography>
              </Link>
            <Link to="/ListOfPets" style={{textDecorationLine: "none"}}>
            <Button className={classes.buttonStyle} color="inherit">Adopt a Dog</Button>
            </Link>
            
            <Button className={classes.buttonStyle} color="inherit">About Us</Button>
            <Link to="/HandleSignUp" style={{textDecorationLine: "none"}}>
            <Button className={classes.buttonStyle} color="inherit">SignUp</Button>
            </Link>
            
          </Toolbar>
        </AppBar>
      </div>
    );
  }
