import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path = "/About" component = {About} />
            <Route path = "/Contact" component = {Contact} />
            <Route path = "/Home" exact component = {Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;