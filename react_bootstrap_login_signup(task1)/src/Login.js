import React, {useState} from 'react';
import Modal from 'react-modal';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Login_popup from './Login_popup';

function Login() {
  const handleClick=(e)=>{
    console.log(e.target.value)
  }
  const [modalIsOpen,setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue =()=>{
      setModalIsOpen(true)
  }

  const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
  }
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : 'purple'      
    }
};

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="h2">Task 1</h2>
      <ButtonGroup onClick={handleClick}>
        <Button variant="success" value="Login" onClick={setModalIsOpenToTrue}>Login</Button>

        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
                  <button className="close-icon" onClick={setModalIsOpenToFalse}>x</button>
                  <Login_popup/>
        </Modal>
      </ButtonGroup>
      </header>
    </div>
  );
}

export default Login;