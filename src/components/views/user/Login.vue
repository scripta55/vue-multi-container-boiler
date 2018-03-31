<template>
  <div class="container">
    <div class="row mt-5">
      <router-link to="/" class="navbar-brand slideLeft login-logo">
            <img height="50" src="http://scripta55.com/wp-content/uploads/2016/03/scripta55.png" class="logo"/>
      </router-link>
    </div>
    <div class="row mt-2">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 slideUp">
        <div class="row">
        
          <div class="col-8">
            <p class="label-text">User</p>
          </div>
        </div>

        <div class="row mt-3">
          <p class="col-12 info">Go on, go in side</p>
         
        </div>

        <form v-show="!loading" @submit.prevent="loginClient('form-client')" id="user-login-form" data-vv-scope="form-client">
          <div class="form-group login-width">
            <i v-show="errors.has('form-client.email')" class="fa fa-warning"></i>
            <span v-show="errors.has('form-client.email')" class="help is-danger">{{ errors.first('form-client.email') }}</span>
            <input name="email" v-on:focus="clearMessages()" v-model="client.email" v-validate="'required|email'" class="form-control col-12" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">

            <i v-show="errors.has('form-client.password')" class="fa fa-warning"></i>
            <span v-show="errors.has('form-client.password')" class="help is-danger">{{ errors.first('form-client.password') }}</span>
            <input class="form-control col-12" v-on:focus="clearMessages()" :class="{'input': true, 'is-danger': errors.has('password') }" v-validate="'required'" type="password" name="password" placeholder="password" v-model="client.password" />
          </div>

          <div class="form-group">
            <a href="" class="forgot-link">Forgot password?</a> <span class="forgot-link">|</span> <a href="/client/register" class="forgot-link">Sign Up</a>
          </div>
          <div class="form-group">
            <p v-show="error.show" class="help is-danger"><i class="fa fa-warning"></i>{{ error.description }}</p>
            <button class="btn btn-outline-primary form-control btn-md " type="submit"> LOG IN</button>
          </div>
        </form>
        <div class="pull-down">
          <i v-show="loading" class="fa fa-spinner fa-pulse blue fa-2x fa-fw mx-auto my-5"></i>
          <span v-show="loading" class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        client: {
          email: '',
          password: '',
          type: 'user'
        },
        error: {
          show: false,
          description: ''
        },
        loading: false
      }
    },
    created () {
      this.autoLogin()
    },
    methods: {
      clearMessages: function () {
        this.error.show = false
      },
      autoLogin: function () {
        if (this.$route.query.redirect_url) {
          this.$Progress.start()
          this.loading = true
          var resource = this.$resource('oauth/redirect?redirect_url=' + this.$route.query.redirect_url)
          resource.save().then((response) => {
            this.$auth.setToken(response.data)

            if (response.data.error === true) {
              this.error.show = true
              this.error.description = ' ' + response.data.message + ' ,please log in'
              this.$auth.destroyToken()
              this.$Progress.fail()
              this.loading = false
              return
            }

            if (this.$route.query.url) {
              window.location = '/user/dashboard/' + this.$route.query.url
            } else {
              window.location = '/user/dashboard'
            }
            this.$Progress.finish()
          }, (error) => {
            this.$Progress.fail()
            console.log(error)
          })
        }
      },
      loginClient: function () {
        window.location = '/user/dashboard'
        this.$Progress.start()
        this.$validator.validateAll().then((result) => {
          if (!result) {
            return
          }
          let data = {
            'username': this.client.email,
            'password': this.client.password,
            'client_id': 2,
            'client_secret': '61MYw8X5qyekxxRiFXh0i0weumWik28JGUhcbwmC',
            'grant_type': 'password'
          }
          this.$http.post('oauth/token', data).then((res) => {
            if (res.body.error) {
              this.error.description = res.body.message
              this.error.show = res.body.error
              this.$Progress.fail()
              return
            }
            this.$auth.setToken(res.body.access_token, res.body.expires_in + Date.now())
            this.$Progress.finish()
            window.location = '/user/dashboard'
          })
        })
      }
    }
  }
</script>
<style>
  .label-text {
    text-transform: uppercase;
    letter-spacing: 5px;
    padding-top: 33px;
    font-size: 25px;
  }

  #business-login-form {
    padding-top: 60px;
  }

  #business-login-form .form-group .form-control {
    width: 80%;
  }

  #user-login-form .form-group .form-control {
    width: 80%;
  }

  #user-login-form {
    padding-top: 60px;
  }

  .login-width {
    width: 80%;
  }

  .info {
    font-weight: 500;
    line-height: 15px;
  }

  .login-logo {
    padding-bottom: 90px;
  }


</style>
