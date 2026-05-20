import type {
  InternalAxiosRequestConfig,
} from 'axios';

export const requestInterceptor = (
  config: InternalAxiosRequestConfig,
) => {
  return config;
};

export const requestInterceptorError = (
  error: unknown,
) => {
  return Promise.reject(error);
};