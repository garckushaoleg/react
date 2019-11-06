import React, {useState, useEffect} from 'react';
import config from './config';
import PhotoListItem  from '../photos/PhotoListItem';

export default function PhotoList(props) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch(`${config.photosUrl}`).then(res => res.json())
                                    .then(setPhotos)
    }, []);

    function getArrPhotos() {
        return photos.filter((el) => {
            return el.albumId == props.id
        }).map((el) => {
            return <PhotoListItem key = {el.id} el={el} />
        })
    }

    return (
        <div>{getArrPhotos()}</div>
    )
}