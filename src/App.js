import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Nav from './components/Nav.js'
import Header from './components/Header.js'
import Outcomes from './components/Outcomes.js'
import Problems from './components/Problems.js'
import Steps from './components/Steps.js'
import SliderIntro from './components/SliderIntro'
import Slider from './components/Slider'
function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Outcomes />
      <Problems />
      <Steps />
      <SliderIntro />
      <Slider />

    </div>
  );
}

export default App;
