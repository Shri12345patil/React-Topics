import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function App() {
  const handleClick=(e)=>{
    console.log(e.target.value)
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="h2">Task 1</h2>
      <ButtonGroup onClick={handleClick}>
        <Button variant="success" value="Login">Login</Button>
        <Button variant="danger" value="SignUp">SignUp</Button>
      </ButtonGroup>
      </header>
    </div>
  );
}

export default App;