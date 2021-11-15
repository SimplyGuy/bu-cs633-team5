import React from 'react';
import Header from '../NavBar/Header';

import grocery1 from '../../images/grocery1.jpg';


const About = () => {
  return (
    <div>
      <Header />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '50px',
        paddingBottom: '50px',
        backgroundColor: '#F8F9FA',
      }}>
        <img src={grocery1} alt="grocery1" style={{}} />
        <div style={{width: '500px' ,wordBreak: 'break-all'}}>Here is some of our stories ddddddddddddddddddddddddddddddddddddddddddddddd</div>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '50px',
        paddingBottom: '50px',
      }}>
        <div style={{width: '500px' ,wordBreak: 'break-all'}}>Here is some of our stories dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
        <img src={grocery1} alt="grocery1" style={{}} />
      </div>
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}
      >
        <h1>About</h1>
      </div> */}
    </div>
  );
};

export default About;