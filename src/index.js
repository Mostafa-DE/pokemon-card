import React, { Component } from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';


class Index extends Component {
  render() {
    return(
      <div>
        < App />
      </div>
    )
  }
}

ReactDOM.render(
    <Index />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
