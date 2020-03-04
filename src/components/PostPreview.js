import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export const PostPreview = ({ post }) => {
  const history = useHistory();
  const handleOnClick = () => {
    history.push(`/blogs/${post._id}`);
  };
  return (
    <div className="preview" onClick={handleOnClick}>
      <h3 className="preview__title">{post.title}</h3>
      <p>{new Date(post.postedOn).toDateString()}</p>
      <p className="preview__content">{post.content.slice(0, 1000)}...</p>
    </div>
  );
};

PostPreview.propTypes = {
  post: PropTypes.object,
};
