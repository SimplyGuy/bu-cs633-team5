import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

import logo from '../../images/logo.png';
import "./SignIn.css";


const SignIn = () => {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '20ch',
      },
    },
    inputTextField: {
      margin: '10px',
    },
    signInBtn: {
      width: '180px',
      height: '40px',
      borderRadius: '8px',
      border: 'white',
      backgroundColor: '#ABB94E',
      cursor: 'pointer',
    },
    signUpBtn: {
      width: '180px',
      height: '40px',
      borderRadius: '8px',
      border: 'white',
      backgroundColor: '#FFDF58',
      cursor: 'pointer',
    }
  }));

  const history = useHistory();

  const handleSignIn = () => {
    let path = "/home";
    history.push(path);
  }

  const handleGuest = () => {
    let path = "/home";
    history.push(path);
  }

  const handleSignUp = () => {
    let path = "/signup";
    history.push(path);
  }


  const classes = useStyles();

  return (
    <div>
      <div className="container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh',
          flexDirection: 'column'}} >
        <img src={logo} alt="logo" style={{ height: "200px", width: "200px", paddingBottom: '60px' }} />
        <TextField className={classes.inputTextField} id="signInUserName" label="Username" variant="outlined"/>
        <TextField className={classes.inputTextField} id="signInPassword" label="Password" variant="outlined" />
        <button className={classes.signInBtn} onClick={handleSignIn} type="button">Sign In</button>
        <a style={{
          fontSize: '15px',
          paddingTop: '3px',
          paddingBottom: '40px',
          textDecoration: 'underline',
          cursor: 'pointer',
        }} onClick={handleGuest}>
          Or continue as a guest</a>

        <div style={{
          fontSize: '15px',
          paddingTop: '3px',
        }}>Don't have a account?</div>
        <button className={classes.signUpBtn} onClick={handleSignUp}>Create new account</button>
      </div>
    </div>
  );
};

export default SignIn;