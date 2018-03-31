<template>
  <div>
    <welcome/>
</div>
</template>
<script>
  import Welcome from './Welcome'
  export default {
    name: 'homepage',
    created () {},
    mounted () {
      this.$Progress.finish()
    },
    metaInfo: {
      link: [
        { rel: 'canonical', href: 'https://scripta55.com/' }
      ],
      script: [
        { src: 'https://platform.twitter.com/widgets.js', async: true },
        { src: 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=' }
      ],
      bodyAttrs: {
        class: 'home-page'
      }
    },
    methods: {},
    data: () => ({}),
    components: {
      'welcome': Welcome
    }
  }
</script>

<style>
  .section-title
  {
    letter-spacing: 7px;
    text-transform: uppercase;
  }
</style>