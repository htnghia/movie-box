<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="Popular" active>
        <b-card-group>
          <Card v-for="(item, index) in populars" v-bind:key="index" :img-src="item.imgSrc"></Card>
        </b-card-group>
      </b-tab>
      <b-tab title="Top Rated" active>
        <Card v-for="(item, index) in populars" v-bind:key="index" :img-src="item.imgSrc"></Card>
      </b-tab>
      <b-tab title="Upcoming" active>
        <Card v-for="(item, index) in populars" v-bind:key="index" :img-src="item.imgSrc"></Card>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
  import Card from './Card';
  export default {
    name: 'Tab',
    components: {Card},
    computed: {
      populars () {
        return [
          {
            title: 'Title',
            year: 2017,
            score: 4.0,
            imgSrc: 'https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/k/x/kxn_main-poster_1.jpg'
          },
          {
            title: 'Title',
            year: 2017,
            score: 4.0,
            imgSrc: 'https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/k/x/kxn_main-poster_1.jpg'
          },
          {
            title: 'Title',
            year: 2017,
            score: 4.0,
            imgSrc: 'https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/k/x/kxn_main-poster_1.jpg'
          },
          {
            title: 'Title',
            year: 2017,
            score: 4.0,
            imgSrc: 'https://www.cgv.vn/media/catalog/product/cache/1/small_image/240x388/dd828b13b1cb77667d034d5f59a82eb6/k/x/kxn_main-poster_1.jpg'
          }
        ]
      }
    }
  };
</script>