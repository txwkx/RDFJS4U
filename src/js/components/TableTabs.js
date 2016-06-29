'use strict';
import React from 'react';

class TableTabs extends React.Component {

  setActive(id){
    console.log('This id: '+id);
  }

  render() {
    let tabsList = this.props.tabsList.map ( tab => {
      return <li role="tab"
            onClick={() => { this.setActive(tab.id); }}
            key={tab.id}
            ref={'tab'+tab.id}
            class={tab.colour}>
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
