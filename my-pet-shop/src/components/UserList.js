import React, { useEffect, useState } from "react";
import IndividualUser from "./UserIndividual";
import axios from 'axios';
import Header from './Header.js'; 
import Footer from "./Footer.js";

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

    // Verifica que userList sea un array antes de mapearlo
    if (!Array.isArray(userList)) {
        console.error("userList no es un array");
        return null; // o algún otro manejo de error que prefieras
    }

    // Map the list of users to IndividualUser components
    const userComponents = userList.map(user => (
        <div key={user.userId}>
            <IndividualUser user={user} />
        </div>
    ));

    return (
        <div>
            <Header />
            <h2>User List</h2>
            {userComponents}
            <Footer />
        </div>
    );
}

export default UserList;

