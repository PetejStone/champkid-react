import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Nav from './components/Nav.js'
import Header from './components/Header.js'
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
    </div>
  );
}

export default App;
