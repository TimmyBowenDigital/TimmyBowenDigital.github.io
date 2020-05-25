import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Bio from "./components/Bio";
import Competencies from "./components/Competencies";
import ExampleWork from "./components/ExampleWork";

function App() {
  return (
    <div className="App">
      <Header/>
      <Bio />
      <Competencies />
      <ExampleWork />
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
