import axios from 'axios';

import {
  requestInterceptor,
  requestInterceptorError,
} from './interceptors/request.interceptor';

import {
  responseInterceptor,
  responseInterceptorError,
} from './interceptors/response.interceptor';




export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,

  withCredentials: true,

  headers: {
    'Content-Type': 'application/json',
  },
});


export const axiosMultipartInstance =
  axios.create({
    baseURL:
      import.meta.env.VITE_API_BASE_URL,

    withCredentials: true,

    headers: {
      'Content-Type':
        'multipart/form-data',
    },
  });



export const refreshAxiosInstance =
  axios.create({
    baseURL:
      import.meta.env.VITE_API_BASE_URL,

    withCredentials: true,
  });

axiosInstance.interceptors.request.use(
  requestInterceptor,
  requestInterceptorError,
);

axiosMultipartInstance.interceptors.request.use(
  requestInterceptor,
  requestInterceptorError,
);


axiosInstance.interceptors.response.use(
  responseInterceptor,
  responseInterceptorError,
);

axiosMultipartInstance.interceptors.response.use(
  responseInterceptor,
  responseInterceptorError,
);

export default axiosInstance;