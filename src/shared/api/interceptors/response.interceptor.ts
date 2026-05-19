import type { AxiosError, AxiosResponse } from 'axios';

export const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

export const responseInterceptorError = async (
  error: AxiosError,
) => {
  // later:
  // refresh token logic here

  return Promise.reject(error);
};