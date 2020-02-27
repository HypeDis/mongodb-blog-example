import React from 'react';
import { render } from 'react-dom';
import { Root } from './root.js';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

const appEl = document.getElementById('app');

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  appEl
);
