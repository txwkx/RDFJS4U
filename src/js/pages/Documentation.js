import React from 'react';

import PageTitle from '../components/layout/PageTitle';

class Documentation extends React.Component {

  render() {
    return (
      <div id='page-content-wrapper'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='documentation col-lg-12'>
              <PageTitle pageTitle={'Documentation'} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Documentation;
