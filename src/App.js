import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import Navbar from './components/Navigate'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'

class App extends Component {
  render(){
    return (
      <div className="App">
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />
            <Route path="/" component={Home} />
          </Switch>
      </div>
    );
  }
}

export default App;
