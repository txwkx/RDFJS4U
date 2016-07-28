'use strict';
import React from 'react';

require('../../css/bootstrap-social.css');

const TodorUrl = require('../../img/Todor.jpg');
const MohammadUrl = require('../../img/Mohammad.jpg');
const MehrdadUrl = require('../../img/Mehrdad.jpg');

const Member = ({ name, role, facebook, linked, github }) => {
  //Please find a better solution for inserting image src
  return (
    <div class='member col-md-4 text-center'>
      <img class='photo' src={`../../img/${name}.jpg`} />
      <h4>{name}</h4>
      <p>{role}</p>
      <div class='social-buttons'>
        <a class='btn btn-social-icon btn-facebook' href={facebook}><i class='fa fa-facebook'></i></a>
        <a class='btn btn-social-icon btn-linkedin' href={linked}><i class='fa fa-linkedin'></i></a>
        <a class='btn btn-social-icon btn-github' href={github}><i class='fa fa-github'></i></a>
      </div>
    </div>
  );
};

class About extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      memberList: [
        {
          'name': 'Todor',
          'role': 'Project management & Development',
          'fbLink': 'whatever',
          'liLink': 'whatever',
          'ghLink': 'whatever'
        },
        {
          'name': 'Mohammad',
          'role': 'Data analysis & DB',
          'fbLink': 'whatever',
          'liLink': 'whatever',
          'ghLink': 'whatever'
        },
        {
          'name': 'Mehrdad',
          'role': 'Research & Documentation',
          'fbLink': 'whatever',
          'liLink': 'whatever',
          'ghLink': 'whatever'
        }
      ]
    };
  }


  render() {
    const listOfMembers = this.state.memberList.map(member => {
      return <Member key={member.name}
                     name={member.name}
                     role={member.role}
                     facebook={member.fbLink}
                     github={member.ghLink}
                     linked={member.liLink}
                     />;
    });

    return (
      <div id='page-content-wrapper'>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-lg-12'>
              <h1 class='page-header'>Project</h1>
              <p>Insert a brief description about the project</p>
              <p>Enterprise Information Systems Group at the University of Bonn @ 2016</p>
              <a class='btn btn-social btn-github' href='https://github.com/txwkx/RDFJS4U' target='_blank'>
                  <span class='fa fa-github'></span> Repo on github
              </a>
            </div>
          </div>
          <div class='row'>
            <div class='col-lg-12'>
              <h1 class='page-header'>TEAM</h1>
              <div class='team'>

                {listOfMembers}

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default About;
