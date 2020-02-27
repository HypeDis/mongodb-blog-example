import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { switchMode } from './../redux/index.js';

const _SinglePostStatic = ({ post, switchMode }) => {
  const history = useHistory();
  if (!post) {
    history.push('/blogs/all');
    return null;
  }
  return (
    <div className="single-post__container">
      <div>
        <h1 className="single-post__title">
          {post.title}
          <img
            className="icon__pencil"
            src="/assets/pencil_icon.png"
            alt="pencil icon"
            onClick={() => {
              switchMode('EDIT');
            }}
          />
        </h1>
      </div>
      <div className="single-post__content">
        {post.content.split('\n').map((paragraph, idx) => {
          return (
            <div key={idx}>
              <pre className="single-post__para">{paragraph.trim()}</pre>
            </div>
          );
        })}
      </div>
    </div>
  );
};

_SinglePostStatic.propTypes = {
  post: PropTypes.object,
  switchMode: PropTypes.func,
};
const mapDispatch = dispatch => ({
  switchMode: mode => dispatch(switchMode(mode)),
});

export const SinglePostStatic = connect(null, mapDispatch)(_SinglePostStatic);
