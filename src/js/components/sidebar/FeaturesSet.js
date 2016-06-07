'use strict';
import React from 'react';
import Dropdown from './Dropdown';

class FeaturesSet extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    const isActive = this.state.active === true ? 'active' : '';
    const setClass = isActive + ` features-set parsing box ${this.props.color}`;

    return (
      <div class={setClass}>
        <h3>{this.props.title}</h3>
        <Dropdown dropdownTitle={"Media types"} />
        <Dropdown dropdownTitle={"Environment"} />
        <Dropdown dropdownTitle={"Interfaces (APIs)"} />
      </div>
    );
  }

}

export default FeaturesSet;
