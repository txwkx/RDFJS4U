import React, { Component } from 'react';

const ddInstances = [];

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };

  }

  componentDidMount() {
    ddInstances.push(this);
  }

  componentWillUnmount() {
    ddInstances.splice(ddInstances.indexOf(this), 1);
  }

  open(e){
    e.stopPropagation();
    this.setState({isOpened: !this.state.isOpened});
    ddInstances.filter(item => item != this).forEach(item => item.close());
  }

  close(){
    this.setState({isOpened: false});
  }

  //Set the item value from the dropdown list to the initial default title
  assignFilter(val){
    if(val != this.props.value){
      this.props.onChange(val);
    }
    this.close();
  }

  render() {
    const ddClass = this.state.isOpened === true ? 'filter open' : 'filter';

    //Forming the list of items in the dropdown
    let ddList = this.props.dropdownList.map ( ddItem => {
      return <li
              onClick={()=>{ this.assignFilter(ddItem.value); }}
              key={ddItem.id}>
              <a>{ddItem.name}</a>
            </li>;
    });

    return (
      <div class={ddClass}>
        <button
          onClick={this.open.bind(this)}
          class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
          {this.props.value} <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
          {ddList}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func
};

window.addEventListener('click', e => ddInstances.forEach(item => item.close()), false);

export default Dropdown;
