import callApi from "../../../utils/api"
import apiHelper from "../../../utils/api-helper";

import constants from "./constants";

const fetchPopular = async ({ commit }, { page }) => {
  const data = await callApi(apiHelper.endpoint().movie.popular, apiHelper.requestOptions("GET", { params: { page } }))
  commit(constants.MUTATION_POPULAR, { page: data.page, results: data.results });
  return data.results;
};

export default {
  [constants.ACTION_GET_POPULAR]: fetchPopular
};
