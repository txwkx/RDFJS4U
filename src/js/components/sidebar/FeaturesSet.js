'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
import Slider from './Slider';

const filtersHash = {
  checkbox: Checkbox,
  dropdown: Dropdown,
  slider: Slider
};

class FeaturesSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.filters.reduce((obj, item) => {
        obj[item.id] = item.max/2;
        return obj;
    }, {});
    this.initState = this.state;
  }

  reset(){
    this.setState(this.initState);
  }

  render() {
    const isActive = (this.props.isActive === true) ? 'active' : '';
    const setClass = isActive + ` features-set parsing box ${this.props.colour}`;
    let {filters} = this.props;

    if(typeof filters !== 'undefined'){
      filters = filters.map(item => {
        const Filter = filtersHash[item.type];
        return <Filter
          key={item.id}
          {...item}
          value={this.state[item.id]}
          onChange={value => this.setState({ [item.id]: value})}
          />;
      });
    }

    return (
      <div class={setClass}>
        <h3>{this.props.title}</h3>

        {filters}

      </div>
    );
  }

}

export default FeaturesSet;
