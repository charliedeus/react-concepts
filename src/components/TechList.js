import React, { Component } from 'react';

class TechList extends Component {
  state = {
    techs: [
      'NodeJS', 
      'ReactJS',
      'React Native'
    ]
  };

  render() {
    console.log(this.state);
    
    return (
      <ul>
        <li>Node JS</li>
        <li>React JS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;