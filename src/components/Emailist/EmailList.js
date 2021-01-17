import React from 'react'
import {Checkbox,IconButton} from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import './EmailList.css'
import InboxIcon from '@material-ui/icons/Inbox';
import Section from '../Section/Section';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow/EmailRow';

function EmailList() {
    return (
        <div className='emaillist'>
            <div className='emaillist_settings'>
                <div className="emaillist_settings_left">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emaillist_settings_right">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
                </div>
                <div className="emailList_sections">
                    <Section Icon={InboxIcon} title='Primary' color='red' selected></Section>
                    <Section Icon={PeopleIcon} title='Social' color='blue' ></Section>
                    <Section Icon={LocalOfferIcon} title='Promotion' color='green' ></Section>
                </div>
                <div className="emialList_list">
                    <EmailRow 
                    title="Twitch" 
                    Subject="Hey fellow steamer" 
                    description="This is a test" 
                    time="10PM" />
                    <EmailRow 
                    title="react" 
                    Subject="React Redux" 
                    description="Akshath" 
                    time="1PM" />
                </div>
            </div>
    )
}

export default EmailList