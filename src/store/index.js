import Vue from "vue";
import Vuex from "vuex";
import movie from "./modules/movie";
import constants from "./constants";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  strict: debug,
  modules: {
    [constants.MOVIE]: movie
  }
});
