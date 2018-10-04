import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import './styles/hamburgers.min.css';
/* Import App */
import App from './App';
/* Styles */
import './index.css';

ReactDOM.render((
    <Router basename={'dh-demo'}>
      <App />
    </Router>
), document.getElementById('root'));
registerServiceWorker();
