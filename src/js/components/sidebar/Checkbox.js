'use strict';
import React from 'react';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class='filter'>
        <a class="checkbox">
          <label>
            <input type="checkbox"
                   checked={this.props.value}
                   onChange={e => this.props.onChange(!this.props.value)} />
                   {this.props.title}
          </label>
        </a>
      </div>
    );
  }

}

export default Checkbox;
