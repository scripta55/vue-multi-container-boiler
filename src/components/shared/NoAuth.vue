<template>
  <div class="backgroundImage">
    <div class="container">
      <router-link to="/" class="navbar-brand">
       <img height="50" src="http://scripta55.com/wp-content/uploads/2016/03/scripta55.png" class="logo"/>
      </router-link>

      <div class="f-block text-center">
        <h1 class="white letter-spacing ">you are here but uh... no keys</h1>
        <router-link class="btn btn-outline-success mx-auto-0   my-sm-0 btn-header" to="/">Visit homepage</router-link>
        <br>
        <h3 class="white letter-spacing mt-5">401</h3>
        <p class="white letter-spacing ">are you a hacker? well.. failed hacker then :)</p>
      </div>


    </div>
  </div>
</template>
<style>

  .backgroundImage {
    min-height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1506023109511-7b4a959e41cd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b87b949f09fd4f8f1e18ef8ae9c5371a&auto=format&fit=crop&w=1351&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex; /* NEW */
  }

  .f-block {
    margin-top: 180px;
  }


</style>
