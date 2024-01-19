// import logo from './logo.svg';
// import Layout from './Layout';
import './App.css';
import React from 'react';

import Header from "./components/Header";
import {BrowserRouter as Router} from "react-router-dom";
import AnimatedRoutes from './AnimatedRoutes';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;


      {/* <div className='cushion'>
        <div className='main-body'>
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </div>
      </div> */}