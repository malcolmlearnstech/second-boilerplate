import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index';
import './index.css';

// make sure this react dom create refers to the same id of the div in the index.html file
ReactDOM.createRoot(document.getElementById('app')).render(
  <Provider store={store}>
    <div className="indexStyle">
      <p>Hello, World</p>
    </div>
  </Provider>
);
