import React, {useState, useEffect} from 'react';
import axios from 'axios';
import config from './config';
import Comments from '../comments/Comments';
import Form from '../form/Form';

export default function PostDetail({id}) {
    const [post, setPost] = useState({});
    const [newComments, setNewComments] = useState([]);

    useEffect(() => {axios.get(`${config.postsUrl}/${id}`)
                                      .then(res => setPost(res.data))}, [id]);

    function onSubmit(newComment) {

        setNewComments([...newComments, {
            ...newComment,
            postId: id
        }]);

    }

    return (
        <React.Fragment>
        <div>{post.title}</div>
        <div>{post.body}</div>
        <Comments id = {id} newComments = {newComments} />
        <Form onSubmitForm = {onSubmit} />
        </React.Fragment>
    )
}