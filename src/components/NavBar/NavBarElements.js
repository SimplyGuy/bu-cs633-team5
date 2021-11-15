import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`

    background: white;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1500px) / 2);
    z-index: 10;

    //nav left and button right
    // justify-content: flex-start;

`;

export const NavLink = styled(Link)`

    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #ABB94E;
    }
`;

export const Bars = styled(FaBars)`

    display: none;
    color: black;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`

    display: flex;
    align-items: center;
    margin-right: 24px;

    nav left and button right
    width: 100vw;
    white-space: no-wrap;

    // @media screen and (max-width: 768px) {
    //     display: none;
    // }
`;

export const NavBtn = styled.nav`

    display: flex;
    align-items: center;
    margin-right: 24px;
    background: #FFDF58;
    padding: 10px 22px;
    margin-left: 24px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #ABB94E;
    }

    //nav left and button right
    // justify-content: flex-end;
    // width: 100vw;

    // @media screen and (max-width: 768px) {
    //     display: none;
    // }
`;

export const NavBtnLink = styled(Link)`

    border-radius: 4px;
    background: #FFDF58;
    padding: 10px 22px;
    margin-left: 24px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #ABB94E;
    }
`;