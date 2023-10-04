import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
 
// What kind of syntax does React expects from us when we try to
// create a custom element.

// const reactElement = React.createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'Click me to open Google'
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <App />

  // reactElement
);

