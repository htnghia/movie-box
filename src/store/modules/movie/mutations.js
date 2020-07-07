import constants from './constants';

const setPopular = (state, { page, results }) => {
  if (page > state.popular.lastestPage) {
    state.popular.data.push(...results);
    state.popular.lastestPage = page;
  }
};

export default {
  [constants.MUTATION_POPULAR]: setPopular
};
