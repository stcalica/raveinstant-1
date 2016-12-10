import React from 'react';

export default class Cart extends React.Component {
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
          <p>There will be a thing here</p>
        </div>

        <div id="myItem2">
          <p>There will be a thing here</p>
        </div>

        <div id="myItem3">
          <p>There will be a thing here</p>
        </div>

      </div>
    );
  }
}