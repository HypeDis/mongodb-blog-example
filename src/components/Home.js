import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PostPreview } from './PostPreview.js';
import { switchMode } from '../redux/index.js';

const _Home = ({ allPosts, switchMode }) => {
  if (allPosts && !allPosts.length) {
    return (
      <div className="home-create">
        <Link
          to="/blogs/create"
          onClick={() => {
            switchMode('CREATE');
          }}
        >
          <h3>Write a post!</h3>
        </Link>
      </div>
    );
  }
  return (
    <div className="home">
      <div className="preview-container">
        {allPosts.map((post, idx) => (
          <PostPreview key={idx} post={post} />
        ))}
      </div>
    </div>
  );
};

_Home.propTypes = {
  allPosts: PropTypes.array,
  switchMode: PropTypes.func,
};

const mapState = ({ allPosts }) => ({ allPosts });
const mapDispatch = dispatch => ({
  switchMode: mode => dispatch(switchMode(mode)),
});
export const Home = connect(mapState, mapDispatch)(_Home);
