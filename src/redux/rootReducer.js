import { combineReducers } from 'redux';
import { allPostsReducer } from './all_posts/reducer.js';
import { singlePostModeReducer } from './single_post_mode/reducer.js';

export const rootReducer = combineReducers({
  allPosts: allPostsReducer,
  singlePostMode: singlePostModeReducer,
});
