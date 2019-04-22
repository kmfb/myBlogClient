import { validateToken } from './api'

class Auth {


  login (cb) {
    this.authenticated = true
    cb()
  }

  logout (cb) {
    this.authenticated = false
    cb()
  }

  isAuthenticated() {

    let token = localStorage.getItem('token')
    return validateToken({ token }).then((data) => {
      if (data.code === 200) {
        return this.authenticated = true
      }
      return this.authenticated = false

    })


  }

}

export default new Auth();