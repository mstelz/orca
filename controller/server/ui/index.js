import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
// import './src/css/toolkit-inverse.css';
import './src/css/app.css';
import App from './src/components/App';
import Nav from './src/components/Navigation/Nav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
