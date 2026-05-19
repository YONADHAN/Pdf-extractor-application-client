import axiosInstance from '@/shared/api/axios';

import type {
  SendOtpRequest,
  SendOtpResponse,
} from '../types/send_otp_types';

export const sendOtpApi = async (
  data: SendOtpRequest,
): Promise<SendOtpResponse> => {
  const response = await axiosInstance.post<SendOtpResponse>(
    '/auth/send-otp',
    data,
  );

  return response.data;
};