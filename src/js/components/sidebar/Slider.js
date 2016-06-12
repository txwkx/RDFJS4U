'use strict';
import React from 'react';

class Slider extends React.Component {

  render(){

    let label = <label>{this.props.label} ~ {this.props.val} {this.props.units}</label>;
    let step = this.props.max / 10;

    return (
      <div class="filter">
        <p>{label} <i class="fa fa-users"></i>
          <input ref='inp'
          type='range'
          min={this.props.min}
          max={this.props.max}
          step={step}
          onChange={this.props.update} />
        </p>
      </div>
    );
  }
}

export default Slider;
