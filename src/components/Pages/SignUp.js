import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import logo from '../../images/logo.png';



const SignUp = () => {

  const [checkStatus, setCheckStatus] = React.useState(true);

  const useStyles = makeStyles((theme) => ({
    inputTextField: {
      margin: '4px',
      backgroundColor: 'white',
    },
    logo: {
      height: "120px", 
      width: "120px", 
      padding: "30px",
    },
    signUpBtn: {
      width: '180px',
      height: '40px',
      borderRadius: '8px',
      border: 'white',
      backgroundColor: '#ABB94E',
      cursor: 'pointer',
      marginBottom: '30px',
    },
    checked: true,
    overrides: {
      MuiFormControlLabel: {
        label: {
          fontSize: '10px',
        }
      }
    }
  }));

  const history = useHistory();

  const handleChecked = (event) => {
    setCheckStatus(!checkStatus);
  };

  const handleSignUp = () => {
    let path = "/home";
    history.push(path);
  }

  const classes = useStyles();

  return (
    <div>
      <img src={logo} alt="logo" className={classes.logo} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '65vh',
          flexDirection: 'column',
        }}
      >
        <form
          style={{
            width: '500px',
            height: '500px',
            display: 'flex',
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#e6e6e6',
            borderRadius: '10px',
          }}>
          <div style={{padding: "20px"}} >You're almost there!</div>
          <div style={{
            display: 'flex',
            height: '400px',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }} >
            <TextField className={classes.inputTextField} id="signInUserName" label="Email address" variant="outlined" />
            <TextField className={classes.inputTextField} id="signInUserName" label="Username" variant="outlined" />
            <TextField className={classes.inputTextField} id="signInPassword" label="Password" variant="outlined" />
            <div style={{fontSize: '12px'}} >
              <span>
                <Checkbox
                  style={{
                    transform: "scale(0.6)",
                    paddingRight: '0px',
                  }}
                  defaultChecked
                  color="primary"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                </span>
                I agree with the terms and conditions
            </div>
          </div>
          <button className={classes.signUpBtn} onClick={handleSignUp} type="button">Let's get started</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;