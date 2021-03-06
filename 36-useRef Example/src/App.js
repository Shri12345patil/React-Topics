import React from "react";

const App = (props) => {
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);
  return (
    <form>
      <input 
        type="text"
        placeholder="Enter Name" 
        name="name" 
        ref={inputRef} />
    </form>
  );
};


export default App;

