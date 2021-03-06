<template>
  <div class="mt-3 movie-grid">
    <b-tabs content-class="mt-3">
      <b-tab
        v-for="(tab, index) in moviesTabs"
        v-bind:key="index"
        :title="tab.title"
        @click="clickTab(tab)"
        :active="tab.filter === activeFilter"
      >
        <b-card-group columns>
          <MovieCard
            class="mb-3"
            v-for="(item, index) in movies"
            v-bind:key="index"
            :title="item.title"
            :genres="getMovieGenres(item.genre_ids)"
            :img-src="baseImageUrlW185 + item.poster_path"
          ></MovieCard>
        </b-card-group>
        <infinite-loading @infinite="infiniteHandler">
          <div slot="spinner" class="flex-column">
            <img src="@/assets/icons/loading-icon.png" class="loading-icon" />
            Loading...
          </div>
        </infinite-loading>
      </b-tab>
      <template v-slot:tabs-end>
        <b-dropdown
          text="Genres"
          class="m-0"
          variant="outline-dark border-0"
          no-flip="true"
        >
          <b-dropdown-item v-for="genre in genres" v-bind:key="genre.id">{{
            genre.name
          }}</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-tabs>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import MovieCard from "./MovieCard";
import movieConstants from "@/store/modules/movie/constants";
import storeConstants from "@/store/constants";
import constants from "@/utils/constants";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MovieGridView",
  components: { MovieCard, InfiniteLoading },
  data() {
    return {
      baseImageUrlW185: process.env.VUE_APP_MOVIE_BASE_IMAGE_URL_W185,
      activeFilter: constants.MOVIE_FILTER.POPULAR,
      moviesTabs: [
        { title: "Popular", filter: constants.MOVIE_FILTER.POPULAR },
        { title: "Top Rated", filter: constants.MOVIE_FILTER.TOP_RATED },
        { title: "Upcoming", filter: constants.MOVIE_FILTER.UPCOMING }
      ]
    };
  },
  mounted: {
    fetchGenres: movieConstants.ACTION_GET_GENRES
  },
  computed: {
    ...mapGetters(storeConstants.MOVIE, {
      genres: movieConstants.GET_GENRES,
      moviesData: movieConstants.GET_MOVIES,
      getMovieGenres: movieConstants.GET_GENRE_BY_IDS
    }),
    latestPage() {
      return this.moviesData(this.activeFilter).latestPage;
    },
    movies() {
      return this.moviesData(this.activeFilter).data;
    }
  },
  methods: {
    ...mapActions(storeConstants.MOVIE, {
      fetchGenres: movieConstants.ACTION_GET_GENRES,
      fetchPopular: movieConstants.ACTION_GET_MOVIES
    }),
    clickTab({ filter }) {
      this.activeFilter = filter;
    },
    async infiniteHandler($state) {
      const result = await this.fetchPopular({
        page: this.latestPage + 1,
        filter: this.activeFilter
      });
      if (result && result.length) {
        if (this.latestPage >= 1) {
          return $state.complete();
        }
        $state.loaded();
      } else {
        $state.complete();
      }
    }
  }
};
</script>
