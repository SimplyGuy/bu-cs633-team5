import React, {userState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarElements';
import logo from '../../images/logo.png';
import './Header.css';

function Header() {

    return (
        <Nav>
            <NavLink to="/home" 
            // style={{color: "#15CDFC"}}
            style={{color: "#ABB94E"}}
            >
                <img src={logo} alt="logo" style={{height: "130%"}} />
                <h1>GroceryPal</h1>
            </NavLink>
            {/* <Bars /> */}
            <NavMenu>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">about</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavMenu>
            <TextField
                label="Search"
                multiline
                style={{marginTop: "10px"}}
                />

            
            {/* <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn> */}
        </Nav>
    );
};

export default Header;