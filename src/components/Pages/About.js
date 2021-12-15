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
        <div style={{width: '600px'}}>
          Grocery shopping can be troublesome. People are facing issues such as: 
          <ul style={{textAlign: 'start'}}>
            <li>Unsure about the groceries availability.</li>
            <li>Frequent price change of groceries.</li>
            <li>No price comparison between different markets.</li>
          </ul>
        </div>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '50px',
        paddingBottom: '50px',
      }}>
        <div style={{width: '560px', textAlign: 'start'}}>
          Within this website we set out to solve those three issues by providing a place where you and other grocery 
          shoppers can provide updated information about the grocery situation within different grocery stores. The 
          website enables you to search for your needs by tags; either by searching for specific products, like meat, 
          candy etc., or find out in which supermarket the products are in stock and how much the products cost at each 
          supermarket. You can also search within a specific supermarket to view whether or not the product you want to 
          buy is in or out of stock, and the price of the product. The whole service is provided for users by users, 
          meaning that it is you and your grocery pals who post content to the website, and thereby keeps each other posted. 
        </div>
        <img src={grocery1} alt="grocery1"/>
      </div>
    </div>
  );
};

export default About;