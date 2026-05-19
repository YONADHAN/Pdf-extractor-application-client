import axios from 'axios';

import {
  requestInterceptor,
  requestInterceptorError,
} from './interceptors/request.interceptor';

import {
  responseInterceptor,
  responseInterceptorError,
} from './interceptors/response.interceptor';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,

  withCredentials: true,

  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  requestInterceptor,
  requestInterceptorError,
);

axiosInstance.interceptors.response.use(
  responseInterceptor,
  responseInterceptorError,
);

export default axiosInstance;