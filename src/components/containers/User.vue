<template>
  <div>
    <client-header />

      <router-view class="dashboard-body"></router-view>

    <client-footer/>
  </div>
</template>
<script>
  import UserHeader from '../views/user/Header'
  import UserFooter from '../views/user/Footer'

  export default {
    name: 'user-container',
    created () {
    },
    mounted () {
      this.$Progress.finish()
    },
    metaInfo: {
      link: [
        {rel: 'canonical', href: 'https://scripta55.com/'}
      ],
      script: [
        {src: 'https://platform.twitter.com/widgets.js', async: true},
        {src: 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId='}
      ],
      bodyAttrs: {
        class: 'user-container'
      }
    },
    methods: {},
    data: () => ({}),
    components: {
      'user-header': UserHeader,
      'user-footer': UserFooter
    }
  }
</script>
<style>
</style>