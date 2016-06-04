import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import About from './pages/About';
import Documentation from './pages/Documentation';
import Layout from './pages/Layout';
import Libraries from './pages/Libraries';

const app = document.getElementById('app');

const route = (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Libraries}></IndexRoute>
      <Route path='documentation' name="documentation" component={Documentation}></Route>
      <Route path='about' name="about" component={About}></Route>
    </Route>
  </Router>
);

ReactDOM.render(route, app);
