import React from 'react'
import './SidebarIcon.css'

 function SidebarIcon({Icon, title,number,selected}) {
    return (
        <div className={`sidebaricon ${selected && "sidebaricon--active"}` }>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarIcon