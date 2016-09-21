import React from 'react';

class PageTitle extends React.Component {

  render() {
    return (
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">
            {this.props.pageTitle}
          </h1>
        </div>
      </div>
    );
  }

}

export default PageTitle;
