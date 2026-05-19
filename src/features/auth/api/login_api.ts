import axiosInstance from '@/shared/api/axios';

import type {
  LoginRequest,
  LoginResponse,
} from '../types/login_types';

export const loginApi = async (
  data: LoginRequest,
): Promise<LoginResponse> => {
  const response =
    await axiosInstance.post<LoginResponse>(
      '/auth/login',
      data,
    );

  return response.data;
};