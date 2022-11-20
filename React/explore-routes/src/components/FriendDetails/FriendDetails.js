import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>details about :{friend.name}</h1>
            <p>Call him/her : {friend.phone}</p>
            <h2>All you need to know about this person</h2>
        </div>
    );
};

export default FriendDetails;