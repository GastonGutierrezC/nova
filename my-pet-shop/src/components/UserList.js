import React, { useEffect, useState } from "react";
import IndividualUser from "./UserIndividual";
import axios from 'axios';

function UserList() {

    const [userList, setUserList] = useState([]);
    useEffect(() => {
        // Make a request to fetch all users from the server route
        axios.get('/api/user/getusers')
            .then((response) => {
                setUserList(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    // Map the list of users to IndividualUser components
    const userComponents = userList.map(user => {
        return (
            <div key={user.userId}>
                <IndividualUser user={user} />
            </div>
        );
    });

    return (
        <div>
            <h2>
                User List
            </h2>
            {userComponents}
        </div>
    );
}

export default UserList;
