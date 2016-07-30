'use strict';
import React from 'react';

class Slider extends React.Component {

  render(){

    let label = <label>{this.props.title} ~ {this.props.value} {this.props.units}</label>;
    let step = this.props.max / 10;

    return (
      <div class="filter">
        <p>{label} <i class={this.props.icon}></i>
          <input
          type='range'
          min={this.props.min}
          max={this.props.max}
          step={step}
          onChange={e => this.props.onChange(e.target.value)} />
        </p>
      </div>
    );
  }
}

export default Slider;
