import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

export default function Post(props) {
    const { url } = useRouteMatch();

    return (
        
        <Link to={`${url}/${props.el.id}`}><MenuItem>{props.el.title}</MenuItem></Link>
    )
}