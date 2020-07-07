import moduleConstants from "./constants";

const getPopular = (state) => {
  return state["UPCOMING"];
};

export default {
  [moduleConstants.GET_POPULAR]: getPopular
};
