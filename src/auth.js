/* globals localStorage */
export default function (Vue) {
  Vue.auth = {
    setToken (token, expiration) {
      localStorage.setItem('ss_token', token)
      localStorage.setItem('expiration', expiration)
    },
    getToken () {
      let token = localStorage.getItem('ss_token')
      let expiration = localStorage.getItem('expiration')

      if (!token || !expiration) {
        return null
      }

      if (Date.now > parseInt(expiration)) {
        this.destroyToken()
        return null
      } else {
        return token
      }
    },
    destroyToken () {
      localStorage.removeItem('ss_token')
      localStorage.removeItem('expiration')
    },
    isAuthenticated () {
      if (this.getToken()) {
        return true
      } else {
        return false
      }
    }
  }

  Object.defineProperties(Vue.prototype, {
    $auth: {
      get: () => {
        return Vue.auth
      }
    }
  })
}
