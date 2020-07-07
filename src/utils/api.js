import axios from "axios";

function parseJSON(response) {
  return response.data;
}

function checkStatus(response) {
  if (response && response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error();
  error.message = response && response.response && response.response.data;
  throw error;
}

function callWithTimeout(fetchPromise, ms) {
  return new Promise((resolve, reject) => {
    // because axios timeout not work well, we create our error timeout
    const timeoutId = setTimeout(() => reject(new Error("Time out")), ms);
    fetchPromise.then(
      res => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      err => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  });
}

function callApi(url, options) {
  return callWithTimeout(axios(url, options), 20000);
}

export default async (url, options) => {
  return callApi(url, options)
    .then(checkStatus)
    .then(parseJSON);
};
