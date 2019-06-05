import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

function Map() {
  return (
    <div className="App">
      <header className="App-header">
      <link href='https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css' rel='stylesheet' />
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
          
        </a>
      </header>
    </div>
  );
}

ReactDOM.render(
    <Router>
        <App />
        </Router>,
        document.getElementById('root')
    
)

export default Map;

