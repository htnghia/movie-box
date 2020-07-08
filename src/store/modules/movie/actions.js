import callApi from "../../../utils/api";
import apiHelper from "../../../utils/api-helper";
import moduleConstants from "./constants";
import constants from "../../../utils/constants";

const getMoviesEndpoint = filter => {
  const baseEndpoint = apiHelper.endpoint().movie;
  switch (filter) {
    case constants.MOVIE_FILTER.POPULAR:
      return baseEndpoint.popular;
    case constants.MOVIE_FILTER.TOP_RATED:
      return baseEndpoint.topRated;
    case constants.MOVIE_FILTER.UPCOMING:
      return baseEndpoint.upcoming;
    default:
      return "";
  }
};

const fetchMovies = async ({ commit }, { page, filter }) => {
  page = page ? page : 1;
  const data = await callApi(
    getMoviesEndpoint(filter),
    apiHelper.requestOptions("GET", { params: { page } })
  );
  commit(moduleConstants.MUTATION_MOVIES, {
    page: data.page,
    results: data.results,
    filter
  });
  return data.results;
};

const fetchGenres = async ({ commit }) => {
  const data = await callApi(
    apiHelper.endpoint().movie.genres,
    apiHelper.requestOptions()
  );
  commit(moduleConstants.MUTATION_GENRES, data.genres);
};

export default {
  [moduleConstants.ACTION_GET_GENRES]: fetchGenres,
  [moduleConstants.ACTION_GET_MOVIES]: fetchMovies
};
