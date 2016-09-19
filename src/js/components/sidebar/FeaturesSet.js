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
        if(item.type === 'slider'){ obj[item.id] = item.default;}
        else if(item.type === 'dropdown'){ obj[item.id] = item.title;}
        else if(item.type === 'checkbox'){ obj[item.id] = item.isChecked;}
        return obj;
    }, {});
    this.initState = this.state;
  }

  reset(){
    this.setState(this.initState);
    this.props.onReset();
  }

  render() {
    const setClass = (this.props.isActive === true) ? `active ${this.props.colour}` : `${this.props.colour}`;
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
        <div>
          <h3>
            {this.props.title}
            <button class="btn-reset pull-right" onClick={this.reset.bind(this)}>Reset</button>
          </h3>
          <hr />
        </div>

        {filters}

      </div>
    );
  }

}

export default FeaturesSet;
