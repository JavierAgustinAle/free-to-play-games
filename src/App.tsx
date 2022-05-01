import React from 'react';
import Home from './Views/Home';
import './App.css';
import Header from './Views/Header';

function App() {
  const appTitle = 'Free Games For You';
  return (
    <div className="App">
      <Header title={appTitle} />
      <div className="App-View">
        <Home />
      </div>
    </div>
  );
}

export default App;
