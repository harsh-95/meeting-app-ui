import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Typography, Button } from '@material-ui/core/';
import './UserList.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContact } from '../../actions/actions';

const UserList = ({ history }) => {

    const userList = useSelector(state => state.userList);
    const dispatch = useDispatch();

    const selectThisUser = (name) => {
        dispatch(selectContact(name));
        history.push("/meetingInfo");
    }

    return (
        <div className="userListComponent">
            <div className="listHeadingDiv">
                <Typography variant="h5">
                    Users List
                </Typography>
            </div>
            {userList.map(({ name }, i) =>
                <div key={i} className="listContainerDiv">
                    <div>
                        <Typography variant="subtitle1">
                            {name}
                        </Typography>
                    </div>
                    <div>
                        <Button variant="outlined" color="secondary"
                            onClick={() => selectThisUser(name)}>
                            MEET
                        </Button>
                    </div>
                </div>)
            }
        </div>
    )
}
export default UserList;