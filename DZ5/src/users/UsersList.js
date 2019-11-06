import React, {useState, useEffect} from 'react'
import config from './config';
import UsersListItem from './UsersListItem';

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(config.userUrl)
            .then(res => res.json())
            .then(setUsers)
    }, [])
    return (
        <ul>
            {users.map(user => (
                <UsersListItem 
                    key={user.id} 
                    user={user} />
            ))}
        </ul>
    )
}

export default UsersList
