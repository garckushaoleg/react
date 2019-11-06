import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

export default function AlbumsList(props) {
    const {url} = useRouteMatch();

    return (
        <li>
            <Link to={`${url}/${props.el.id}`}>{props.el.title}</Link>
        </li>
    )
}