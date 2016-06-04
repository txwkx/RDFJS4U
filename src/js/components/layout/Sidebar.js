'use strict';
import React from 'react';

class Sidebar extends React.Component {

  render() {
    return (
      <div id="sidebar-wrapper">
        <h2>FEATURES</h2>
          <div class='features-set general'>
            <h3>General</h3>
            <ul class="sidebar-nav">
              <li><div class='filter'><a class="checkbox"><label><input type="checkbox" value="" />Environment <i class="fa fa-desktop"></i></label></a></div></li>
              <li><div class='filter'><a class="checkbox" ><label><input type="checkbox" value="" />Documentation <i class="fa fa-file-text"></i></label></a></div></li>
              <li><div class='filter'><a class="checkbox" ><label><input type="checkbox" value="" />Open source <i class="fa fa-file-code-o"></i></label></a></div></li>
              <li>
                <div class="filter">
                <p>Source size - <label for="fader">50 kB</label><i class="fa fa-cog"></i>
                <input type="range" min="0" max="100" value="50" id="fader" step="1" oninput="outputUpdate(value)" />
                </p>
                </div>
              </li>
              <li>
                <div class="filter">
                <p>Community size - <label for="fader">20 k</label><i class="fa fa-users"></i>
                <input type="range" min="0" max="100" value="50" id="fader" step="1" oninput="outputUpdate(value)" />
                </p>
                </div>
              </li>
            </ul>
          </div>

        <div class="features-set parsing red box active">
          <h3>Parsing</h3>
          <div class="filter">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Media types <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">RDF/JSON</a></li>
              <li><a href="#">JSON-LD</a></li>
              <li><a href="#">D3</a></li>
              <li><a href="#">Turtle</a></li>
              <li><a href="#">RDF/XML</a></li>
            </ul>
          </div>
          <div class="filter">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Environment <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Browser</a></li>
              <li><a href="#">Node.js</a></li>
              <li><a href="#">AMD</a></li>
              <li><a href="#">CommonJS</a></li>
            </ul>
          </div>
          <div class="filter">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Interfaces (APIs) <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">RDF interfaces</a></li>
              <li><a href="#">Streams API</a></li>
              <li><a href="#">Node.js streams</a></li>
            </ul>
          </div>
        </div>

        <div class="features-set storage orange box ">
          <h3>Data storage</h3>
          <div class="filter">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Storage method <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">Memory</a></li>
              <li><a href="#">Disk-backed</a></li>
              <li><a href="#">Disk-indexed</a></li>
            </ul>
          </div>
          <div class="filter">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              I/O style <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a href="#">In-line</a></li>
              <li><a href="#">Synchronous</a></li>
              <li><a href="#">Asynchronous</a></li>
            </ul>
          </div>
          <div class="filter">
            <a class="checkbox" ><label><input type="checkbox" value="" />Referenced standards <i class="fa fa-file-code-o"></i></label></a>
          </div>
      </div>
      </div>
    );
  }

}

export default Sidebar;
