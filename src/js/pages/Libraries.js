'use strict';
import React from 'react';

import Sidebar from '../components/layout/Sidebar';
import SearchResult from '../components/SearchResult';

class Libraries extends React.Component {

  render() {
    return (
    <div>
      <div id="wrapper">

      <Sidebar />

      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="page-header">
                Comparison of <big>RDF JavaScript</big> libraries
              </h1>
            </div>
          </div>

        <SearchResult results={0} />

        <div class="row">
            <div class="col-lg-12">
              <ul class="nav nav-tabs">
                <li role="presentation" class="grey active"><a href="#">All</a></li>
                <li role="presentation" class='red'><a href="#">Pasring</a></li>
                <li role="presentation" class='orange'><a href="#">SPARQL/Quiery</a></li>
                <li role="presentation" class='yellow'><a href="#">Data storage</a></li>
                <li role="presentation" class='green'><a href="#">UI data binging</a></li>
                <li role="presentation" class='blue'><a href="#">Filter</a></li>
              </ul>
              <div class="tab-content" id="tabsContent">
                <div class="table-responsive">
                  <table class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Library</th>
                        <th>License</th>
                        <th>Documentation</th>
                        <th>Latest update</th>
                        <th>Size</th>
                        <th>Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>node-rdf</td>
                        <td>Unlicensed</td>
                        <td>Yes</td>
                        <td>25.12.2015</td>
                        <td>23kb</td>
                        <td>
                          <a href="#"><i class="fa fa-download" aria-hidden="true"></i></a>
                          </td>
                      </tr>
                      <tr>
                        <td>rdfstore-js</td>
                        <td>MIT</td>
                        <td>Yes</td>
                        <td>15.11.2011</td>
                        <td>31kb</td>
                        <td>
                          <a href="#"><i class="fa fa-download" aria-hidden="true"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>N3.js</td>
                        <td>MIT</td>
                        <td>No</td>
                        <td>25.12.2015</td>
                        <td>12kb</td>
                        <td>
                          <a href="#"><i class="fa fa-download" aria-hidden="true"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>rdfquery</td>
                        <td>BSD</td>
                        <td>No</td>
                        <td>25.12.2015</td>
                        <td>25kb</td>
                        <td>
                          <a href="#"><i class="fa fa-download" aria-hidden="true"></i></a>
                        </td>
                      </tr>
                      <tr>
                        <td>rdflib.js</td>
                        <td>BSD</td>
                        <td>Yes</td>
                        <td>25.12.2015</td>
                        <td>10kb</td>
                        <td>
                          <a href="#"><i class="fa fa-download" aria-hidden="true"></i></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default Libraries;
