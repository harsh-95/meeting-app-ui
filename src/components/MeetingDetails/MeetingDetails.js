import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Typography, Button } from '@material-ui/core/';
import './MeetingDetails.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectMeetingDate, selectMeetingTime } from '../../actions/actions';

const MeetingDetails = ({history}) => {

    const [dateArray, setDateArray] = useState([]);
    const [timeSlotsArray, setTimeSlotsArray] = useState([]);
    
    const selectedContact = useSelector(state => state.selectedContact);
    const meetingDate = useSelector(state => state.meetingDate);
    const meetingTime = useSelector(state => state.meetingTime);
    const dispatch = useDispatch();

    useEffect(() => {
        setDateInArray();
        setTimeInArray();

    }, [])

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

    return (
        <div className="meetingDetailsComponent">
            {timeSlotsArray.length
                ? <>
                    <div className="listDateComponent">

                        {dateArray.map((el, i) =>
                            <div key={i} className="dateButtonDiv">
                                <Button variant={el.getDate() === meetingDate.getDate() ? "contained" : "outlined"} color="primary" onClick={() => dispatch(selectMeetingDate(el))}>
                                    <Typography variant="subtitle2">
                                        {el.toLocaleDateString("en-Us", { month: 'short', day: 'numeric' })}
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        {el.toLocaleDateString("en-Us", { weekday: 'short' })}
                                    </Typography>
                                </Button>
                            </div>)
                        }
                    </div>

                    <div className="listTimeComponent">
                        {timeSlotsArray.map((el, i) =>
                            <div key={i} className="timeButtonDiv">
                                <Button variant={el === meetingTime ? "contained" : "outlined"} onClick={() => dispatch(selectMeetingTime(el))}>
                                    <Typography variant="subtitle1">
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
                            onClick={() => history.push('/sendMeeting')}>
                            Next
                        </Button>
                    </div>
                </>
                : null
            }
        </div>
    )
}
export default MeetingDetails;