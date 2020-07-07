import callApi from "../../../utils/api"
import apiHelper from "../../../utils/api-helper";
import moduleConstants from "./constants";
import constants from "../../../utils/constants"

const getMoviesEndpoint = (filter) => {
  const baseEndpoint = apiHelper.endpoint().movie;
  if (filter === constants.MOVIE_FILTER.POPULAR) {
    return baseEndpoint.popular;
  } else if (filter === constants.MOVIE_FILTER.TOP_RATED) {
    return baseEndpoint.topRated;
  }
  return baseEndpoint.upcoming;
};

const fetchPopular = async ({ commit }, { page }, filter) => {
  const data = await callApi(getMoviesEndpoint(filter), apiHelper.requestOptions("GET", { params: { page } }))
  commit(moduleConstants.MUTATION_POPULAR, { page: data.page, results: data.results });
  return data.results;
};

export default {
  [moduleConstants.ACTION_GET_POPULAR]: fetchPopular
};
