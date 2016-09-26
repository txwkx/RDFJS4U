import React from 'react';

const TableTabs = ({tabsList, activeTab, setActiveTab}) => {

    const tabslist = tabsList.map(tab => {
      return <li key={tab.id}
                 class={`${activeTab === tab.title ? 'active' : ''} ${tab.colour}`}
                 onClick={() => setActiveTab(tab.title)}>
                 <a href="#">{tab.name}</a>
             </li>;
    });

    return (
      <ul class="nav nav-tabs">
        {tabslist}
      </ul>
    );

};

TableTabs.propTypes = {
  tabsList: React.PropTypes.array.isRequired,
  activeTab: React.PropTypes.string.isRequired,
  setActiveTab: React.PropTypes.func
};

export default TableTabs;
