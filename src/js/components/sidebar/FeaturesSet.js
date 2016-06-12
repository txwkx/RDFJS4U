'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import Dropdown from './Dropdown';
import Slider from './Slider';

class FeaturesSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      slider1: 0,
      slider2: 0,
    };
    this.update = this.update.bind(this);
  }

  update(e){
    this.setState({
      slider1: ReactDOM.findDOMNode(this.refs.slider1.refs.inp).value,
      slider2: ReactDOM.findDOMNode(this.refs.slider2.refs.inp).value
    });
  }

  render() {
    const isActive = this.state.active === true ? 'active' : '';
    const setClass = isActive + ` features-set parsing box ${this.props.colour}`;

    return (
      <div class={setClass}>
        <h3>{this.props.title}</h3>
        <Dropdown dropdownTitle={"Media types"} />
        <Dropdown dropdownTitle={"Environment"} />
        <Dropdown dropdownTitle={"Interfaces (APIs)"} />
        <Slider
          ref="slider1"
          label={"First Slider"}
          units={"kB"}
          min={0}
          max={200}
          val={+this.state.slider1}
          update={this.update}
          />
        <Slider
          ref="slider2"
          label={"Second Slider"}
          units={"ml"}
          min={0}
          max={500}
          val={+this.state.slider2}
          update={this.update}
          />
      </div>
    );
  }

}

export default FeaturesSet;
