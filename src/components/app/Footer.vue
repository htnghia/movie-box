<template>
  <div>
    <b-navbar toggleable="lg" type="light" class="border-top border-bottom mt-5 mb-3 pl-0">
      <b-navbar-brand href="#">THEMOVIEBOX</b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Movie</b-nav-item>
          <b-nav-item href="#">Rating</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="mb-5 pb-5 d-flex justify-content-between">
      <p>Designed by Milan Houter. All rights reserved</p>
      <div>
        <i font-scale="1.5" class="mr-2 icon-loading"></i>
        <b-icon icon="camera" font-scale="1.5" class="mr-2"></b-icon>
        <b-icon icon="camera" font-scale="1.5" class="mr-2"></b-icon>
        <b-icon icon="camera" font-scale="1.5" class="mr-2"></b-icon>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Footer"
  };
</script>
