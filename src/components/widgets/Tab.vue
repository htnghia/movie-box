<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab
        v-for="(tab, index) in moviesTabs"
        v-bind:key="index"
        :title="tab.title"
        @click="clickTab(tab)"
        active
      >
        <b-card-group deck>
          <Card
            class="mb-3"
            v-for="(item, index) in movies"
            v-bind:key="index"
            :title="item.title"
            :img-src="'https://image.tmdb.org/t/p/w185' + item.poster_path"
          ></Card>
        </b-card-group>
        <infinite-loading @infinite="infiniteHandler">
          <div slot="spinner">
            <img src="@/assets/loading-icon.png" />
            Loading...
          </div>
        </infinite-loading>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import Card from "./Card";
import moduleConstants from "@/store/modules/movie/constants";
import storeConstants from "@/store/constants";
import constants from "@/utils/constants";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Tab",
  components: { Card, InfiniteLoading },
  data() {
    return {
      activeFilter: constants.POPULAR,
      moviesTabs: [
        { title: "Popular", filter: constants.POPULAR },
        { title: "Top Rated", filter: constants.TOP_RATED },
        { title: "Upcoming", filter: constants.UPCOMING }
      ]
    };
  },
  computed: {
    ...mapGetters(storeConstants.MOVIE, {
      popular: moduleConstants.GET_POPULAR
    }),
    movies() {
      return this.popular.data;
    }
  },
  methods: {
    ...mapActions(storeConstants.MOVIE, {
      fetchPopular: moduleConstants.ACTION_GET_POPULAR
    }),
    clickTab({ filter }) {
      this.activeFilter = filter;
    },
    async infiniteHandler($state) {
      const result = await this.fetchPopular(
        {
          page: this.popular.lastestPage + 1
        },
        this.activeFilter
      );
      if (result && result.length) {
        if (this.popular.lastestPage >= 1) {
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
