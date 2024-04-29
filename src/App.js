import './App.css';
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RandomNumberGenerator from './components/RandomNumberGenerator';
import Navigation from "./components/Navigation";
import Router from "./Router";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        {/* <h1>Random Number Generator</h1> */}
        
        <Router />
      </BrowserRouter>
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
