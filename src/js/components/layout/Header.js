'use strict';
import React from 'react';

import { IndexLink, Link } from 'react-router';

class Header extends React.Component {

  render() {
    const { location } = this.props;
    const librariesClass = location.pathname === '/' ? 'open' : '';
    const documentationClass = location.pathname.match(/^\/documentation/) ? 'open' : '';
    const aboutClass = location.pathname.match(/^\/about/) ? 'open' : '';

    return (
      <nav class='navbar-fixed-top' role='navigation'>
        <div class='navbar-header'>
          <a class='navbar-brand'>RDFJS 4 U</a>
        </div>
        <ul class='nav navbar-right top-nav'>
          <li class={librariesClass}>
            <IndexLink to='/'><i class='fa fa-bar-chart-o'></i> Libraries</IndexLink>
          </li>
          <li class={documentationClass}>
            <Link to='documentation'><i class='fa fa-fw fa-file'></i> Documentation</Link>
          </li>
          <li class={aboutClass}>
            <Link to='about'><i class='fa fa-user'></i> About</Link>
          </li>
        </ul>
      </nav>
    );
  }

}

export default Header;
