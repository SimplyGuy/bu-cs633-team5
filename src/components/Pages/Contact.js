import React from 'react';
import Header from '../NavBar/Header';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import map from '../../images/map.png';

const Contact = ({props}) => {

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = React.useState(false);

  //handle click event for the submit button
  const handleClick = () => {
    setOpen(true);

  };

  //handle close event for the snackbar
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{backgroundColor: "#F8F9FA"}}>
      <Header />
      <div style={{
        padding: "60px", 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'column',
      }}>
        <div style={{
          fontSize: '35px',
          paddingBottom: '30px',
        }}>How can we help you?</div>
        <div style={{
           display: 'flex',
           justifyContent: 'space-around',
           alignItems: 'center',
        }}>
          <img src={map} alt="map" style={{ height: "540px", width: "800px"}} />
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: "500px",
            paddingLeft: '10px',
          }}>
            <TextField style={{margin: '5px'}}  id="signInUserName" label="Email address" variant="outlined" fullWidth={true}/>
            <TextField style={{margin: '5px'}} id="signInPassword" label="Your comments" variant="outlined" multiline={true} minRows={16} fullWidth={true}/>
            <button style={{
                width: '100px',
                height: '40px',
                borderRadius: '8px',
                border: 'white',
                backgroundColor: '#ABB94E',
                cursor: 'pointer',
              }}
                onClick={handleClick}>Send
            </button>
            <Snackbar open={open} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Success!
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;