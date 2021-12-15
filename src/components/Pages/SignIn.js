import React from 'react';
import useState from 'react-usestateref';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

import logo from '../../images/logo.png';

const SignIn = (props) => {

  //state for sign in the username and password
  const [username, setUsername, usernameRef] = useState("");
  const [password, setPassword, passwordRef] = useState("");

  //state for the sign in error dialog
  const [open, setOpen] = React.useState(false);


  //styling for each part of the page
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

  //close event for the sign in error dialog 
  const handleClose = () => {
    setOpen(false);
  };

  //click event for continue as guest
  const handleGuest = () => {
    let path = "/home";
    history.push(path);
  }
  //click event for create new account
  const handleSignUp = () => {
    let path = "/signup";
    history.push(path);
  }

  //infomration for the admin and registered user account
  const adminAccount = {
    username: 'admin',
    password: 'admin'
  }
  const userAccount = {
    username: 'user',
    password: '12345'
  }

  //function to handle the input username
  const handleUserName = (event) => {
    let inputUsername = event.target.value;
    setUsername(inputUsername);
  }
  //function to handle the input password
  const handlePassword = (event) => {
    let inputPassword = event.target.value;
    setPassword(inputPassword);
  }
  //function to handle the click event for sign in
  const handleSignIn = () => {
    if (usernameRef.current === adminAccount.username && passwordRef.current === adminAccount.password) {
      let path = "/home";
      let ifLogin = true;
      let role = 'admin';
      history.push({
        pathname: path,
        state: {ifLogin, role}
      });
    }
    else if (usernameRef.current === userAccount.username && passwordRef.current === userAccount.password) {
      let path = "/home";
      let ifLogin = true;
      let role = 'user';
      history.push({
        pathname: path,
        state: {ifLogin, role}
      });
    }
    else {
      setOpen(true);
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
        <TextField className={classes.inputTextField} onChange={handlePassword} id="signInPassword" label="Password" variant="outlined" type="password" />
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
        <Dialog
            open={open}
            onClose={handleClose}
          >
            <DialogContent>
              <DialogContentText>
                Such sign in credential does not exist!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                CLOSE
              </Button>
            </DialogActions>
          </Dialog>
      </div>
    </div>
  );
};

export default SignIn;