<template>
  <div>
    <profile />
  </div>
</template>
<script>
  import Profile from './Profile'

  export default {
    name: 'user-landing',
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
        class: 'user-landing-page'
      }
    },
    methods: {},
    data: () => ({}),
    components: {
      'profile': Profile
    }
  }
</script>
<style>

</style>