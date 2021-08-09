import React, { useEffect, useState, useRef } from "react";

function App() {
  // Store a reference to the input's DOM node
  const inputRef = useRef();
  const [value, setValue] = useState("");

  useEffect(
    () => {
      // This runs AFTER the first render,
      // so the ref is set by now.
      console.log("render");
      // inputRef.current.focus();
    },
    [inputRef]
  );

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}


export default App;
