import constants from './constants';

const setPopular = (state, { page, results }, filter = "UPCOMING") => {
  if (page > state[filter].lastestPage) {
    state[filter].data.push(...results);
    state[filter].lastestPage = page;
  }
};

export default {
  [constants.MUTATION_POPULAR]: setPopular
};
