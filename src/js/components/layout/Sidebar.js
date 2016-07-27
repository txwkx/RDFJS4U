'use strict';
import React from 'react';

import FeaturesSet from '../sidebar/FeaturesSet';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  applyFilters(e){
    e.preventDefault();
    console.log('Filters applied');
  }

  resetFilters(e){
    e.preventDefault();
    console.log('Filters reseted');
  }

  render() {
    const featuresSets = this.props.features.map(item => {
      const isActive = (item.id === this.props.activeFiltersSet) ? true : false;

      return <FeaturesSet
              key={item.title}
              title={item.title}
              colour={item.colour}
              filters={item.filters}
              isActive={isActive} />;
    });

    return (
      <div id="sidebar-wrapper">
        <h2>FILTERS</h2>
        <div class='features-set filter-buttons'>
          <button type="button" class="btn btn-danger" onClick={this.resetFilters.bind(this)}>Clear</button>
          <button type="button" class="btn btn-success pull-right" onClick={this.applyFilters.bind(this)}>Apply</button>
        </div>

        {featuresSets}

      </div>
    );
  }

}

export default Sidebar;
