import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import {Icon} from 'react-fa'

let Header = (props) => {
    return (
        <header>
            <ul>
                <li><Link to='/home'> Home </Link></li>
                <li><Link to='/mysql'> MySql </Link></li>
                <li className='logOut' onClick={() => props.logOut()}>Log Out <Icon name="sign-out" /> </li>
            </ul>
        </header>
    )
};
export default Header;
