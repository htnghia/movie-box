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
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
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
    imgSrc: {
      type: String,
      default: ""
    },
    year: {
      type: Number,
      default: null
    }
  }
};
</script>
