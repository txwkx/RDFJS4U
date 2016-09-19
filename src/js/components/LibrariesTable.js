'use strict';
import React from 'react';
import { Table } from 'reactabular';

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
    const linksColumn = {
      property: 'link',
      header: { label: 'Link', props: { style: { width: 70 }} },
      cell: { format: (link) => <a href={link} target='_blank'>Link <i class='fa fa-link'></i></a>}
    };

    const rows = this.props.tcontent;
    const columns = [...this.props.theaders, linksColumn];

    return (
      <div class="col-lg-12">

        <TableTabs
          tabsList={this.props.tabsList}
          activeTab={this.state.activeTab}
          setActiveTab={this.setActiveTab.bind(this)}
          />

      <div class="tab-content" id="tabsContent">
        <div class="table-responsive">
          <Table.Provider class="pure-table pure-table-striped table table-bordered table-hover"
            columns={columns}>
            <Table.Header />

            <Table.Body
                rows={rows}
                rowKey="id" />
          </Table.Provider>
        </div>
      </div>
    </div>
    );
  }

}

export default LibrariesTable;
