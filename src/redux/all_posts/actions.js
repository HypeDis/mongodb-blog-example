import {
  GOT_POSTS,
  GOT_EDITED_POST,
  GOT_NEW_POST,
  REMOVE_POST,
} from './constants.js';
import { api } from '../../api/index.js';
import { history } from './../../root.js';

export const gotPosts = posts => ({ type: GOT_POSTS, payload: posts });
export const gotEditedPost = post => ({ type: GOT_EDITED_POST, payload: post });
export const gotNewPost = post => ({ type: GOT_NEW_POST, payload: post });
export const removePost = postId => ({ type: REMOVE_POST, payload: postId });

export const getPostsThunk = () => {
  return dispatch =>
    api
      .get('/all')
      .then(response => {
        dispatch(gotPosts(response.data));
      })
      .catch(err => {
        console.log('error getting blog posts ', err);
      });
};

export const editPostThunk = editedPost => {
  return dispatch =>
    api
      .put('/edit', editedPost)
      .then(response => {
        const incomingPost = response.data;
        if (!incomingPost) {
          throw new Error('There was an issue editing the post.');
        }
        dispatch(gotEditedPost(incomingPost));
      })
      .catch(err => console.error('error editing post', err));
};

export const createPostThunk = newPost => {
  return dispatch =>
    api.post('/create', newPost).then(response => {
      const incomingPost = response.data;
      if (!incomingPost) {
        throw new Error('There was an issue creating the post.');
      }
      dispatch(gotNewPost(incomingPost));
      history.push(`/api/all`);
    });
};

export const deletePostThunk = postId => {
  console.log('thunk post id', postId);
  return dispatch =>
    api
      .delete(`/remove/${postId}`)
      .then(() => {
        dispatch(removePost(postId));
      })
      .catch(err => console.error('There was an issue deleting the post', err));
};
