<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      class="border-top border-bottom mt-5 mb-3 pl-0"
    >
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
        <a href="#"
          ><img src="@/assets/icons/fa-icon.png" class="footer-icon"
        /></a>
        <a href="#"
          ><img src="@/assets/icons/pin-icon.png" class="footer-icon"
        /></a>
        <a href="#"
          ><img src="@/assets/icons/tw-icon.png" class="footer-icon"
        /></a>
        <a href="#"
          ><img src="@/assets/icons/in-icon.png" class="footer-icon"
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
};
</script>
