import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from '../User';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([])
    async function fetchUsers(){
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {
        setTimeout(() => {
            fetchUsers();
        }, 500);
    }, []);


    return (
        <div>
            {
                users.map((user) => (
                    <Link to ={`/users/${user.id}`} key = {user.id} > 
                        <User 
                            id={user.id} 
                            name = {user.name} 
                            email = {user.email} 
                            username= {user.username}
                        />
                    </Link>
                ))
            }
        </div>
    );
}

export default Home;
