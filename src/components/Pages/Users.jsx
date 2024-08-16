import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Users = () => {
    const { username } = useParams();

    const [user, setUsers] = useState({})
    async function fetchUsers(){
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${username}`);
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {
        // If statement tests if username is a number
        if (/^\d+$/.test(username)){ 
            fetchUsers();
        }
    }, []);

    return (
        <div>       
            <Link to = "/">Go Back</Link> 
            <h1>{username}</h1>
            <h1>{user?.id}</h1>
            <h1>{user?.name}</h1>
            <h1>{user?.email}</h1>
            <h1>{user?.username}</h1>
        </div>
    );
}

export default Users;
