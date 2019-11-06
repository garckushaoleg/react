import React, {useState, useEffect} from 'react'
import config from './config';
import AlbumsListItem from './AlbumsListItem'

export default function AlbumsList() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {fetch(config.albumsUrl).then(res => res.json())
                                      .then(setAlbums)}, []);

    return(
        <ul>
            {albums.map((el) => {
                return <AlbumsListItem 
                     key = {el.id}
                     el = {el}
                />
            })}
        </ul>
    )
}