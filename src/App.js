import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation";
import Router from "./Router";
import Home from './components/Home';
import { Auth0Provider } from '@auth0/auth0-react';
import Navbar from "./components/NavBar"



const App = () => {
  return (
    <div>
      <Navigation />
      <Router />
  </div>
  );
};






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
