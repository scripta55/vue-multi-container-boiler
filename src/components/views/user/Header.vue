<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-toggleable-md mt-5 navbar-light bg-faded slideDown">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/" class="navbar-brand">
          <img height="50"  src="http://scripta55.com/wp-content/uploads/2016/03/scripta55.png" class="logo" />
        </router-link>

        <div class="collapse navbar-collapse client-nav" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/client/dashboard" class="nav-link">Dashboard
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/client/dashboard/profile" class="nav-link">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/client/dashboard/play" class="nav-link">Play</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/client/dashboard/account" class="nav-link">Account</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/client/dashboard/packages" class="nav-link">Packages</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/client/dashboard/bookings" class="nav-link">Bookings</router-link>
            </li>
            <!--<li class="nav-item">-->
              <!--<router-link to="/client/dashboard/browse" class="nav-link">Browse</router-link>-->
            <!--</li>-->
            <li class="nav-item">
              <router-link to="/client/dashboard/support" class="nav-link">Support</router-link>
            </li>
          </ul>
          <button class="btn btn-outline-success my-2 my-sm-0 btn-header" @click="logout()">Logout</button>
        </div>
      </nav>
    </div>
  </div>
</template>
<style lang="scss">
  .navbar {
    background: white;
  }

  .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.open, .navbar-light .navbar-nav .open > .nav-link {
    color: orangered;
    text-decoration: underline;
  }

  .router-link-exact-active {
    color: orangered !important;
    text-decoration: underline !important;
  }

  .navbar-light .navbar-nav .nav-link {
    color: grey;
  }

  .client-nav ul li .active a {
  }
</style>
<script>
  /* globals location */
  export default {
    methods: {
      logout: function () {
        this.$auth.destroyToken()
        location.href = '/'
      }
    }
  }
</script>