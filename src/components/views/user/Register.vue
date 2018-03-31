<template>
  <div class="container">
    <div class="row mt-5">
      <router-link to="/" class="navbar-brand slideLeft registration-logo">
        <img height="50"  src="http://scripta55.com/wp-content/uploads/2016/03/scripta55.png" class="logo" />
      </router-link>
    </div>
    <div class="row mt-5">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 slideUp">
        <div class="row">
          <div class="col-8">
            <p class="label-text">Register</p>
          </div>
        </div>

        <!--<div class="row mt-5">-->
        <!--<p class="col-12 info">Login to view your payment plans.</p>-->
        <!--<p class="col-12 info">Save and Play towards your goals.</p>-->
        <!--</div>-->

        <form id="client-register-form" @submit.prevent="registerClient('form-register-client')" data-vv-scope="form-register-client">
          <div class="form-group registration-width">

            <i v-show="errors.has('form-register-client.email')" class="fa fa-warning"></i>
            <span v-show="errors.has('form-register-client.email')" class="help is-danger">{{ errors.first('form-register-client.email') }}</span>
            <input class="form-control-small col-12" :class="{'input': true, 'is-danger': errors.has('email') }" v-on:focus="clearMessages()" v-validate="'required|email'" type="email" v-model="registration.email" placeholder="email" />

            <input class="form-control-small col-12" type="password" v-model="registration.password" placeholder="password" />
            <input class="form-control-small col-12" type="password" v-model="registration.confirm" placeholder="password confirm" />
          </div>

          <div class="form-group registration-width">
            <input type="text" class="form-control-small col-12" v-model="registration.name" placeholder="name">
            <input type="text" class="form-control-small col-12" v-model="registration.surname" placeholder="surname">
            <input type="text" class="form-control-small col-12" v-model="registration.phone" placeholder="phone Number">
            <select  class="form-control-small col-12" v-model="registration.province">
              <option value="western cape" selected="selected"> Western Cape</option>
              <option value="eastern cape"> Eastern Cape</option>
              <option value="gauteng"> Gauteng</option>
              <option value="kwa-zulu natal"> Kwa-zulue Natal</option>
              <option value="mpumalanga"> Mpumalanga</option>
              <option value="limpopo"> Limpopo</option>
              <option value="free state"> Free State</option>
              <option value="north west"> North West</option>
              <option value="northern cape"> Northern Cape</option>
            </select>
            <input type="text" class="form-control-small col-12" v-model="registration.address" placeholder="address">
            <select v-model="registration.country_code" class="form-control-small col-12">
              <option v-for="item in countries" v-bind:value="item.code" v-bind:selected="registration.country_code == item.code">
                {{ item.name }}
              </option>
            </select>
            <!--<a href="" class="forgot-link">Forgot password?</a>-->
          </div>
          <div class="form-group">
            <p v-show="error.show" class="help is-danger"><i class="fa fa-warning"></i> {{ error.description }}</p>
            <button type="submit"  class="btn btn-outline-primary form-control-small btn-md ">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        registration: {
          email: '',
          password: '',
          name: '',
          surname: '',
          phone: '',
          province: 'western cape',
          address: '',
          country_code: 'ZA'
        },
        error: {
          show: false,
          description: ''
        },
        countries: [
          {
            name: 'South Africa',
            code: 'ZA'
          }
        ]
      }
    },
    created () {
      this.getCountries()
    },
    methods: {
      getCountries: function () {
        var resource = this.$resource('countries')
        resource.get().then((response) => {
          this.countries = response.data
        }, (error) => {
          console.log(error)
        })
      },
      clearMessages: function () {
        this.error.show = false
      },
      registerClient: function () {
        this.$Progress.start()
        this.$validator.validateAll().then((result) => {
          if (!result) {
            return
          }
          console.log(this.registration)
          let data = this.registration
          data.type = 'client'
          data.registration_source = 'scripta 55'
          this.$http.post('register', data).then((res) => {
            if (res.body.error) {
              this.error.description = res.body.message
              this.error.show = true
              this.$Progress.fail()
              return
            }
            this.$auth.setToken(res.body.meta.token, res.body.expires_in + Date.now())
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

  #business-registration-form {
    padding-top: 60px;
  }

  #business-registration-form .form-group .form-control {
    width: 80%;
  }

  #client-register-form .form-group .form-control {
    width: 80%;
  }

  #client-register-form {
    padding-top: 60px;
  }

  .registration-width {
    width: 80%;
  }

  .info {
    font-weight: 500;
    line-height: 15px;
  }

  .register-logo {
    padding-bottom: 90px;
  }

  select.form-control-small {
    height: 40px;
    border-radius: 30px;
  }
</style>
