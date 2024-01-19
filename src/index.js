import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Home from './Home';
// import About from './About' ;
// import Contact from './Contact';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('fade-in'); 
      } else {
          entry.target.classList.remove('fade-in');
      }
  });
}

const observer = new IntersectionObserver(handleIntersection, {
  root: document.getElementById('scroll-container'),
  threshold: 0.5
});

const fadeElement = document.getElementById('fade-element');

observer.observe(fadeElement);


// const Home = () => <div>Home Page</div>;
// const About = () => <div>About Page</div>;



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
