import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state: {
    popular: {
      lastestPage: 0,
      data: []
    },
    topRated: {
      lastestPage: 0,
      data: []
    },
    upcoming: {
      lastestPage: 0,
      data: []
    }
  }
};
