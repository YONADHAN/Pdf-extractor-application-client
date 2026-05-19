import axiosInstance from '@/shared/api/axios';

import type {
  VerifyOtpRequest,
  VerifyOtpResponse,
} from '../types/verify_otp_types';

export const verifyOtpApi = async (
  data: VerifyOtpRequest,
): Promise<VerifyOtpResponse> => {
  const response =
    await axiosInstance.post<VerifyOtpResponse>(
      '/auth/verify-otp',
      data,
    );

  return response.data;
};