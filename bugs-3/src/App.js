import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      num: 0,
    };
  }

  random = () => {
    let newRandom = Math.random()
    this.setState({
      num: newRandom,
    })
  }

  render() {
    return (
      <div className="">
        <h3>My random number: </h3>
        {this.state.num}
        <br />
        <br />
        <button onClick={() => this.random()}>
          Generate new random number
        </button>
      </div>
    );
  }
}
