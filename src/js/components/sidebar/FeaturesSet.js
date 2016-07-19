'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
import Slider from './Slider';

class FeaturesSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1: 0,
    };
    this.update = this.update.bind(this);
  }

  update(e){
    this.setState({
      slider1: ReactDOM.findDOMNode(this.refs.slider1.refs.inp).value,
    });
  }

  render() {
    const isActive = (this.props.isActive === true) ? 'active' : '';
    const setClass = isActive + ` features-set parsing box ${this.props.colour}`;

    const filters = this.props.filters.map(filter => {
      switch (filter.type) {
        case 'dropdown':
          return <Dropdown title={filter.title} dropdownList={filter.dropdownList} />;
        case 'slider':
          const sliderId = `slider${filter.id}`;
          return <Slider
            ref={sliderId}
            label={filter.title} units={filter.units}
            min={filter.min} max={filter.max}
            val={+this.state.slider1}
            update={this.update}
            icon={filter.icon}
            />;
        case 'checkbox':
          return <Checkbox title={filter.title} icon={filter.icon} checked={false} />;
        default:
          break;
      }

    });

    return (
      <div class={setClass}>
        <h3>{this.props.title}</h3>

        {filters}

      </div>
    );
  }

}

export default FeaturesSet;
