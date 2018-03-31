<template>
  <div>
    <public-header />
    <router-view class="public-body"></router-view>
    <public-footer />
  </div>
</template>
<script>
  import PublicHeader from '../views/public/Header'
  import PublicFooter from '../views/public/Footer'

  export default {
    name: 'public-container',
    created () {},
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
        class: 'public-container'
      }
    },
    methods: {},
    components: {
      'public-header': PublicHeader,
      'public-footer': PublicFooter
    }
  }
</script>
<style>
</style>
