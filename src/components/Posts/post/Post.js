import React, {useState} from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// make 5 second ago and 3 mintes ago
import moment from 'moment'
import {useSelector, useDispatch} from 'react-redux'
import {deletePost, likePost} from '../../../actions/posts'


const Post = ({post}) => {
  const classes = useStyles();
  const dispatch = useDispatch()


  return (
    <>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Button
          style={{ color: 'white' }} 
          size="small"
          ><MoreHorizIcon fontSize="default" /></Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button onClick={() => {dispatch(likePost(post._id))}} size="small" color="primary"><ThumbUpIcon fontSize="small" /> Like {post.likeCount} </Button>
          <Button onClick={() => {dispatch(deletePost(post._id))}} size="small" color="primary"><DeleteIcon fontSize="small" /> Delete</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Post;
