'use strict';
import React from 'react';

require('../../css/bootstrap-social.css');

const TodorUrl = require('../../img/Todor.jpg');
const MohammadUrl = require('../../img/Mohammad.jpg');
const MehrdadUrl = require('../../img/Mehrdad.jpg');

class About extends React.Component {

  render() {
    return (
      <div id="page-content-wrapper">
        <div class="container-fluid">
          <div class='row'>
            <div class='col-lg-12'>
              <h1 class='page-header'>Project</h1>
              <p>Insert a brief description about the project</p>
              <p>Enterprise Information Systems Group at the University of Bonn @ 2016</p>
              <a class="btn btn-block btn-social btn-github" href="https://github.com/txwkx/RDFJS4U" target="_blank">
                  <span class="fa fa-github"></span> Repo on github
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <h1 class="page-header">TEAM</h1>
              <div class='team'>
                <div class='member col-md-4 text-center'>
                  <img class='photo' src={TodorUrl} />
                  <h4>Todor Tsankov</h4>
                  <p>Project management & Development</p>
                  <div class='social-buttons'>
                    <a class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>
                    <a class="btn btn-social-icon btn-linkedin"><i class="fa fa-linkedin"></i></a>
                    <a class="btn btn-social-icon btn-github"><i class="fa fa-github"></i></a>
                  </div>
                </div>
                <div class='member col-md-4 text-center'>
                  <img class='photo' src={MehrdadUrl} />
                  <h4>Mehrdad Bozorg</h4>
                  <p>Research & Documentation</p>
                  <div class='social-buttons'>
                    <a class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>
                    <a class="btn btn-social-icon btn-linkedin"><i class="fa fa-linkedin"></i></a>
                    <a class="btn btn-social-icon btn-github"><i class="fa fa-github"></i></a>
                  </div>
                </div>
                <div class='member col-md-4 text-center'>
                  <img class='photo' src={MohammadUrl} />
                  <h4>Mohammad Tahaei</h4>
                  <p>Data analysis & Evaluation </p>
                  <div class='social-buttons'>
                    <a class="btn btn-social-icon btn-facebook"><i class="fa fa-facebook"></i></a>
                    <a class="btn btn-social-icon btn-linkedin"><i class="fa fa-linkedin"></i></a>
                    <a class="btn btn-social-icon btn-github"><i class="fa fa-github"></i></a>
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

export default About;
