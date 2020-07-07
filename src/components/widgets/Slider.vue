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
      <b-carousel-slide
        v-for="(film, index) in films"
        v-bind:key="index"
        :img-src="film.url"
      >
        <b-jumbotron bg-variant="transparent" :header="film.title">
<!--          <b-badge href="#" variant="light" v-for="(tag, index) in film.tags" v-bind:key="index">{{-->
<!--            tag-->
<!--            }}</b-badge>-->
<!--          <b-badge> {{ film.duration }}</b-badge>-->
          <div>
            <b-nav align="center">
              <b-nav-item disabled>Active</b-nav-item>
              <b-nav-item disabled>Link</b-nav-item>
              <b-nav-item disabled>Another Link</b-nav-item>
              <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
          </div>
          <div>
            <b-button style="background-color: deeppink;" size="lg">WATCH MOVIE</b-button>
            <b-button variant="outline-light" size="lg">VIEW INFO</b-button>
          </div>
        </b-jumbotron>

        <div>
          <div>Rating <span>based on 3.546 reviews</span></div>
          <b-icon icon="star-fill" font-scale="2" style="color: deeppink;"></b-icon>
          <b-icon icon="star-fill" font-scale="2" style="color: deeppink;"></b-icon>
          <b-icon icon="star-fill" font-scale="2" style="color: deeppink;"></b-icon>
          <b-icon icon="star-half" font-scale="2" style="color: deeppink;"></b-icon>
          <b-icon icon="star" font-scale="2" style="color: deeppink;"></b-icon>
          <b-badge variant="dark">3.4</b-badge>
        </div>




      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      films: [
        {
          title: "Film1",
          tags: ["tag1", "tag2", "tag3"],
          duration: "1h:52m",
          rating: {
            score: 4,
            totalReview: 3444
          },
          url:
            "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/p/h/phi-vu-bao-to_980wx448h_1.jpg"
        },
        {
          title: "Film1",
          tags: ["tag1", "tag2", "tag3"],
          duration: "1h:52m",
          rating: {
            score: 4,
            totalReview: 3444
          },
          url:
            "https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/p/h/phi-vu-bao-to_980wx448h_1.jpg"
        }
      ],
      slide: 0,
      sliding: null
    };
  }
};
</script>
