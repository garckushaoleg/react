import React from 'react';
import Posts from './Posts';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import PostDetail from './PostDetail'

export default function Menu() {
    const { url } = useRouteMatch();

    return (
        <>
        <Switch>
        
        <Route path={`${url}/:id`} render = {({match}) => {
            return <PostDetail id = {match.params.id}/>
        }} />
        <Route path={`${url}`} render = {() => {
            return <Posts />
        }} />
       
        </Switch>
        </>
    )
}