import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Typography, Button, TextField } from '@material-ui/core/';
import './MeetingDetails.css';
import { withContext } from '../../context';

const MeetingDetails = ({ selectedUser }) => {

    const [dateArray, setDateArray] = useState([]);
    const [timeSlotsArray, setTimeSlotsArray] = useState([]);
    const [meetingDate, setMeetingDate] = useState(new Date());
    const [meetingTime, setMeetingTime] = useState("");
    const [showMeetingDetails, setShowMeetingDetails] = useState(false);
    const [meetingDesc, setMeetingDesc] = useState("");

    useEffect(() => {
        setDateInArray();
        setTimeInArray();

    }, [showMeetingDetails])

    const setDateInArray = () => {
        //set dateArray
        const prevDays = -3;
        const nextDays = 5;
        let tempDateArray = [];
        for (let i = prevDays; i <= nextDays; i++) {
            let date = new Date();
            date.setDate(date.getDate() + i);
            tempDateArray.push(date);
            console.log(date);
        }
        setDateArray(tempDateArray);
    }

    const setTimeInArray = () => {
        //set timeSlots array
        const startTime = new Date();
        //set START TIME to 7: 00 AM
        startTime.setHours(7, 0, 0, 0);
        const endTime = new Date();
        //set END TIME to 11: 45 AM
        endTime.setHours(11, 45, 0, 0);
        const minutesSlot = 15;

        let tempTimeArray = [];
        let currTime = startTime
        while (currTime <= endTime) {
            tempTimeArray.push(new Date(currTime).toLocaleTimeString("en-Us", { hour: '2-digit', minute: '2-digit' }));
            currTime.setMinutes(currTime.getMinutes() + minutesSlot);
            console.log(currTime);
        }
        setTimeSlotsArray(tempTimeArray);
    }

    const meetingDescription = (
        <div className="meetingDescDiv">
            <div className="meetingDateTimeDiv">
                <div>
                    <Typography variant="h5" className="listItem">
                        Meet {selectedUser} at
                </Typography>
                </div>
                <div>
                    <Typography variant="h5" className="listItem">
                        {meetingTime} on {meetingDate.toLocaleDateString("en-Us", { month: 'short', day: 'numeric' })}
                    </Typography>
                </div>
            </div>
            <form className="form" noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Meeting Description" fullWidth variant="outlined" 
                            onChange={(e) => setMeetingDesc(e.target.value)} />
            </form>
            <Button
                variant="contained"
                color="primary"
                onClick={() => alert('Request sent successfully')}>
                    Send Request
            </Button>
        </div>
    )

    return (
        <div className="meetingDetailsComponent">
            {timeSlotsArray.length && !showMeetingDetails
                ? <>
                    <div className="listDateComponent">

                        {dateArray.map((el, i) =>
                            <div key={i} className="dateButtonDiv">
                                <Button variant={el.getDate() === meetingDate.getDate() ? "contained" : "outlined"} color="secondary" className="dateButton" onClick={() => setMeetingDate(el)}>
                                    <Typography variant="subtitle2" className="listItem">
                                        {el.toLocaleDateString("en-Us", { month: 'short', day: 'numeric' })}
                                    </Typography>
                                    <Typography variant="subtitle2" className="listItem">
                                        {el.toLocaleDateString("en-Us", { weekday: 'short' })}
                                    </Typography>
                                </Button>
                            </div>)
                        }
                    </div>

                    <div className="listTimeComponent">
                        {timeSlotsArray.map((el, i) =>
                            <div key={i} className="timeButtonDiv">
                                <Button variant={el === meetingTime ? "contained" : "outlined"} className="timeButton" onClick={() => setMeetingTime(el)}>
                                    <Typography variant="subtitle2" className="listItem">
                                        {el}
                                    </Typography>
                                </Button>
                            </div>)
                        }
                    </div>

                    <div className="nextButtonDiv">
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={meetingTime ? false : true}
                            onClick={() => setShowMeetingDetails(true)}>
                            Next
                        </Button>
                    </div>
                </>
                : null
            }

            {showMeetingDetails
                ? meetingDescription
                : null
            }
        </div>
    )
}
export default withContext(MeetingDetails);