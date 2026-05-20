import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

import { refreshAxiosInstance } from '../axios';

import { store } from '@/app/store/store';
import { clearUser } from '@/features/auth/redux/auth_slice';

interface RetryRequestConfig
  extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

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

     
        return axios(originalRequest);
      } catch (refreshError) {
        store.dispatch(clearUser());
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  };