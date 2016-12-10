import React from 'react';

export default class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedItems: []
    }
  }

  componentDidMount() {
    console.log(this.addedItems);
  }

  render() {
    return (
      <div>
        <div id="myItem1">

        </div>

        <div id="myItem2">
        
        </div>

        <div id="myItem3">
        
        </div>

      </div>
    );
  }
}