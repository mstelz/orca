import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './src/css/toolkit-inverse.css';
import './src/css/app.css';
import Nav from './src/components/Navigation/Nav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('root'));
registerServiceWorker();
