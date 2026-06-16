import axiosInstance from '@/shared/api/axios';

import type { LoginRequest, LoginResponse } from '../types/login_types';
import type { RegisterRequest, RegisterResponse } from '../types/register_types';
import type { SendOtpRequest, SendOtpResponse } from '../types/send_otp_types';
import type { VerifyOtpRequest, VerifyOtpResponse } from '../types/verify_otp_types';

export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axiosInstance.post<LoginResponse>('/auth/login', data);
  return response.data;
};

export const registerApi = async (data: RegisterRequest): Promise<RegisterResponse> => {
  const response = await axiosInstance.post<RegisterResponse>('/auth/register', data);
  return response.data;
};

export const sendOtpApi = async (data: SendOtpRequest): Promise<SendOtpResponse> => {
  const response = await axiosInstance.post<SendOtpResponse>('/auth/send-otp', data);
  return response.data;
};

export const verifyOtpApi = async (data: VerifyOtpRequest): Promise<VerifyOtpResponse> => {
  const response = await axiosInstance.post<VerifyOtpResponse>('/auth/verify-otp', data);
  return response.data;
};

export const logoutApi = async (): Promise<any> => {
  const response = await axiosInstance.post('/auth/logout');
  return response.data;
};

export const refreshTokenApi = async (): Promise<any> => {
  const response = await axiosInstance.post('/auth/refresh');
  return response.data;
};
