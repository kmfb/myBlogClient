import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About'
import Post from './components/Post'
import LoginPage from './components/Login.page'
import PublishPage from './components/Publish.page'
import { ProtectedRoute } from './components/protected.route'
import './App.css'





class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/home' component={Home} exact/>
              <Route path='/home/:id' component={Post} exact/>
              <Route path='/about' component={About} />
              <Route path='/login' component={LoginPage} />
              <ProtectedRoute path='/publish' component={PublishPage} />
            </Switch>

            <Sidebar />
          </div>
        </BrowserRouter>


    )
  }
}

export default App;
