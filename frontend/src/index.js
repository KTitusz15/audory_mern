import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './functions.js';
import App from './App';
import PostsProvider from './provider/PostsProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </React.StrictMode>
);

