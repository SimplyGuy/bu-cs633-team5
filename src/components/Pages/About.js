import React from 'react';
import Header from '../NavBar/Header';

const About = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}
      >
        <h1>About</h1>
      </div>
    </div>
  );
};

export default About;