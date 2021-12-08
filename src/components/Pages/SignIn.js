import React from 'react';
import useState from 'react-usestateref';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

import logo from '../../images/logo.png';
import "./SignIn.css";


const SignIn = (props) => {


  const [username, setUsername, usernameRef] = useState("");
  const [password, setPassword, passwordRef] = useState("");

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

  const handleGuest = () => {
    let path = "/home";
    history.push(path);
  }

  const handleSignUp = () => {
    let path = "/signup";
    history.push(path);
  }

  const adminAccount = {
    username: 'admin',
    password: 'admin'
  }

  const userAccount = {
    username: 'user',
    password: '12345'
  }

  const handleUserName = (event) => {
    let inputUsername = event.target.value;
    setUsername(inputUsername);
  }

  const handlePassword = (event) => {
    let inputPassword = event.target.value;
    setPassword(inputPassword);
  }

  const handleSignIn = () => {
    console.log("Clicked");
    if (usernameRef.current == adminAccount.username && passwordRef.current == adminAccount.password) {
      let path = "/home";
      let ifLogin = true;
      let role = 'admin';
      history.push({
        pathname: path,
        state: {ifLogin, role}
      });
    }
    else if (usernameRef.current == userAccount.username && passwordRef.current == userAccount.password) {
      let path = "/home";
      let ifLogin = true;
      let role = 'user';
      history.push({
        pathname: path,
        state: {ifLogin, role}
      });
    }
    
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
        <TextField className={classes.inputTextField} onChange={handleUserName} id="signInUserName" label="Username" variant="outlined"/>
        <TextField className={classes.inputTextField} onChange={handlePassword} id="signInPassword" label="Password" variant="outlined" />
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