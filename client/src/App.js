import './App.css';
import React from 'react';
import NavBar from './components/nav/navBar'
import Footer from './components/footer/footer'
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css'
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Route exact path ='/' component={Home}/>
      <Route exact path = '/about' component={About}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
