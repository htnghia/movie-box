import moduleConstants from './constants';

const setMovies = (state, { page, results, filter }) => {
  if (state[filter] && page > state[filter].latestPage) {
    state[filter].data.push(...results);
    state[filter].latestPage = page;
  }
};

const setGenres = (state, genres) => {
  state.genres = genres;
};

export default {
  [moduleConstants.MUTATION_GENRES]: setGenres,
  [moduleConstants.MUTATION_MOVIES]: setMovies
};
