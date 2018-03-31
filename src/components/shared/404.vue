<template>
  <div class="backgroundImage">
    <div class="container">
      <router-link to="/" class="navbar-brand">
       <img height="50" src="http://scripta55.com/wp-content/uploads/2016/03/scripta55.png" class="logo"/>
      </router-link>

      <div class="f-block text-center">
        <h1 class="white letter-spacing ">we are lost, we have lost</h1>
        <router-link class="btn btn-outline-success mx-auto-0   my-sm-0 btn-header" to="/">Visit homepage</router-link>
        <br>
        <h3 class="white letter-spacing mt-5">404</h3>
        <p class="white letter-spacing ">We could not find the page you are looking for.</p>
      </div>


    </div>
  </div>
</template>
<style>

  .backgroundImage {
    min-height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1501021646207-ea9a55e30bea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c389ab135c76116868c589d42d7abe4&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex; /* NEW */
  }

  .f-block {
    margin-top: 180px;
  }


</style>
