<template>
  <div>
    <div id="how-it-works" class="pb-5">
      <div class="container">
          <h2 class="how-h1 my-5">Bolier by @scripta55</h2>
          <dl class="row pullUp">
            <div class="col-lg-4">
              <dt>

              <h4 class="h4-market">CONFIGURE</h4></dt>
              <dd>set your enviroment variables etc</dd>
            </div>
            <div class="col-lg-4">
              <dt>
              <h4 class="h4-market">TEMPLATES</h4></dt>
              <dd>create templates based off the container structure, public and user (dashboard) authentication dictates who sees what. also feel free to create more containers</dd>
            </div>
            <div class="col-lg-4">
              <dt>
              <h4 class="h4-market">RUN</h4></dt>
              <dd>first install dependencies with yarn upgrade -f then npm run dev will have you gone! then npm run build will have you a dist folder with the solution</dd>
            </div>
          </dl>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss">

  .how-it-works {
    min-height: 345px;
    color: gray;
  }

  .how-h1 {
    color: gray;
    letter-spacing: 7px;
    text-transform: uppercase;
  }

  .h4-market {
    line-height: 2;
    font-size: 110%;
  }

  .how-it-works .container {
margin-top: 100px;
  }


</style>
