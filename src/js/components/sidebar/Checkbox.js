'use strict';
import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked || false
    };
  }

  handleChange(e){
    this.setState({checked: !this.state.checked});
  }

  render() {
    return (
      <div class='filter'>
        <a class="checkbox">
          <label>
            <input type="checkbox"
                   checked={this.state.checked}
                   onChange={this.handleChange.bind(this)} />
                   {this.props.title}
                   <i class={this.props.icon}></i>
          </label>
        </a>
      </div>
    );
  }

}

export default Checkbox;
