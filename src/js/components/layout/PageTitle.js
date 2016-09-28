import React from 'react';

const PageTitle = ({ pageTitle }) => {

    return (
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">
            {pageTitle}
          </h1>
        </div>
      </div>
    );

}

export default PageTitle;
