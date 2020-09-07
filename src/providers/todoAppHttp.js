import axios from 'axios';

const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export default {
  get,
};
