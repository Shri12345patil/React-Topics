import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>
  }
}

export default App;
