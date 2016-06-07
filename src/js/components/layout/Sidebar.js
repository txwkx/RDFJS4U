'use strict';
import React from 'react';

import FeaturesSet from '../sidebar/FeaturesSet';

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

        <FeaturesSet title={"Parsing"} color={"red"}/>
        <FeaturesSet title={"Data storage"} color={"orange"}/>

      </div>
    );
  }

}

export default Sidebar;
