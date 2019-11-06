import React, {useState, useEffect} from 'react'
import {Switch, Route, useRouteMatch, useParams} from 'react-router-dom';
import UsersList from './UsersList';
import UserDetails from './UserDetails';

export default function Users() {
    const { url } = useRouteMatch();



    return (
        <div>
            <h2>Users Module</h2>
            <Switch>
                <Route path={`${url}/:id`} render={({match}) => {
                    return <UserDetails userId={match.params.id} />
                }} />
                <Route path={`${url}`} render={() => {
                    return <UsersList />
                }} />
                
            </Switch>
        </div>
    )
}
