import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'
import {createPost, updatePost} from '../../actions/posts'


const Form = () => {
  const classes = useStyles();
  const [postData, setpostData] = useState({
    title: '',
    creator: '',
    message: '',
    tags: [], 
    selectedFile: '',
  });
  const dispatch = useDispatch();




  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createPost(postData))
    clear()

  }


  const clear = (e) => {
    setpostData({
      title: '',
      creator: '',
      message: '',
      tags: '',
      selectedFile: '', 
    })
  }


  return (


    <Paper className={classes.paper}>
      <form
      autoComplete="off"
      noValidate
      className={`${classes.form} ${classes.root}`}
      onSubmit={handleSubmit}
      >
        <TextField
            id="creator"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) => setpostData({...postData, creator: e.target.value})}
            margin="normal"
        />
        <TextField
            id="title"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) => setpostData({...postData, title: e.target.value})}
            margin="normal"
        />
        <TextField
            id="message"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) => setpostData({...postData, message: e.target.value})}
            margin="normal"
        />
        <TextField
            id="tags"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e) => setpostData({...postData, tags: e.target.value.split(',')})}  
            margin="normal"
        />
        <div className={classes.fileInput}>
          <FileBase
          type="file"
          multiple={false}
          onDone={({base64}) => setpostData({...postData, selectedFile: base64})}
          />
        </div>
        <Button sx={{marginBottom: "10px"}} fullWidth size="large" type="submit" className={classes.buttonSubmit} variant="contained" color="primary">submit</Button>
        <Button fullWidth size="large" onClick={clear} variant="contained" color="secondary">clear</Button>
      </form>
    </Paper>


  );
}

export default Form;
