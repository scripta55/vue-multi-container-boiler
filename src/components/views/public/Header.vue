<template>
  <div>
    <header>
      <div class="container slideDown">
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <router-link to="/" class="navbar-brand" >
            <img height="50" src="http://scripta55.com/wp-content/uploads/2016/03/scripta55.png" class="logo"/>
          </router-link>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto home-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link" >Home <span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/#welcome" class="nav-link" v-smooth-scroll>Welcome</router-link>
              </li>
              <li class="nav-item">
                <a href="frequently-asked-questions" class="nav-link" v-smooth-scroll>Faqs</a>
              </li>
              <li class="nav-item">
                <router-link to="/#contact-us" class="nav-link" v-smooth-scroll>Contact Us</router-link>
              </li>
            </ul>
            <router-link class="btn btn-outline-success  my-sm-0 btn-header" to="/user/login" v-if="!isLoggedIn">Login</router-link>
            <router-link class="btn btn-outline-success  my-sm-0 btn-header" to="/user/register" v-if="!isLoggedIn">Sign Up</router-link>
            <a class="btn btn-outline-success  my-sm-0 btn-header" href="/user/dashboard" v-if="isLoggedIn">Profile</a>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
<style lang="scss">

  .navbar {
    background: transparent;
    padding: 0px;
  }

  header .navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.open, .navbar-light .navbar-nav .open>.nav-link {
    color: white;
    text-decoration: underline;
  }

  header .container .navbar-light .navbar-nav .nav-link {
    color: white;
    font-size: 100%;

  }

  header {
    background: orangered;
    /*border-bottom: solid 1px deepskyblue;*/
  }

  .home-nav .nav-item .router-link-exact-active {
    color: white !important;
    text-decoration: none !important;
  }

  .home-nav .nav-item a:hover, .home-nav .nav-item a:focus {
    font-weight:bold
  }

  header .container {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .nav-item
  {
    padding-left: 20px;
  }

  .btn-header {
    height: 35px;
    line-height:1.75;
    border: none;
    background: #1986D9;
    color: white;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 11px;
  }

  .navbar-light .navbar-toggler {
      border-color: rgba(0,0,0,0);
  }

  .navbar-toggler-icon {
      width: 1.9em;
      height: 1.9em;
  }
</style>
<script>
  export default {
    data () {
      return {
        isLoggedIn: false
      }
    },
    created () {
      this.loggedInState()
    },
    methods: {
      loggedInState: function () {
        this.isLoggedIn = this.$auth.isAuthenticated()
      }
    }
  }
</script>
