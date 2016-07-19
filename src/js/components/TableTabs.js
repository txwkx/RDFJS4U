'use strict';
import React from 'react';

class TableTabs extends React.Component {

  render() {
    let tabsList = this.props.tabsList.map ( tab => {
      const className = (this.props.activeTab === tab.id) ? `active ${tab.colour}` : `${tab.colour}`;
      return <li role="tab"
            onClick={() => { this.props.setActiveTab(tab.id); }}
            key={tab.id}
            ref={'tab'+tab.id}
            class={className}>
            <a href="#">{tab.title}</a>
            </li>;
    });

    return (
      <ul class="nav nav-tabs">
        {tabsList}
      </ul>
    );
  }

}

export default TableTabs;
