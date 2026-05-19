import axiosInstance from '@/shared/api/axios';

import type {
  RegisterRequest,
  RegisterResponse,
} from '../types/register_types';

export const registerApi = async (
  data: RegisterRequest,
): Promise<RegisterResponse> => {
  const response = await axiosInstance.post<RegisterResponse>(
    '/auth/register',
    data,
  );

  return response.data;
};