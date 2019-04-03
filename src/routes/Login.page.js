import React, { Component } from 'react'
import { login } from "../util/api";
import auth from '../util/auth'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePassWordChange = this.handlePassWordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange (event) {
    let { value } = event.target
    this.setState({
      username: value
    })
  }

  handlePassWordChange (event) {
    let { value } = event.target
    this.setState({
      password: value
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    login(this.state)
        .then(res => {
          let { code, token } = res.data
          if (code === 403) {
              this.toHome()
          } else if (code === 200) {
            auth.login(() => {
              localStorage.setItem('token', token)
              this.toPublish()
            })
          }
        })
  }

  toHome () {
    this.props.history.push('/home')
  }

  toPublish() {
    this.props.history.push('/publish')
  }

  render() {
    return (
        <div>
          <h1>Login</h1>
          <form action="">
            <div>
              <label htmlFor="">用户名：</label>
              <input type="text" onChange={this.handleUsernameChange}/>
            </div>
            <div>
              <label htmlFor="">密码：</label>
              <input type="password" onChange={this.handlePassWordChange}/>
            </div>
            <div>
              <button onClick={this.handleSubmit}>登陆</button>
            </div>
          </form>
        </div>
    )
  }
}

export default LoginPage

