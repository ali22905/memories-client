import React, {useEffect, useState} from 'react';
import {Container, Grow, AppBar, Typography, Row, Grid, Toolbar} from "@mui/material"
import memories from './images/memories.png'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import useStyles from './styles';
import {useSelector, useDispatch} from 'react-redux'
import { getPosts } from './actions/posts';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <Container max-width="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Toolbar>
          <Typography className={classes.heading} variant="h2">
            memories
          </Typography>
          <img className={classes.image} src={memories} alt="memories" height="60" />
        </Toolbar>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={`${classes.mainContainer} postsCont`} container spacing={2} justifyContent="space-between" alignItems="stretch">
            <Grid item xs={12} sm={8}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>

  );
}

export default App;
