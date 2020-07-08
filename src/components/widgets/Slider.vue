<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="300000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        v-for="(film, index) in films"
        v-bind:key="index"
        :img-src="film.url"
      >
        <div class="d-flex align-content-end flex-wrap justify-content-between">
          <b-jumbotron
            bg-variant="transparent"
            :header="film.title"
            class="p-0 mb-0"
          >
            <div>
              <b-nav align="center">
                <b-nav-item disabled>Active</b-nav-item>
                <b-nav-item disabled>Link</b-nav-item>
                <b-nav-item disabled>Another Link</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
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
              icon="star-fill"
              font-scale="1.5"
              style="color: deeppink;"
            ></b-icon>
            <b-icon
              icon="star-fill"
              font-scale="1.5"
              style="color: deeppink;"
            ></b-icon>
            <b-icon
              icon="star-fill"
              font-scale="1.5"
              style="color: deeppink;"
            ></b-icon>
            <b-icon
              icon="star-half"
              font-scale="1.5"
              style="color: deeppink;"
            ></b-icon>
            <b-icon
              icon="star"
              font-scale="1.5"
              style="color: deeppink;"
            ></b-icon>
            <b-badge variant="dark">3.4</b-badge>
          </div>
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
