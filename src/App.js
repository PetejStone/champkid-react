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
import Popup from './components/Popup.js'
import Schedule from './components/Schedule.js'
import Greg from './components/Greg.js'
import SliderTwo from './components/SliderTwo.js'
import Video from './components/Video.js'
import Pdfbook from './components/Pdfbook.js'
import Faq from './components/Faq.js'
function App() {
  setTimeout(() => {
    //document.querySelector('.modal').classList.add('show')
    document.querySelector('.popup-button').click()
   
    
  }, 10000);
  
  return (
    
    <div className="App">
      <button className="popup-button" data-toggle="modal" data-target="#exampleModalCenter"/>
      <Nav />
      <Header />
      <Outcomes />
      <Problems />
      <Steps />
      <SliderIntro />
      <Slider />
      <Schedule />
      <Popup/>
      <Greg/>
      <SliderTwo />
      <Video />
      <Pdfbook />
      <Faq />

    </div>
  );
}

export default App;
