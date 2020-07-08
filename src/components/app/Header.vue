<template>
  <div style="position: relative;">
    <b-navbar toggleable="lg" type="dark" bg-valiant="transparent" class="w-100 navbar-header pt-4">
      <b-navbar-brand tag="h1" class="pl-5">THEMOVIEBOX</b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr-5">
          <b-nav-form>
            <b-button variant="outline-light" class="mr-2">LOGIN</b-button>
            <b-button style="background-color: deeppink;">SIGN UP</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>
