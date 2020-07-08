<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <Header></Header>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Slider></Slider>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <MovieGridView></MovieGridView>
      </b-col>
      <b-col v-if="false">
        <div>
          <b-dropdown text="Genres" class="m-md-2">
            <b-dropdown-item v-for="genre in genres" v-bind:key="genre.id" >{{genre.name}}</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Header from "../app/Header";
import Slider from "../widgets/Slider";
import Tab from "../widgets/Tab";

export default {
  name: "Home",
  components: {
    Tab,
    Slider,
    Header
  },
  props: {
    msg: String
  },
  mounted() {
    this.fetchGenres();
  },
  computed: {
    ...mapGetters(storeConstants.MOVIE, {
      genres: movieConstants.GET_GENRES
    })
  },
  methods: {
    ...mapActions(storeConstants.MOVIE, {
      fetchGenres: movieConstants.ACTION_GET_GENRES
    })
  }
};
</script>
