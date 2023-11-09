import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';

function EditUser() {
    const params = useParams();

    // Hooks
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        // Make a request to fetch user data from the server route
        axios.post('/api/user/getuserdata', { userId: params.idusuario })
            .then((response) => {
                const userData = response.data[0];
                setName(userData.name);
                setEmail(userData.email);
                setPhone(userData.phone);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    function editUser() {
        const updatedUser = {
            name: name,
            email: email,
            phone: phone,
            userId: params.idusuario
        };

        axios.post('/api/user/updateuser', updatedUser)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <h2 className="mt-4">
                    Edit User
                </h2>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" value={phone} onChange={(e) => { setPhone(e.target.value) }}></input>
                    </div>

                    <button onClick={editUser} className="btn btn-success">Edit User</button>
                </div>
            </div>
        </div>
    );
}

export default EditUser;
