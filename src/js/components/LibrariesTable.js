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

  updateActiveTab(activeTab){
    if(activeTab != this.state.activeTab){
      this.setState({activeTab});
      this.props.setActiveFilter(activeTab);
    }
  }

  render() {
    const tableHead = this.props.theadList.map( thead => {
      return <th key={thead}>{thead}</th>;
    });

    const tcontent = '';
    //const tcontent = this.props.tcontent.map();

    return (
      <div class="col-lg-12">

        <TableTabs
          tabsList={this.props.tabsList}
          activeTab={this.state.activeTab}
          setActiveTab={this.updateActiveTab.bind(this)}
          />

      <div class="tab-content" id="tabsContent">
        <div class="table-responsive">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                {tableHead}
              </tr>
            </thead>
            <tbody>
                {tcontent}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  }

}

export default LibrariesTable;
