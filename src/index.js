import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import Auth0ProviderWithNavigate from './components/auth0-provider-with-navigate';
import { BrowserRouter } from 'react-router-dom';





// console.log("REACT_APP_AUTH0_DOMAIN:", process.env.REACT_APP_AUTH0_DOMAIN);
// console.log("REACT_APP_AUTH0_CLIENTID:", process.env.REACT_APP_AUTH0_CLIENT_ID);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <App />
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
