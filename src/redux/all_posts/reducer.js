import {
  GOT_POSTS,
  GOT_EDITED_POST,
  GOT_NEW_POST,
  REMOVE_POST,
} from './constants.js';

const initialState = [];
export const allPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_POSTS:
      return action.payload;
    case GOT_EDITED_POST: {
      const editedPost = action.payload;
      return state.map(post => {
        if (post._id === editedPost._id) {
          return editedPost;
        }
        return post;
      });
    }
    case GOT_NEW_POST:
      return [action.payload, ...state];

    case REMOVE_POST:
      return state.filter(post => {
        return post._id !== action.payload;
      });

    default:
      return state;
  }
};
