import React from 'react';
import Header from '../NavBar/Header';

const Contact = () => {
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
        <h1>Contact</h1>
      </div>
    </div>
  );
};

export default Contact;