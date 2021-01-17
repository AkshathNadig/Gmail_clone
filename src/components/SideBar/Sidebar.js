import React from 'react'
import { Button, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import './Sidebar.css'
import SidebarIcon from './SidebarIcon/SidebarIcon';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import NearMeIcon from '@material-ui/icons/NearMe';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

function Sidebar() {
    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon fontSize="larger" />} className="sidebar_compose">Compose</Button>
            <SidebarIcon Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
            <SidebarIcon Icon={StarIcon} title="Starred" number={54}/>
            <SidebarIcon Icon={AccessTimeIcon} title="Snooze" number={54}/>
            <SidebarIcon Icon={LabelImportantIcon} title="Important" number={54}/>
            <SidebarIcon Icon={NoteIcon} title="Draft" number={54}/>
            <SidebarIcon Icon={NearMeIcon} title="Sent" number={54}/>
            <SidebarIcon Icon={ExpandMoreIcon} title="More" number={54}/>
        <div className="sidebar_footer">
            <div className="sidebar_footerIcons">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
        </div>    
        </div>
    )
}

export default Sidebar