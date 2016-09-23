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
        if(item.type === 'dropdown'){ obj[item.ref] = item.title;}
        else if(item.type === 'checkbox'){ obj[item.ref] = item.isChecked;}
        return obj;
    }, {});
    this.initState = this.state;
  }

  onReset(){
    this.setState(this.initState);
    this.props.onReset();
  }

  onChange(item, value){
    this.setState({ [item.ref]: value});
    this.props.onChange(item.ref, value);
  }

  render() {
    let { filters } = this.props;

    if(typeof filters !== 'undefined'){
      filters = filters.map(item => {
        const Filter = filtersHash[item.type];
        return <Filter
          key={item.id}
          {...item}
          value={this.state[item.ref]}
          onChange={this.onChange.bind(this, item)}
          />;
      });
    }

    return (
      <div class={`${(this.props.isActive === true) ? 'active' : 'box'} ${this.props.colour}`}>
        <div>
          <h3>
            {this.props.title}
            <button class="btn-reset pull-right" onClick={this.onReset.bind(this)}>Reset</button>
          </h3>
          <hr />
        </div>

        {filters}

      </div>
    );
  }

}

export default FeaturesSet;
