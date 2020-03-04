import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchMode } from './../redux/index.js';
import PropTypes from 'prop-types';

const _Header = ({ switchMode }) => {
  const handleHeadingOnClick = () => {
    switchMode('VIEW');
  };

  const handleAddFileOnClick = () => {
    switchMode('CREATE');
  };
  return (
    <header>
      <nav>
        <NavLink
          className="add-file"
          to="/blogs/create"
          onClick={handleAddFileOnClick}
        >
          <p>
            <span>
              <img
                style={{ paddingLeft: '0.5rem', paddingRight: '1rem' }}
                src="/assets/add_file.png"
                alt="add file"
              />
            </span>
            Create a new post
          </p>
        </NavLink>
        <NavLink to="/">
          <h1 onClick={handleHeadingOnClick}>Greatest Blog Ever</h1>
        </NavLink>
      </nav>
    </header>
  );
};

_Header.propTypes = {
  switchMode: PropTypes.func,
};
const mapDispatch = dispatch => ({
  switchMode: mode => dispatch(switchMode(mode)),
});
export const Header = connect(null, mapDispatch)(withRouter(_Header));
