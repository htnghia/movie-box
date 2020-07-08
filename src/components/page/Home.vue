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
import { mapActions, mapGetters } from "vuex";

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
