<template>
    <form class="header-login" v-if="isLoggedIn">
        <button class="btn btn-clear-light login-button">Login</button>
        <a href="" class="btn btn-clear-light">Sign up</a>
    </form>
</template>
<script>
  export default {
    data () {
      return {
        isLoggedIn: false
      }
    },
    created: {},
    methods: {}
  }
</script>
