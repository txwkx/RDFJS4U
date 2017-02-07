import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import About from './pages/About';
import Documentation from './pages/Documentation';
import Layout from './pages/Layout';
import Libraries from './pages/Libraries';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Libraries}></IndexRoute>
        <Route path='documentation' name="documentation" component={Documentation}></Route>
        <Route path='about' name="about" component={About}></Route>
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default Root;
