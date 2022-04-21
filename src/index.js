import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Show from './pages/Show';
// import Layout from './pages/layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={ <App /> }>
      </Route>
    </Routes>
  </Router>
  ,
  document.getElementById('root')
);

