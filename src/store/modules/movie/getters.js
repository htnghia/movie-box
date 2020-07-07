import constants from "./constants";
const getPopular = state => {
  return state.popular;
};

export default {
  [constants.GET_POPULAR]: getPopular
};
