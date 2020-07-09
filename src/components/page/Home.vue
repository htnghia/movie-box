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
    </b-row>
    <b-row>
      <b-col>
        <Footer></Footer>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Header from "../app/Header";
import Slider from "../widgets/Slider";
import MovieGridView from "../widgets/MovieGridView";
import Footer from '../app/Footer';
import movieConstants from "@/store/modules/movie/constants";
import storeConstants from "@/store/constants";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Footer,
    MovieGridView,
    Slider,
    Header
  },
  props: {
    msg: String
  },
  mounted() {
    this.fetchGenres();
  },
  methods: {
    ...mapActions(storeConstants.MOVIE, {
      fetchGenres: movieConstants.ACTION_GET_GENRES
    })
  }
};
</script>
