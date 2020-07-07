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
        <Tab></Tab>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Header from "../app/Header";
import Slider from "../widgets/Slider";
import Tab from "../widgets/Tab";

export default {
  name: "HelloWorld",
  components: {
    Tab,
    Slider,
    Header
  },
  props: {
    msg: String
  }
};
</script>
