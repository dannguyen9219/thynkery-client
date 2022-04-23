import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Show from './pages/Show';
// import Layout from './pages/layout/Layout';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <Router>
      <App />
    </Router>
  ,
  document.getElementById('root')
);

