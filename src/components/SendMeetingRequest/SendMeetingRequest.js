import React from 'react';
import { useState } from 'react';
import { Typography, Button, TextField } from '@material-ui/core/';
import './SendMeetingRequest.css';
import { useSelector } from 'react-redux';

const SendMeetingRequest = ({history}) => {

    const [meetingDesc, setMeetingDesc] = useState("");

    const selectedContact = useSelector(state => state.selectedContact);
    const meetingDate = useSelector(state => state.meetingDate);
    const meetingTime = useSelector(state => state.meetingTime);

    return (
        <div className="SendMeetingRequestComponent">
            <div className="meetingDescDiv">
                <div className="meetingDateTimeDiv">
                    <div>
                        <Typography variant="h5" className="listItem">
                            Meet {selectedContact} at
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h5" className="listItem">
                            {meetingTime} on {meetingDate.toLocaleDateString("en-Us", { month: 'short', day: 'numeric' })}
                        </Typography>
                    </div>
                </div>
                <form className="form" noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Meeting Description" variant="outlined"
                        onChange={(e) => setMeetingDesc(e.target.value)} />
                </form>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        alert(`Request sent successfully to ${selectedContact}`);
                        history.push('/')
                        }}>
                    Send Request
                </Button>
            </div>
        </div>
    )
}
export default SendMeetingRequest;