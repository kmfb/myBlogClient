import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import About from './components/About'
import './App.css'



const Post = ({ match }) => {
  return (
      <div>{match.params.id}</div>
  )
}

class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <div>
            <Switch>
              <Route path='/Content' component={Content} exact/>
              <Route path='/Content/:id' component={Post} exact/>
              <Route path='/About' component={About} />

            </Switch>

            <Sidebar />
          </div>
        </BrowserRouter>


    )
  }
}

export default App;
