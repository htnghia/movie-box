import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import constants from "../../../utils/constants";

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state: {
    [constants.MOVIE_FILTER.POPULAR]: {
      latestPage: 0,
      data: []
    },
    [constants.MOVIE_FILTER.TOP_RATED]: {
      latestPage: 0,
      data: []
    },
    [constants.MOVIE_FILTER.UPCOMING]: {
      latestPage: 0,
      data: []
    },
    genres: []
  }
};
