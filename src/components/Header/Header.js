import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar,IconButton } from '@material-ui/core';
import gmail from '../img/gmail.png'
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import NotificationsIcon from '@material-ui/icons/Notifications';
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={gmail} alt=""/>
            </div>
            <div className='header_middle'>
                <SearchIcon />
                    <input placeholder="Search Mail" type="text" />
                <ArrowDropDownIcon className="header_inputCaret" />
            </div>
            <div className='header_right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    );
};

export default Header;