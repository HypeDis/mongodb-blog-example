import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  editPostThunk,
  createPostThunk,
  deletePostThunk,
} from './../redux/index.js';

const _SinglePostEditCreate = ({
  mode,
  post,
  editPost,
  createPost,
  deletePost,
}) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const [tags, setTags] = useState(
    post && post.tags ? post.tags.join(',') : ''
  );
  // there was a bug when switching from edit to create mode where data remained in the inputs.
  // explicity clearing data when mode changes to create
  useEffect(() => {
    if (mode === 'CREATE') {
      setTitle('');
      setContent('');
    }
  }, [mode]);

  const generateDeleteButton = mode => {
    if (mode !== 'EDIT') return null;
    const handleOnClick = evt => {
      evt.preventDefault();
      deletePost(post._id);
    };
    return (
      <button onClick={handleOnClick} style={{ backgroundColor: 'red' }}>
        DELETE
      </button>
    );
  };

  return (
    <div className="single-post__container">
      <form
        className="single-post__form"
        onSubmit={evt => {
          evt.preventDefault();
          if (mode === 'EDIT')
            editPost({ _id: post._id, title, content, tags: tags.split(',') });
          else createPost({ title, content, tags: tags.split(',') });
        }}
      >
        <div className="single-post__input-group">
          <label htmlFor="single-post__title">Title</label>
          <input
            id="single-post__title"
            className="single-post__input-text"
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={evt => {
              setTitle(evt.target.value);
            }}
          />
        </div>
        <div className="single-post__input-group">
          <label htmlFor="single-post__tags">Tags</label>
          <input
            id="single-post__tags"
            className="single-post__input-text"
            type="text"
            name="tags"
            placeholder="add some tags"
            value={tags}
            onChange={evt => {
              setTags(evt.target.value);
            }}
          />
        </div>
        <div className="single-post__input-group">
          <label htmlFor="single-post__content">Content</label>
          <textarea
            rows="20"
            cols="100"
            spellCheck="false"
            id="single-post__content"
            className="single-post__textarea"
            name="content"
            placeholder="Write Something!"
            value={content}
            onChange={evt => {
              setContent(evt.target.value);
            }}
          />
        </div>
        <div className="single-post__button-group">
          <button type="submit">
            {mode === 'EDIT' ? 'Edit Post' : 'Create Post'}
          </button>
          {generateDeleteButton(mode)}
        </div>
      </form>
    </div>
  );
};

_SinglePostEditCreate.propTypes = {
  allPosts: PropTypes.object,
  post: PropTypes.object,
  switchMode: PropTypes.func,
  mode: PropTypes.string,
  editPost: PropTypes.func,
  createPost: PropTypes.func,
  deletePost: PropTypes.func,
};

const mapState = ({ allPosts }) => ({ allPosts });
const mapDispatch = dispatch => ({
  editPost: post => dispatch(editPostThunk(post)),
  createPost: post => dispatch(createPostThunk(post)),
  deletePost: postId => dispatch(deletePostThunk(postId)),
});

export const SinglePostEditCreate = connect(
  mapState,
  mapDispatch
)(_SinglePostEditCreate);
