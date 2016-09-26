import React from 'react';

import Header from '../components/layout/Header';

class Layout extends React.Component {

  render() {
    const { location } = this.props;

    return (
      <div>
        <Header location={location} />
        <div class='layout col-lg-12'>
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default Layout;
