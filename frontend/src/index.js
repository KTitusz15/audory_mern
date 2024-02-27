import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './functions.js';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-bo00pfp52tv6s45q.us.auth0.com'
      clientId='x5H2owH1zovYBDGMYQL6adtNTllvbLbe'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);

