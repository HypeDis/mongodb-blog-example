import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { SinglePostStatic } from './SinglePostStatic.js';
import { SinglePostEditCreate } from './SinglePostEditCreate.js';

const _SinglePost = ({ allPosts, singlePostMode, history, match }) => {
  let postId;
  let post;
  if (match && match.params) {
    postId = match.params.postid;
    post = allPosts.find(post => post._id === postId);
  }

  // using the ref hook to remember previous allPosts length
  // if the allPosts length increases it means we created a new one.
  // redirect to the newly created page
  const prevPostLenRef = useRef(allPosts.length);
  useEffect(() => {
    prevPostLenRef.current = allPosts ? allPosts.length : 0;
  });

  // if post doesnt exist in view or edit mode redirect to home
  const prevPostLen = prevPostLenRef.current;

  useEffect(() => {
    if (
      singlePostMode !== 'CREATE' &&
      allPosts.length &&
      !allPosts.find(post => post._id === postId)
    ) {
      history.push('/');
    }
    if (allPosts.length - prevPostLen === 1) {
      const newestPost = allPosts[0];
      history.push(`/blogs/${newestPost._id}`);
    }
  }, [allPosts]);

  const generateCorrectMode = (mode, post) => {
    if (mode === 'VIEW') {
      return <SinglePostStatic mode={mode} post={post} />;
    } else {
      return <SinglePostEditCreate mode={mode} post={post} />;
    }
  };

  return generateCorrectMode(singlePostMode, post);
};

const mapState = ({ allPosts, singlePostMode }) => ({
  allPosts,
  singlePostMode,
});

export const SinglePost = connect(mapState)(_SinglePost);
