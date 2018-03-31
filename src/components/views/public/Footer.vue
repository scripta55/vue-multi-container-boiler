<template>
  <div class="footer-strip">
    <div id="contact-us" class="footer-contact px-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6 col-12 mt-5">
            <img src="" />
            <address class="mt-5">
              <strong>Location?</strong>
              <br> Far here
              <br> Cape Town, South Africa
              <br> peterphillip99@gmail.com
            </address>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-5" id="contact-us-footer">
            <h2 class="contact-header">Make Contact</h2>
            <form class="mt-5" @submit.prevent="submitContact('form-contact')">
              <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <input class="form-control"
                       name="name"
                       v-validate="'required'"
                       v-model="contact.name"
                       :class="{'has-error': errors.has('name') }"
                       placeholder="name" />
                <p v-show="errors.has('name')" class="help-block text-danger small">{{errors.first('name')}}</p>

                <input class="form-control"
                       name="email"
                       v-validate="'required|email'"
                       v-model="contact.email"
                       :class="{'has-error': errors.has('email') }"
                       placeholder="email" />
                <p v-show="errors.has('email')" class="help-block text-danger small">{{errors.first('email')}}</p>

                <input class="form-control"
                       name="phone"
                       v-validate="'required|numeric'"
                       v-model="contact.phone"
                       placeholder="phone" />
                <p v-show="errors.has('phone')" class="help-block text-danger small">{{errors.first('phone')}}</p>

                <textarea id="message"
                          style="overflow:hidden"
                          name="message"
                          v-model="contact.message"
                          v-validate="'required'"
                          class="form-control"
                          :class="{'has-error': errors.has('message') }"
                          placeholder="message"></textarea>
                <p v-show="errors.has('message')" class="help-block text-danger small">{{errors.first('message')}}</p>

                <button class="form-control btn" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-strip">
      <div class="container">
        <div class="row text-center">
          <span class="mt-5">
            © Copyright 2017 Scripta55. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

  footer {
    color: gray;
    background: white;
  }

  .copy-strip {
    background: white;
    color: gray;
    height:100px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
  }

  footer .navbar-footer {
    background: white;
    padding: 50px 0;
    color: gray;
    text-transform: uppercase;
    font-size: 9pt;
    font-weight: bold;
  }

  .footer-contact {
    color: #e5e5e5;
    text-transform: uppercase;
    background: orangered;
  }

  .footer-contact .container{
    padding: 0px;
    background: orangered;
  }

  .footer-social .container {
    min-height:150px;
  }

  .footer-social h3 {
    color:#fff;
    padding-top:20px;
    text-align:center;
  }
  .footer-social {
    background: #121212;
  }
  .social-row{
    padding-top: 20px;
    text-align:center
  }
  .footer-social .container a {
    text-align:center;
    padding:15px;
    font-size: 20px;
    color: gray;
    display: block;
  }
  .footer-social .container i {
    font-size:40px;
    color: white;
  }
  .footer-social .container a:hover {
    font-size: 20px;
    //text-decoration: line-through;
    color: #009bda;
    cursor: pointer;
  }

  .contact-header {
    font-size: 16px;
    letter-spacing: 2px;

  }
</style>

<script>
  export default {
    data: () => ({
      contact: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      error: {
        description: '',
        show: false
      }
    }),
    created () {},
    methods: {
      submitContact: function () {
        this.$Progress.start()
        this.$validator.validateAll().then((result) => {
          if (!result) {
            return
          }
          var resource = this.$resource('contact-us')
          resource.save().then((res) => {
            if (res.error.error) {
              this.error.description = res.error.message
              this.error.show = res.error.error
              this.$Progress.fail()
              return
            }
          })
        })
      }
    }
  }
</script>
