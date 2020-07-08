<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="10000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      class="main-slider"
    >
      <b-carousel-slide
        v-for="(movie, index) in top3Movies"
        v-bind:key="index"
        :img-src="baseImageUrlW780 + movie.backdrop_path"
      >
        <div class="d-flex align-content-end flex-wrap justify-content-between">
          <b-jumbotron
            bg-variant="transparent"
            :header="movie.title"
            header-tag="h3"
            class="p-0 mb-0"
            header-level="4"
          >
            <div>
              <b-nav align="left pl-0" class="tags">
                <b-nav-item v-for="(genre, index) in getMovieGenres(movie.genre_ids)" v-bind:key="index">{{genre.name}}</b-nav-item>
              </b-nav>
            </div>
            <div>
              <b-button style="background-color: deeppink;" class="mr-2"
                >WATCH MOVIE</b-button
              >
              <b-button variant="outline-light" class="mr-2"
                >VIEW INFO</b-button
              >
              <b-button variant="outline-*" class="text-light"
                >+ ADD TO WISHLIST</b-button
              >
            </div>
          </b-jumbotron>
          <div class="border border-light align-content-end mt-auto mb-1 p-2">
            <div>Rating <span>based on 3.546 reviews</span></div>
            <b-icon
              v-for="index in 5"
              :key="index"
              :icon="getStarIcon(index, movie.vote_average)"
              font-scale="1.5"
              style="color: deeppink;"
            ></b-icon>
            <b-badge variant="dark" class="ml-2">{{getBase5Vote(movie.vote_average)}}</b-badge>
          </div>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import storeConstants from "@/store/constants";
import movieConstants from "@/store/modules/movie/constants";
import constants from "@/utils/constants";
import slice from "lodash/slice";

export default {
  name: "Slider",
  data() {
    return {
      baseImageUrlW780: process.env.VUE_APP_MOVIE_BASE_IMAGE_URL_W780,
      slide: 0,
      sliding: null
    };
  },
  computed: {
    ...mapGetters(storeConstants.MOVIE, {
      moviesData: movieConstants.GET_MOVIES,
      getMovieGenres: movieConstants.GET_GENRE_BY_IDS
    }),
    top3Movies() {
      return slice(this.moviesData(constants.MOVIE_FILTER.POPULAR).data, 0, 3);
    }
  },
  methods: {
    getBase5Vote(voteAverage) {
      return voteAverage ? Math.round(voteAverage / 2 * 10) / 10 : "";
    },
    getStarIcon(index, voteAverage) {
      const base5Vote = this.getBase5Vote(voteAverage);
      if (index < base5Vote) {
        return "star-fill";
      } else if (index > base5Vote && index - 1 < base5Vote) {
        return "star-half";
      } else {
        return "star";
      }
    }
  }
};
</script>
