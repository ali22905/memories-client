import React, {useEffect} from 'react';
import Post from './post/Post'
import useStyles from './styles';
import {useSelector, useDispatch} from 'react-redux'
import { Grid, CircularProgress } from '@mui/material';



const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  console.log(posts)
  
  return (
    // if posts.leghnth = 0 will load else will show posts
    !posts.length ? (
      <div>
        <CircularProgress />
        <h1>no memories to show</h1>
      </div>
    ): (
      <Grid container alignItems="stretch" spacing={3} className={classes.container}>
        {posts.map((post) => (
          <Grid key={post._id} xs={12} sm={6} item>
            <Post post={post}/>
          </Grid>
        ))}
      </Grid>
    )
  );
}

export default Posts;
