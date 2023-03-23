import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';

// make sure this react dom create refers to the same id of the div in the index.html file
ReactDOM.createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <div>Hello, world</div>
  </Provider>
);
