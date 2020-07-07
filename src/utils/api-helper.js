const requestOptions = (method, body) => {
  const params = body && body.params ? body.params : {};
  // TODO api key configurable
  params.api_key = "e00dcf60f87aa23610b6fa44aeba99ce";
  return {
    method,
    data: body,
    params
  };
};

const apiServer = () => {
  // TODO end point configurable
  return "https://api.themoviedb.org/3";
};

const endpoint = () => {
  return {
    movie: {
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
