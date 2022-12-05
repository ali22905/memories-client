import * as api from '../api/apis';
import {FETCH_ALL, CREATE, DELETE, LIKE, UPDATE} from '../constants/actionTypes'


// action createrors
export const getPosts = () => async (dispatch) => {

  try {
    const {data} = await api.fetchPosts();
    dispatch({type: FETCH_ALL, payload: data});
  } catch (error) {
    console.log(`myError from getPosts action ${error}`)
  }
}

export const createPost = (post) => async(dispatch) => {
  try {
    const {data} = await api.createPost(post)
    dispatch({type: CREATE, payload: data})
  } catch (error) {
    console.log(`myError from createPost action ${error}`)
  }
}

export const updatePost = (id, updatedPost) => async(dispatch) => {
  try {
    const {data} = await api.updatePost(id, updatedPost)
    dispatch({type: UPDATE, payload: data})
  } catch (error) {
    console.log(`myError from updatePost action ${error}`)
  }
}

export const deletePost = (id) => async(dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({type: DELETE, payload: id})
  } catch (error) {
    console.log(`myError from deletePost ==>   ${error}`)
  }
}

export const likePost = (id) => async(dispatch) => {
  try {
    const {data} = await api.likePost(id)
    dispatch({type: LIKE, payload: data})
  } catch (error) {
    console.log(`myError from likePost  ==>> ${error}`)
  }
}





