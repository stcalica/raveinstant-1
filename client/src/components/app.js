import React from 'react';
import {Home} from './Home.js';
import {Navbar} from './Navbar.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  // Come back to this render code to edit in case the user 
  // knows the specific endpoint they want to go, 
  // otherwise, take them straight to 'Home'.
  // Right now, the code will automatically take them 'Home'.

  render() {
    if (this.props.children) {
      return (
        <div>
          <Navbar />
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div>
          <Navbar />
          <Home />
        </div>
      );
    }
  }
}