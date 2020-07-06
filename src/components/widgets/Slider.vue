<template>
  <div>
    <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="(film, index) in films" v-bind:key="index"
          :img-src="film.url"
      >
        {{film.title}}
        <span v-for="(tag, index) in film.tags" v-bind:key="index">{{tag}}</span>

        {{film.duration}}
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    name: 'Slider',
    data() {
      return {
        films: [
          {
            title: 'Film1',
            tags: ['tag1', 'tag2', 'tag3'],
            duration: '1h:52m',
            rating: {
              score: 4,
              totalReview: 3444
            },
            url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/p/h/phi-vu-bao-to_980wx448h_1.jpg'
          },
            {
              title: 'Film1',
              tags: ['tag1', 'tag2', 'tag3'],
              duration: '1h:52m',
              rating: {
                  score: 4,
                  totalReview: 3444
              },
              url: 'https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/p/h/phi-vu-bao-to_980wx448h_1.jpg'
            },
        ],
        slide: 0,
        sliding: null
      }
    }
  }
</script>