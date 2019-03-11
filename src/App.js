import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About'
import Post from './components/Post'
import './App.css'





class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/Home' component={Home} exact/>
              <Route path='/Home/:id' component={Post} exact/>
              <Route path='/About' component={About} />

            </Switch>

            <Sidebar />
          </div>
        </BrowserRouter>


    )
  }
}

export default App;
