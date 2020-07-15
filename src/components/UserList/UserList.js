import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { data } from '../../data';
import { Typography, Button } from '@material-ui/core/';
import './UserList.css';
import {withContext} from '../../context';

const UserList = ({history, setSelectedUser}) => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        setUserList(data);
    }, [])

    const selectThisUser = (name) => {
        setSelectedUser(name);
        history.push("/meeting");
    }

    return (
        <div className="userListComponent">
            <div className="listHeadingDiv">
                <Typography variant="h5" className="listItem">
                    Users List
                </Typography>
            </div>
            {userList.map(({ name },i) =>
                <div key={i} className="listContainerDiv">
                    <div>
                        <Typography variant="subtitle1" className="listItem">
                            {name}
                        </Typography>
                    </div>
                    <div>
                        <Button variant="outlined" color="secondary" className="meetButton"
                                onClick={() => selectThisUser(name)}>
                            MEET
                        </Button>
                    </div>
                </div>)
            }
        </div>
    )
}
export default withContext(UserList);