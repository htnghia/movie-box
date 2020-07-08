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
      <b-card-text>
        {{title}}
      </b-card-text>
      <b-card-text>
        {{genreNames.join(", ")}}
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
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
