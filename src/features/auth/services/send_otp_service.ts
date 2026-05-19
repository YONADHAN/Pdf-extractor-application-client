import { sendOtpApi } from '../api/send_otp_api';

import type {
  SendOtpRequest,
  SendOtpResponse,
} from '../types/send_otp_types';

export const sendOtpService = async (
  data: SendOtpRequest,
): Promise<SendOtpResponse> => {
  return await sendOtpApi(data);
};