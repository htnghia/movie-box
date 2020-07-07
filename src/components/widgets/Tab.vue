<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="Popular" active>
        <b-card-group deck>
          <Card
            class="mb-3"
            v-for="(item, index) in popular"
            v-bind:key="index"
            :img-src="'https://image.tmdb.org/t/p/w185' + item.poster_path"
          ></Card>
        </b-card-group>
        <infinite-loading  @infinite="infiniteHandler">
          <div slot="spinner">
            <img src="@/assets/loading-icon.png">
            Loading...
          </div>
        </infinite-loading>
      </b-tab>
      <b-tab title="Popular" active>
        <b-card-group deck>
          <Card
            class="mb-3"
            v-for="(item, index) in popular"
            v-bind:key="index"
            :img-src="'https://image.tmdb.org/t/p/w185' + item.poster_path"
          ></Card>
        </b-card-group>
        <infinite-loading  @infinite="infiniteHandler">
          <div slot="spinner">
            <img src="@/assets/loading-icon.png">
            Loading...
          </div>
        </infinite-loading>
      </b-tab>
      <b-tab title="Popular" active>
        <b-card-group deck>
          <Card
            class="mb-3"
            v-for="(item, index) in popular"
            v-bind:key="index"
            :img-src="'https://image.tmdb.org/t/p/w185' + item.poster_path"
          ></Card>
        </b-card-group>
        <infinite-loading  @infinite="infiniteHandler">
          <div slot="spinner">
            <img src="@/assets/loading-icon.png">
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
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Tab",
  components: { Card, InfiniteLoading },
  data() {
    return {
      filmData: [
        {
          title: "Title",
          year: 2017,
          score: 4.0,
          imgSrc:
            "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/k/x/kxn_main-poster_1.jpg"
        },
        {
          title: "Title",
          year: 2017,
          score: 4.0,
          imgSrc:
            "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/k/x/kxn_main-poster_1.jpg"
        },
        {
          title: "Title",
          year: 2017,
          score: 4.0,
          imgSrc:
            "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/k/x/kxn_main-poster_1.jpg"
        },
        {
          title: "Title",
          year: 2017,
          score: 4.0,
          imgSrc:
            "https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/k/x/kxn_main-poster_1.jpg"
        }
      ]
    };
  },
  mounted() {
    // this.fetchPopular();
  },
  computed: {
    ...mapGetters(storeConstants.MOVIE, {
      popular: moduleConstants.GET_POPULAR,
      popularLatestPage: moduleConstants.GET_POPULAR_LATEST_PAGE
    }),
    films() {
      return this.filmData;
    }
  },
  methods: {
    ...mapActions(storeConstants.MOVIE, {
      fetchPopular: moduleConstants.ACTION_GET_POPULAR
    }),
    async infiniteHandler($state) {
      console.log('scroll debuggggggggggggggggggg', $state);
      const result = await this.fetchPopular({ page: this.popularLatestPage + 1 });
      if (result && result.length) {
        // $state.complete();
        $state.loaded();
      } else {
        $state.complete();
      }
    }
  }
};
</script>
