import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tasks from './Task';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tasks/>
      </header>
    </div>
  );
}

export default App;
