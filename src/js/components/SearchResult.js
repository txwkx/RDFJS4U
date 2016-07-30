'use strict';
import React from 'react';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  hide(){
    this.setState({isVisible: false});
  }

  render() {
    const { results } = this.props;
    let label;
    let srClass = this.state.isVisible === true ? '' : 'hide';
    srClass += ' alert alert-dismissable ';

    if(results === 1){
      label = `${results} library has matched your requrest!`;
      srClass += 'alert-info';
    } else if(results > 1){
      label = `${results} libraries have matched your requrest!`;
      srClass += 'alert-info';
    } else{
      label = 'Opps! Sorry, but no libraries matched your requrest!';
      srClass += 'alert-danger ';
    }

    return (
      <div class="row">
        <div class="col-lg-12">
          <div class={srClass}>
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true" onClick={this.hide.bind(this)}>×</button>
            <i class="fa fa-search"></i> <strong>Search results:</strong> {label}
          </div>
        </div>
      </div>
    );
  }

}

export default SearchResult;
