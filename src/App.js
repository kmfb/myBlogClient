import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Sidebar from './pages/home/Sidebar';
import Home from './pages/home/Home';
import About from './routes/About.page'
import PostPage from './routes/Post.page'
import LoginPage from './routes/Login.page'
import PublishPage from './routes/Publish.page'
import { ProtectedRoute } from './util/protected.route'
import './App.css'





class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/home' component={Home} exact/>
              <Route path='/home/:id' component={PostPage} exact/>
              <Route path='/about' component={About} />
              <Route path='/login' component={LoginPage} />
              <Redirect path="/" to={{pathname: '/home'}} />
              <ProtectedRoute path='/publish' component={PublishPage} />
            </Switch>

            <Sidebar />
          </div>
        </BrowserRouter>


    )
  }
}

export default App;
