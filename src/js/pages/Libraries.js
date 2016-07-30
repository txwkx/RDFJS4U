'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import * as actions from '../actions/index';

import LibrariesTable from '../components/LibrariesTable';
import PageTitle from '../components/layout/PageTitle';
import Sidebar from '../components/layout/Sidebar';
import SearchResult from '../components/SearchResult';


class Libraries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: 'Comparison of RDF JavaScript libraries',
      searchResult: 2,
      activeFiltersSet: 0,
      theadList: [
        'Library',
        'License',
        'Documentation',
        'Latest update',
        'Size',
        'Link'
      ],
      tcontent: [],

    };
  }

  componentWillMount() {
   this.props.getTableTabs();
   this.props.getFeatureSets();
   //this.props.getTableHeaderList();
  }

  componentDidUpdate(){
    //Change to libcount, not tabs
    //const searchResult = this.props.libraries.length;
    //if(this.state.searchResult != searchResult){
    //  this.setState({searchResult});
    //}
  }

  updateActiveFilter(newFilter){
    this.setState({activeFiltersSet: newFilter});
  }

  render() {
    return (
      <div id="wrapper">

        <Sidebar
          features={this.props.features}
          activeFiltersSet={this.state.activeFiltersSet}
          />

        <div id="page-content-wrapper">
          <div class="container-fluid">

            <PageTitle pageTitle={this.state.pageTitle} />

            <SearchResult results={this.state.searchResult} />

            <div class="row">
              <LibrariesTable
                tabsList={this.props.libraries}
                theadList={this.state.theadList}
                tcontent={this.state.tcontent}
                setActiveFilter={this.updateActiveFilter.bind(this)}
                activeFilter={this.state.activeFiltersSet}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ libraries, features }) {
  return { libraries, features };
}

export default connect(mapStateToProps, actions)(Libraries);
