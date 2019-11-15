import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from './config';
import Comment from './Comment';

export default function Comments(props) {
    const [comments, setComments] = useState([]);
    

    useEffect(() => {axios.get(`${config.commentsUrl}?postId=${props.id}`)
                                                  .then(res => setComments(res.data))
    }, [props.id]);

    useEffect(() => {axios.post(config.commentsUrl, props.newComments)}, [props.newComments]);

    function getPostComments() {

        if (props.newComments.length) {
            props.newComments[props.newComments.length-1].id = Date.now();
        };

        return [...comments, ...props.newComments];
    }

    return (
        <div>
        {getPostComments().map((el) => {
            return <Comment key = {el.id} comment = {el} />
        })}
        </div>
    )
}