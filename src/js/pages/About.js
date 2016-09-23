import React from 'react';

import PageTitle from '../components/layout/PageTitle';

require('../../css/bootstrap-social.css');

class About extends React.Component {

  render() {
    return (
      <div id='page-content-wrapper'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-lg-12'>
              <PageTitle pageTitle={'Project'} />
              <p>Insert a brief description about the project</p>
              <p>Enterprise Information Systems Group at the University of Bonn @ 2016</p>
              <a class='btn btn-social btn-github' href='https://github.com/txwkx/RDFJS4U' target='_blank'>
                  <span class='fa fa-github'></span> Repo on github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default About;
