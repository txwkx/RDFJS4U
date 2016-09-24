import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

import LibrariesTable from '../components/LibrariesTable';
import PageTitle from '../components/layout/PageTitle';
import Sidebar from '../components/layout/Sidebar';
import SearchResult from '../components/SearchResult';

const queryMap = new Map();

export class Libraries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: 'Comparison of RDF JavaScript libraries',
      searchResult: 0,
      activeFiltersSet: 'general',
      querySize: 0
    };
  }

  componentWillMount() {
    this.props.getTableTabs();
    this.props.getFeatureSets();
    this.updateTableData(this.state.activeFiltersSet);
  }

  componentDidUpdate(){
    const searchResult = this.props.tabledata.content.length;
    if(this.state.searchResult != searchResult) this.setState({searchResult});
  }

  setActiveFilter(activeFiltersSet){
    this.setState({activeFiltersSet});
    this.updateTableData(activeFiltersSet);
    this.resetFilters();
  }

  updateTableData(filterSet){
    this.props.getTableHeaderList(filterSet);
    this.props.getTableContent(filterSet);
  }

  resetFilters(){
    queryMap.clear();
    this.setState({querySize: queryMap.size});
  }

  updateQueryMap(key, value){
    queryMap.set(key, value);
    this.setState({querySize: queryMap.size});
  }

  applyFilters(){
    this.props.queryTable(this.state.activeFiltersSet, queryMap);
  }

  render() {
    const { fetchstatus } = this.props;
    const isLoaded = Object.keys(fetchstatus).every(key => fetchstatus[key]);

    if(!isLoaded) return (<div class='loader'></div>);

    return (
      <div id="wrapper">

        <Sidebar
          features={this.props.features}
          querySize={this.state.querySize}
          activeFiltersSet={this.state.activeFiltersSet}
          onReset={this.resetFilters.bind(this)}
          onChange={this.updateQueryMap.bind(this)}
          applyFilters={this.applyFilters.bind(this)}
          />

        <div id="page-content-wrapper">
          <div class="container-fluid">

            <PageTitle pageTitle={this.state.pageTitle} />

            <SearchResult results={this.state.searchResult} />

            <div class="row">
              <LibrariesTable
                tabsList={this.props.tabledata.tabs}
                theaders={this.props.tabledata.headers}
                tcontent={this.props.tabledata.content}
                setActiveFilter={this.setActiveFilter.bind(this)}
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
