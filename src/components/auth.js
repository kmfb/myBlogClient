import { validateToken } from '../util/api'

class Auth {
  constructor () {
    let token = localStorage.getItem('token')
    validateToken({token: token})
        .then((res) => {
          console.log(res.data.code, 'data')
          if (res.data.code === 200) {
            console.log('enter')
            this.authenticated = true
          }
        })
    this.authenticated = false
  }

  login (cb) {
    this.authenticated = true
    cb()
  }

  logout (cb) {
    this.authenticated = false
    cb()
  }

  isAuthenticated() {


    return this.isAuthenticated


  }

}

export default new Auth();