import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>This is Constructor {this.state.color} Component!</h2>;
  }
}

export default App;
