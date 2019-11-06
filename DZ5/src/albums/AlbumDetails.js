import React, {useState, useEffect} from 'react';
import config from './config';
import PhotoList  from '../photos/PhotoList';

export default function AlbumDetails(props) {
    const [album, setAlbum] = useState([]);

    useEffect(() => {
        fetch(`${config.albumsUrl}/${props.albumId}`).then(res => res.json())
                                                     .then(setAlbum)
    }, []);

    return (
        <div>
            <h1>Photos</h1>
            <PhotoList id={album.id} />
        </div>
    )
}