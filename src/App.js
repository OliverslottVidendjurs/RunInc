import React from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.css";
import Header from "./components/header/header";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home/home"
import Events from "./components/events/events"
import Shop from './components/shop/shop';
import Contactus from './components/contactus/contactus';

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/events" component={Events}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/contactus" component={Contactus}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
