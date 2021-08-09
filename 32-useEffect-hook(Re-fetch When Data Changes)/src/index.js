import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fetch from './Fetch';

//search name and enter
// 4. Pass "reactjs" as a prop:
//ReactDOM.render(<App />, document.querySelector("#root"));

 // 4. Pass "reactjs" as a prop:
 //fetch by using data changes
 ReactDOM.render(
  <Fetch subreddit='reactjs' />,
  document.querySelector("#root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
