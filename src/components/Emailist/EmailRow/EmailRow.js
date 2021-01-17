import React from 'react'
import {Checkbox,IconButton} from '@material-ui/core'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import {useHistory} from 'react-router-dom'
import './EmailRow.css'

function EmailRow({id, title, Subject, description,time}) {
    const history =useHistory()

    return (
        <div onClick={()=> history.push("/mail") } className ="emailrow">
            <div className="emailrow_option">
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div> 
            <h3 className="emailrow_title">
                {title}
            </h3> 
            <div className="emailrow_message">
                <h4>
                    {Subject}
                    <span className='emailrow_description'>{description}</span>
                </h4>
            </div> 
            <p className="emailrow_time">
                {time}
            </p>
        </div>
    )
}

export default EmailRow