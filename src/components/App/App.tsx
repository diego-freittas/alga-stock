import React from 'react';
import logo from '../../logo.svg';
import ClassComponent from '../ClassComponent';
import FuncionalComponent from '../FuncionalComponent';
import TestComponent from '../TestComponent';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <TestComponent/>
          <FuncionalComponent name='Componente Funcional'/>
          <ClassComponent name='Mundoo props'/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
