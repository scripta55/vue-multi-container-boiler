<template>

  <div id="app" >
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>

</template>

<script>
  import './../static/css/animations.css'
  import './../static/css/style.css'

  export default {
    name: 'fomo-payments',
    metaInfo: {
      link: [
        { rel: 'canonical', href: 'https://fomopayments.com/' }
      ],
      script: [
        { src: 'https://platform.twitter.com/widgets.js', async: true },
        { src: 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=' }
      ],
      bodyAttrs: {
        class: 'homepage'
      }
    },
    methods: {},
    data: () => ({}),
    components: {}
  }
</script>
<style>
  label {
    font-variant: small-caps;
  }

  .form-border {
    border: lightgray 1px solid;
    padding: 10px;
    border-radius: 10px;
  }

  .font-variant {
    font-variant: petite-caps;
  }

  .fomo-blue {
    color: #1a87da;
  }

  .fomo-green {
    color: forestgreen;
  }

  .fa {
    color: #1a87da;
  }

  .fomo-white {
    color: whitesmoke;
  }

  .fomo-space {
    margin-bottom: 250px !important;
  }

</style>