import axios from 'axios';

const url = 'https://memories-api-sew8.onrender.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (postBody) => axios.post(url, postBody);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`)
export const likePost = (id) => axios.patch(`${url}/${id}/likepost`)
