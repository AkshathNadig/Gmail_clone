import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from 'react-hook-form'
import { ContactMailSharp } from '@material-ui/icons';

function SendMail() {
    const {register,handleSubmit,watch,errors} = useForm()

    const onSubmit =(data)=>{
        console.log(data)
    }

    return (
        <div className="sendmail">
            <div className="sendmail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendmail_close" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" placeholder="To" type="text" ref={register({ required:true })} />
                {errors.to && <p className="sendmail_error">To is requried!</p>}
                <input name='subject' placeholder="Subject" type="text" ref={register({ required:true })}/>
                {errors.subject && <p className="sendmail_error">Subject is requried!</p>}
                <input name='message' placeholder="Message.." type="text" ref={register({ required:true })}
                    className="sendmail_message"/>
                {errors.message && <p className="sendmail_error">Message is requried!</p>}
                <div className="sendmail_options">
                    <Button 
                        className="sendmail_send"
                        variant="contained"
                        type="submit">Send</Button>
                </div>   

            </form>

        </div>
    )
}

export default SendMail