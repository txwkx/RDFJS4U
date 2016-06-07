'use strict';
import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      isActive: false,
      title: this.props.dropdownTitle,
      //later this list would be received by props
      dropdownList: [
        {id: 1, name: 'RDF/JSON', value: 'RDFJSON'},
        {id: 2, name: 'JSON-LD', value: 'JSONLD'},
        {id: 3, name: 'D3', value: 'D3'},
        {id: 4, name: 'Turtle', value: 'Turtle'},
      ],
    };

    this._hideDropdown = this._hideDropdown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this._hideDropdown, false);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this._hideDropdown, false);
  }

  //Close-Open the dropdown
  _toggleDropdown(){
    const isOpened = !this.state.isOpened;
    this.setState({isOpened});
  }

  _hideDropdown() {
    const isActive = this.state.isActive;

    // Hide dropdown block if it's not active
    if (!isActive) {
      this.setState({ isOpened: false });
    }
  }

  _handleFocus() {
    // Make active on focus
    this.setState({ isActive: true });
  }

  _handleBlur() {
    // Clean up everything on blur
    this.setState({
      isOpened: false,
      isActive: false,
    });
  }

  //Set the item value from the dropdown list to the initial default title
  _assignFilter(val){
    console.log(`Assign ${val}`);
    if(val != this.state.title){
      const title = val;
      this.setState({title});
    }
  }

  render() {
    const ddClass = this.state.isOpened === true ? 'filter open' : 'filter';

    //Forming the list of items in the dropdown
    let ddList = this.state.dropdownList.map ( ddItem => {
      return <li
              onClick={()=>{ this._assignFilter(ddItem.value).bind(this); }}
              key={ddItem.id}>
              <a>{ddItem.name}</a>
            </li>;
    });

    return (
      <div class={ddClass}>
        <button
          onFocus={this._handleFocus.bind(this)}
          onBlur={this._handleBlur.bind(this)}
          onClick={this._toggleDropdown.bind(this)}
          class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          {this.state.title} <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
          {ddList}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
