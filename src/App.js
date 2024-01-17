import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import About from './About' ;
// import Contact from './Contact';

// const Home = () => <div>Home Page</div>;
// const About = () => <div>About Page</div>;

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/about" exact component={About} />
    //     <Route path="/contact" exact component={Contact} />
    //   </Switch>
    // </Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
