import './App.css';
import React, {Component} from 'react';
import NavBar from './components/nav/navBar'
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css'
//import Home from './components/home';
//import About from './components/about';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  );
}

export default App;

//<Route exact path ='/' component={Home}/>
//<Route exact path = '/about' component={About}/>