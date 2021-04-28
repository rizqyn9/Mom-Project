/* eslint-disable no-undef */
import axios from 'axios'

// * Base Config
const defaults = {
    baseURL : 'http://localhost:3005',
    headers: () => ({
      'content-type': 'multipart/form-data'
      }),
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Something went wrong. Please check your internet connection or contact our support.',
        status: 503,
        data: {},
      },
}

// * Method API

const api = (method, url, variables) =>
  new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === 'get' ? variables : undefined,
      data: method !== 'get' ? variables : undefined,
    }).then(
      response => {
        resolve(response.data);
      },
      error => {
          reject(defaults.error);
      },
    ).catch( err =>
      resolve(err)
    );
  });

export default {
  get: (...args) => api('get', ...args),
  post: (...args) => api('post', ...args),
  put: (...args) => api('put', ...args),
  patch: (...args) => api('patch', ...args),
  delete: (...args) => api('delete', ...args),
}