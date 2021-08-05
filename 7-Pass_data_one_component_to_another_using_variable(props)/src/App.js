import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

class App extends React.Component {
  render() {
    const carname = "shri";
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <Car brand={carname} />
      </div>
    );
  }
}

export default App;
