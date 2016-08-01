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
      searchResult: 0,
      activeFiltersSet: 0
    };
  }

  componentWillMount() {
   this.props.getTableTabs();
   this.props.getFeatureSets();
   this.props.getTableHeaderList(this.state.activeFiltersSet);
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
    this.props.getTableHeaderList(newFilter);
  }

  render() {
    const {fetchstatus} = this.props;
    const isLoaded = Object.keys(fetchstatus).every(key => fetchstatus[key]);

    if(!isLoaded) return (<div class='loader'></div>);

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
                tabsList={this.props.tabledata.tabs}
                theadList={this.props.tabledata.headers}
                tcontent={this.props.tabledata.content}
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

/*function mapStateToProps({ state => state ) {
  return { libraries, features, fetchstatus };
}*/

export default connect(state => state, actions)(Libraries);
