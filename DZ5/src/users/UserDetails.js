import React, {useState, useEffect} from 'react';
import config from './config';

export default function UserDetails({userId}) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch(`${config.userUrl}/${userId}`)
            .then(res => res.json())
            .then(setUser)
    }, [])

    return (
        <div>
            <h3>Users Details</h3>
            <h4>{user.name}</h4>
        </div>
    )
}
