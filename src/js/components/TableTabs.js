import React from 'react';

class TableTabs extends React.Component {

  render() {
    const tabsList = this.props.tabsList.map ( tab => {
      const className = (this.props.activeTab === tab.title) ? `active ${tab.colour}` : `${tab.colour}`;
      return <li role="tab"
            onClick={() => { this.props.setActiveTab(tab.title); }}
            key={tab.id}
            ref={'tab'+tab.id}
            class={className}>
            <a href="#">{tab.name}</a>
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
