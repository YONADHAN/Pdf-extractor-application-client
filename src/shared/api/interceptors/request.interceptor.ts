import type { InternalAxiosRequestConfig } from 'axios';

export const requestInterceptor = (
  config: InternalAxiosRequestConfig,
) => {
  // later:
  // attach access token here

  return config;
};

export const requestInterceptorError = (error: unknown) => {
  return Promise.reject(error);
};