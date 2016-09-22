import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

import LibrariesTable from '../components/LibrariesTable';
import PageTitle from '../components/layout/PageTitle';
import Sidebar from '../components/layout/Sidebar';
import SearchResult from '../components/SearchResult';

const queryMap = new Map();

class Libraries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: 'Comparison of RDF JavaScript libraries',
      searchResult: 0,
      activeFiltersSet: 'general'
    };
  }

  componentWillMount() {
    this.props.getTableTabs();
    this.props.getFeatureSets();
    this.props.getTableHeaderList(this.state.activeFiltersSet);
    this.props.getTableContent(this.state.activeFiltersSet);
  }

  componentDidUpdate(){
    const searchResult = this.props.tabledata.content.length;
    if(this.state.searchResult != searchResult){
      this.setState({searchResult});
    }
  }

  setActiveFilter(newFilter){
    this.setState({activeFiltersSet: newFilter});
    this.props.getTableHeaderList(newFilter);
    this.props.getTableContent(newFilter);
    queryMap.clear();
  }

  updateQueryMap(key, value){
    queryMap.set(key, value);
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
          activeFiltersSet={this.state.activeFiltersSet}
          onReset={this.props.getFeatureSets}
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
