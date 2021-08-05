import React from 'react';

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
      <h1>Who is learning something new?</h1>
      <Car brand="shri" />
      </div>
    );
  }
}

export default App;
