'use strict';
import React from 'react';

import TableTabs from '../components/TableTabs';

class LibrariesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeFilter,
    };
  }

  setActiveTab(newTab){
    if(newTab != this.state.activeTab){
      this.setState({activeTab: newTab});
      this.props.setActiveFilter(newTab);
    }
  }

  render() {
    const theaders = this.props.theaders.map( thead => {
      return <th key={thead.id}>{thead.title}</th>;
    });

    const tcontent = this.props.tcontent;

    return (
      <div class="col-lg-12">

        <TableTabs
          tabsList={this.props.tabsList}
          activeTab={this.state.activeTab}
          setActiveTab={this.setActiveTab.bind(this)}
          />

      <div class="tab-content" id="tabsContent">
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                {theaders}
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  }

}

export default LibrariesTable;
