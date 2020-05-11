import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";
import { render } from 'react-dom';
import NavBar from './NavBar';
import Home from "./components/Home"
import About from "./components/About"
import Prices from "./components/Prices"
import { AnimatePresence } from "framer-motion"
import './style.css';



const App = () => {
  
   

    return (
      
      <div style={{overflowX: "hidden"}}>
        <Router>
          <NavBar />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/prices" component={Prices}/>
            </Switch>
          </AnimatePresence>
        </Router>
      </div>
    );
  
}

export default App;
render(<App />, document.getElementById('root'));