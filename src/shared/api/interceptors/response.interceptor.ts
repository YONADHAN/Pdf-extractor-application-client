import {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import axiosInstance, { axiosMultipartInstance, refreshAxiosInstance } from '../axios';

import { store } from '@/app/store/store';
import { clearUser } from '@/features/auth/redux/auth_slice';

interface RetryRequestConfig
  extends InternalAxiosRequestConfig {
  _retry?: boolean;
}
const getRetryAxiosInstance = (
  originalRequest: RetryRequestConfig,
) => {
  const contentType =
    originalRequest.headers[
    'Content-Type'
    ];

  switch (contentType) {
    case 'multipart/form-data':
      return axiosMultipartInstance;

    default:
      return axiosInstance;
  }
};
export const responseInterceptor = (
  response: AxiosResponse,
) => {
  return response;
};

export const responseInterceptorError =
  async (error: AxiosError) => {
    const originalRequest =
      error.config as RetryRequestConfig;


    if (
      error.response?.status === 403 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {

        await refreshAxiosInstance.post(
          '/auth/refresh',
        );


        const retryClient =
          getRetryAxiosInstance(
            originalRequest,
          );

        return retryClient(
          originalRequest,
        );

      } catch (refreshError) {
        store.dispatch(clearUser());
        return Promise.reject(refreshError);
      }
    }

    const responseData = error.response?.data as { message?: string } | undefined;
    if (responseData?.message) {
      error.message = responseData.message;
    }

    return Promise.reject(error);
  };