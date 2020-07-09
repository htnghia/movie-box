import moduleConstants from "./constants";
import filter from "lodash/filter";

const getMovies = state => {
  return filter => {
    return state[filter] ? state[filter] : {};
  };
};

const getGenreByIds = state => ids => {
  return ids.length
    ? filter(state.genres, genre => ids.includes(genre.id))
    : [];
};

const getGenres = state => state.genres;

export default {
  [moduleConstants.GET_GENRES]: getGenres,
  [moduleConstants.GET_GENRE_BY_IDS]: getGenreByIds,
  [moduleConstants.GET_MOVIES]: getMovies
};
