import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from './auth'


export class ProtectedRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      authenticated: false
    }
  }

  componentDidMount() {

    auth.isAuthenticated()
        .then((authenticated) => {
          this.setState({
            loading: false,
            authenticated
          })
    })

  }

  render() {
    const {component: Component, ...rest} = this.props
    return (
        <Route
            {...rest}
            render={props =>
                this.state.authenticated ? (
                    <Component {...props} />
                ) : (
                    this.state.loading ? (
                        <div>LOADING</div>
                    ) : (
                        <Redirect to={{pathname: '/login', state: {from: this.props.location}}}/>
                    )
                )
            }
        />
    )
  }

}



