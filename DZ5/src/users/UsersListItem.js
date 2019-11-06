import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom';

function UsersListItem({user}) {
    const { url } = useRouteMatch();

    return (
        <li>
            <Link to={`${url}/${user.id}`}>{user.name}</Link></li>
    )
}

export default UsersListItem
