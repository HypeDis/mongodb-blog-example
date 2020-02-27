import React, { useEffect } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostsThunk } from './redux/index.js';
import { Header } from './components/Header.js';
import { Home } from './components/Home.js';
import { SinglePost } from './components/SinglePost.js';
import { Footer } from './components/Footer.js';
export const history = createBrowserHistory();

const _Root = props => {
  useEffect(() => {
    props.getPosts();
  }, []);
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/blogs/all" component={Home} />
        <Route path="/blogs/:postid" component={SinglePost} />

        <Route path="/blogs/create" component={SinglePost} />
        <Redirect to="/blogs/all" />
      </Switch>
      <Footer />
    </Router>
  );
};

_Root.propTypes = {
  getPosts: PropTypes.func,
};

const mapDispatch = dispatch => ({
  getPosts: () => {
    dispatch(getPostsThunk());
  },
});

export const Root = connect(null, mapDispatch)(_Root);
