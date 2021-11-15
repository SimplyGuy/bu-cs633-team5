import React from 'react';
import Header from '../NavBar/Header';
import TextField from '@material-ui/core/TextField';

import map from '../../images/map.png';


const Contact = () => {

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
          <form style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: "500px",
            paddingLeft: '10px',
          }}>
            <TextField style={{margin: '5px'}}  id="signInUserName" label="Username" variant="outlined" fullWidth="true"/>
            <TextField style={{margin: '5px'}} id="signInPassword" label="Password" variant="outlined" fullWidth="true"/>
            <TextField style={{margin: '5px'}} id="signInPassword" label="Your comments" variant="outlined" multiline="true" minRows={14} fullWidth="true"/>
            <button style=
              {{width: '100px',
                height: '40px',
                borderRadius: '8px',
                border: 'white',
                backgroundColor: '#ABB94E',
                cursor: 'pointer',}
                }>Send</button>
          </form>
        </div>
      </div>

      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}
      >
        <h1>Contact</h1>
      </div> */}
    </div>
  );
};

export default Contact;