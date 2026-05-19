import { verifyOtpApi } from '../api/verify_otp_api';

import type {
  VerifyOtpRequest,
  VerifyOtpResponse,
} from '../types/verify_otp_types';

export const verifyOtpService = async (
  data: VerifyOtpRequest,
): Promise<VerifyOtpResponse> => {
  return await verifyOtpApi(data);
};