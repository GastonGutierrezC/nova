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
                console.log("Server Response:", response.data);
    
                // Verifica si la respuesta es un array de usuarios
                if (Array.isArray(response.data) && response.data.length > 0) {
                    setUserList(response.data);
                } else {
                    console.log("La respuesta no es un array de usuarios, verificando si es HTML...");
    
                    // Verifica si la respuesta es un archivo HTML
                    const isHTML = /^<!DOCTYPE html>/.test(response.data);
    
                    if (isHTML) {
                        // Convierte el archivo HTML en un array o realiza otras acciones según sea necesario
                        console.log("La respuesta es un archivo HTML:", response.data);
                    } else {
                        console.error("La respuesta del servidor no es un array válido ni un archivo HTML:", response.data);
                    }
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    

    // Verifica que userList sea un array antes de mapearlo
    if (!Array.isArray(userList) || userList.length === 0) {
        console.error("userList no es un array válido:", userList);
        return (
            <div>
                <Header />
                <h2>Error al obtener la lista de usuarios</h2>
                <Footer />
            </div>
        );
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
