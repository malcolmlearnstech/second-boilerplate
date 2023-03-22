import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

// make sure this react dom create refers to the same id of the div in the index.html file
ReactDOM.createRoot(document.getElementById('app')).render(
  <div>Hello, world</div>
);
