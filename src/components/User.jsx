import React from 'react';

const User = ({id, name, email, username}) => {
    return (
        <div style = {{border: `2px solid black`}}>
            <div>{id}</div>
            <div>{name?.toUpperCase()}</div>
            <div>{email}</div>
            <div>{username}</div>
        </div> 
    );
}

export default User;
