const requestOptions = (method, body) => {
  const params = body && body.params ? body.params : {};
  params.api_key = process.env.VUE_APP_MOVIE_API_KEY;
  return {
    method,
    data: body,
    params
  };
};

const apiServer = () => {
  return process.env.VUE_APP_MOVIE_ENDPOINT;
};

const endpoint = () => {
  return {
    movie: {
      genres: apiServer() + "/genre/movie/list",
      popular: apiServer() + "/movie/popular",
      topRated: apiServer() + "/movie/top_rated",
      upcoming: apiServer() + "/movie/upcoming"
    }
  };
};

export default {
  endpoint,
  requestOptions
};
