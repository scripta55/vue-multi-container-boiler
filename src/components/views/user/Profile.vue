<template>
  <div>
    <div class="container mt-5">
      <h2 class="mb-5 section-title">Profile</h2>
      <div class="row slideUp section-close">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6">
          <div class="row profile-head">
            <div class="col-3">
                        <img height="50" src="http://scripta55.com/wp-content/uploads/2016/03/scripta55.png" class="logo"/>
            </div>
            <div class="col-8 profile-intro">
              <p class="">{{client.data.name + ' ' + client.data.surname}}</p>
              <p class="">{{client.email}}</p>
            </div>
          </div>
          <form class="">
            <input type="text" class="form-control" v-on:focus="clearMessages()" v-model="client.data.name" placeholder="name">
            <input type="text" class="form-control" v-on:focus="clearMessages()" v-model="client.data.surname" placeholder="surname">
            <input type="text" class="form-control" v-on:focus="clearMessages()" v-model="client.email" placeholder="email">
            <input type="text" class="form-control" v-on:focus="clearMessages()" v-model="client.data.phone" placeholder="phone">
            <input type="text" class="form-control" v-on:focus="clearMessages()" v-model="client.data.province" placeholder="province">
            <input type="text" class="form-control" v-on:focus="clearMessages()" v-model="client.data.address" placeholder="address">
            <select v-model="client.data.country_code" class="form-control" v-on:focus="clearMessages()">
              <option
                v-for="item in countries"
                v-bind:value="item.code"
                v-bind:selected="client.data.country_code == item.code"
              >
                {{ item.name }}
              </option>
            </select>
            <div class="form-group">
              <p v-show="notification.show" class="help is-notification">
                <i class="fa fa-warning"></i>{{ notification.message }}</p>
              <button type="button" class="btn btn-outline-primary form-control " v-on:click="updateProfile()"> Update</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      client: {
        id: '',
        email: '',
        redirect_token: '',
        data: {
          name: '',
          surname: '',
          email: '',
          phone: '',
          province: '',
          address: '',
          country_code: ''
        }
      },
      countries: [
        {
          name: 'South Africa',
          code: 'ZA'
        }
      ],
      notification: {
        show: false,
        message: ''
      }
    }),
    created () {
      this.getProfile()
      this.getCountries()
    },
    methods: {
      clearMessages: function () {
        this.notification.show = false
      },
      getProfile () {
        this.$Progress.start()
        var resource = this.$resource('me/client')
        resource.get().then((response) => {
          this.client = response.data
          this.$Progress.finish()
        }, (error) => {
          this.$Progress.fail()
          console.log(error)
        })
      },
      getCountries: function () {
        var resource = this.$resource('countries')
        resource.get().then((response) => {
          this.countries = response.data
        }, (error) => {
          console.log(error)
        })
      },
      updateProfile: function () {
        this.$Progress.start()
        var resource = this.$resource('clients/' + this.client.data.id)
        resource.update(this.client).then((response) => {
          if (response.data) {
            this.notification.show = true
            this.notification.message = 'Your profile has been updated.'
          }
          this.$Progress.finish()
        }, (error) => {
          this.$Progress.fail()
          console.log(error)
        })
      }
    }
  }
</script>
<style>

  .section-close {
    border-bottom: solid 1px gray;
    padding-bottom: 50px;
  }

  .profile-head {
    padding-bottom: 50px;
  }

  .profile-intro {
    font-size: 22px;
    line-height: 18px;
    text-transform: uppercase;
    letter-spacing: 3px;
    padding-top: 15px;
  }
</style>
