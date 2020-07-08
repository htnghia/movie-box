<template>
  <div>
    <b-card
      :img-src="imgSrc"
      img-alt="Image"
      size="sm"
      img-top
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-title class="cut-text mw-100">{{title}}</b-card-title>
      <div class="d-flex justify-content-between">
        <b-card-sub-title class="cut-text mw-60">
          {{genreNames.join(", ")}}
        </b-card-sub-title>
        <b-badge variant="light" class="border border-danger">4.8</b-badge>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: ""
    },
    genres: {
      type: Array,
      default: () => []
    },
    imgSrc: {
      type: String,
      default: ""
    },
    year: {
      type: Number,
      default: null
    }
  },
  computed: {
    genreNames() {
      return this.genres.map(item => item.name);
    }
  }
};
</script>
