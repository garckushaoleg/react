import React from 'react'
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import AlbumsList from './AlbumsList'
import AlbumDetails from './AlbumDetails'

export default function Albums() {
    const {url}  = useRouteMatch();

    return (
        <div>
            <h1>Albums List</h1>
            <Switch>
                <Route path = {`${url}/:id`} render = {({match}) => {
                    return <AlbumDetails albumId = {match.params.id} />
                }} />
                <Route path = {`${url}`} render={() => {
                    return <AlbumsList />
                }}/>
            </Switch>
        </div>
    )
}