import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function IndividualUser({ user }) {
    const navigate = useNavigate();

    function deleteUser(userId) {
        axios.post('/api/user/deleteuser', { userId: userId })
            .then((response) => {
                alert(response.data);
                navigate(0);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <ul className="list-group">
                    <li className="list-group-item">{user.userId}</li>
                    <li className="list-group-item">{user.name}</li>
                    <li className="list-group-item">{user.email}</li>
                    <li className="list-group-item">{user.phone}</li>
                </ul>
                <Link to={`/edituser/${user.userId}`}>
                    <li className="btn btn-success">Edit</li>
                </Link>
                <button className="btn btn-danger" onClick={() => { deleteUser(user.userId) }}>Delete</button>
                <hr className="mt-4"></hr>
            </div>
        </div>
    );
}

export default IndividualUser;
