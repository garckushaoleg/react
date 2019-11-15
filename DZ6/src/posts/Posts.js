import React, {useEffect, useState} from 'react';
import axios from 'axios';
import config from './config';
import Post from './Post';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));

export default function Posts() {
    const classes = useStyles();

    const [posts, setPosts] = useState([]);

    useEffect(() => { axios.get(config.postsUrl).then(res => setPosts(res.data))}, []);

    return (
        <Paper className={classes.paper}>
        <MenuList>
        {
            posts.map((el) => {
                return <Post key = {el.id} el={el} />
            })
        }
        </MenuList>
      </Paper>
    )
}